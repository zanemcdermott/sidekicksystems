// Structured Data (JSON-LD) for SEO
// This helps search engines understand your business and services

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sidekick Systems",
    url: "https://sidekicksystems.com",
    logo: "https://sidekicksystems.com/logo.png",
    description: "Custom websites, workflow automation, and AI solutions for Australian businesses. We build systems that grow your business.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "Queensland"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@sidekicksystems.com",
      contactType: "Customer Service",
      availableLanguage: ["English"],
      areaServed: "AU"
    },
    sameAs: [
      "https://github.com/yourusername",
      // Add your social profiles when you have them
    ],
    serviceArea: {
      "@type": "Place",
      name: "Australia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: 'launch' | 'automate' | 'intelligence' }) {
  const services = {
    launch: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Website Design and Development",
      provider: {
        "@type": "Organization",
        name: "Sidekick Systems",
        url: "https://sidekicksystems.com"
      },
      areaServed: "AU",
      description: "Custom website design and development from scratch. Fast, mobile-friendly, SEO-optimized websites starting from $750.",
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: "750",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "750",
          priceCurrency: "AUD"
        }
      },
      url: "https://sidekicksystems.com/launch"
    },
    automate: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Workflow Automation",
      provider: {
        "@type": "Organization",
        name: "Sidekick Systems",
        url: "https://sidekicksystems.com"
      },
      areaServed: "AU",
      description: "Custom workflow automation solutions. Save 10-20 hours per week by automating repetitive tasks and connecting your business tools.",
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: "500",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "500",
          maxPrice: "2500",
          priceCurrency: "AUD"
        }
      },
      url: "https://sidekicksystems.com/automate"
    },
    intelligence: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "AI Solutions and Business Intelligence",
      provider: {
        "@type": "Organization",
        name: "Sidekick Systems",
        url: "https://sidekicksystems.com"
      },
      areaServed: "AU",
      description: "Custom AI chatbots, voice receptionists, and real-time dashboards powered by GPT-4 and Claude. Make smarter decisions with AI.",
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: "1000",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "1000",
          priceCurrency: "AUD"
        }
      },
      url: "https://sidekicksystems.com/intelligence"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services[service]) }}
    />
  );
}

export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sidekick Systems",
    image: "https://sidekicksystems.com/logo.png",
    "@id": "https://sidekicksystems.com",
    url: "https://sidekicksystems.com",
    telephone: "", // Add when you have a business phone
    email: "hello@sidekicksystems.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "Queensland"
    },
    geo: {
      "@type": "GeoCoordinates",
      // Add when you have a physical address
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1"
      // Update when you have real reviews
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}