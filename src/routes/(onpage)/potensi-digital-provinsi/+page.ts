import { PROVINCES_LIST } from '$lib/data/provinsi_pages';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		provinces: PROVINCES_LIST
	};
};
