export interface PricingPackage {
	id: string;
	name: string;
	tagline: string;
	price: string;
	originalPrice?: string;
	badge?: string;
	popular?: boolean;
	targetAudience: string;
	features: string[];
	notIncluded?: string[];
	ctaText: string;
	whatsappMessage: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
	{
		id: 'starter',
		name: 'Paket Starter / Landing Page',
		tagline: 'Ideal untuk UMKM lokal, profil produk tunggal, atau campaign promosi cepat.',
		price: 'Rp 1.500.000',
		originalPrice: 'Rp 2.000.000',
		badge: 'Hemat 25%',
		targetAudience: 'Toko Lokal, Sales Sepeda Listrik, Profil Usaha Baru',
		features: [
			'Desain Landing Page 1 Halaman Premium',
			'Gratis Domain (.com / .id / .my.id) 1 Tahun',
			'Gratis Cloud Hosting High Speed 1 Tahun',
			'Tombol Direct Order WhatsApp Auto-fill',
			'Form Kontak & Integrasi Google Maps',
			'Mobile & Tablet Responsive 100%',
			'SEO Dasar Search Engine Indexing',
			'Revisi Hingga 3 Kali'
		],
		ctaText: 'Pesan Paket Starter',
		whatsappMessage: 'Halo Barizaloka, saya tertarik memesan Paket Starter / Landing Page.'
	},
	{
		id: 'business',
		name: 'Paket Standard Bisnis / Institusi',
		tagline: 'Solusi lengkap untuk Masjid, UMKM berkembang, & profil lembaga menengah.',
		price: 'Rp 2.500.000',
		originalPrice: 'Rp 3.200.000',
		popular: true,
		badge: 'Paling Populer',
		targetAudience: 'DKM Masjid, UMKM Katalog Banyak Produk, Sekolah, Instansi',
		features: [
			'Halaman Multi-Page (Hingga 7 Halaman)',
			'Gratis Domain (.com / .id / .or.id) 1 Tahun',
			'Gratis SSL Security & NVMe SSD Hosting 1 Tahun',
			'Sistem Katalog Produk / Galeri Kegiatan',
			'Laporan Kas / Keuangan (khusus Masjid/Yayasan)',
			'Dashboard Admin Kelola Konten Berbahasa Indonesia',
			'Panduan Video & Buku Petunjuk Penggunaan',
			'Garansi Perbaikan & Maintenance 1 Tahun'
		],
		ctaText: 'Pesan Paket Business',
		whatsappMessage: 'Halo Barizaloka, saya tertarik memesan Paket Standard Bisnis / Institusi.'
	},
	{
		id: 'enterprise',
		name: 'Paket Custom SIM Pesantren & Desa',
		tagline: 'Sistem informasi terpadu skala besar untuk Pesantren, Desa Digital, & Dealer Besar.',
		price: 'Rp 4.000.000+',
		originalPrice: 'Rp 5.500.000',
		badge: 'Custom Complete',
		targetAudience: 'Pondok Pesantren, Pemerintah Desa/Kelurahan, Dealer Sepeda Listrik Multi-Cabang',
		features: [
			'Struktur Fitur Kustom Sesuai Kebutuhan',
			'Modul PSB Online / Layanan Surat Mandiri Desa',
			'Pendaftaran Domain Resmi (.desa.id / .ac.id / .or.id)',
			'Integrasi QRIS Donasi / Payment Gateway',
			'Optimasi SEO Lokal & Programmatic Niche SEO',
			'Pelatihan Admin Langsung (On-site / Zoom)',
			'Dukungan Teknis Prioritas 24/7',
			'Garansi Sistem & Maintenance 1 Tahun Full'
		],
		ctaText: 'Konsultasi Custom System',
		whatsappMessage: 'Halo Barizaloka, saya ingin berkonsultasi untuk Paket Custom SIM Pesantren / Desa.'
	}
];
