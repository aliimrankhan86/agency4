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
  title: "Agency4 - Your AI Partner",
  description: "AI voice agents and automations that talk, act, and deliver results.",
  icons: {
    icon: [
      { url: '/images/Agency4-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Agency4-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/Agency4-logo.png',
    apple: '/images/Agency4-logo.png',
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
        <link rel="icon" href="/images/Agency4-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Agency4-logo.png" />
      </head>
      <body className={`${onest.variable} ${figtree.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
