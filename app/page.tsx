// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center bg-white dark:bg-black p-10 rounded-lg shadow-md gap-8">
        <h1 className="text-3xl font-bold text-center text-black dark:text-zinc-50">
          منصة أساس
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center">
          بيع حديد التسليح ومواد البناء في العراق
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/customer">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              أنا عميل
            </button>
          </Link>
          <Link href="/supplier">
            <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
              أنا مورد
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
