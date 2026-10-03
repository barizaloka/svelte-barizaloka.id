import type { LocationInfo } from './types';

export const diYogyakartaLocations: Record<string, LocationInfo> = {
	jogja: {
		slug: 'yogyakarta',
		name: 'Yogyakarta',
		provinceSlug: 'di-yogyakarta',
		provinceName: 'DI Yogyakarta',
		type: 'Kota',
		highlights:
			'Kota pelajar dan wisata internasional dengan iklim ekonomi kreatif dan teknologi yang sangat maju.',
		nearbyLocations: ['sleman', 'bantul', 'kulon-progo', 'solo'],
		kecamatan: [
			'Danurejan',
			'Gedongtengen',
			'Gondokusuman',
			'Gondomanan',
			'Jetis',
			'Kotagede',
			'Kraton',
			'Mantrijeron',
			'Mergangsan',
			'Ngampilan',
			'Pakualaman',
			'Tegalrejo',
			'Umbulharjo',
			'Wirobrajan'
		]
	}
};
