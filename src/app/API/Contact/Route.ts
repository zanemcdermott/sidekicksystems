import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
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
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Sidekick Systems <onboarding@resend.dev>', // Change this after verifying your domain
      to: ['zanemc@ymail.com'], // ← PUT YOUR EMAIL HERE
      replyTo: email,
      subject: `New Contact Form: ${service} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${countryCode} ${phone}</p>` : ''}
        
        <h3>Business Information</h3>
        ${businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
        ${businessType ? `<p><strong>Business Type:</strong> ${businessType}</p>` : ''}
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        
        <h3>Service Interested In</h3>
        <p><strong>${service}</strong></p>
        
        <h3>Message</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          Sent from Sidekick Systems contact form
        </p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}