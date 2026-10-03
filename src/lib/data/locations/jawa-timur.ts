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
		nearbyLocations: ['sidoarjo', 'gresik', 'mojokerto']
	}
};
