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
  description: "The Electric Car UI Template",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
