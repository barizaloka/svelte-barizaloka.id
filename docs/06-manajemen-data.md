# 💾 06. Manajemen Data & Konten

Seluruh data konten pada projek **Barizaloka.id** disimpan secara terstruktur dalam bentuk berkas TypeScript di folder [`src/lib/data/`](../src/lib/data/). Metode ini memberikan performa muat super cepat tanpa memerlukan ketergantungan database external (seperti MySQL/PostgreSQL) dan aman dari risiko SQL Injection.

---

## 🗃️ Daftar Berkas Data

| Berkas Data | Deskripsi & Isi Utama |
| :--- | :--- |
| **`blog_data.ts`** | Daftar artikel blog, kategori, tanggal rilis, gambar thumbnail, deskripsi ringkas, dan konten artikel lengkap. |
| **`faq_data.ts`** | Daftar pertanyaan yang sering diajukan (*Frequently Asked Questions*) beserta jawaban rasionalnya. |
| **`location_pages.ts`** | Data kota/kabupaten di Indonesia (slug, nama daerah, provinsi, deskripsi potensi bisnis lokal). |
| **`niche_pages.ts`** | Data bidang usaha/spesialisasi (Desa, Masjid, Pesantren, Sepeda Listrik, UMKM, dll.). |
| **`portfolio_data.ts`** | Data hasil karya/klien Barizaloka, kategori projek, fitur utama, dan tautan pratinjau. |
| **`pricing_data.ts`** | Paket harga pembuatan website (Paket Starter, UMKM Pro, Enterprise Custom), fitur, dan harga promo. |
| **`provinsi_pages.ts`** | Data provinsi di Indonesia untuk halaman landing transformasi digital tingkat regional. |

---

## ✍️ Panduan Mengedit & Menambah Konten

### 1. Menambah Artikel Blog Baru (`blog_data.ts`)

Buka [`src/lib/data/blog_data.ts`](../src/lib/data/blog_data.ts) dan tambahkan objek artikel baru ke dalam array `blogPosts`:

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

// Tambahkan ke array blogPosts:
{
  slug: 'tips-desain-website-umkm-2026',
  title: '7 Tips Desain Website UMKM Agar Laris Manis di Tahun 2026',
  excerpt: 'Pelajari strategi tata letak dan kecepatan website yang terbukti meningkatkan konversi penjualan UMKM.',
  category: 'Tips & Trik',
  author: 'Tim Barizaloka',
  date: '2026-09-15',
  readTime: '5 min',
  image: 'https://images.unsplash.com/photo-...'
  content: `...konten HTML / Markdown...`
}
```

---

### 2. Menambah Kota/Lokasi SEO Baru (`location_pages.ts`)

Buka [`src/lib/data/location_pages.ts`](../src/lib/data/location_pages.ts) dan tambahkan data kota/kabupaten baru:

```typescript
{
  slug: 'semarang',
  name: 'Semarang',
  province: 'Jawa Tengah',
  type: 'Kota',
  metaTitle: 'Jasa Pembuatan Website di Semarang Murah & Profesional | Barizaloka',
  metaDescription: 'Jasa buat website profesional di Kota Semarang untuk UMKM, toko online, dan perusahaan.',
  introText: 'Kota Semarang sebagai ibu kota Jawa Tengah memiliki potensi ekonomi digital yang sangat pesat...'
}
```
*URL `/jasa-website-di-semarang` dan sitemap XML akan terbentuk secara otomatis!*

---

### 3. Memperbarui Paket & Harga (`pricing_data.ts`)

Buka [`src/lib/data/pricing_data.ts`](../src/lib/data/pricing_data.ts) untuk merubah harga atau daftar fasilitas paket:

```typescript
export const pricingPlans = [
  {
    name: 'Paket Starter UMKM',
    price: 'Rp 950.000',
    period: 'sekali bayar',
    popular: false,
    features: [
      'Website Single Page / Landing Page',
      'Gratis Domain .com / .id (1 Thn)',
      'Gratis SSL Security (HTTPS)',
      'Desain Responsive & Dark Mode',
      'Integrasi Tombol WhatsApp'
    ]
  },
  // ...paket lainnya...
];
```

---

## 🔒 Keamanan Tipe Data (Type Safety)

Seluruh tipe data menggunakan antarmuka (*interface*) TypeScript ketat. Jika terdapat properti yang wajib diisi namun terlewat saat penambahan data, perintahkan `npm run check` di terminal dan TypeScript akan langsung memberi tahu baris lokasi kesalahan sebelum aplikasi dikompilasi.
