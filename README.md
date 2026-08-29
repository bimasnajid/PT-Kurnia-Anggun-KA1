# 🏢 PT KURNIA ANGGUN — Company Website

![Next.js](https://shields.io)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://shields.io)
![Prisma](https://shields.io)
![Vercel](https://shields.io)

Website resmi **PT Kurnia Anggun** yang dikembangkan menggunakan **Next.js 15 (App Router)** dan **TypeScript**. Proyek ini menggabungkan **frontend modern**, **backend API profesional (CRUD, Orders, Auth)**, serta **integrasi database melalui Prisma ORM**.

---

## 🚀 Teknologi yang Digunakan

* ⚡ **Next.js 15 (App Router)** — Framework React modern & efisien
* 🔐 **TypeScript** — Ketik kuat, menjaga konsistensi kode
* 🎨 **Tailwind CSS 4** — Desain cepat & responsif
* 🧩 **Prisma ORM 5.19.0** — ORM canggih untuk database modern
* 🧠 **Zod** — Validasi schema input data yang aman
* 🔑 **JWT + Bcrypt** — Sistem autentikasi aman untuk admin
* 💫 **Framer Motion** — Animasi interaktif di UI
* ☁ **Vercel** — Platform hosting resmi Next.js

---

## 🗂 Struktur Folder

```bash
my-landing-page/
├─ app/
│  ├─ api/
│  │  ├─ products/route.ts   → CRUD produk
│  │  ├─ orders/route.ts     → API pemesanan pelanggan
│  │  └─ auth/route.ts       → Login admin (JWT)
│  ├─ checkout/page.tsx      → Form pemesanan produk
│  ├─ layout.tsx             → Layout utama
│  ├─ page.tsx               → Halaman utama
│  └─ about/, products/, dll.→ Halaman informasi tambahan
├─ components/               → Navbar, Footer, Hero, Section, dsb.
├─ lib/
│  └─ prisma.ts              → Prisma client instance
├─ prisma/
│  ├─ schema.prisma          → Struktur database
│  └─ seed.ts                → Data awal (produk contoh)
├─ public/
│  └─ images/                → Aset gambar
├─ .env                      → DATABASE_URL, JWT_SECRET, NEXTAUTH_SECRET
├─ package.json
└─ README.md
```

---

## 📌 Catatan Project
* **Status:** Projects Magang / PKL
* **Repository Utama:** PT-Kurnia-Anggun-KA1