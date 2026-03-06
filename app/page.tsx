"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">

      {/* عنوان المنصة */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        منصة أساس
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        منصة أساس لبيع حديد التسليح
      </p>

      {/* الأزرار */}
      <div className="flex gap-10 w-full max-w-3xl">

        {/* زر العميل */}
        <div
          onClick={() => router.push("/customer")}
          className="flex-1 cursor-pointer bg-blue-600 text-white text-2xl font-bold p-10 rounded-xl shadow-lg hover:bg-blue-700 transition text-center"
        >
          أنا عميل
        </div>

        {/* زر المورد */}
        <div
          onClick={() => router.push("/supplier")}
          className="flex-1 cursor-pointer bg-green-600 text-white text-2xl font-bold p-10 rounded-xl shadow-lg hover:bg-green-700 transition text-center"
        >
          أنا مورد
        </div>

      </div>

    </main>
  );
}
