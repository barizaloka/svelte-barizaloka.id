export interface ProvinsiInfo {
	slug: string;
	name: string;
	capital: string;
	description: string;
	digitalPotential: string;
	topLocations: string[];
}

export const PROVINSI_PAGES: Record<string, ProvinsiInfo> = {
	'jawa-tengah': {
		slug: 'jawa-tengah',
		name: 'Jawa Tengah',
		capital: 'Semarang',
		description: 'Pusat kebudayaan, ribuan pondok pesantren, dan jutaan UMKM yang sedang bertransformasi ke era digital.',
		digitalPotential: 'Potensi digital Jawa Tengah sangat luas, didukung oleh pertumbuhan akses internet daerah dan program akselerasi UMKM serta smart village.',
		topLocations: ['rembang', 'pati', 'kudus', 'jepara', 'blora', 'semarang', 'solo']
	},
	'jawa-timur': {
		slug: 'jawa-timur',
		name: 'Jawa Timur',
		capital: 'Surabaya',
		description: 'Provinsi pusat manufaktur, agrobisnis, dan pesantren-pesantren besar penghasil SDM berkualitas tinggi.',
		digitalPotential: 'Ekosistem digital Jawa Timur didukung oleh jaringan logistik solid, integrasi e-commerce lokal, dan sistem informasi desa terpadu.',
		topLocations: ['surabaya', 'sidoarjo', 'gresik', 'malang', 'banyuwangi']
	},
	'jawa-barat': {
		slug: 'jawa-barat',
		name: 'Jawa Barat',
		capital: 'Bandung',
		description: 'Provinsi dengan jumlah penduduk terbanyak, pusat industri kreatif, fashion, dan agrowisata.',
		digitalPotential: 'Permintaan website usaha dan portal desa digital di Jawa Barat sangat tinggi guna mendukung persaingan pasar global.',
		topLocations: ['bandung', 'bogor', 'bekasi', 'depok', 'tasikmalaya']
	},
	'dki-jakarta': {
		slug: 'dki-jakarta',
		name: 'DKI Jakarta',
		capital: 'Jakarta Central',
		description: 'Pusat bisnis, corporate HQ, lembaga non-profit, dan instansi nasional.',
		digitalPotential: 'Standar kualitas desain website yang modern, performa super cepat, dan integrasi API yang tinggi menjadi kebutuhan utama.',
		topLocations: ['jakarta']
	},
	'di-yogyakarta': {
		slug: 'di-yogyakarta',
		name: 'DI Yogyakarta',
		capital: 'Yogyakarta',
		description: 'Pusat edukasi nasional, seni, pariwisata, dan kreativitas teknologi generasi muda.',
		digitalPotential: 'Tinggi akan kebutuhan branding digital untuk yayasan pendidikan, usaha kreatif, cafe, dan tempat wisata.',
		topLocations: ['yogyakarta']
	}
};
