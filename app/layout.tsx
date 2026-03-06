import "./globals.css";

export const metadata = {
  title: "منصة أساس لبيع حديد التسليح",
  description: "منصة بيع وتوريد حديد التسليح",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}
