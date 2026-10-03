import { error, redirect } from '@sveltejs/kit';
import { NICHE_PAGES } from '$lib/data/niche_pages';
import { LOCATION_PAGES, getKecamatanInfo } from '$lib/data/location_pages';
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

	if (!niche) {
		throw error(404, `Layanan niche ${params.niche} tidak ditemukan`);
	}

	// 1. Cek level Kabupaten / Kota
	const location = LOCATION_PAGES[rawLoc];
	if (location) {
		return {
			niche,
			location,
			kecamatan: null
		};
	}

	// 2. Cek level Kecamatan
	const kecamatan = getKecamatanInfo(rawLoc);
	if (kecamatan) {
		return {
			niche,
			location: kecamatan.location,
			kecamatan
		};
	}

	throw error(404, `Halaman Niche ${params.niche} di ${params.lokasi} tidak ditemukan`);
};

