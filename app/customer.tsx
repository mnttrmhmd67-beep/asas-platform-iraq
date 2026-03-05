import Link from "next/link";

export default function Customer() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>صفحة العميل</h1>
      <p>هنا يمكن للعميل تقديم الطلبات مباشرة.</p>

      <p>
        <Link href="/">الرجوع للرئيسية</Link>
      </p>
    </main>
  );
}
