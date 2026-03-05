import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "منصة أساس",
  description: "بيع حديد التسليح ومواد البناء في العراق",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        {/* الهيدر */}
        <header className="w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">منصة أساس</h1>
          <nav className="flex gap-4">
            <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
            <Link href="/customer" className="hover:text-blue-600">العملاء</Link>
            <Link href="/supplier" className="hover:text-blue-600">الموردون</Link>
          </nav>
        </header>

        {/* المحتوى الرئيسي */}
        <main className="flex-1 w-full max-w-5xl mx-auto p-6">
          {children}
        </main>

        {/* الفوتر */}
        <footer className="w-full bg-white dark:bg-gray-900 shadow-inner p-4 text-center text-sm">
          © 2026 منصة أساس - جميع الحقوق محفوظة
        </footer>
      </body>
    </html>
  );
}
