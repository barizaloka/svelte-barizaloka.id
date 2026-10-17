# 🌐 Barizaloka.id — Web Application & Programmatic SEO Platform
Repository resmi untuk website **[Barizaloka.id](https://barizaloka.id)**. Dibangun menggunakan arsitektur modern **SvelteKit 2**, **Svelte 5 (Runes Mode)**, dan **Tailwind CSS v4**, platform ini berfungsi sebagai portal utama jasa pembuatan website, edukasi digital, direktori layanan lokal, serta etalase ekosistem komunitas Barizaloka.

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
- 📸 **Instagram**: [@barizaloka](https://instagram.com/barizaloka)
- 📍 **Lokasi**: Karangasem, Sedan, Rembang, Jawa Tengah 59264

---

<p align="center">
  Dibuat dengan dedikasi oleh tim <strong>Barizaloka</strong> — <em>Membangun Ekosistem Digital Berdampak dari Desa untuk Indonesia</em>.
</p>
