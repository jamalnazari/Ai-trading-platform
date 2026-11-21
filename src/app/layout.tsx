import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trader Insight — Analyze Your Trading Like a Professional",
    template: "%s · Trader Insight",
  },
  description:
    "A personal trading journal platform designed for traders. Track your performance. Understand your mistakes. Improve consistently.",
  applicationName: "Trader Insight",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
