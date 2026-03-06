"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">

      {/* اسم المنصة */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
        منصة أساس
      </h1>

      <p className="mb-16 text-gray-600 text-lg text-center">
        منصة أساس لبيع حديد التسليح
      </p>

      {/* الازرار */}
      <div className="flex w-full max-w-4xl gap-10">

        {/* المورد - يسار */}
        <div
          onClick={() => router.push("/supplier")}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold p-16 rounded-xl shadow-lg cursor-pointer text-center transition"
        >
          أنا مورد
        </div>

        {/* العميل - يمين */}
        <div
          onClick={() => router.push("/customer")}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold p-16 rounded-xl shadow-lg cursor-pointer text-center transition"
        >
          أنا عميل
        </div>

      </div>

    </main>
  );
}
