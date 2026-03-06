"use client";

import { useState } from "react";

export default function SupplierPage(){

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [product,setProduct] = useState("حديد 12 مم");
  const [quantity,setQuantity] = useState(1);

  const products = [
    "حديد 12 مم",
    "حديد 16 مم",
    "حديد 20 مم",
    "حديد 25 مم",
    "حديد 32 مم"
  ];

  const pricePerTon = 1000000;
  const total = quantity * pricePerTon;

  const sendOrder = () => {

    const message =
`عرض مورد جديد
الاسم: ${name}
الهاتف: ${phone}
المنتج: ${product}
الكمية: ${quantity} طن
السعر: ${total} دينار`;

    window.open(`https://wa.me/9647732670436?text=${encodeURIComponent(message)}`);
  };

  return(

    <main className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10 text-right">

      <h1 className="text-2xl font-bold mb-6 text-center">
        نموذج المورد
      </h1>

      <input
        placeholder="اسم المورد"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <input
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <select
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >

        {products.map((p)=>(
          <option key={p}>{p}</option>
        ))}

      </select>

      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e)=>setQuantity(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
      />

      <p className="font-bold mb-4">
        السعر الكلي: {total.toLocaleString()} دينار
      </p>

      <button
        onClick={sendOrder}
        className="w-full bg-green-600 text-white p-3 rounded"
      >
        إرسال العرض عبر واتساب
      </button>

    </main>
  );
}
