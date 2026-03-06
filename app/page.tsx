"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-16 max-w-4xl w-full">
        {/* زر العميل */}
        <div
          onClick={() => router.push("/customer/page")}
          className="cursor-pointer bg-blue-600 text-white font-bold text-xl p-12 rounded-2xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/customer-icon.svg"
            alt="عميل"
            width={100}
            height={100}
            className="mb-4"
          />
          <span>أنا عميل</span>
        </div>

        {/* زر المورد */}
        <div
          onClick={() => router.push("/supplier/page")}
          className="cursor-pointer bg-green-600 text-white font-bold text-xl p-12 rounded-2xl shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/supplier-icon.svg"
            alt="مورد"
            width={100}
            height={100}
            className="mb-4"
          />
          <span>أنا مورد</span>
        </div>
      </div>
    </main>
  );
}
