import type { LocationInfo } from './types';
import { jawaTengahLocations } from './jawa-tengah';
import { diYogyakartaLocations } from './di-yogyakarta';
import { jawaTimurLocations } from './jawa-timur';
import { dkiJakartaLocations } from './dki-jakarta';
import { sulawesiSelatanLocations } from './sulawesi-selatan';

export interface KecamatanInfo {
	slug: string;
	kecamatanSlug: string;
	kecamatanName: string;
	locationSlug: string;
	location: LocationInfo;
}

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export const KECAMATAN_PAGES: Record<string, KecamatanInfo> = {};

const allLocations: LocationInfo[] = [
	...Object.values(jawaTengahLocations),
	...Object.values(diYogyakartaLocations),
	...Object.values(jawaTimurLocations),
	...Object.values(dkiJakartaLocations),
	...Object.values(sulawesiSelatanLocations)
];

for (const location of allLocations) {
	if (location.kecamatan && Array.isArray(location.kecamatan)) {
		for (const kecName of location.kecamatan) {
			const kecSlug = slugify(kecName);
			const comboSlug = `${kecSlug}-${location.slug}`;
			KECAMATAN_PAGES[comboSlug] = {
				slug: comboSlug,
				kecamatanSlug: kecSlug,
				kecamatanName: kecName,
				locationSlug: location.slug,
				location
			};
		}
	}
}

export function getKecamatanInfo(slug: string): KecamatanInfo | null {
	return KECAMATAN_PAGES[slug.toLowerCase()] || null;
}
