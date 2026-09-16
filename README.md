# Barizaloka.id — Web Platform & Tech Ecosystem

Official Website & Landing Page Platform **Barizaloka.id** — Ekosistem Teknologi & Jasa Pembuatan Website Profesional dari Rembang, Jawa Tengah. 

Dibangun dengan arsitektur modern menggunakan **Svelte 5 (Sveltekit 2)**, **Tailwind CSS v4**, **TypeScript**, dan dioptimalkan untuk deployment ke **Vercel**.

---

## 🚀 Fitur Utama

- **Dark Mode & Light Mode Theme Toggle**: Dukungan mode tampilan terang (Light Mode) dan gelap (Dark Mode) secara otomatis/manual dengan tombol toggle di Navbar. Pilihan tema tersimpan di `localStorage` dan terhindar dari *FOUC*.
- **Logo Komponen Adapting Theme**: Komponen `Logo.svelte` yang menyesuaikan warna dan bayangan secara elegan di mode terang maupun mode gelap.
- **Routing Dinamis Niche & Regional**: Halaman landing otomatis berbasis kombinasi sektor (Pesantren, Masjid, Desa, UMKM, Sepeda Listrik) dan lokasi geografis (Rembang, Pati, Kudus, Blora, Semarang, Solo, dll.).
- **Dynamic Sitemap XML Generator**: Endpoint `/sitemap.xml` yang secara otomatis mengindeks semua rute statis dan ratusan rute dinamis (niche, lokasi, blog) untuk optimalisasi SEO Google.
- **Teknologi Svelte 5 Runes**: Menggunakan fitur performa Svelte 5 seperti `$state`, `$derived`, `$props`, dan `$effect`.
- **REST API Local Endpoints**: Endpoint `/api/posts` untuk penyediaan data artikel blog secara terstruktur.
- **Integrasi WhatsApp Direct Contact**: Floating widget dan CTA konsultasi cepat WhatsApp yang disesuaikan dengan pesan konteks halaman.
- **Aset Brand & Meta SEO**: Favicon SVG dinamis, Apple Touch Icon, Icon PWA (192px/512px), dan gambar OpenGraph untuk preview media sosial.

---

## 🛠️ Stack Teknologi

| Komponen | Teknologi |
| :--- | :--- |
| **Framework Utama** | Svelte 5 (Runes Mode) & SvelteKit 2 |
| **Build Tool & Bundler** | Vite 8 (`@tailwindcss/vite`) |
| **Bahasa Pemrograman** | TypeScript 6 |
| **Styling & CSS** | Tailwind CSS v4 (`@tailwindcss/typography`, `@tailwindcss/forms`) |
| **Icon Set** | Lucide Svelte (`lucide-svelte`) |
| **Adapter Deployment** | `@sveltejs/adapter-vercel` |
| **Package Manager** | Bun / npm / pnpm |

---

## 📁 Struktur Direktori Project

```text
svelte-barizaloka.id/
├── static/                         # Aset statis publik
│   ├── favicon.ico                 # Favicon standar
│   ├── favicon.svg                 # Logo SVG vector
│   ├── apple-touch-icon.png        # Icon iOS & iPad OS
│   ├── icon-192.png / icon-512.png # Icon PWA / Aplikasi Web
│   ├── og-image.png                # Preview Meta Share Social Media (1200x630)
│   └── robots.txt                  # Instruksi Crawler Search Engine
├── src/
│   ├── app.html                    # Template HTML utama (%sveltekit.head% & %sveltekit.body%)
│   ├── app.d.ts                    # Deklarasi tipe global SvelteKit
│   ├── lib/
│   │   ├── assets/                 # Aset internal
│   │   ├── components/             # Komponen UI Modular
│   │   │   ├── Navbar.svelte       # Header navigasi & mega-dropdown
│   │   │   ├── Footer.svelte       # Footnote & navigasi bagian bawah
│   │   │   ├── Breadcrumbs.svelte  # Navigasi remah roti (SEO)
│   │   │   ├── CtaBanner.svelte    # Banner ajakan bertindak (CTA)
│   │   │   ├── FaqAccordion.svelte # Komponen FAQ interaktif
│   │   │   └── WhatsAppFloating.svelte # Widget melayang WhatsApp
│   │   └── data/                   # Centralized Data Store (Lokal CMS)
│   │       ├── niche_pages.ts      # Data spesialisasi sektor
│   │       ├── location_pages.ts   # Data lokasi kabupaten/kota
│   │       ├── provinsi_pages.ts   # Data provinsi & statistik
│   │       ├── pricing_data.ts     # Paket harga & fitur
│   │       ├── portfolio_data.ts   # Showcase portofolio proyek
│   │       ├── faq_data.ts         # Pertanyaan & jawaban FAQ
│   │       └── blog_data.ts        # Data artikel & berita
│   └── routes/                     # Halaman & API Routes (SvelteKit File-based Routing)
│       ├── +layout.svelte          # Shell layout global
│       ├── +page.svelte            # Landing page beranda
│       ├── harga/                  # Halaman daftar paket harga
│       ├── portofolio/             # Halaman daftar portofolio
│       ├── blog/                   # Halaman blog & detail [slug]
│       ├── tentang/                # Halaman profil & ekosistem Barizaloka
│       ├── faq/                    # Halaman FAQ pusat bantuan
│       ├── kontak/                 # Halaman formulir & informasi kontak
│       ├── jasa-website-[niche]/   # Rute dinamis landing niche
│       ├── jasa-website-di-[lokasi]/ # Rute dinamis landing wilayah
│       ├── jasa-website-[niche]-di-[lokasi]/ # Rute dinamis kombinasi niche + wilayah
│       ├── potensi-digital-[provinsi]/       # Rute statistik provinsi
│       ├── api/posts/              # REST API endpoint artikel
│       └── sitemap.xml/            # Dynamic Sitemap XML endpoint
├── vite.config.ts                  # Konfigurasi Vite & Plugin Svelte/Tailwind
├── package.json                    # Package manifest & scripts
└── tsconfig.json                   # Konfigurasi TypeScript
```

