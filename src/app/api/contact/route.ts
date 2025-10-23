import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (consider Redis for production with multiple instances)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  MAX_REQUESTS: 5, // Max 5 requests
  WINDOW_MS: 60 * 60 * 1000, // Per hour (1 hour)
};

function checkRateLimit(ip: string): { allowed: boolean; resetIn?: number } {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  // Clean up old entries
  if (userLimit && now > userLimit.resetTime) {
    rateLimitMap.delete(ip);
  }

  const limit = rateLimitMap.get(ip);

  if (!limit) {
    // First request from this IP
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS });
    return { allowed: true };
  }

  if (limit.count >= RATE_LIMIT.MAX_REQUESTS) {
    const resetIn = Math.ceil((limit.resetTime - now) / 1000 / 60); // minutes
    return { allowed: false, resetIn };
  }

  // Increment count
  limit.count += 1;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check - get IP from headers
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        { 
          error: `Too many requests. Please try again in ${rateCheck.resetIn} minutes.` 
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      countryCode, 
      phone, 
      businessName, 
      businessType, 
      website, 
      service, 
      message 
    } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Get contact email from env (fallback to hardcoded for now)
    const contactEmail = process.env.CONTACT_EMAIL || 'zanemc@ymail.com';
    
    // Get from email - use custom domain if set, otherwise use Resend default
    const fromEmail = process.env.FROM_EMAIL || 'Sidekick Systems <onboarding@resend.dev>';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `New Contact Form: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #60a5fa; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${countryCode} ${phone}</p>` : ''}
          </div>
          
          ${businessName || businessType || website ? `
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Business Information</h3>
            ${businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
            ${businessType ? `<p><strong>Business Type:</strong> ${businessType}</p>` : ''}
            ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
          </div>
          ` : ''}
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Service Interested In</h3>
            <p><strong>${service}</strong></p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Sent from Sidekick Systems contact form<br>
            IP: ${ip}<br>
            Timestamp: ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly at hello@sidekicksystems.com' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        messageId: data?.id,
        message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}