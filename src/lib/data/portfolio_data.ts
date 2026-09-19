export interface PortfolioProject {
	id: string;
	title: string;
	category: 'Pesantren' | 'Masjid' | 'Desa' | 'UMKM' | 'Sepeda Listrik' | 'Perusahaan';
	categorySlug: string;
	client: string;
	location: string;
	year: string;
	summary: string;
	description: string;
	image: string;
	url?: string;
	features: string[];
	results: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
	{
		id: 'pesantren-al-hidayah',
		title: 'Website Resmi & Portal PSB Online PP Al-Hidayah',
		category: 'Pesantren',
		categorySlug: 'pesantren',
		client: 'Pondok Pesantren Al-Hidayah',
		location: 'Rembang, Jawa Tengah',
		year: '2026',
		summary:
			'Sistem informasi pesantren modern lengkap dengan pendaftaran santri baru, pengajian live stream, dan cek tagihan SPP.',
		description:
			'Pondok Pesantren Al-Hidayah membutuhkan peremajaan digital untuk memfasilitasi pendaftaran santri luar provinsi. Barizaloka merancang website modern yang ringan di HP dengan sistem pendaftaran online terintegrasi notifikasi WhatsApp.',
		image:
			'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
		url: 'https://al-hidayah.example.org',
		features: [
			'Pendaftaran Santri Baru (PSB)',
			'Cek SPP & Infaq Santri',
			'Kajian Kitab & Audio Mp3',
			'Galeri Kegiatan Santri'
		],
		results:
			'Peningkatan pendaftaran santri baru hingga +140% pada gelombang pertama dan transparansi informasi bagi 800+ wali santri.'
	},
	{
		id: 'masjid-agung-al-barokah',
		title: 'Portal Digital & Laporan Kas Masjid Al-Barokah',
		category: 'Masjid',
		categorySlug: 'masjid',
		client: 'DKM Masjid Al-Barokah',
		location: 'Pati, Jawa Tengah',
		year: '2025',
		summary:
			'Website masjid terpadu dengan transparansi keuangan DKM mingguan, jadwal sholat otomatis, dan QRIS infaq.',
		description:
			'DKM Masjid Al-Barokah berkomitmen menghadirkan pengelolaan keuangan yang terbuka bagi jemaah. Website ini menyajikan grafik kas bulanan dan jadwal khutbah Jumat secara akurat.',
		image:
			'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
		url: 'https://masjidalbarokah.example.org',
		features: [
			'Infografis Kas DKM',
			'Jadwal Sholat Live API',
			'Integrasi QRIS Infaq',
			'Agenda Kajian Subuh'
		],
		results:
			'Penghimpunan infaq digital meningkat 3x lipat serta apresiasi tinggi jemaah atas keterbukaan dana pembangunan.'
	},
	{
		id: 'portal-desa-cyber',
		title: 'Portal Desa Digital & Layanan Mandiri Kelurahan Cyber',
		category: 'Desa',
		categorySlug: 'desa',
		client: 'Pemerintah Desa Sumberrahayu',
		location: 'Rembang, Jawa Tengah',
		year: '2026',
		summary:
			'Website desa terintegrasi permohonan surat online warga, infografis APBDes, dan etalase lapak UMKM warga.',
		description:
			'Sebagai bagian dari inisiatif Smart Village, Desa Sumberrahayu menggandeng Barizaloka untuk membangun portal publik desa yang ramah lansia dan generasi muda.',
		image:
			'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
		url: 'https://sumberrahayu.desa.id',
		features: [
			'Layanan Surat Online',
			'Transparansi APBDes',
			'Etalase Lapak UMKM Desa',
			'Peta Potensi Wisata'
		],
		results:
			'Pengurusan administrasi surat warga 70% lebih cepat dan 45 UMKM desa terdaftar di Google Search.'
	},
	{
		id: 'batik-pesisir-rembang',
		title: 'Katalog E-Commerce Batik Tulis Pesisir Rembang',
		category: 'UMKM',
		categorySlug: 'umkm',
		client: 'Batik Tulis Pesisir',
		location: 'Rembang, Jawa Tengah',
		year: '2025',
		summary:
			'Landing page ekspor & katalog toko online dengan fitur order cepat via WhatsApp dan katalog varian motif.',
		description:
			'Batik Tulis Pesisir Rembang ingin memperluas jangkauan pasar hingga Jabodetabek dan mancanegara. Kami merancang e-catalog elegan dengan foto detail kain batik hand-made.',
		image:
			'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
		url: 'https://batikpesisir.example.id',
		features: [
			'Direct WhatsApp Order',
			'Katalog Varian Motif',
			'Filter Rentang Harga',
			'Multi-Language Ready'
		],
		results: 'Menerima rata-rata 35+ pesanan batik per minggu dari seluruh Indonesia.'
	},
	{
		id: 'ebike-central-store',
		title: 'Showroom Digital & Dealer Sepeda Listrik E-Bike Central',
		category: 'Sepeda Listrik',
		categorySlug: 'sepeda-listrik',
		client: 'E-Bike Central Dealer',
		location: 'Kudus, Jawa Tengah',
		year: '2026',
		summary:
			'Website showroom sepeda & motor listrik dengan kalkulator simulasi kredit dan booking janji test drive.',
		description:
			'Toko E-Bike Central membutuhkan platform untuk memamerkan 20+ model sepeda listrik beserta spesifikasi baterai dan estimasi angsuran bulanan.',
		image:
			'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
		url: 'https://ebikecentral.example.com',
		features: [
			'Kalkulator Simulasi Kredit',
			'Spesifikasi Baterai & Motor',
			'Form Booking Test Drive',
			'Peta Outlet Showroom'
		],
		results: 'Meningkatkan booking test drive sebesar 85% dan konversi penjualan unit di toko.'
	}
];
