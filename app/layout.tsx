import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "منصة أساس",
  description: "منصة أساس لبيع حديد التسليح في العراق",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 antialiased text-right">
        <header className="bg-blue-600 text-white p-6 text-center shadow-md">
          <h1 className="text-3xl font-bold">منصة أساس لبيع حديد التسليح</h1>
        </header>

        <main className="min-h-screen p-6">{children}</main>

        <footer className="bg-gray-200 text-center p-4 mt-10">
          © 2026 منصة أساس
        </footer>
      </body>
    </html>
  );
}
