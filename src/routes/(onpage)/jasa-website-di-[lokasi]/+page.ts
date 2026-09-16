import { error } from '@sveltejs/kit';
import { LOCATION_PAGES } from '$lib/data/location_pages';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const location = LOCATION_PAGES[params.lokasi];

	if (!location) {
		throw error(404, `Lokasi ${params.lokasi} tidak ditemukan`);
	}

	return {
		location
	};
};
