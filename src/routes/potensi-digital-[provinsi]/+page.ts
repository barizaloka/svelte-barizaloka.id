import { error } from '@sveltejs/kit';
import { PROVINSI_PAGES } from '$lib/data/provinsi_pages';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const provinsi = PROVINSI_PAGES[params.provinsi];

	if (!provinsi) {
		throw error(404, `Halaman Provinsi ${params.provinsi} tidak ditemukan`);
	}

	return {
		provinsi
	};
};
