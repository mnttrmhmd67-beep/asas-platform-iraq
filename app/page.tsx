"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-between p-6">
      <div
        onClick={() => router.push("/supplier/page")}
        className="cursor-pointer bg-green-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-green-700 transition flex flex-col items-center justify-center w-1/2 text-center"
      >
        <span>أنا مورد</span>
      </div>

      <div
        onClick={() => router.push("/customer/page")}
        className="cursor-pointer bg-blue-600 text-white font-bold text-xl p-10 rounded-xl shadow-lg hover:bg-blue-700 transition flex flex-col items-center justify-center w-1/2 text-center"
      >
        <span>أنا عميل</span>
      </div>
    </main>
  );
}
