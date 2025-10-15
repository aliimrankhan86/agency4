import type { Metadata } from "next";
import { Onest, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "./providers/LenisProvider";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agency4.ai'),
  title: "Agency4 - AI Voice Agents & Business Automation | Smart Voice Solutions",
  description: "Transform your business with AI voice agents that handle calls, bookings, and customer service 24/7. Reduce costs by 70% and improve response times by 5x with Agency4's intelligent automation platform.",
  keywords: "AI voice agents, business automation, voice AI, customer service automation, AI chatbots, business efficiency, voice technology, AI solutions, automated booking, customer support AI",
  authors: [{ name: "Agency4" }],
  creator: "Agency4",
  publisher: "Agency4",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://agency4.ai',
    siteName: 'Agency4',
    title: 'Agency4 - AI Voice Agents & Business Automation',
    description: 'Transform your business with AI voice agents that handle calls, bookings, and customer service 24/7. Reduce costs by 70% and improve response times by 5x.',
    images: [
      {
        url: '/images/agency4-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agency4 AI Voice Agents - Business Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agency4_ai',
    creator: '@agency4_ai',
    title: 'Agency4 - AI Voice Agents & Business Automation',
    description: 'Transform your business with AI voice agents that handle calls, bookings, and customer service 24/7. Reduce costs by 70% and improve response times by 5x.',
    images: ['/images/agency4-og-image.png'],
  },
  alternates: {
    canonical: 'https://agency4.ai',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/Agency4-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Agency4-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/images/Agency4-logo.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://assets.calendly.com; frame-src https://assets.calendly.com;",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/Agency4-logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/Agency4-logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/Agency4-logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
      </head>
      <body className={`${onest.variable} ${figtree.variable} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <LenisProvider>{children}</LenisProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
