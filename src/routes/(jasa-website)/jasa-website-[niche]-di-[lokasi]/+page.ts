import { error, redirect } from '@sveltejs/kit';
import { NICHE_PAGES } from '$lib/data/niche_pages';
import { LOCATION_PAGES } from '$lib/data/location_pages';
import type { PageLoad } from './$types';

const ALIASES: Record<string, string> = {
	pangkep: 'pangkajene-dan-kepulauan',
	sidrap: 'sidenreng-rappang',
	selayar: 'kepulauan-selayar'
};

export const load: PageLoad = ({ params }) => {
	const niche = NICHE_PAGES[params.niche];
	const rawLoc = params.lokasi.toLowerCase();

	if (ALIASES[rawLoc]) {
		throw redirect(301, `/jasa-website-${params.niche}-di-${ALIASES[rawLoc]}`);
	}

	const location = LOCATION_PAGES[rawLoc];

	if (!niche || !location) {
		throw error(404, `Halaman Niche ${params.niche} di ${params.lokasi} tidak ditemukan`);
	}

	return {
		niche,
		location
	};
};
