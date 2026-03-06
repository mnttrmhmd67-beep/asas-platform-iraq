"use client";
import { useState } from "react";

export default function SupplierPage() {
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = () => {
    const message = `تسجيل مورد جديد: الشركة: ${company}، هاتف: ${phone}، كمية المخزون: ${stock} طن`;
    window.open(
      `https://wa.me/9647732670436?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-right">
      <h1 className="text-2xl font-bold mb-6 text-center">تسجيل مورد</h1>

      <input
        placeholder="اسم الشركة"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <input
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <input
        type="number"
        min={0}
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        إرسال عبر واتساب
      </button>
    </main>
  );
}
