
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نظام إدارة الصيدلية",
  description: "نظام متكامل لإدارة الصيدلية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/pharmacy-app/manifest.json" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="صيدليتي" />
        <link rel="apple-touch-icon" href="/pharmacy-app/icon-192.png" />
      <script src="/pharmacy-app/register-sw.js"></script>
</head>
      <body>{children}</body>
    </html>
  );
}
