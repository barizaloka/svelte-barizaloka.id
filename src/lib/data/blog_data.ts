export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	category: string;
	categorySlug: string;
	author: {
		name: string;
		avatar: string;
		role: string;
	};
	publishedAt: string;
	readTime: string;
	image: string;
	tags: string[];
	metaTitle?: string;
	metaDescription?: string;
}

export const BLOG_POSTS: BlogPost[] = [
	{
		id: '1',
		slug: 'panduan-mengembangkan-website-pesantren',
		title: 'Panduan Mengembangkan Website Pesantren Profesional & Modern',
		excerpt: 'Langkah-langkah strategis membangun portal digital pesantren untuk efisiensi PSB Online, publikasi pengajian, dan transparansi donasi.',
		content: `
<p>Di era serba digital saat ini, pondok pesantren tidak lagi hanya menjadi tempat belajar tatap muka, melainkan juga pusat syiar islam yang perlu memiliki jangkauan luas di dunia maya. Website resmi pesantren adalah wajah digital yang menjadi rujukan utama bagi calon wali santri, alumni, maupun masyarakat umum.</p>

<h3>1. Mengapa Pesantren Membutuhkan Website Resmi?</h3>
<p>Banyak calon wali santri dari luar daerah atau luar pulau yang kesulitan mendapatkan informasi akurat mengenai kurikulum, fasilitas, dan biaya pendaftaran pesantren jika hanya mengandalkan kabar dari mulut ke mulut. Dengan website resmi, pesantren dapat:</p>
<ul>
  <li>Menampilkan profil pendiri, asatidz, dan silsilah keilmuan secara otentik.</li>
  <li>Menyediakan pendaftaran santri baru (PSB) secara online tanpa batasan geografis.</li>
  <li>Memudahkan pengurus mengelola pengumuman dan jadwal kegiatan santri.</li>
  <li>Menerima infak, sedekah, dan wakaf pembangunan secara transparan via payment gateway / QRIS.</li>
</ul>

<h3>2. Fitur-Fitur Wajib di Website Pesantren Modern</h3>
<p>Agar website berfungsi maksimal, beberapa modul penting harus tersedia:</p>
<ul>
  <li><strong>Formulir PSB Online:</strong> Calon santri mengisi data, mengunggah ijazah/KK, dan memilih gelombang tes secara mandiri.</li>
  <li><strong>Portal Informasi SPP / Syahriah:</strong> Wali santri dapat mengecek riwayat pembayaran bulanan secara transparan.</li>
  <li><strong>Galeri Media & Kajian:</strong> Dokumentasi video/audio pengajian kitab kuning yang diampu oleh Pengasuh Pesantren.</li>
</ul>

<h3>3. Kesimpulan & Rekomendasi</h3>
<p>Digitalisasi pesantren bukan berarti mengurangi nilai keberkahan dan kedisiplinan pesantren, melainkan memperluas kebermanfaatan dakwah ke khalayak yang lebih luas. Tim Barizaloka siap mendampingi pesantren Anda dari tahap perencanaan hingga pelatihan pengelola konten.</p>
`,
		category: 'Edukasi & Pesantren',
		categorySlug: 'pesantren',
		author: {
			name: 'Ahmad Bariza',
			avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
			role: 'Lead Architect Barizaloka'
		},
		publishedAt: '2026-08-27',
		readTime: '5 menit baca',
		image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
		tags: ['Pesantren', 'PSB Online', 'Website Islami', 'Rembang'],
		metaTitle: 'Panduan Website Pesantren | Barizaloka',
		metaDescription: 'Artikel panduan pembuatan website pesantren profesional dan modern.'
	},
	{
		id: '2',
		slug: 'strategi-digitalisasi-desa-smart-village',
		title: 'Strategi Digitalisasi Desa Menuju Smart Village Berbasis KIP',
		excerpt: 'Cara praktis pemerintah desa menerapkan layanan permohonan surat digital dan transparansi anggaran APBDes.',
		content: `
<p>Pemerintah Desa kini dituntut untuk makin transparan dan responsif dalam memberikan pelayanan publik kepada warga. Konsep Smart Village tidak harus mahal, melainkan berfokus pada kemudahan akses layanan dasar warga.</p>

<h3>1. Transparansi APBDes Sebagai Wujud KIP</h3>
<p>Melalui website resmi <code>.desa.id</code>, pemerintah desa wajib mengunggah infografis APBDes setiap tahunnya. Hal ini terbukti mampu meningkatkan rasa percaya warga terhadap pembangunan desa.</p>

<h3>2. Permohonan Surat Online dari HP</h3>
<p>Warga yang bekerja di luar kota atau petani yang sibuk di sawah dapat mengajukan pengantar surat keterangan lewat HP tanpa perlu menunggu lama di balai desa.</p>
`,
		category: 'Pemerintahan Desa',
		categorySlug: 'desa',
		author: {
			name: 'Rian Baricode',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
			role: 'Senior Developer'
		},
		publishedAt: '2026-08-15',
		readTime: '4 menit baca',
		image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
		tags: ['Smart Village', 'Desa Digital', 'APBDes', 'Layanan Surat'],
		metaTitle: 'Panduan Digitalisasi Desa Smart Village | Barizaloka',
		metaDescription: 'Strategi praktis penerapan desa digital dan permohonan surat online warga.'
	},
	{
		id: '3',
		slug: 'cara-umkm-naik-kelas-dengan-website-katalog',
		title: 'Cara UMKM Naik Kelas Dengan Website Katalog & Direct WhatsApp Order',
		excerpt: 'Mengapa memajang produk di media sosial saja tidak cukup, dan bagaimana website meningkatkan omset UMKM hingga 300%.',
		content: `
<p>Banyak pemilik UMKM beranggapan bahwa memiliki akun Instagram atau TikTok sudah cukup untuk berjualan. Padahal, algoritma media sosial terus berubah dan calon pembeli sering kali enggan mencari daftar harga yang berserakan di caption.</p>

<h3>1. Website sebagai Rumah Sendiri</h3>
<p>Di website sendiri, Anda memegang kendali penuh. Tidak ada iklan kompetitor yang tiba-tiba muncul di samping produk Anda.</p>

<h3>2. Otomatisasi Format Order WhatsApp</h3>
<p>Dengan tombol Checkout WhatsApp, pembeli langsung mengirimkan pesan berisi item yang dibeli, jumlah, dan alamat pengiriman tanpa Anda perlu bertanya berulang kali.</p>
`,
		category: 'Bisnis & UMKM',
		categorySlug: 'umkm',
		author: {
			name: 'Siti Rahma',
			avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
			role: 'Digital Strategist'
		},
		publishedAt: '2026-07-30',
		readTime: '3 menit baca',
		image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
		tags: ['UMKM', 'Katalog Produk', 'WhatsApp Order', 'Branding'],
		metaTitle: 'Website Katalog UMKM Naik Kelas | Barizaloka',
		metaDescription: 'Panduan membuat website katalog bisnis untuk tingkatkan omset UMKM.'
	}
];
