# ⚙️ 02. Instalasi & Konfigurasi

Dokumen ini berisi panduan lengkap untuk memasang (*install*), mengonfigurasi, menjalankan di lingkungan pengembangan (*development*), dan mempublikasikan (*deploy*) projek **Barizaloka.id**.

---

## 📋 Persyaratan Sistem (Prerequisites)

Pastikan lingkungan lokal Anda telah terinstal alat-alat berikut:

- **Node.js**: v18.13.0 atau yang lebih baru (Disarankan Node.js v20 LTS).
- **Package Manager**: `npm` (bawaan Node.js), `bun`, atau `pnpm`.
- **Git**: Untuk kontrol versi kode.

Cek versi Node.js dan NPM Anda di terminal:
```bash
node -v
npm -v
```

---

## 🚀 Langkah Instalasi

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/barizaloka/svelte-barizaloka.id.git
   cd svelte-barizaloka.id
   ```

2. **Install Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan (Dev Server)**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173` (atau port berikutnya yang tersedia).

---

## 📜 Perintah NPM (Scripts)

Seluruh perintah utama dikelola melalui berkas `package.json`:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan Vite dev server dengan fitur Hot Module Replacement (HMR). |
| `npm run build` | Menompilasi aplikasi untuk produksi menggunakan `@sveltejs/adapter-vercel`. |
| `npm run preview` | Menjalankan preview lokal dari hasil kompilasi folder `.svelte-kit/output`. |
| `npm run check` | Mengakses TypeScript type checker & Svelte template check (`svelte-check`). |
| `npm run check:watch` | Menjalankan `svelte-check` secara kontinu setiap kali ada perubahan file. |
| `npm run lint` | Memeriksa kepatuhan gaya kode dengan ESLint & Prettier. |
| `npm run format` | Memperbaiki format kode secara otomatis menggunakan Prettier. |

---

## 🌐 Konfigurasi Deployment (Vercel)

Projek ini mengadopsi `@sveltejs/adapter-vercel` di [`svelte.config.js`](../svelte.config.js). 

### Langkah Deploy ke Vercel:

1. **Menghubungkan ke Vercel CLI**:
   ```bash
   npx vercel
   ```
2. **Atau melalui Vercel Dashboard**:
   - Impor repositori GitHub ke akun Vercel.
   - Vercel akan secara otomatis mendeteksi framework **SvelteKit**.
   - Build Command: `npm run build`
   - Output Directory: `.svelte-kit` (otomatis ditangani adapter).

3. **Pengaturan Domain**:
   - Arahkan domain utama `barizaloka.id` ke Server Name / CNAME Vercel di DNS Manager Anda (misalnya Cloudflare atau Registrar Domain).
