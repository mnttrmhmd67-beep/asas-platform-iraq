import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">منصة أساس</h1>
      <p className="mb-8">بيع حديد التسليح ومواد البناء في العراق</p>

      <div className="flex gap-4">
        <Link href="/customer">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            أنا عميل
          </button>
        </Link>

        <Link href="/supplier">
          <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            أنا مورد
          </button>
        </Link>
      </div>
    </main>
  );
}
