export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">منصة ASAS</h1>
      
      <div className="flex gap-4">
        <a
          href="/customer"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          أنا عميل
        </a>
        
        <a
          href="/supplier"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          أنا مورد
        </a>
      </div>
    </main>
  );
}
