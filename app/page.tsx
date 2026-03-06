"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-10 max-w-2xl w-full">
        {/* زر العميل */}
        <div
          onClick={() => router.push("/customer/page")}
          className="cursor-pointer bg-blue-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          أنا عميل
        </div>

        {/* زر المورد */}
        <div
          onClick={() => router.push("/supplier/page")}
          className="cursor-pointer bg-green-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-green-700 transition flex items-center justify-center"
        >
          أنا مورد
        </div>
      </div>
    </main>
  );
}
