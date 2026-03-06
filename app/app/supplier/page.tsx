"use client";

import { useState } from "react";

export default function SupplierPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("حديد 12 مم");
  const [quantity, setQuantity] = useState(1);

  const pricePerTon = 1000000;
  const total = quantity * pricePerTon;

  const handleSubmit = () => {
    const message = `طلب جديد من المورد ${name}, الشركة: ${company}, هاتف: ${phone}, المنتج: ${product}, الكمية: ${quantity} طن, السعر الكلي: ${total} د.ع`;

    window.open(
      `https://wa.me/9647732670436?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-right">
      <h1 className="text-2xl font-bold mb-6 text-center">نموذج المورد</h1>

      <input
        placeholder="اسم المورد"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

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

      <select
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="حديد 12 مم">حديد 12 مم</option>
        <option value="حديد 16 مم">حديد 16 مم</option>
        <option value="حديد 20 مم">حديد 20 مم</option>
        <option value="حديد 25 مم">حديد 25 مم</option>
        <option value="حديد 32 مم">حديد 32 مم</option>
      </select>

      <input
        type="number"
        min={1}
        max={50}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      />

      <p className="font-bold mb-4">
        السعر الكلي: {total.toLocaleString()} د.ع
      </p>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
      >
        إرسال الطلب عبر واتساب
      </button>
    </main>
  );
          }
