import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">

      <h1 className="text-4xl font-bold">منصة أساس</h1>

      <Link
        href="/customer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        أنا عميل
      </Link>

      <Link
        href="/supplier"
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        أنا مورد
      </Link>

    </main>
  );
}
