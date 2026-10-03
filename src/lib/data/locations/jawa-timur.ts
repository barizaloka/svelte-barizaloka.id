import type { LocationInfo } from './types';

export const jawaTimurLocations: Record<string, LocationInfo> = {
	surabaya: {
		slug: 'surabaya',
		name: 'Surabaya',
		provinceSlug: 'jawa-timur',
		provinceName: 'Jawa Timur',
		type: 'Kota',
		highlights:
			'Metropolitan perdagangan & industri terbesar kedua di Indonesia dengan jutaan pelaku usaha.',
		nearbyLocations: ['sidoarjo', 'gresik', 'mojokerto'],
		kecamatan: [
			'Asemrowo',
			'Benowo',
			'Bubutan',
			'Bulak',
			'Dukuh Pakis',
			'Gayungan',
			'Genteng',
			'Gubeng',
			'Gunung Anyar',
			'Jambangan',
			'Karangpilang',
			'Kenjeran',
			'Krembangan',
			'Lakarsantri',
			'Mulyorejo',
			'Pabean Cantikan',
			'Pakal',
			'Rungkut',
			'Sambikerep',
			'Sawahan',
			'Semampir',
			'Simokerto',
			'Sukolilo',
			'Sukomanunggal',
			'Tambaksari',
			'Tandes',
			'Tegalsari',
			'Tenggilis Mejoyo',
			'Wiyung',
			'Wonocolo',
			'Wonokromo'
		]
	}
};
