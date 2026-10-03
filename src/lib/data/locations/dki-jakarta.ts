import type { LocationInfo } from './types';

export const dkiJakartaLocations: Record<string, LocationInfo> = {
	jakarta: {
		slug: 'jakarta',
		name: 'Jakarta',
		provinceSlug: 'dki-jakarta',
		provinceName: 'DKI Jakarta',
		type: 'Kota',
		highlights: 'Pusat perekonomian nasional, kantor pusat perusahaan, dan pasar digital terbesar.',
		nearbyLocations: ['tangerang', 'bekasi', 'depok', 'bogor']
	}
};
