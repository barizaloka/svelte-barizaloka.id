export interface NicheInfo {
	slug: string;
	label: string;
	title: string;
	tagline: string;
	description: string;
	iconName: string;
	heroImage?: string;
	features: { title: string; desc: string; icon: string }[];
	benefits: string[];
	demoUrl?: string;
	priceStarting: string;
	relatedNiches: string[];
	faq: { q: string; a: string }[];
}

export const NICHE_PAGES: Record<string, NicheInfo> = {
	pesantren: {
		slug: 'pesantren',
		label: 'Pesantren',
		title: 'Jasa Pembuatan Website Pesantren & SIM Santri',
		tagline: 'Digitalisasi Pesantren Modern — Profil, Penerimaan Santri Baru (PSB), & Transparansi Informasi',
		description: 'Solusi pembuatan website pesantren profesional yang dirancang khusus untuk mempermudah pendaftaran santri baru (PSB Online), manajemen informasi akademik, infak/donasi, serta memperluas jangkauan dakwah pesantren secara digital.',
		iconName: 'GraduationCap',
		priceStarting: 'Rp 2.500.000',
		relatedNiches: ['masjid', 'desa', 'umkm'],
		features: [
			{
				title: 'Formulir PSB Online',
				desc: 'Pendaftaran Santri Baru otomatis dengan upload berkas, seleksi, dan notifikasi WhatsApp.',
				icon: 'UserPlus'
			},
			{
				title: 'Portofolio & Kajian Kitab',
				desc: 'Publikasi jadwal pengajian, profil Kyai & Asatidz, serta karya/artikel santri.',
				icon: 'BookOpen'
			},
			{
				title: 'SIM Akademik & SPP',
				desc: 'Integrasi cek tagihan bulanan santri dan riwayat pembayaran untuk wali santri.',
				icon: 'CreditCard'
			},
			{
				title: 'Donasi & Wakaf Digital',
				desc: 'Fasilitas QRIS dan transfer bank untuk penerimaan infak pembangunan dan beasiswa santri.',
				icon: 'HeartHandshake'
			}
		],
		benefits: [
			'Memudahkan wali santri dari luar daerah mendaftarkan putra-putrinya secara online',
			'Meningkatkan kepercayaan publik melalui transparansi profil dan kegiatan santri',
			'Tampilan mobile-friendly, cepat diakses walau dengan koneksi seluler hemat data',
			'Termasuk pelatihan kelola konten gratis untuk admin atau pengurus santri'
		],
		faq: [
			{
				q: 'Apakah website pesantren mudah dikelola oleh pengurus yang belum mahir komputer?',
				a: 'Sangat mudah! Kami menyediakah dashboard admin berbahasa Indonesia yang sangat intuitif serta buku petunjuk & video panduan.'
			},
			{
				q: 'Berapa lama proses pembuatan website pesantren?',
				a: 'Proses pembuatan memakan waktu sekitar 7 - 14 hari kerja tergantung kelengkapan materi seperti foto dan kurikulum.'
			}
		]
	},
	masjid: {
		slug: 'masjid',
		label: 'Masjid',
		title: 'Jasa Pembuatan Website Masjid & Digitalisasi DKM',
		tagline: 'Sistem Informasi Masjid Modern — Jadwal Sholat Otomatis, Laporan Kas Transparan, & QRIS Infaq',
		description: 'Website resmi masjid dan musholla untuk sarana transparansi keuangan DKM, publikasi jadwal sholat & khotib, kajian rutin, serta kemudahan berinfaq via digital QRIS.',
		iconName: 'Landmark',
		priceStarting: 'Rp 1.800.000',
		relatedNiches: ['pesantren', 'desa'],
		features: [
			{
				title: 'Jadwal Sholat & Imsakiyah Live',
				desc: 'Sinkronisasi otomatis jadwal sholat daerah dan countdown waktu menuju azan.',
				icon: 'Clock'
			},
			{
				title: 'Laporan Keuangan & Kas DKM',
				desc: 'Transparansi pemasukan & pengeluaran kas masjid yang dapat diakses jemaah kapan saja.',
				icon: 'PieChart'
			},
			{
				title: 'Perpustakaan Digital & Jadwal Kajian',
				desc: 'Publikasi poster kajian, profil penceramah, dan rekaman audio/video ceramah.',
				icon: 'Calendar'
			},
			{
				title: 'Infaq & Sedekah QRIS',
				desc: 'Integrasi kode QRIS resmi masjid untuk penerimaan sedekah subuh & donasi kurban.',
				icon: 'QrCode'
			}
		],
		benefits: [
			'Meningkatkan akuntabilitas dan kepercayaan jemaah terhadap transparansi dana DKM',
			'Jemaah selalu mendapat update jadwal khutbah Jumat dan kajian rutin',
			'Memudahkan jemaah luar kota atau perantau berinfaq ke masjid kampung halaman',
			'Dukungan tampilan display TV digital / Running Text (opsional)'
		],
		faq: [
			{
				q: 'Bisakah pengeluaran kas di-update setiap minggu setelah sholat Jumat?',
				a: 'Tentu, admin DKM dapat menginput laporan kas mingguan hanya dalam waktu 3 menit dari HP.'
			}
		]
	},
	desa: {
		slug: 'desa',
		label: 'Desa & Kelurahan',
		title: 'Jasa Pembuatan Website Desa Cyber & Portal Publik',
		tagline: 'Wujudkan Desa Digital Terdepan — Permohonan Surat Mandiri, Transparansi APBDes, & Potensi Lokal',
		description: 'Platform portal desa terpadu untuk percepatan layanan publik warga desa, publikasi transparansi anggaran APBDes, pameran produk UMKM warga, dan promosi wisata daerah.',
		iconName: 'Building2',
		priceStarting: 'Rp 3.000.000',
		relatedNiches: ['umkm', 'pesantren', 'masjid'],
		features: [
			{
				title: 'Layanan Surat Online Warga',
				desc: 'Permohonan surat pengantar RT/RW, SKTM, dan ketenagakerjaan dari smartphone warga.',
				icon: 'FileText'
			},
			{
				title: 'Transparansi APBDes & Infografis',
				desc: 'Visualisasi anggaran pembangunan desa secara rinci, akuntabel, dan sesuai regulasi Kemendagri.',
				icon: 'BarChart3'
			},
			{
				title: 'Lapak Lapak Desa (UMKM Warga)',
				desc: 'Katalog online produk kerajinan dan pertanian warga desa untuk memperluas pasar.',
				icon: 'ShoppingBag'
			},
			{
				title: 'Peta & Potensi Wisata Desa',
				desc: 'Informasi destinasi wisata, kebudayaan daerah, serta profil struktur pemerintahan desa.',
				icon: 'MapPin'
			}
		],
		benefits: [
			'Memenuhi standar Keterbukaan Informasi Publik (KIP) Pemerintah Desa',
			'Memangkas antrean di balai desa dengan pengajuan administrasi warga secara digital',
			'Mendorong pertumbuhan ekonomi warga desa melalui etalase UMKM desa',
			'Keamanan data tinggi serta domain resmi .desa.id / .go.id'
		],
		faq: [
			{
				q: 'Apakah membantu proses pengurusan domain resmi .desa.id?',
				a: 'Ya, kami membantu persiapan dokumen persyaratan dan pendaftaran domain .desa.id ke Kominfo sampai aktif.'
			}
		]
	},
	umkm: {
		slug: 'umkm',
		label: 'UMKM & Bisnis',
		title: 'Jasa Pembuatan Website UMKM & Katalog Produk',
		tagline: 'Tingkatkan Penjualan & Kredibilitas Bisnis Anda — Landing Page Konversi Tinggi & Checkout WhatsApp',
		description: 'Solusi pembuatan website bisnis dan landing page profesional untuk UMKM, toko lokal, dan pengusaha agar tampil meyakinkan di Google, menarik lebih banyak pembeli, dan otomatisasi pesanan ke WhatsApp.',
		iconName: 'Store',
		priceStarting: 'Rp 1.500.000',
		relatedNiches: ['sepeda-listrik', 'desa'],
		features: [
			{
				title: 'Katalog Produk Interaktif',
				desc: 'Tampilan galeri produk jernih dengan variasi harga, opsi warna, dan fitur filter kategoris.',
				icon: 'LayoutGrid'
			},
			{
				title: 'Order Direct to WhatsApp',
				desc: 'Tombol beli otomatis menyusun pesan format order lengkap beserta nama barang dan alamat.',
				icon: 'MessageSquare'
			},
			{
				title: 'SEO Lokal & Google Maps',
				desc: 'Optimasi kata kunci bisnis daerah agar toko Anda berada di peringkat teratas pencarian Google.',
				icon: 'Search'
			},
			{
				title: 'Fast Loading & Mobile Responsive',
				desc: 'Halaman terbuka kurang dari 1 detik di koneksi seluler untuk mencegah calon pembeli kabur.',
				icon: 'Zap'
			}
		],
		benefits: [
			'Membangun citra brand profesional yang jauh lebih dipercaya dibanding hanya media sosial',
			'Katalog berjalan 24 jam nonstop tanpa perlu sering kirim foto satu per satu di Chat',
			'Dapat dihubungkan dengan Google Ads & Meta Ads (TikTok/FB Ads) untuk promosi cepat',
			'Gratis konsultasi strategi konten dan branding awal'
		],
		faq: [
			{
				q: 'Saya belum punya logo dan foto produk bagus, apakah bisa dibantu?',
				a: 'Bisa! Kami memiliki tim kreatif untuk membantu perapihan foto produk dan desain logo dasar.'
			}
		]
	},
	'sepeda-listrik': {
		slug: 'sepeda-listrik',
		label: 'Toko Sepeda Listrik',
		title: 'Jasa Pembuatan Website Toko Sepeda & Motor Listrik',
		tagline: 'Showroom Digital Kendaraan Listrik — Spesifikasi Unit, Baterai, Simulasi Kredit, & Booking Test Drive',
		description: 'Website showroom interaktif khusus dealer, agen, dan toko sepeda/motor listrik untuk menyajikan spesifikasi kapasitas baterai, jarak tempuh, garansi resmi, serta fitur booking test drive.',
		iconName: 'Zap',
		priceStarting: 'Rp 2.000.000',
		relatedNiches: ['umkm'],
		features: [
			{
				title: 'Spesifikasi Baterai & Motor',
				desc: 'Visualisasi daya watt, baterai lithium/lead-acid, kecepatan maks, dan jarak tempuh km.',
				icon: 'BatteryCharging'
			},
			{
				title: 'Simulasi Kredit & Angsuran',
				desc: 'Kalkulator perkiraan cicilan bulanan untuk calon pembeli kendaraan listrik.',
				icon: 'Calculator'
			},
			{
				title: 'Booking Test Drive Online',
				desc: 'Form pendaftaran uji coba sepeda listrik langsung di showroom toko.',
				icon: 'Navigation'
			},
			{
				title: 'Katalog Sparepart & Garansi',
				desc: 'Informasi ketersediaan suku cadang, titik service center, dan klaim garansi.',
				icon: 'ShieldCheck'
			}
		],
		benefits: [
			'Menjawab pertanyaan teknis pelanggan (baterai, beban maks, garansi) secara otomatis',
			'Memudahkan calon pembeli membandingkan beberapa tipe sepeda listrik secara langsung',
			'Meningkatkan angka kunjungan ke toko fisik melalui fitur janji test drive',
			'Terhubung langsung dengan tim marketing dealer via WhatsApp'
		],
		faq: [
			{
				q: 'Apakah bisa untuk cabang toko lebih dari satu lokasi?',
				a: 'Bisa! Website dapat menampilkan daftar cabang showroom beserta nomor WhatsApp masing-masing sales.'
			}
		]
	}
};
