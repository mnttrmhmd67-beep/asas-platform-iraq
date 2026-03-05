import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>منصة الأساس</h1>
      <p>بيع حديد التسليح ومواد البناء في العراق</p>

      <h2>اختر نوع المستخدم</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        <Link href="/customer">
          <button>أنا عميل</button>
        </Link>
        <Link href="/supplier">
          <button>أنا مورد</button>
        </Link>
      </div>
    </main>
  );
}
