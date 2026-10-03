import { error } from '@sveltejs/kit';
import { NICHE_PAGES } from '$lib/data/niche_pages';
import { LOCATION_PAGES } from '$lib/data/location_pages';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const niche = NICHE_PAGES[params.niche];
	const location = LOCATION_PAGES[params.lokasi];

	if (!niche || !location) {
		throw error(404, `Halaman Niche ${params.niche} di ${params.lokasi} tidak ditemukan`);
	}

	return {
		niche,
		location
	};
};
