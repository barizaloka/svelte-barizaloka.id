import { json, type RequestHandler } from '@sveltejs/kit';
import { DomainServerService } from '$lib/server/domain.service';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('domain') || url.searchParams.get('q') || '';
	if (!query) {
		return json(
			{ error: 'Parameter domain tidak boleh kosong' },
			{ status: 400 }
		);
	}

	try {
		const result = await DomainServerService.checkAllExtensions(query);
		return json(result, {
			headers: {
				'Cache-Control': 'public, max-age=60, s-maxage=300'
			}
		});
	} catch (err: any) {
		return json(
			{ error: err?.message || 'Terjadi kesalahan saat memeriksa domain via RDAP' },
			{ status: 500 }
		);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const query = body.domain || body.q || '';
		if (!query) {
			return json(
				{ error: 'Parameter domain tidak boleh kosong' },
				{ status: 400 }
			);
		}

		const result = await DomainServerService.checkAllExtensions(query);
		return json(result);
	} catch (err: any) {
		return json(
			{ error: err?.message || 'Payload JSON tidak valid' },
			{ status: 400 }
		);
	}
};
