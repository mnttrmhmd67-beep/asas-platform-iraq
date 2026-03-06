"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-3xl flex justify-between">
        <button
          onClick={() => router.push("/supplier/page")}
          className="bg-green-600 text-white font-bold text-xl p-6 rounded shadow hover:bg-green-700 transition w-1/2 mx-2"
        >
          أنا مورد
        </button>

        <button
          onClick={() => router.push("/customer/page")}
          className="bg-blue-600 text-white font-bold text-xl p-6 rounded shadow hover:bg-blue-700 transition w-1/2 mx-2"
        >
          أنا عميل
        </button>
      </div>
    </main>
  );
}
