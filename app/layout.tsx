import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "منصة أساس",
  description: "منصة لبيع وشراء حديد التسليح في العراق",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 font-sans">
        <header className="bg-gray-800 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">منصة أساس لبيع حديد التسليح</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
