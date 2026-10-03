import type { LocationInfo } from './types';

export const jawaTengahLocations: Record<string, LocationInfo> = {
	rembang: {
		slug: 'rembang',
		name: 'Rembang',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kabupaten',
		highlights:
			'Kota santri & pusat industri kreatif pesisir utara dengan ribuan UMKM dan pesantren berprestasi.',
		nearbyLocations: ['pati', 'blora', 'kudus', 'jepara']
	},
	pati: {
		slug: 'pati',
		name: 'Pati',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kabupaten',
		highlights:
			'Pusat perikanan, pertanian, dan bisnis manufaktur yang berkembang pesat di Jawa Tengah.',
		nearbyLocations: ['rembang', 'kudus', 'jepara', 'blora']
	},
	kudus: {
		slug: 'kudus',
		name: 'Kudus',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kabupaten',
		highlights: 'Kota kretek dan pusat pendidikan keagamaan serta industri perkeliruan modern.',
		nearbyLocations: ['pati', 'jepara', 'demak', 'rembang']
	},
	jepara: {
		slug: 'jepara',
		name: 'Jepara',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kabupaten',
		highlights: 'Sentra ukir dunia, industri mebel ekspor, dan destinasi wisata bahari unggulan.',
		nearbyLocations: ['kudus', 'pati', 'demak']
	},
	blora: {
		slug: 'blora',
		name: 'Blora',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kabupaten',
		highlights: 'Daerah penghasil jati dan migas dengan potensi UMKM kuliner dan kerajinan lokal.',
		nearbyLocations: ['rembang', 'pati', 'groboagan']
	},
	semarang: {
		slug: 'semarang',
		name: 'Semarang',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kota',
		highlights:
			'Ibu kota Provinsi Jawa Tengah, pusat bisnis perbankan, perdagangan, dan pendidikan tinggi.',
		nearbyLocations: ['kudus', 'demak', 'kenal', 'salatiga']
	},
	solo: {
		slug: 'solo',
		name: 'Surakarta (Solo)',
		provinceSlug: 'jawa-tengah',
		provinceName: 'Jawa Tengah',
		type: 'Kota',
		highlights: 'Kota budaya, industri kreatif batik, dan ekosistem digital startup terdepan.',
		nearbyLocations: ['boyolali', 'karanganyar', 'sragen', 'klaten']
	}
};
