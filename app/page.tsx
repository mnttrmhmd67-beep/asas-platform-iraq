"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-16 max-w-4xl w-full">
        {/* زر العميل */}
        <button
          onClick={() => router.push("/customer/page")}
          className="bg-blue-600 text-white font-bold text-xl p-12 rounded-2xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          أنا عميل
        </button>

        {/* زر المورد */}
        <button
          onClick={() => router.push("/supplier/page")}
          className="bg-green-600 text-white font-bold text-xl p-12 rounded-2xl shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          أنا مورد
        </button>
      </div>
    </main>
  );
}
