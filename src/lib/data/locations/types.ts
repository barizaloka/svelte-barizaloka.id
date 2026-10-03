export interface LocationInfo {
	slug: string;
	name: string;
	provinceSlug: string;
	provinceName: string;
	type: 'Kabupaten' | 'Kota';
	highlights: string;
	nearbyLocations: string[];
}
