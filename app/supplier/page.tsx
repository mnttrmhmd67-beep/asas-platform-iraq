"use client";
import { useState } from "react";

// لاحقاً يمكن ربط هذه البيانات من قاعدة بيانات أو API
const orders = [
  { customer: "أحمد علي", phone: "07700000001", diameter: 12, quantity: 2, total: 2000000 },
  { customer: "سارة محمد", phone: "07700000002", diameter: 16, quantity: 1, total: 1000000 },
];

export default function SupplierPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-right">
      <h1 className="text-2xl font-bold mb-6 text-center">طلبات العملاء التي أرسلت إليك</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد طلبات حالياً</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">العميل</th>
              <th className="p-2 border">الهاتف</th>
              <th className="p-2 border">القطر</th>
              <th className="p-2 border">الكمية</th>
              <th className="p-2 border">السعر الكلي</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, idx) => (
              <tr key={idx} className="text-center">
                <td className="p-2 border">{o.customer}</td>
                <td className="p-2 border">{o.phone}</td>
                <td className="p-2 border">{o.diameter} مم</td>
                <td className="p-2 border">{o.quantity} طن</td>
                <td className="p-2 border">{o.total.toLocaleString()} د.ع</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