---

## 💻 Cara Install & Menjalankan Project

### 1. Prasyarat System
Pastikan komputer/server Anda telah terinstall:
- **Node.js**: `v18.0.0` atau yang lebih baru
- **Bun** *(opsional, direkomendasikan)*: `v1.0.0` atau lebih baru
- **npm** atau **pnpm**

### 2. Kloning Repository & Install Dependensi
```bash
# Kloning repository ini
git clone https://github.com/barizaloka/svelte-barizaloka.id.git

# Masuk ke direktori project
cd svelte-barizaloka.id

# Install paket dependensi menggunakan Bun (atau npm install)
bun install
```

### 3. Menjalankan Development Server
```bash
# Jalankan dev server lokal
bun run dev

# Atau buka otomatis di browser
npm run dev -- --open
```
Aplikasi akan berjalan di `http://localhost:5173`.

### 4. Pengecekan Kode & Type Checking
```bash
# Sinkronkan SvelteKit types & jalankan svelte-check
npm run check

# Pengecekan formatting & linting
npm run lint
```

### 5. Build Produksi & Preview
```bash
# Kompilasi aplikasi ke versi produksi
npm run build

# Menjalankan preview lokal hasil build produksi
npm run preview
```

---

## ⚙️ Panduan Konfigurasi Lengkap

### 1. Mengubah Data Layanan & Lokasi (Local Data Store)
Seluruh konten layanan, lokasi target, paket harga, dan portofolio dikelola secara terpusat di `src/lib/data/`:
- **Spesialis Sektor**: Edit [src/lib/data/niche_pages.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/src/lib/data/niche_pages.ts) untuk menambah/mengubah deskripsi sektor (Pesantren, Desa, Masjid, UMKM, dll.).
- **Daftar Wilayah**: Edit [src/lib/data/location_pages.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/src/lib/data/location_pages.ts) untuk menambah kota/kabupaten target SEO.
- **Paket & Harga**: Edit [src/lib/data/pricing_data.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/src/lib/data/pricing_data.ts) untuk memperbarui harga, diskon, atau item fasilitas.
- **Portofolio**: Edit [src/lib/data/portfolio_data.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/src/lib/data/portfolio_data.ts) untuk menambah daftar karya website yang telah diselesaikan.

### 2. Mengubah Kontak WhatsApp Default
Nomor WhatsApp & pesan preset terpasang di beberapa komponen:
- **Floating Button**: `src/lib/components/WhatsAppFloating.svelte`
- **Navbar Button**: `src/lib/components/Navbar.svelte`
- **Footer Contact**: `src/lib/components/Footer.svelte`

Ganti nomor `6281234567890` dengan nomor WhatsApp operasional Barizaloka yang berlaku.

### 3. Mengatur Logo & Favicon Brand
Jika ingin memperbarui logo atau grafik brand:
1. Ganti file `static/favicon.svg` dengan logo vector SVG baru.
2. Ganti file `static/icon-192.png` dan `static/icon-512.png` dengan logo rasio 1:1.
3. Ganti file `static/og-image.png` (resolusi 1200x630px) untuk gambar pratinjau link media sosial (Facebook, WhatsApp, Twitter/X).

### 4. Konfigurasi Deployment Vercel
Project ini telah dikonfigurasi dengan `@sveltejs/adapter-vercel` di [vite.config.ts](file:///home/ahla/Developments/Barizaloka/svelte-barizaloka.id/vite.config.ts).

**Langkah Deployment ke Vercel:**
1. Push repository ke GitHub/GitLab.
2. Import repository di dashboard [Vercel](https://vercel.com).
3. Vercel akan otomatis mendeteksi SvelteKit dan menjalankan command `npm run build`.
4. Aplikasi siap diakses secara global melalui CDN Vercel.

---

## 📜 Lisensi & Hak Cipta

© 2026 **Barizaloka.id** — Hak Cipta Dilindungi.
Dikembangkan dengan ❤️ di Rembang, Jawa Tengah untuk kemajuan ekosistem digital Indonesia.
