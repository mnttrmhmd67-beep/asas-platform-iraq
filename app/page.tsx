"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="flex justify-between w-2/3 max-w-3xl">
        <button
          onClick={() => router.push("/supplier/page")}
          className="bg-green-600 text-white font-bold text-xl p-6 rounded shadow hover:bg-green-700 transition"
        >
          أنا مورد
        </button>
        <button
          onClick={() => router.push("/customer/page")}
          className="bg-blue-600 text-white font-bold text-xl p-6 rounded shadow hover:bg-blue-700 transition"
        >
          أنا عميل
        </button>
      </div>
    </main>
  );
}
