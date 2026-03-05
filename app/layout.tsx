// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// إعداد الخطوط
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// بيانات الميتا
export const metadata: Metadata = {
  title: "منصة الأساس",
  description: "منصة إلكترونية لبيع حديد التسليح ومواد البناء في العراق",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar ثابت */}
        <header className="bg-white shadow p-4 flex justify-center gap-6 sticky top-0 z-50">
          <Link href="/" className="hover:text-blue-600 font-semibold">
            الرئيسية
          </Link>
          <Link href="/customer" className="hover:text-blue-600 font-semibold">
            العملاء
          </Link>
          <Link href="/supplier" className="hover:text-blue-600 font-semibold">
            الموردون
          </Link>
        </header>

        {/* المحتوى الرئيسي */}
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
