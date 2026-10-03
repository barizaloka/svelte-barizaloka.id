import { error, redirect } from '@sveltejs/kit';
import { LOCATION_PAGES, getKecamatanInfo } from '$lib/data/location_pages';
import type { PageLoad } from './$types';

const ALIASES: Record<string, string> = {
	pangkep: 'pangkajene-dan-kepulauan',
	sidrap: 'sidenreng-rappang',
	selayar: 'kepulauan-selayar'
};

export const load: PageLoad = ({ params }) => {
	const rawSlug = params.lokasi.toLowerCase();
	const targetSlug = ALIASES[rawSlug] || rawSlug;

	// Redirect jika ada di data kabupaten atau kecamatan
	if (LOCATION_PAGES[targetSlug] || getKecamatanInfo(targetSlug)) {
		throw redirect(301, `/jasa-website-di-${targetSlug}`);
	}

	throw error(404, `Halaman jasa website ${params.lokasi} tidak ditemukan`);
};

