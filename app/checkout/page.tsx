"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  // ===========================================
  // CART STATE
  // ===========================================
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "New Ns Keane Nightstand Wr Wp", price: 140.0, quantity: 1 },
    { id: 2, name: "Milano Bed Queen L/R", price: 180.0, quantity: 1 },
    { id: 3, name: "Blake 2 DOOR LT BROWN", price: 180.0, quantity: 1 },
    { id: 4, name: "Basque Buffer LT BROWN", price: 180.0, quantity: 1 },
  ]);

  // Update Qty (+/-)
  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  // pop up notif pembayaran
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  // Remove item
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  // ===========================================
  // FORM BUYER
  // ===========================================
  const [buyerName, setBuyerName] = useState("");
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerCountry, setBuyerCountry] = useState("");

  const [lcType, setLcType] = useState<"SIGHT" | "USANCE">("SIGHT");
  const [lcTenorDays, setLcTenorDays] = useState(30);
  const [notes, setNotes] = useState("");

  // ===========================================
  // TOTALS
  // ===========================================
  const merchandiseTotal = cart.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );

  const shipTotal = merchandiseTotal > 0 ? 10 : 0;
  const taxTotal = +(merchandiseTotal * 0.1).toFixed(2);
  const orderTotal = merchandiseTotal + shipTotal + taxTotal;

  const fmt = (v: number) =>
    v.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // ===========================================
  // GENERATE PDF
  // ===========================================
  const generatePDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const width = doc.internal.pageSize.getWidth();
    let y = 40;

    const orderId = Math.floor(Math.random() * 900000 + 100000);
    const today = new Date().toLocaleDateString();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("PT KURNIA ANGGUN", 40, y);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Jl. Pungging No. 88, Mojokertp, Indonesia", 40, y + 18);
    doc.text(
      "Email: @kurnia-angguna.com | Telp: +62 812-8899-2211",
      40,
      y + 32
    );

    doc.text(`Nomor Kontrak: LC-${orderId}`, width - 220, y + 6);
    doc.text(`Tanggal: ${today}`, width - 220, y + 20);

    y += 50;
    doc.line(40, y, width - 40, y);
    y += 30;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("SURAT KONTRAK PEMBAYARAN — LETTER OF CREDIT (L/C)", 40, y);
    y += 30;

    // Buyer
    doc.setFontSize(11);
    doc.text("1. DATA BUYER (IMPORTIR)", 40, y);
    y += 15;

    doc.setFont("helvetica", "normal");
    doc.text(`Nama Buyer     : ${buyerName || "____________________"}`, 40, y);
    y += 12;
    doc.text(
      `Perusahaan     : ${buyerCompany || "____________________"}`,
      40,
      y
    );
    y += 12;
    doc.text(
      `Alamat         : ${buyerAddress || "____________________"}`,
      40,
      y
    );
    y += 12;
    doc.text(
      `Negara         : ${buyerCountry || "____________________"}`,
      40,
      y
    );
    y += 25;

    // Seller
    doc.setFont("helvetica", "bold");
    doc.text("2. DATA SELLER (PT KURNIA ANGGUN)", 40, y);
    y += 15;

    doc.setFont("helvetica", "normal");
    doc.text("Nama Perusahaan : PT Kurnia Anggun", 40, y);
    y += 12;
    doc.text(
      "Alamat          : Jl. Pungging No. 88, Mojokertp, Indonesia",
      40,
      y
    );
    y += 12;
    doc.text("Email           : sales@kurnia-angguna.com", 40, y);
    y += 25;

    // Product table
    doc.setFont("helvetica", "bold");
    doc.text("3. DETAIL PRODUK", 40, y);
    y += 20;

    const colName = 40;
    const colQty = 300;
    const colPrice = 360;
    const colTotal = 450;

    doc.text("Nama Produk", colName, y);
    doc.text("Qty", colQty, y);
    doc.text("Harga", colPrice, y);
    doc.text("Total", colTotal, y);
    y += 10;

    doc.line(40, y, width - 40, y);
    y += 15;

    cart.forEach((it) => {
      doc.text(it.name, colName, y);
      doc.text(String(it.quantity), colQty, y);
      doc.text(fmt(it.price), colPrice, y);
      doc.text(fmt(it.quantity * it.price), colTotal, y);
      y += 15;
    });

    y += 10;
    doc.line(40, y, width - 40, y);
    y += 20;

    doc.text(`Subtotal : USD ${fmt(merchandiseTotal)}`, colTotal, y);
    y += 12;
    doc.text(`Shipping : USD ${fmt(shipTotal)}`, colTotal, y);
    y += 12;
    doc.text(`Tax 10%  : USD ${fmt(taxTotal)}`, colTotal, y);
    y += 12;

    doc.setFont("helvetica", "bold");
    doc.text(`TOTAL    : USD ${fmt(orderTotal)}`, colTotal, y);
    y += 30;

    // LC
    doc.text("4. KETENTUAN PEMBAYARAN L/C", 40, y);
    y += 15;

    const lcDesc =
      lcType === "SIGHT"
        ? "Sight L/C — Pembayaran dilakukan saat dokumen lengkap dipresentasikan."
        : `Usance L/C — Pembayaran dilakukan ${lcTenorDays} hari setelah dokumen diterima bank.`;

    doc.setFont("helvetica", "normal");
    doc.text(`Jenis L/C: ${lcDesc}`, 40, y, { maxWidth: width - 80 });
    y += 20;

    const bullets = [
      "L/C harus bersifat irrevocable.",
      "Buyer wajib menerbitkan L/C maksimal 7 hari kerja setelah kontrak ditandatangani.",
      "Seller wajib menyediakan dokumen: Commercial Invoice, Packing List, B/L, COO, Insurance (jika diminta).",
      "Pembayaran mengikuti ketentuan UCP 600.",
    ];

    bullets.forEach((b) => {
      doc.text(`- ${b}`, 50, y, { maxWidth: width - 100 });
      y += 12;
    });

    y += 25;

    // Notes
    if (notes.trim()) {
      doc.setFont("helvetica", "bold");
      doc.text("5. CATATAN TAMBAHAN", 40, y);
      y += 15;

      doc.setFont("helvetica", "normal");
      doc.text(notes, 50, y, { maxWidth: width - 100 });
      y += 20;
    }

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.text(
        `Document: L/C Contract • Ref: LC-${orderId} • Page ${i} of ${pageCount}`,
        40,
        doc.internal.pageSize.getHeight() - 30
      );
    }

    doc.save(`Surat_Kontrak_LC_${orderId}.pdf`);
  };

  // ===========================================
  // UI
  // ===========================================
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/divisi/sorume.jpg')" }}
    >
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white shadow rounded-lg text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Checkout Pemesanan
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Buyer Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Data Buyer</h2>

            <input
              className="w-full p-2 border rounded mb-2"
              placeholder="Nama Buyer"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />

            <input
              className="w-full p-2 border rounded mb-2"
              placeholder="Perusahaan"
              value={buyerCompany}
              onChange={(e) => setBuyerCompany(e.target.value)}
            />

            <input
              className="w-full p-2 border rounded mb-2"
              placeholder="Alamat"
              value={buyerAddress}
              onChange={(e) => setBuyerAddress(e.target.value)}
            />

            <input
              className="w-full p-2 border rounded mb-2"
              placeholder="Negara"
              value={buyerCountry}
              onChange={(e) => setBuyerCountry(e.target.value)}
            />

            <h2 className="text-xl font-bold mt-4 mb-3">Metode L/C</h2>

            <div className="flex items-center gap-5">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={lcType === "SIGHT"}
                  onChange={() => setLcType("SIGHT")}
                />
                Sight
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={lcType === "USANCE"}
                  onChange={() => setLcType("USANCE")}
                />
                Usance
              </label>

              {lcType === "USANCE" && (
                <input
                  type="number"
                  className="w-20 p-2 border rounded"
                  value={lcTenorDays}
                  onChange={(e) => setLcTenorDays(Number(e.target.value))}
                />
              )}
            </div>

            <textarea
              className="w-full p-2 border rounded mt-4"
              placeholder="Catatan tambahan (optional)"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Cart Summary */}
          <div>
            <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>

            <div className="space-y-3">
              {cart.map((it) => (
                <div
                  key={it.id}
                  className="flex justify-between items-center p-3 border rounded"
                >
                  <div>
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-gray-600">
                      Qty: {it.quantity}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQty(it.id, -1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>

                    <span>{it.quantity}</span>

                    <button
                      onClick={() => updateQty(it.id, 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>

                    <div className="ml-4 text-right">
                      <div>${fmt(it.price)}</div>
                      <div className="text-sm text-gray-600">
                        Subtotal: ${fmt(it.price * it.quantity)}
                      </div>

                      <button
                        onClick={() => removeItem(it.id)}
                        className="mt-2 text-red-600 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-3 border rounded bg-gray-50">
                <div className="flex justify-between">
                  <span>Merchandise</span>
                  <span>${fmt(merchandiseTotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${fmt(shipTotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${fmt(taxTotal)}</span>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${fmt(orderTotal)}</span>
                </div>
              </div>

              <button
                onClick={generatePDF}
                className="w-full mt-3 px-4 py-3 bg-blue-600 text-white rounded"
              >
                Download Surat Kontrak L/C (PDF)
              </button>

              <button
                onClick={openPaymentModal}
                className="w-full px-4 py-3 bg-green-600 text-white rounded"
              >
                Proses Pembayaran / Submit Order
              </button>
              {/* POPUP PEMBAYARAN */}
              {showPaymentModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white text-black w-full max-w-md p-6 rounded-lg shadow-lg animate-fade">
                    <h2 className="text-xl font-bold mb-3 text-center">
                      Pembayaran Sedang Diproses
                    </h2>

                    <p className="text-center text-gray-700 mb-5">
                      Terima kasih! Silakan download dokumen kontrak pembayaran
                      L/C Anda.
                    </p>

                    <button
                      onClick={generatePDF}
                      className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
                    >
                      Download PDF Kontrak Pembayaran
                    </button>

                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="w-full py-3 bg-gray-300 text-black rounded-lg font-medium hover:bg-gray-400 transition"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
