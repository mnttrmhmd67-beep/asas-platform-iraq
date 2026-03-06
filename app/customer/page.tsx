"use client";

import { useState } from "react";

export default function CustomerPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [diameter, setDiameter] = useState(12);
  const [quantity, setQuantity] = useState(1);

  const pricePerTon = 1000000;
  const total = quantity * pricePerTon;

  const handleSubmit = () => {
    const message = `طلب جديد من العميل ${name}، هاتف: ${phone}، القطر: ${diameter} مم، الكمية: ${quantity} طن، السعر الكلي: ${total} دينار`;

    window.open(
      `https://wa.me/9647732670436?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-right">

      <h1 className="text-2xl font-bold mb-6 text-center">
        طلب شراء حديد التسليح
      </h1>

      <input
        placeholder="اسم العميل"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <input
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <select
        value={diameter}
        onChange={(e) => setDiameter(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      >
        <option value={12}>12 مم</option>
        <option value={16}>16 مم</option>
        <option value={20}>20 مم</option>
        <option value={25}>25 مم</option>
        <option value={32}>32 مم</option>
      </select>

      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      />

      <p className="font-bold mb-4">
        السعر الكلي: {total.toLocaleString()} دينار
      </p>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        إرسال الطلب عبر واتساب
      </button>

    </main>
  );
}
