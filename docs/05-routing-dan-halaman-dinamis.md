# 🛣️ 05. Routing & Halaman Dinamis SEO

Projek **Barizaloka.id** mengadopsi struktur *File-Based Routing* SvelteKit 2 dengan kemampuan **Programmatic SEO** untuk mendominasi hasil pencarian Google di berbagai daerah dan bidang bisnis di Indonesia.

---

## 🗺️ Peta Seluruh Rute Aplikasi

```text
src/routes/
├── +page.svelte                                  # Halaman Utama / Homepage (/)
├── harga/+page.svelte                            # Halaman Paket & Harga (/harga)
├── portofolio/+page.svelte                       # Halaman Hasil Karya (/portofolio)
├── blog/
│   ├── +page.svelte                              # Listing Artikel Blog (/blog)
│   └── [slug]/
│       ├── +page.ts                              # Loader data blog per slug
│       └── +page.svelte                          # Detail Artikel Blog (/blog/:slug)
├── faq/+page.svelte                              # Pertanyaan Umum (/faq)
├── tentang/+page.svelte                          # Profil Perusahaan (/tentang)
├── kontak/+page.svelte                           # Form & Alamat Kontak (/kontak)
├── sitemap.xml/+server.ts                        # Endpoint XML Sitemap untuk Google Search Console
├── api/posts/+server.ts                          # REST API endpoint artikel (/api/posts)
│
├── 🎯 Landing Page Spesialis Niche (Statis)
│   ├── jasa-website-desa/+page.svelte            # Jasa Website Desa & Kelurahan
│   ├── jasa-website-masjid/+page.svelte          # Jasa Website Masjid & Musala
│   ├── jasa-website-pesantren/+page.svelte       # Jasa Website Pondok Pesantren
│   ├── jasa-website-sepeda-listrik/+page.svelte  # Jasa Website Toko Sepeda Listrik
│   └── jasa-website-umkm/+page.svelte            # Jasa Website UMKM & Usaha Lokal
│
└── 🌐 Programmatic SEO Routes (Dinamis)
    ├── jasa-website-di-[lokasi]/                # Landing Page Per Kota/Kabupaten
    │   ├── +page.ts                              # Param loader lokasi (cth: /jasa-website-di-bandung)
    │   └── +page.svelte
    ├── potensi-digital-[provinsi]/              # Landing Page Per Provinsi
    │   ├── +page.ts                              # Param loader provinsi (cth: /potensi-digital-jawa-barat)
    │   └── +page.svelte
    └── jasa-website-[niche]-di-[lokasi]/        # Kombinasi Niche x Lokasi
        ├── +page.ts                              # Param loader matriks (cth: /jasa-website-umkm-di-surabaya)
        └── +page.svelte
```

---

## 🌐 Cara Kerja Programmatic SEO

1. **Parameter Rute ([lokasi], [provinsi], [niche])**:
   File `+page.ts` membaca parameter URL yang diminta pengguna atau bot mesin pencari, lalu melakukan pencarian data pencocokan dari berkas di `src/lib/data/`.

2. **Error 404 Fallback**:
   Jika `[lokasi]` atau `[niche]` tidak terdaftar di database berkas data, fungsi `error(404, 'Halaman tidak ditemukan')` dari `@sveltejs/kit` dipanggil untuk mencegah halaman kosong terindeks.

3. **SEO Dynamic Metadata**:
   Tag `<title>`, `<meta name="description">`, OpenGraph, dan Canonical URL dibuat dinamis sesuai dengan nama kota, provinsi, atau niche bisnis yang dikunjungi.

---

## 🗺️ Sitemap.xml Generator (`/sitemap.xml`)

Endpoint [`src/routes/sitemap.xml/+server.ts`](../src/routes/sitemap.xml/+server.ts) secara otomatis mengekstrak seluruh:
- Rute statis utama (`/`, `/harga`, `/portofolio`, `/blog`, dll.)
- Seluruh URL kota dari `location_pages.ts`
- Seluruh URL provinsi dari `provinsi_pages.ts`
- Matriks kombinasi rute niche x lokasi dari `niche_pages.ts`
- Seluruh slug artikel blog dari `blog_data.ts`

Setiap kali ada lokasi atau artikel baru yang ditambahkan di berkas data, URL tersebut langsung tersedia di `/sitemap.xml` tanpa perlu perubahan manual.

---

## 📊 Structured Data (JSON-LD Schemas)

Untuk mengoptimalkan tampilan hasil pencarian di Google (*Rich Snippets*), rute-rute aplikasi menyertakan tag JSON-LD:
- **Organization & WebSite Schema** di Homepage (`/`).
- **ProfessionalService & LocalBusiness Schema** di rute lokasi (`/jasa-website-di-[lokasi]`).
- **Article Schema** di rute blog detail (`/blog/[slug]`).
- **BreadcrumbList Schema** di seluruh halaman ber-breadcrumb.
- **FAQPage Schema** di halaman FAQ (`/faq`).
