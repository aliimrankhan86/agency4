"use client";

import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Create structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://agency4.ai/#organization",
          "name": "Agency4",
          "url": "https://agency4.ai",
          "logo": {
            "@type": "ImageObject",
            "url": "https://agency4.ai/images/Agency4-logo.png",
            "width": 200,
            "height": 60
          },
          "description": "AI voice agents and automations that talk, act, and deliver results for businesses worldwide.",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-20-1234-5678",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          },
          "sameAs": [
            "https://twitter.com/agency4_ai",
            "https://linkedin.com/company/agency4",
            "https://facebook.com/agency4"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://agency4.ai/#webpage",
          "url": "https://agency4.ai",
          "name": "Agency4 - AI Voice Agents & Business Automation",
          "isPartOf": {
            "@id": "https://agency4.ai/#website"
          },
          "about": {
            "@id": "https://agency4.ai/#organization"
          },
          "description": "Transform your business with AI voice agents that handle calls, bookings, and customer service 24/7. Reduce costs by 70% and improve response times by 5x.",
          "breadcrumb": {
            "@id": "https://agency4.ai/#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://agency4.ai/#website",
          "url": "https://agency4.ai",
          "name": "Agency4",
          "description": "AI voice agents and business automation solutions",
          "publisher": {
            "@id": "https://agency4.ai/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://agency4.ai/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://agency4.ai/#service",
          "name": "AI Voice Agents & Business Automation",
          "description": "Intelligent voice agents that handle customer calls, bookings, and support with natural conversation and automated workflows.",
          "provider": {
            "@id": "https://agency4.ai/#organization"
          },
          "serviceType": "AI Automation",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Agency4 Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Inbound Voice Agents",
                  "description": "AI agents that answer calls and handle customer queries"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Outbound Voice Agents",
                  "description": "Proactive AI agents for appointment reminders and follow-ups"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Automation",
                  "description": "Automated workflows that turn voice interactions into real actions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Analytics & Reporting",
                  "description": "Performance tracking and ROI measurement for AI automation"
                }
              }
            ]
          }
        }
      ]
    });

    // Append to head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;
