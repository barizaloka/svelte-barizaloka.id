# 🧩 04. Panduan Komponen UI

Projek **Barizaloka.id** memiliki sejumlah komponen modul UI modular di folder `src/lib/components/`. Seluruh komponen dibangun dengan dukungan penuh tema terang dan gelap (*dark mode compliant*) serta ramah seluler (*responsive design*).

---

## 📌 1. `Navbar.svelte`

Navigasi atas aplikasi yang telah disederhanakan untuk pengalaman pengguna (*UX*) yang intuitif.

- **Lokasi Berkas**: [`src/lib/components/Navbar.svelte`](../src/lib/components/Navbar.svelte)
- **Fitur Utama**:
  - **Single Mega Dropdown "Layanan"**: Menggabungkan kategori Layanan Spesialis (Desa, Masjid, Pesantren, Sepeda Listrik, UMKM), Layanan Per Kota (Jakarta, Surabaya, Bandung, dll.), dan Layanan Per Provinsi.
  - **Navigasi Langsung**: Berisi tautan cepat ke *Portofolio*, *Harga*, *Blog*, *Tentang*, dan *Kontak*.
  - **Integrasi ThemeToggle**: Tombol sakelar mode terang/gelap langsung di navbar desktop dan menu seluler.
  - **Responsive Drawer**: Menu hamburger seluler yang halus saat diakses melalui perangkat seluler/tablet.

---

## 📌 2. `Footer.svelte`

Komponen kaki halaman (*footer*) kaya informasi dengan navigasi SEO internal dan area komunitas.

- **Lokasi Berkas**: [`src/lib/components/Footer.svelte`](../src/lib/components/Footer.svelte)
- **Fitur Utama**:
  - **Banner Komunitas & CTA**: Menyediakan tautan gabung grup WhatsApp / Konsultasi Gratis.
  - **Navigasi Kategori Lengkap**: Menampilkan tautan ke layanan per niche, lokasi populer, serta tautan umum.
  - **Hak Cipta & Brand**: Informasi legalitas dan merek Barizaloka.
  - **Dukungan Dark Mode**: Warna latar `bg-slate-900 dark:bg-slate-950` dan penyesuaian kontras teks secara otomatis.

---

## 📌 3. `Logo.svelte`

Komponen logo adaptif merek Barizaloka.id.

- **Lokasi Berkas**: [`src/lib/components/Logo.svelte`](../src/lib/components/Logo.svelte)
- **Props**:
  - `size?: 'sm' | 'md' | 'lg'` (default: `'md'`)
  - `variant?: 'auto' | 'light' | 'dark'` (default: `'auto'`)

---

## 📌 4. `ThemeToggle.svelte`

Tombol pemilih mode terang/gelap.

- **Lokasi Berkas**: [`src/lib/components/ThemeToggle.svelte`](../src/lib/components/ThemeToggle.svelte)
- **Fungsi**: Memanggil method `themeState.toggle()` dan menampilkan icon `Sun` atau `Moon` reaktif.

---

## 📌 5. `Breadcrumbs.svelte`

Navigasi jejak remah (*breadcrumb*) untuk SEO dan navigasi pengguna.

- **Lokasi Berkas**: [`src/lib/components/Breadcrumbs.svelte`](../src/lib/components/Breadcrumbs.svelte)
- **Props**:
  - `items: Array<{ name: string; href?: string }>`
- **Fitur SEO**: Menyelipkan metadata JSON-LD `BreadcrumbList` otomatis ke dalam tag `<head>` untuk kaya Google Search Snippet.

---

## 📌 6. `CtaBanner.svelte`

Banner ajakan bertindak (*Call-to-Action*) yang dipasang di bagian bawah halaman mendarat.

- **Lokasi Berkas**: [`src/lib/components/CtaBanner.svelte`](../src/lib/components/CtaBanner.svelte)
- **Props**:
  - `title?: string`
  - `description?: string`
  - `buttonText?: string`
  - `whatsappMessage?: string`

---

## 📌 7. `FaqAccordion.svelte`

Komponen akordion pertanyaan umum (FAQ) interaktif.

- **Lokasi Berkas**: [`src/lib/components/FaqAccordion.svelte`](../src/lib/components/FaqAccordion.svelte)
- **Props**:
  - `items: Array<{ question: string; answer: string }>`
- **Fitur**: Membuka/menutup item pertanyaan dengan animasi transisi yang mulus, serta menyesuaikan kontras teks untuk Dark & Light mode.

---

## 📌 8. `WhatsAppFloating.svelte`

Tombol melayang (*Floating Action Button*) untuk kontak WhatsApp instan.

- **Lokasi Berkas**: [`src/lib/components/WhatsAppFloating.svelte`](../src/lib/components/WhatsAppFloating.svelte)
- **Fitur**: Tetap berada di pojok kanan bawah layar pengguna dengan ikon WhatsApp resmi dan efek *hover/pulse* menarik perhatian.
