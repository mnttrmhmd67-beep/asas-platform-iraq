import "./globals.css";

export const metadata = {
  title: "منصة أساس",
  description: "منصة أساس لبيع حديد التسليح في العراق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
