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
	if (ALIASES[rawSlug]) {
		throw redirect(301, `/jasa-website-di-${ALIASES[rawSlug]}`);
	}

	// 1. Cek level Kabupaten / Kota
	const location = LOCATION_PAGES[rawSlug];
	if (location) {
		return {
			pageType: 'kabupaten' as const,
			location,
			kecamatan: null,
			siblingKecamatan: []
		};
	}

	// 2. Cek level Kecamatan (format: [kecamatan]-[kabupaten], misal: sedan-rembang)
	const kecamatan = getKecamatanInfo(rawSlug);
	if (kecamatan) {
		const siblings = (kecamatan.location.kecamatan || []).filter(
			(k) => k.toLowerCase() !== kecamatan.kecamatanName.toLowerCase()
		);

		return {
			pageType: 'kecamatan' as const,
			location: kecamatan.location,
			kecamatan,
			siblingKecamatan: siblings
		};
	}

	throw error(404, `Halaman jasa website di ${params.lokasi} tidak ditemukan`);
};


