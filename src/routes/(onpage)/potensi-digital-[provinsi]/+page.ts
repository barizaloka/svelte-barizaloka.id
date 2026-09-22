import { error } from '@sveltejs/kit';
import { PROVINSI_PAGES, type ProvinsiPage } from '$lib/data/provinsi_pages';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const provinsi = PROVINSI_PAGES[params.provinsi];

	if (!provinsi) {
		error(404, `Halaman Provinsi ${params.provinsi} tidak ditemukan`);
	}

	const relatedProvinces: ProvinsiPage[] = (provinsi.related || [])
		.map((slug) => PROVINSI_PAGES[slug])
		.filter((p): p is ProvinsiPage => Boolean(p));

	return {
		provinsi,
		relatedProvinces
	};
};
