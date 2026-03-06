"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* العنوان */}
      <h1 className="text-4xl font-bold mb-16 text-center">
        منصة أساس لبيع حديد التسليح
      </h1>

      {/* أزرار العميل والمورد */}
      <div className="flex w-full max-w-5xl justify-between gap-10">
        {/* زر المورد على اليسار */}
        <div
          onClick={() => router.push("/supplier")}
          className="cursor-pointer bg-green-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-green-700 transition flex-1 flex items-center justify-center"
        >
          <span>أنا مورد</span>
        </div>

        {/* زر العميل على اليمين */}
        <div
          onClick={() => router.push("/customer")}
          className="cursor-pointer bg-blue-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-blue-700 transition flex-1 flex items-center justify-center"
        >
          <span>أنا عميل</span>
        </div>
      </div>
    </main>
  );
}
