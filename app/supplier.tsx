import Link from "next/link";

export default function Supplier() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>صفحة المورد</h1>
      <p>بعد الموافقة على الطلبات، يمكن إرسالها للموردين هنا.</p>

      <p>
        <Link href="/">الرجوع للرئيسية</Link>
      </p>
    </main>
  );
}
