import type { LocationInfo } from './types';
import { jawaTengahLocations } from './jawa-tengah';
import { diYogyakartaLocations } from './di-yogyakarta';
import { jawaTimurLocations } from './jawa-timur';
import { dkiJakartaLocations } from './dki-jakarta';
import { sulawesiSelatanLocations } from './sulawesi-selatan';

export type { LocationInfo } from './types';

export const LOCATIONS_BY_PROVINCE: Record<string, Record<string, LocationInfo>> = {
	'jawa-tengah': jawaTengahLocations,
	'di-yogyakarta': diYogyakartaLocations,
	'jawa-timur': jawaTimurLocations,
	'dki-jakarta': dkiJakartaLocations,
	'sulawesi-selatan': sulawesiSelatanLocations
};

export const LOCATION_PAGES: Record<string, LocationInfo> = {
	...jawaTengahLocations,
	...diYogyakartaLocations,
	...jawaTimurLocations,
	...dkiJakartaLocations,
	...sulawesiSelatanLocations
};

/**
 * Ambil seluruh kabupaten/kota berdasarkan slug provinsi
 */
export function getLocationsByProvince(provinceSlug: string): LocationInfo[] {
	const prov = LOCATIONS_BY_PROVINCE[provinceSlug];
	return prov ? Object.values(prov) : [];
}

export * from './kecamatan';

