"use client";

import { useState } from "react";

export default function Customer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [diameter, setDiameter] = useState(6);
  const [quantity, setQuantity] = useState(1);

  const pricePerTon = 1000000; // سعر الطن الواحد
  const total = quantity * pricePerTon;

  const handleSubmit = () => {
    const message = `طلب جديد من ${name}، هاتف: ${phone}, القطر: ${diameter} مم, كمية: ${quantity}, السعر الكلي: ${total} د.ع`;
    window.open(
      `https://wa.me/07732670436?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">نموذج طلب العميل</h1>

      <label className="block mb-4">
        الاسم:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        رقم الهاتف:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        القطر:
        <select
          value={diameter}
          onChange={(e) => setDiameter(Number(e.target.value))}
          className="w-full p-2 border rounded mt-1"
        >
          <option value={6}>6 مم</option>
          <option value={8}>8 مم</option>
          <option value={10}>10 مم</option>
          <option value={12}>12 مم</option>
        </select>
      </label>

      <label className="block mb-4">
        الكمية (بالطن):
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <p className="text-lg font-semibold mb-4">
        السعر الكلي: {total.toLocaleString()} د.ع
      </p>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
      >
        إرسال الطلب عبر واتساب
      </button>
    </main>
  );
}
