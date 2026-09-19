export interface PricingPackage {
	id: string;
	name: string;
	tagline: string;
	price: string;
	renewalPrice?: string;
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
		id: 'terima-beres',
		name: 'Paket Website Artikel & CMS Sederhana',
		tagline: 'Platform publikasi berita & artikel digital yang simpel, profesional, dan mudah dikelola tanpa ribet teknis.',
		price: 'Rp 1.000.000',
		renewalPrice: 'Rp 800.000 / tahun',
		originalPrice: 'Rp 1.500.000',
		popular: true,
		badge: 'Terima Beres (All-in-One)',
		targetAudience: 'Penulis, Blogger, Media Informasi Lokal, Pesantren, Masjid, Desa & Branding Usaha',
		features: [
			'Sistem Manajemen Konten (CMS) Sederhana & Intuitif untuk Kelola Artikel',
			'Gratis Domain Resmi (.com / .id / .or.id / .desa.id / .my.id) 1 Tahun',
			'Gratis Cloud Hosting High-Speed NVMe SSD 1 Tahun',
			'Desain Layout Modern, Fast Loading & Mobile-Friendly 100%',
			'Keamanan SSL Security (HTTPS Encrypted) Gratis',
			'Form Kontak & Tombol Share Artikel ke WhatsApp / Sosmed',
			'Struktur Website Ramah SEO (Cepat Terindeks Google)',
			'Setup Terima Beres (Tinggal Siapkan Materi & Siap Rilis)',
			'Garansi Pemeliharaan & Perbaikan Error 1 Tahun Full',
			'Biaya Perpanjangan Tahun Depan Hanya Rp 800.000 / tahun'
		],
		ctaText: 'Pesan Website Artikel (Rp 1 Juta)',
		whatsappMessage: 'Halo Barizaloka, saya mau pesan Paket Website Artikel & CMS Sederhana Terima Beres (1 Juta, perpanjang 800rb/tahun).'
	}
];
