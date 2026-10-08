# 🌐 Barizaloka.id — Web Application & Programmatic SEO Platform

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.x-orange.svg?style=flat-square&logo=svelte)](https://kit.svelte.dev/)
[![Svelte 5](<https://img.shields.io/badge/Svelte-5.x_(Runes)-FF3E00.svg?style=flat-square&logo=svelte>)](https://svelte.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_to-Vercel-000000.svg?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg?style=flat-square)](#)

Repository resmi untuk website **[Barizaloka.id](https://barizaloka.id)**. Dibangun menggunakan arsitektur modern **SvelteKit 2**, **Svelte 5 (Runes Mode)**, dan **Tailwind CSS v4**, platform ini berfungsi sebagai portal utama jasa pembuatan website, edukasi digital, direktori layanan lokal, serta etalase ekosistem komunitas Barizaloka.

---

## 📖 Tentang Barizaloka

Lahir dari Kecamatan Sedan dan Sarang, Kabupaten Rembang, Jawa Tengah, **Barizaloka** adalah ekosistem teknologi inovatif yang berakar dari desa untuk memberdayakan masyarakat, santri, dan pelaku usaha di seluruh Indonesia.

Selain menyediakan jasa website profesional (UMKM, pesantren, madrasah/sekolah, masjid, desa, dan undangan digital), Barizaloka mengayomi 4 pilar komunitas utama:

- 🌙 **Astro Falak**: Komunitas kajian ilmu Falak dan astronomi Islam.
- 🌍 **Astraloka**: Gerakan kepedulian lingkungan hidup dan edukasi daur ulang ([astraloka.my.id](https://astraloka.my.id)).
- 💻 **Baricode**: Ruang belajar IT, pemrograman, dan kolaborasi developer ([baricode.org](https://baricode.org)).
- 📿 **Self Reminder**: Pengingat spiritual dan ruang muhasabah harian.

---

## ✨ Fitur Utama

- ⚡ **Ultra Fast & Lightweight**: Dibangun dengan performa tinggi berkat kombinasi Vite 8, Svelte 5 Runes, dan Tailwind CSS v4.
- 🔍 **Cek Ketersediaan Domain Real-Time (`/cek-domain`)**:
  - Pengecekan status ketersediaan domain via protokol **RDAP (Registration Data Access Protocol)** (`node-rdap`) melalui endpoint `/api/domain-check`.
  - Rekomendasi ekstensi populer (.com, .id, .my.id, .sch.id, dll) berserta estimasi biaya.
- 🚀 **Programmatic SEO (pSEO) Otomatis**:
  - Generasi dinamis ribuan halaman pendaratan berdasarkan:
    - **Niche Layanan**: `/jasa-website-umkm`, `/jasa-website-pesantren`, `/jasa-website-desa`, `/jasa-website-masjid`, `/jasa-website-sepeda-listrik`.
    - **Lokasi Geografis (Kabupaten/Kota & Kecamatan)**: `/jasa-website-di-[lokasi]`.
    - **Kombinasi Spesifik Niche & Lokasi**: `/jasa-website-[niche]-di-[lokasi]`.
    - **Potensi Digital Provinsi**: `/potensi-digital-[provinsi]`.
  - Pengelolaan otomatis canonical URL dan Open Graph meta tags untuk memaksimalkan ranking mesin pencari.
- 📝 **Sistem Blog Berbasis Markdown & Frontmatter**:
  - Artikel disimpan di `src/content/posts/` berformat Markdown (.md).
  - Parsing dinamis menggunakan `marked` dan `js-yaml`.
  - Halaman arsip (`/blog`) dan halaman baca dinamis (`/blog/[slug]`).
- 🗺️ **Sitemap Otomatis (`/sitemap.xml`)**:
  - Engine dinamis yang mengindeks semua halaman statis, programmatic SEO, lokasi, niche, dan artikel blog secara otomatis.
- 🌓 **Tema Gelap & Terang (Dark / Light Mode)**:
  - Manajemen state reaktif Svelte 5 (`$state`) dengan sinkronisasi instan ke `localStorage`.
- 💬 **Konversi & Call-to-Action Terintegrasi**:
  - WhatsApp Floating Widget responsif dengan pesan konsultasi otomatis.
  - Komponen FAQ Accordion, Portofolio Showcase, dan Daftar Harga transparan.

---

## 🛠️ Tech Stack

| Komponen              | Teknologi                                     | Keterangan                                   |
| :-------------------- | :-------------------------------------------- | :------------------------------------------- |
| **Framework**         | [SvelteKit 2](https://kit.svelte.dev/)        | Full-stack application framework             |
| **Core UI**           | [Svelte 5](https://svelte.dev/)               | Mode Runes (`$state`, `$derived`, `$props`)  |
| **Styling**           | [Tailwind CSS v4](https://tailwindcss.com/)   | Menggunakan plugin `@tailwindcss/vite`       |
| **Language**          | [TypeScript](https://www.typescriptlang.org/) | Type-safety dan maintainability              |
| **Bundler**           | [Vite 8](https://vitejs.dev/)                 | Fast HMR & optimized production build        |
| **Domain Lookup**     | `node-rdap`                                   | RDAP query lookup untuk `/api/domain-check`  |
| **Markdown Parser**   | `marked` & `js-yaml`                          | Parser frontmatter dan konten blog           |
| **Icons**             | `lucide-svelte`                               | Icon pack modern & konsisten                 |
| **Hosting & Adapter** | `@sveltejs/adapter-vercel`                    | Deployment optimal ke Vercel Edge/Serverless |

---

## 📁 Struktur Direktori

```text
svelte-barizaloka.id/
├── src/
│   ├── app.d.ts                # Deklarasi tipe global SvelteKit
│   ├── app.html                # Shell template HTML utama
│   ├── error.html              # Fallback error page
│   ├── content/
│   │   └── posts/              # Koleksi artikel blog (.md dengan YAML frontmatter)
│   ├── lib/
│   │   ├── assets/             # Asset gambar/vektor internal (favicon, logo)
│   │   ├── components/         # Komponen UI reusable (Navbar, Footer, FAQ, WhatsApp, dsb.)
│   │   ├── data/               # Data master (niche, kabupaten, kecamatan, harga, portofolio)
│   │   │   ├── blog_data.ts
│   │   │   ├── faq_data.ts
│   │   │   ├── location_pages.ts
│   │   │   ├── niche_pages.ts
│   │   │   ├── pricing_data.ts
│   │   │   └── provinsi_pages.ts
│   │   ├── server/             # Layanan backend (domain RDAP lookup service)
│   │   └── theme.svelte.ts     # Reusable Svelte 5 Runes state untuk Light/Dark mode
│   └── routes/
│       ├── +layout.svelte      # Root layout (Theme provider, Navbar, Footer, WhatsApp CTA)
│       ├── +page.svelte        # Beranda (Landing page utama)
│       ├── (base)/             # Halaman umum: /harga, /portofolio, /tentang, /faq, /cek-domain, /sitemap.xml
│       ├── (niches)/           # Landing page niche spesifik (/jasa-website-umkm, dsb.)
│       ├── (jasa-website)/     # Route dinamis programmatic SEO lokasi & kombinasi
│       ├── (onpage)/           # Halaman landing edukasi & pSEO provinsi
│       ├── api/                # API Endpoints (/api/domain-check, /api/posts)
│       └── blog/               # Arsip dan detail artikel blog
├── static/                     # File statis publik (robots.txt, favicon, gambar)
├── eslint.config.js            # Konfigurasi ESLint
├── prettier.config.js          # Konfigurasi format kode Prettier
├── tsconfig.json               # Konfigurasi TypeScript
├── vite.config.ts              # Konfigurasi Vite & adapter Vercel
└── package.json
```

---

## 🚀 Memulai (Getting Started)

### Prasyarat

Pastikan lingkungan lokal Anda telah terpasang:

- **Node.js** (v18.x atau versi LTS terbaru) atau **Bun**
- Package manager: `bun`, `npm`, atau `pnpm`

### 1. Kloning Repositori

```bash
git clone https://github.com/barizaloka/svelte-barizaloka.id.git
cd svelte-barizaloka.id
```

### 2. Instalasi Dependensi

Gunakan package manager pilihan Anda:

```bash
# Menggunakan Bun (disarankan)
bun install

# Atau menggunakan npm
npm install
```

### 3. Jalankan Development Server

```bash
bun run dev
# atau: npm run dev
```

Buka browser Anda dan navigasikan ke `http://localhost:5173`.

---

## 📜 Skrip NPM yang Tersedia

| Perintah          | Deskripsi                                                                 |
| :---------------- | :------------------------------------------------------------------------ |
| `bun run dev`     | Menjalankan server pengembangan lokal dengan Hot Module Replacement (HMR) |
| `bun run build`   | Melakukan kompilasi & optimasi build untuk deployment produksi            |
| `bun run preview` | Menjalankan preview lokal dari hasil build produksi                       |
| `bun run check`   | Menjalankan type-check dan validasi Svelte (`svelte-check`)               |
| `bun run lint`    | Mengecek kepatuhan format & aturan ESLint dan Prettier                    |
| `bun run format`  | Memformat seluruh kode proyek secara otomatis dengan Prettier             |

---

## ✍️ Panduan Pengelolaan Konten

### Menambahkan Artikel Blog Baru

Artikel blog disimpan dalam berkas Markdown di direktori `src/content/posts/<slug-artikel>.md`. Setiap artikel wajib menyertakan YAML Frontmatter berikut:

```markdown
---
id: '53'
slug: judul-artikel-anda-yang-menarik
title: Judul Artikel Anda Yang Menarik
excerpt: Ringkasan singkat isi artikel untuk tampilan kartu dan cuplikan media sosial.
category: Edukasi Digital
categorySlug: edukasi-digital
publishedAt: '2026-10-08'
readTime: 4 menit baca
image: https://barizaloka.id/og-image.png
tags:
  - Website
  - UMKM
metaTitle: Judul SEO Artikel | Barizaloka
metaDescription: Deskripsi meta untuk optimasi SERP Google.
---

Tulis isi konten artikel Anda di sini menggunakan format Markdown standar...
```

Setelah berkas disimpan, artikel akan otomatis muncul di halaman `/blog` dan terindeks dalam `/sitemap.xml`.

### Memperbarui Data Programmatic SEO (pSEO)

- **Wilayah (Kabupaten/Kota & Kecamatan)**: Edit berkas `src/lib/data/location_pages.ts`.
- **Niche Industri**: Edit berkas `src/lib/data/niche_pages.ts`.
- **Daftar Harga & Paket**: Edit berkas `src/lib/data/pricing_data.ts`.
- **Portofolio Proyek**: Edit berkas `src/lib/data/portofolio_data.ts` atau `portofolio.json`.

---

## ☁️ Deployment

Proyek ini telah dikonfigurasi menggunakan `@sveltejs/adapter-vercel` di [vite.config.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/vite.config.ts):

1. **Push ke GitHub**: Setiap push ke cabang `main` akan memicu build otomatis di dashboard Vercel.
2. **Build Settings di Vercel**:
   - **Framework Preset**: SvelteKit
   - **Build Command**: `vite build`
   - **Output Directory**: `.vercel/output` (dikelola otomatis oleh adapter)

---

## 🤝 Kontak & Dukungan

Jika Anda memiliki pertanyaan, ingin berkontribusi, atau membutuhkan layanan website profesional:

- 🌐 **Situs Resmi**: [barizaloka.id](https://barizaloka.id)
- 💬 **WhatsApp**: [0851-8815-8542](https://wa.me/6285188158542)
- 📧 **Email**: [barizaloka@gmail.com](mailto:barizaloka@gmail.com)
- 📸 **Instagram**: [@namaku.ahla](https://instagram.com/namaku.ahla)
- 📍 **Lokasi**: Karangasem, Sedan, Rembang, Jawa Tengah 59264

---

<p align="center">
  Dibuat dengan dedikasi oleh tim <strong>Barizaloka</strong> — <em>Membangun Ekosistem Digital Berdampak dari Desa untuk Indonesia</em>.
</p>
