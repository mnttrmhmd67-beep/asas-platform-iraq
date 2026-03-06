import "./globals.css";

export const metadata = {
  title: "منصة أساس",
  description: "منصة أساس لبيع حديد التسليح",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
