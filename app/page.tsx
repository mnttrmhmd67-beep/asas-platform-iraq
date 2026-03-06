"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-16 text-center">
        منصة أساس لبيع حديد التسليح
      </h1>

      <div className="flex gap-10 w-full max-w-4xl">

        {/* المورد يسار */}
        <div
          onClick={() => router.push("/supplier")}
          className="flex-1 bg-green-600 text-white text-2xl font-bold p-16 rounded-xl cursor-pointer hover:bg-green-700 text-center"
        >
          أنا مورد
        </div>

        {/* العميل يمين */}
        <div
          onClick={() => router.push("/customer")}
          className="flex-1 bg-blue-600 text-white text-2xl font-bold p-16 rounded-xl cursor-pointer hover:bg-blue-700 text-center"
        >
          أنا عميل
        </div>

      </div>

      <p className="mt-16 text-gray-600 text-center">
        منصة أساس تربط بين الموردين والعملاء لشراء حديد التسليح بسهولة داخل العراق
      </p>

    </main>
  );
}
