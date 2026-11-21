import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "vazirmatn/Vazirmatn-font-face.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "تریدر اینسایت — معاملات خود را مثل یک حرفه‌ای تحلیل کنید",
    template: "%s · تریدر اینسایت",
  },
  description:
    "پلتفرم ژورنال معاملاتی شخصی، طراحی‌شده برای معامله‌گران. عملکرد خود را رصد کنید. اشتباهات خود را بفهمید. پیوسته بهتر شوید.",
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
    <html
      lang="fa"
      dir="rtl"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-canvas font-sans text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
