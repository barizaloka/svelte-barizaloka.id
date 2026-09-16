export interface FaqItem {
	id: string;
	category: 'Umum' | 'Pesantren & Masjid' | 'Desa & UMKM' | 'Domain & Hosting' | 'Pembayaran & Garansi';
	question: string;
	answer: string;
}

export const FAQ_DATA: FaqItem[] = [
	{
		id: '1',
		category: 'Umum',
		question: 'Apa itu Barizaloka?',
		answer: 'Barizaloka adalah ekosistem teknologi dari Rembang, Jawa Tengah yang berfokus pada penyediaan layanan pembuatan website profesional, sistem informasi pesantren/desa, dan edukasi pengembangan perangkat lunak (Baricode Indonesia).'
	},
	{
		id: '2',
		category: 'Umum',
		question: 'Berapa lama proses pengerjaan pembuatan website?',
		answer: 'Estimasi waktu pengerjaan berkisar antara 5 hingga 14 hari kerja, tergantung pada kompleksitas paket yang dipilih dan kelengkapan materi (foto, teks profil, logo) dari klien.'
	},
	{
		id: '3',
		category: 'Pesantren & Masjid',
		question: 'Apakah pengurus pesantren/masjid yang awam teknologi bisa mengelola websitenya?',
		answer: 'Sangat bisa! Kami merancang dashboard admin yang sangat simpel dan berbahasa Indonesia. Kami juga menyertakan video panduan dan pendampingan konsultasi jika ada kesulitan.'
	},
	{
		id: '4',
		category: 'Pesantren & Masjid',
		question: 'Apakah website pesantren bisa menerima pendaftaran santri baru (PSB) online?',
		answer: 'Ya, modul PSB Online sudah tersedia pada paket Pesantren, mencakup pengisian data santri, upload dokumen ijazah/KK, hingga notifikasi pendaftaran.'
	},
	{
		id: '5',
		category: 'Desa & UMKM',
		question: 'Apakah Barizaloka membantu pendaftaran domain resmi .desa.id?',
		answer: 'Tentu. Tim kami akan membantu penyiapan berkas verifikasi SK Kepala Desa/Perdes dan membantu proses pendaftaran domain ke Kominfo hingga aktif.'
	},
	{
		id: '6',
		category: 'Desa & UMKM',
		question: 'Apakah order katalog UMKM langsung terhubung ke WhatsApp?',
		answer: 'Ya! Setiap tombol beli atau konsultasi akan otomatis membuka pesan WhatsApp dengan format order yang rapi memuat nama produk, varian, dan jumlah.'
	},
	{
		id: '7',
		category: 'Domain & Hosting',
		question: 'Apakah harga paket sudah termasuk domain dan hosting?',
		answer: 'Seluruh paket jasa pembuatan website di Barizaloka sudah gratis domain (.com / .id / .desa.id) dan cloud hosting NVMe high speed untuk tahun pertama.'
	},
	{
		id: '8',
		category: 'Pembayaran & Garansi',
		question: 'Bagaimana sistem pembayaran dan garansinya?',
		answer: 'Sistem pembayaran menggunakan skema DP 50% di awal dan pelunasan 50% setelah website selesai dan siap rilis. Kami memberikan garansi perbaikan bug/error selama 1 tahun full.'
	}
];
