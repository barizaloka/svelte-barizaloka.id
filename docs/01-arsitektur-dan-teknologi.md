# 🏗️ 01. Arsitektur & Stack Teknologi

Dokumen ini menjelaskan arsitektur perangkat lunak, teknologi yang digunakan, dan struktur folder projek **Barizaloka.id**.

---

## 🛠️ Stack Teknologi Utama

Projek ini dibangun menggunakan teknologi web terkini yang berfokus pada kecepatan muat (*performance*), kemudahan pemeliharaan kode, dan optimalisasi SEO.

| Teknologi | Versi / Keterangan | Fungsi Utama |
| :--- | :--- | :--- |
| **[Svelte 5](https://svelte.dev)** | `^5.56.1` | Framework UI reaktif menggunakan fitur terbaru **Runes** (`$state`, `$derived`, `$effect`). |
| **[SvelteKit 2](https://kit.svelte.dev)** | `^2.63.0` | Framework aplikasi web untuk Server-Side Rendering (SSR), Static Site Generation (SSG), dan routing. |
| **[Tailwind CSS v4](https://tailwindcss.com)** | `^4.3.0` | Utility-first CSS framework dengan konfigurasi `@import "tailwindcss";` dan `@custom-variant dark`. |
| **[TypeScript](https://www.typescriptlang.org)** | `^6.0.3` | Type checker untuk keamanan kode JavaScript. |
| **[Vite](https://vitejs.dev)** | `^8.0.16` | Build tool dan HMR (*Hot Module Replacement*) dev server super cepat. |
| **[Lucide Svelte](https://lucide.dev)** | `^1.0.1` | Set ikon SVG reaktif dan teroptimasi. |
| **[@sveltejs/adapter-vercel](https://svelte.dev/docs/kit/adapter-vercel)** | `^6.3.3` | Adapter deployment otomatis untuk platform Vercel Serverless / Edge Functions. |

---

## 📂 Struktur Direktori Projek

Berikut adalah struktur folder utama dari projek:

```text
svelte-barizaloka.id/
├── docs/                        # 📚 Folder Dokumentasi Terpisah (MD)
│   ├── README.md                # Indeks Utama Dokumentasi
│   ├── 01-arsitektur-dan-teknologi.md
│   ├── 02-instalasi-dan-konfigurasi.md
│   ├── 03-sistem-tema-dan-logo.md
│   ├── 04-komponen-ui.md
│   ├── 05-routing-dan-halaman-dinamis.md
│   └── 06-manajemen-data.md
├── static/                      # 🖼️ Aset Statis Publik (Favicon, Logo, OG Image)
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   └── og-image.png
├── src/                         # 💻 Kode Sumber Aplikasi
│   ├── app.d.ts                 # Deklarasi Type SvelteKit Global
│   ├── app.html                 # Template HTML Utama & Skrip Anti-FOUC Tema
│   ├── lib/                     # Komponen, Data, dan Utility Reusable
│   │   ├── assets/              # Aset internal
│   │   ├── components/          # Komponen UI Svelte (Navbar, Footer, Logo, dll.)
│   │   ├── data/                # Sumber data JSON/TypeScript (SEO, blog, harga, lokasi)
│   │   ├── index.ts             # Barrel file eksport lib
│   │   └── theme.svelte.ts      # Store State Tema (Light/Dark) dengan Svelte 5 Runes
│   └── routes/                  # 🚀 File-based Routing SvelteKit
│       ├── +layout.svelte       # Shell layout utama yang membungkus semua halaman
│       ├── +page.svelte         # Landing Page Utama
│       ├── layout.css           # Styling global & Tailwind CSS v4 custom variant
│       ├── api/                 # Endpoint REST API (misal: /api/posts)
│       ├── blog/                # Halaman Blog & Artikel ([slug])
│       ├── faq/                 # Halaman FAQ
│       ├── harga/               # Halaman Daftar Harga & Paket
│       ├── tentang/             # Halaman Tentang Kami
│       ├── kontak/              # Halaman Hubungi Kami
│       ├── portofolio/          # Halaman Portofolio Projek
│       ├── sitemap.xml/         # Endpoint generator sitemap otomatis
│       ├── jasa-website-di-[lokasi]/                # SEO Route Berdasarkan Kota/Kabupaten
│       ├── potensi-digital-[provinsi]/              # SEO Route Berdasarkan Provinsi
│       └── jasa-website-[niche]-di-[lokasi]/        # SEO Route Niche x Lokasi Kombinasi
├── package.json                 # Konfigurasi dependensi dan npm scripts
├── svelte.config.js             # Konfigurasi SvelteKit & Adapter
├── tsconfig.json                # Konfigurasi TypeScript
└── vite.config.ts               # Konfigurasi Vite & Tailwind plugin
```

---

## ⚡ Fitur Utama Sistem Architecture

1. **Svelte 5 Runes Integration**:
   Menggunakan keunggulan Svelte 5 Runes (`$state`, `$effect`, `$derived`) untuk manajemen state reaktif yang presisi dan ringan tanpa overhead Redux/Vuex tradisional.

2. **Programmatic SEO & Scalable Routing**:
   Halaman mendarat (*landing page*) lokasi dan niche dibuat secara otomatis dari berkas data TypeScript (`src/lib/data/`), memungkinkan pengindeksan ribuan kata kunci lokasi Indonesia secara efisien.

3. **Responsive Dark/Light Mode**:
   Dukungan tema gelap dan terang dengan deteksi otomatis preferensi OS pengguna (`prefers-color-scheme: dark`) dan penyimpanan ke `localStorage`.

4. **Zero Layout Shift (FOUC Free)**:
   Aplikasi dilengkapi skrip eksekusi dini di `<head>` pada `app.html` yang membaca tema dari `localStorage` sebelum render halaman dilakukan.
