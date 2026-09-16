# 🌙 03. Sistem Tema & Manajemen Logo

Dokumen ini menjelaskan implementasi teknis dari sistem tema **Dark Mode / Light Mode** serta pengelolaan komponen **Logo Adaptif** di projek Barizaloka.id.

---

## 🌓 Arsitektur Sistem Tema (Theme Store)

Sistem tema diatur secara terpusat menggunakan fitur **Svelte 5 Runes** di berkas [`src/lib/theme.svelte.ts`](../src/lib/theme.svelte.ts).

```typescript
// Svelte 5 Rune State Management
type Theme = 'light' | 'dark';

class ThemeState {
    current = $state<Theme>('light');

    init() {
        if (typeof window !== 'undefined') {
            const isDark = document.documentElement.classList.contains('dark');
            this.current = isDark ? 'dark' : 'light';
        }
    }

    setTheme(theme: Theme) {
        this.current = theme;
        if (typeof window !== 'undefined') {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }

    toggle() {
        this.setTheme(this.current === 'dark' ? 'light' : 'dark');
    }
}

export const themeState = new ThemeState();
```

---

## ⚡ Pencegahan Kedipan Layar (Anti-FOUC)

Untuk mencegah efek *Flash of Unstyled Content* (FOUC) di mana layar berkedip putih sebelum tema gelap diterapkan saat halaman dimuat, skrip eksekusi dini (*inline head script*) ditambahkan di [`src/app.html`](../src/app.html):

```html
<script>
  (function () {
    try {
      var savedTheme = localStorage.getItem('theme');
      var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && supportDarkMode)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
</script>
```

---

## 🎨 Konfigurasi Tailwind CSS v4 Dark Variant

Di Tailwind CSS v4, varian kelas berbasis `.dark` pada tag `<html>` dikonfigurasi pada file [`src/routes/layout.css`](../src/routes/layout.css):

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

Dengan konfigurasi ini, kelas Tailwind seperti `dark:bg-slate-900` atau `dark:text-white` akan secara otomatis aktif saat elemen `<html>` memiliki class `.dark`.

---

## 🖼️ Komponen Logo Adaptif (`Logo.svelte`)

Komponen [`src/lib/components/Logo.svelte`](../src/lib/components/Logo.svelte) menangani tampilan logo projek baik untuk mode terang maupun gelap.

### Cara Kerja:
- Menggunakan 2 berkas SVG statis: `/static/logo-light.svg` dan `/static/logo-dark.svg`.
- Menampilkan ikon SVG resmi Barizaloka dan teks bermerek "Barizaloka.id" dengan warna yang menyesuaikan tema.
- Mengubah warna gradien subteks (`.id`) dari warna emerald ke aksen terang sesuai mode aktif.

### Contoh Penggunaan:
```svelte
<script>
  import Logo from '$lib/components/Logo.svelte';
</script>

<!-- Mengikuti tema aktif aplikasi secara otomatis -->
<Logo size="md" />

<!-- Atau memaksa varian tertentu -->
<Logo variant="dark" size="lg" />
```

---

## 🔘 Komponen Sakelar Tema (`ThemeToggle.svelte`)

Komponen [`src/lib/components/ThemeToggle.svelte`](../src/lib/components/ThemeToggle.svelte) menyediakan tombol interaktif berbasis ikon Matahari (*Sun*) dan Bulan (*Moon*) dari `lucide-svelte`.

- Terintegrasi langsung dengan `themeState.toggle()`.
- Menyediakan indikator visual transisi dan accessibility attribute (`aria-label="Toggle theme"`).
- Ditempatkan di bar navigasi utama (`Navbar.svelte`) dan bagian footer jika diperlukan.
