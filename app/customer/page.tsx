"use client";

import { useState } from "react";

export default function Customer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [diameter, setDiameter] = useState(6);
  const [quantity, setQuantity] = useState(1);

  const pricePerTon = 1000000;
  const total = quantity * pricePerTon;

  const handleSubmit = () => {
    const message = `طلب جديد من ${name}، هاتف: ${phone}, القطر: ${diameter} مم, كمية: ${quantity}, السعر الكلي: ${total} د.ع`;

    window.open(
      `https://wa.me/9647732670436?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-right">
      <h1 className="text-2xl font-bold mb-6 text-center">نموذج طلب العميل</h1>

      <input
        placeholder="الاسم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <input
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <select
        value={diameter}
        onChange={(e) => setDiameter(Number(e.target.value))}
        className="w-full p-2 border rounded mb-3"
      >
        <option value={6}>6 مم</option>
        <option value={8}>8 مم</option>
        <option value={10}>10 مم</option>
        <option value={12}>12 مم</option>
      </select>

      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full p-2 border rounded mb-3"
      />

      <p className="mb-4 font-bold">
        السعر الكلي: {total.toLocaleString()} د.ع
      </p>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white p-3 rounded"
      >
        إرسال الطلب عبر واتساب
      </button>
    </main>
  );
      }
