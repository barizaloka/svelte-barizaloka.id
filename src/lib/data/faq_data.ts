export interface FaqItem {
	id: string;
	category:
		'Umum' | 'Pesantren & Masjid' | 'Desa & UMKM' | 'Domain & Hosting' | 'Pembayaran & Garansi';
	question: string;
	answer: string;
}

export const FAQ_DATA: FaqItem[] = [
	{
		id: '1',
		category: 'Umum',
		question: 'Apa itu Barizaloka?',
		answer:
			'Barizaloka adalah ekosistem teknologi dari Rembang, Jawa Tengah yang berfokus pada penyediaan layanan pembuatan website profesional terima beres, sistem informasi pesantren/desa, dan edukasi perangkat lunak.'
	},
	{
		id: '2',
		category: 'Umum',
		question: 'Berapa biaya pembuatan website di Barizaloka?',
		answer:
			'Biaya pembuatan website di Barizaloka adalah Rp 1.000.000 (1 Juta Terima Beres) untuk tahun pertama. Sudah termasuk desain custom, gratis domain, high-speed cloud hosting, input konten, dan garansi maintenance 1 tahun.'
	},
	{
		id: '3',
		category: 'Pembayaran & Garansi',
		question: 'Berapa biaya perpanjangan tahun berikutnya?',
		answer:
			'Biaya perpanjangan di tahun kedua dan seterusnya adalah Rp 800.000 / tahun. Biaya ini sudah mencakup perpanjangan Domain, Cloud Hosting NVMe high-speed, serta dukungan teknis & maintenance.'
	},
	{
		id: '4',
		category: 'Umum',
		question: 'Apa yang dimaksud dengan "Terima Beres"?',
		answer:
			'Terima beres artinya Anda cukup menyiapkan bahan dasar (seperti nama bisnis/lembaga, teks profil, foto/logo, dan nomor kontak). Seluruh proses teknis mulai dari pendaftaran domain, setting hosting, desain layout, hingga input konten dilakukan penuh oleh tim Barizaloka.'
	},
	{
		id: '5',
		category: 'Pesantren & Masjid',
		question: 'Apakah pengurus pesantren/masjid yang awam teknologi bisa mengelola websitenya?',
		answer:
			'Sangat bisa! Kami merancang dashboard admin yang sangat simpel dan berbahasa Indonesia. Kami juga menyertakan video panduan dan pendampingan konsultasi jika ada kesulitan.'
	},
	{
		id: '6',
		category: 'Desa & UMKM',
		question: 'Apakah Barizaloka membantu pendaftaran domain resmi .desa.id?',
		answer:
			'Tentu. Tim kami akan membantu penyiapan berkas verifikasi SK Kepala Desa/Perdes dan membantu proses pendaftaran domain ke Kominfo hingga aktif.'
	},
	{
		id: '7',
		category: 'Desa & UMKM',
		question: 'Apakah order katalog UMKM langsung terhubung ke WhatsApp?',
		answer:
			'Ya! Setiap tombol beli atau konsultasi akan otomatis membuka pesan WhatsApp dengan format order yang rapi memuat nama produk, varian, dan jumlah.'
	},
	{
		id: '8',
		category: 'Pembayaran & Garansi',
		question: 'Bagaimana sistem pembayaran dan garansinya?',
		answer:
			'Sistem pembayaran menggunakan skema DP 50% di awal dan pelunasan 50% setelah website selesai dan siap rilis. Kami memberikan garansi perbaikan bug/error selama 1 tahun full.'
	}
];
