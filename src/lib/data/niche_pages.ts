export interface RetailPackage {
	name: string;
	price: string;
	renewalPrice?: string;
	description?: string;
	features: string[];
	demoUrl?: string;
	isPopular?: boolean;
}

export interface CustomSolution {
	title: string;
	description: string;
	customFeatures: string[];
}

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
	retailPackages: RetailPackage[];
	customSolution: CustomSolution;
	relatedNiches: string[];
	faq: { q: string; a: string }[];
}

export const NICHE_PAGES: Record<string, NicheInfo> = {
	pesantren: {
		slug: 'pesantren',
		label: 'Pesantren',
		title: 'Jasa Pembuatan Website Artikel & Informasi Pesantren',
		tagline: 'Media Publikasi Digital Pesantren — CMS Artikel Berita, Profile Lembaga, & Jadwal Pengajian',
		description: 'Platform website artikel dan berita pesantren yang dirancang simpel agar pengurus dapat mengunggah artikel kajian, pengumuman kelembagaan, serta dokumentasi kegiatan pesantren dengan mudah.',
		iconName: 'GraduationCap',
		priceStarting: 'Rp 1.000.000',
		retailPackages: [
			{
				name: 'Paket Website Artikel Pesantren',
				price: 'Rp 1.000.000',
				renewalPrice: 'Rp 800.000 / tahun',
				isPopular: true,
				description: 'Website artikel & berita CMS sederhana terima beres untuk mem publikasikan profil dan dakwah pesantren.',
				features: [
					'CMS Artikel & Berita Kegiatan Pesantren Sederhana',
					'Publikasi Jadwal Pengajian & Profil Lembaga',
					'Tampilan Mobile Responsive & Sangat Cepat Diakses',
					'Gratis Domain (.com / .id / .ponpes.id) & Hosting NVMe 1 Tahun',
					'Penginputan Konten Perdana Sampai Website Siap Rilis',
					'Biaya Perpanjangan Tahun Depan Cukup Rp 800.000 / tahun'
				],
				demoUrl: 'https://demo.barizaloka.id/pesantren-basic'
			}
		],
		customSolution: {
			title: 'Butuh Fitur Tambahan & Sistem Khusus?',
			description: 'Dibutuhkan fitur kustom seperti pendaftaran santri baru (PSB), sistem SPP, atau portal alumni?',
			customFeatures: [
				'Modul Formulir Pendaftaran Santri Baru (PSB Online)',
				'Sistem Informasi Akademik & Portal Wali Santri',
				'Integrasi Donasi & Wakaf Digital Payment Gateway'
			]
		},
		relatedNiches: ['masjid', 'desa', 'umkm'],
		features: [
			{
				title: 'CMS Artikel Sederhana',
				desc: 'Kemudahan mengolah berita kegiatan dan artikel dakwah pesantren secara mandiri.',
				icon: 'BookOpen'
			},
			{
				title: 'Profil & Visi Misi',
				desc: 'Menampilkan sejarah, jajaran pengasuh, serta sarana prasarana pesantren secara profesional.',
				icon: 'GraduationCap'
			},
			{
				title: 'Desain Fast Loading',
				desc: 'Halaman terbuka cepat walau diakses menggunakan jaringan seluler hemat data.',
				icon: 'Zap'
			},
			{
				title: 'Share Artikel WhatsApp',
				desc: 'Kemudahan membagikan kajian dan pengumuman pesantren ke grup WhatsApp jamaah.',
				icon: 'MessageSquare'
			}
		],
		benefits: [
			'Memudahkan wali santri dan masyarakat mengakses kabar terbaru kegiatan pesantren',
			'Meningkatkan kredibilitas pesantren di mesin pencarian Google',
			'Dashboard pengelola artikel yang ramah pengguna, bahkan untuk pengurus awam',
			'Biaya perpanjangan tahunan yang sangat terjangkau tanpa biaya tersembunyi'
		],
		faq: [
			{
				q: 'Apakah pengurus yang belum paham pemprograman bisa mengisi artikel?',
				a: 'Sangat bisa! CMS artikel kami dirancang simpel seperti mengetik di aplikasi pesan. Kami juga memberikan panduan penggunaan.'
			}
		]
	},
	masjid: {
		slug: 'masjid',
		label: 'Masjid',
		title: 'Jasa Pembuatan Website Artikel & Informasi Masjid',
		tagline: 'Website Media Dakwah Masjid — CMS Artikel Kajian, Jadwal Sholat, & Informasi DKM',
		description: 'Solusi website artikel dan informasi masjid sederhana untuk sarana transparansi DKM, artikel khutbah/kajian, serta jadwal sholat terintegrasi.',
		iconName: 'Landmark',
		priceStarting: 'Rp 1.000.000',
		retailPackages: [
			{
				name: 'Paket Website Artikel Masjid',
				price: 'Rp 1.000.000',
				renewalPrice: 'Rp 800.000 / tahun',
				isPopular: true,
				description: 'Website artikel & berita masjid terima beres lengkap dengan jadwal sholat & informasi DKM.',
				features: [
					'CMS Artikel Kajian & Informasi DKM Sederhana',
					'Integrasi Jadwal Sholat Otomatis Sesuai Wilayah',
					'Halaman Laporan Kas & Informasi Infaq/Sedekah',
					'Gratis Domain Resmi & High-Speed Cloud Hosting 1 Tahun',
					'Setup Terima Beres & Pendampingan Admin Gratis',
					'Biaya Perpanjangan Tahun Depan Cukup Rp 800.000 / tahun'
				],
				demoUrl: 'https://demo.barizaloka.id/masjid-basic'
			}
		],
		customSolution: {
			title: 'Fitur Khusus Digitalisasi Masjid',
			description: 'Membutuhkan tampilan display TV masjid digital atau sistem inventori?',
			customFeatures: [
				'Web Display TV Digital Masjid (Countdown Iqomah)',
				'Sistem Manajemen Event & Booking Aula',
				'WhatsApp Gateway Broadcast Jamaah'
			]
		},
		relatedNiches: ['pesantren', 'desa'],
		features: [
			{
				title: 'CMS Ringkasan Kajian',
				desc: 'Publikasi artikel tausiyah, jadwal khutbah Jumat, dan artikel keislaman.',
				icon: 'Calendar'
			},
			{
				title: 'Jadwal Sholat Live',
				desc: 'Penyesuaian waktu sholat otomatis sesuai lokasi kota/kabupaten masjid.',
				icon: 'Clock'
			},
			{
				title: 'Informasi Kas DKM',
				desc: 'Halaman transparansi pengumuman keuangan kas masjid untuk jemaah.',
				icon: 'PieChart'
			},
			{
				title: 'QRIS Donasi Infaq',
				desc: 'Tampilan kode QRIS resmi untuk memudahkan sedekah digital jamaah.',
				icon: 'QrCode'
			}
		],
		benefits: [
			'Memudahkan jemaah membaca ringkasan materi kajian dan khutbah Jumat',
			'Transparansi informasi kegiatan dan laporan DKM masjid',
			'Website siap pakai tanpa perlu konfigurasi teknis yang rumit',
			'Garansi perbaikan bug dan pendampingan kelola konten'
		],
		faq: [
			{
				q: 'Bagaimana cara memposting jadwal pengajian baru?',
				a: 'Anda cukup login ke dashboard CMS sederhana, isi judul kajian dan pemateri, lalu klik publikasikan.'
			}
		]
	},
	desa: {
		slug: 'desa',
		label: 'Desa & Kelurahan',
		title: 'Jasa Pembuatan Website Artikel & Kabar Desa',
		tagline: 'Portal Informasi & Berita Desa Digital — CMS Artikel Publikasi, Transparansi, & Potensi Daerah',
		description: 'Website artikel dan kabar desa digital sederhana untuk menyajikan pengumuman pemerintah desa, berita kegiatan warga, serta dokumentasi pembangunan.',
		iconName: 'Building2',
		priceStarting: 'Rp 1.000.000',
		retailPackages: [
			{
				name: 'Paket Website Artikel Desa',
				price: 'Rp 1.000.000',
				renewalPrice: 'Rp 800.000 / tahun',
				isPopular: true,
				description: 'Website publikasi artikel & portal informasi desa sederhana terima beres.',
				features: [
					'CMS Artikel Berita & Pengumuman Desa Sederhana',
					'Profil Pemerintahan, Struktur Desa & Peta Wilayah',
					'Halaman Publikasi Infografis Transparansi Informasi',
					'Bantuan Pengurusan Domain .desa.id & Hosting 1 Tahun',
					'Keamanan Terjamin & Garansi Maintenance 1 Tahun',
					'Biaya Perpanjangan Tahun Depan Cukup Rp 800.000 / tahun'
				],
				demoUrl: 'https://demo.barizaloka.id/desa-basic'
			}
		],
		customSolution: {
			title: 'Pengembangan Aplikasi Desa Mandiri',
			description: 'Dibutuhkan fitur surat online mandiri warga atau peta GIS kependudukan?',
			customFeatures: [
				'Layanan Permohonan Surat Online Mandiri Warga',
				'Peta GIS Interaktif Potensi & Wilayah Desa',
				'Sistem Tracking Pengaduan Masyarakat'
			]
		},
		relatedNiches: ['umkm', 'pesantren', 'masjid'],
		features: [
			{
				title: 'CMS Kabar Desa',
				desc: 'Publikasi artikel rilis berita pembangunan dan kegiatan warga desa.',
				icon: 'FileText'
			},
			{
				title: 'Profil Organisasi Desa',
				desc: 'Menampilkan jajaran perangkat desa, lembaga kemasyarakatan, dan peta lokasi.',
				icon: 'Building2'
			},
			{
				title: 'Transparansi Informasi',
				desc: 'Unggah infografis APBDes dan laporan pertanggungjawaban publik.',
				icon: 'BarChart3'
			},
			{
				title: 'Domain .desa.id',
				desc: 'Pendampingan verifikasi domain resmi pemerintah desa hingga aktif.',
				icon: 'ShieldCheck'
			}
		],
		benefits: [
			'Perangkat desa dapat mengunggah artikel pengumuman dengan mudah dari smartphone',
			'Meningkatkan transparansi publik sesuai standar keterbukaan informasi',
			'Gratis konsultasi teknis dan pemeliharaan server tahunan',
			'Perpanjangan terjangkau hanya 800 ribu per tahun'
		],
		faq: [
			{
				q: 'Apakah bisa dibantu mendaftarkan domain resmi .desa.id?',
				a: 'Tentu! Kami bantu penyiapan berkas SK dan pendaftaran domain resmi desa ke Kominfo.'
			}
		]
	},
	umkm: {
		slug: 'umkm',
		label: 'UMKM & Bisnis',
		title: 'Jasa Pembuatan Website Artikel & Katalog Bisnis',
		tagline: 'Tingkatkan Penjualan & SEO Bisnis Anda — CMS Artikel Edukasi Produk & Direct Order WhatsApp',
		description: 'Website artikel dan blog usaha sederhana untuk memperluas jangkauan pembeli di Google melalui konten edukasi produk serta tombol pemesanan langsung ke WhatsApp.',
		iconName: 'Store',
		priceStarting: 'Rp 1.000.000',
		retailPackages: [
			{
				name: 'Paket Website Artikel UMKM',
				price: 'Rp 1.000.000',
				renewalPrice: 'Rp 800.000 / tahun',
				isPopular: true,
				description: 'Website artikel & katalog usaha sederhana terima beres untuk mendatangkan pelanggan dari Google.',
				features: [
					'CMS Artikel Edukasi Produk & Blog Bisnis Sederhana',
					'Galeri Katalog Usaha & Tombol Order WhatsApp',
					'Optimasi SEO Artikel Agar Mudah Ditemukan di Google',
					'Gratis Domain (.com / .id) & High-Speed Hosting 1 Tahun',
					'Setup Terima Beres Lengkap Dengan Garansi Error',
					'Biaya Perpanjangan Tahun Depan Cukup Rp 800.000 / tahun'
				],
				demoUrl: 'https://demo.barizaloka.id/umkm-landing'
			}
		],
		customSolution: {
			title: 'Fitur E-Commerce & Web App Custom',
			description: 'Membutuhkan toko online dengan shopping cart otomatis dan payment gateway?',
			customFeatures: [
				'Toko Online Payment Gateway & Otomatisasi Ongkir',
				'Sistem Keanggotaan Member / Reseller Point',
				'Integrasi Inventori Stok & Laporan Penjualan'
			]
		},
		relatedNiches: ['sepeda-listrik', 'desa'],
		features: [
			{
				title: 'Blog Artikel SEO',
				desc: 'Menulis artikel edukasi bisnis untuk mendatangkan pengunjung organik dari pencarian Google.',
				icon: 'Search'
			},
			{
				title: 'Katalog Usaha Simpel',
				desc: 'Menampilkan foto produk unggulan, daftar harga, dan keunggulan jasa Anda.',
				icon: 'Store'
			},
			{
				title: 'Order via WhatsApp',
				desc: 'Tombol beli otomatis yang terhubung ke nomor WhatsApp penjual.',
				icon: 'MessageSquare'
			},
			{
				title: 'Tampilan Fast Loading',
				desc: 'Mengoptimalkan kecepatan baca pengunjung di seluruh tipe smartphone.',
				icon: 'Zap'
			}
		],
		benefits: [
			'Meningkatkan kepercayaan calon konsumen dibanding hanya berjualan di media sosial',
			'Artikel bisnis bekerja 24 jam nonstop sebagai tim pemasaran digital Anda',
			'Mudah dioperasikan untuk mengupdate artikel atau produk promo terbaru',
			'Investasi digital hemat terima beres hanya 1 Juta Rupiah'
		],
		faq: [
			{
				q: 'Apakah penulisan artikel pertama dibantu?',
				a: 'Ya, kami bantu memasukkan materi artikel dan foto produk perdana Anda hingga website siap tayang.'
			}
		]
	},
	'sepeda-listrik': {
		slug: 'sepeda-listrik',
		label: 'Toko Sepeda Listrik',
		title: 'Jasa Pembuatan Website Artikel & Informasi Showroom',
		tagline: 'Katalog & Artikel Edukasi Sepeda Listrik — CMS Berita Unit, Review Baterai, & Kontak Sales',
		description: 'Website artikel dan informasi unit sepeda/motor listrik untuk memberikan panduan perawatan, review spesifikasi baterai, serta kontak pemesanan sales.',
		iconName: 'Zap',
		priceStarting: 'Rp 1.000.000',
		retailPackages: [
			{
				name: 'Paket Website Artikel Showroom',
				price: 'Rp 1.000.000',
				renewalPrice: 'Rp 800.000 / tahun',
				isPopular: true,
				description: 'Website artikel & katalog sepeda listrik terima beres terhubung ke kontak sales WA.',
				features: [
					'CMS Artikel Edukasi Baterai & Review Unit Sederhana',
					'Katalog Spesifikasi Sepeda Listrik & Kontak Sales WA',
					'Tampilan Fast Loading di Seluruh Perangkat',
					'Gratis Domain Resmi & High-Speed Hosting 1 Tahun',
					'Setup Terima Beres Tinggal Kirimkan Materi Unit',
					'Biaya Perpanjangan Tahun Depan Cukup Rp 800.000 / tahun'
				],
				demoUrl: 'https://demo.barizaloka.id/sepeda-listrik-basic'
			}
		],
		customSolution: {
			title: 'Fitur Dealer Custom Multi-Branch',
			description: 'Dibutuhkan fitur kalkulator simulasi kredit atau booking test drive online?',
			customFeatures: [
				'Kalkulator Perkiraan Cicilan Kredit Unit',
				'Form Booking Test Drive Online Warga',
				'Sistem Routing Leads Sales Multi-Cabang'
			]
		},
		relatedNiches: ['umkm'],
		features: [
			{
				title: 'Artikel Review Unit',
				desc: 'Menyajikan artikel komparasi tipe sepeda listrik dan keunggulan daya tahan baterai.',
				icon: 'BatteryCharging'
			},
			{
				title: 'Spesifikasi Produk',
				desc: 'Rincian kecepatan maksimal, jarak tempuh km, beban maks, dan pilihan warna.',
				icon: 'Zap'
			},
			{
				title: 'Kontak Direct Sales',
				desc: 'Tombol konsultasi yang langsung menghubungkan calon pembeli ke WhatsApp sales.',
				icon: 'MessageSquare'
			},
			{
				title: 'SEO Lokal Dealer',
				desc: 'Optimasi kata kunci pencarian toko sepeda listrik terdekat di wilayah Anda.',
				icon: 'Search'
			}
		],
		benefits: [
			'Calon pembeli dapat membaca artikel panduan memilih sepeda listrik sebelum berkunjung ke toko',
			'Memudahkan sales menjawab pertanyaan seputar spesifikasi dan garansi baterai',
			'Tampilan menarik, profesional, dan dapat diperbarui kapan saja',
			'Perpanjangan tahunan hemat 800 ribu rupiah'
		],
		faq: [
			{
				q: 'Apakah bisa menambahkan artikel ulasan tipe sepeda listrik baru di kemudian hari?',
				a: 'Sangat bisa, Anda dapat menambahkan artikel review baru kapan saja melalui CMS yang sangat mudah.'
			}
		]
	}
};
