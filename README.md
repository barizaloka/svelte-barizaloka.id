# 📚 Dokumentasi Resmi Projek Barizaloka.id

Selamat datang di dokumentasi resmi dari projek **Barizaloka.id** (SvelteKit Web Application). Dokumentasi ini disusun secara terstruktur dan terpisah ke dalam beberapa berkas untuk memudahkan pemahaman arsitektur, cara kerja, sistem tema, komponen UI, hingga prosedur pengembangannya.

---

## 🗂️ Daftar Isi Dokumentasi

1. [**01. Arsitektur & Stack Teknologi**](./docs/01-arsitektur-dan-teknologi.md)
   - Deskripsi umum projek, framework utama (SvelteKit 2, Svelte 5 Runes), CSS framework (Tailwind CSS v4), TypeScript, adapter Vercel, dan pohon direktori projek.

2. [**02. Instalasi & Konfigurasi**](./docs/02-instalasi-dan-konfigurasi.md)
   - Persyaratan lingkungan (*prerequisites*), langkah-langkah instalasi, perintah NPM (*scripts*), serta panduan *deployment* ke Vercel.

3. [**03. Sistem Tema & Manajemen Logo**](./docs/03-sistem-tema-dan-logo.md)
   - Penjelasan mekanisme Dark/Light mode menggunakan Svelte 5 Rune State, skrip *anti-FOUC* di `app.html`, penanganan kustom kueri `@custom-variant dark` pada Tailwind CSS v4, serta logo SVG adaptif.

4. [**04. Panduan Komponen UI**](./docs/04-komponen-ui.md)
   - Dokumentasi lengkap komponen reusable di `src/lib/components/` (`Navbar`, `Footer`, `Logo`, `ThemeToggle`, `Breadcrumbs`, `CtaBanner`, `FaqAccordion`, `WhatsAppFloating`).

5. [**05. Routing & Halaman Dinamis SEO**](./docs/05-routing-dan-halaman-dinamis.md)
   - Struktur *file-based routing* SvelteKit, rute statis, rute dinamis SEO (berdasarkan lokasi, niche bisnis, dan provinsi), pembuatan `sitemap.xml`, serta skema JSON-LD.

6. [**06. Manajemen Data & Konten**](./docs/06-manajemen-data.md)
   - Struktur berkas data di `src/lib/data/` (`blog_data`, `faq_data`, `location_pages`, `niche_pages`, `portfolio_data`, `pricing_data`, `provinsi_pages`) dan panduan menambah atau memperbarui konten.

---

## 📌 Ringkasan Singkat Projek

- **Nama Projek**: Barizaloka Website (SvelteKit)
- **Domain Utama**: `barizaloka.id`
- **Tujuan Projek**: Landing page & platform layanan pembuatan website profesional di Indonesia dengan kemampuan SEO lokal berperingkat tinggi (*programmatic SEO* per kota, provinsi, dan niche industri).
- **Lisensi & Kepemilikan**: Private / Barizaloka
