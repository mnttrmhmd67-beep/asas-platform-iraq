"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-6">منصة أساس لبيع حديد التسليح</h1>
      </div>
      <div className="w-full max-w-3xl flex justify-between gap-4">
        <button
          onClick={() => router.push("/supplier")}
          className="bg-green-600 text-white font-bold text-xl p-6 rounded w-1/2 hover:bg-green-700 transition"
        >
          أنا مورد
        </button>

        <button
          onClick={() => router.push("/customer")}
          className="bg-blue-600 text-white font-bold text-xl p-6 rounded w-1/2 hover:bg-blue-700 transition"
        >
          أنا عميل
        </button>
      </div>
    </main>
  );
}
