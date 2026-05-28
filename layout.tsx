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
      </head>
      <body>{children}</body>
    </html>
  );
}
