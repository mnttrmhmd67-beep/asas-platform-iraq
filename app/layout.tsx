export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-gray-100 text-right font-sans">{children}</body>
    </html>
  );
}
