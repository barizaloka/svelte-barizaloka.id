import { error, redirect } from '@sveltejs/kit';
import { LOCATION_PAGES } from '$lib/data/location_pages';
import type { PageLoad } from './$types';

const ALIASES: Record<string, string> = {
	pangkep: 'pangkajene-dan-kepulauan',
	sidrap: 'sidenreng-rappang',
	selayar: 'kepulauan-selayar'
};

export const load: PageLoad = ({ params }) => {
	const rawSlug = params.lokasi.toLowerCase();
	const targetSlug = ALIASES[rawSlug] || rawSlug;

	const location = LOCATION_PAGES[targetSlug];
	if (location) {
		throw redirect(301, `/jasa-website-di-${targetSlug}`);
	}

	throw error(404, `Halaman jasa website ${params.lokasi} tidak ditemukan`);
};
