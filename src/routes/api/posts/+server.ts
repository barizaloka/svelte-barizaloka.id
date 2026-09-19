import { json, type RequestHandler } from '@sveltejs/kit';
import { BLOG_POSTS } from '$lib/data/blog_data';

export const GET: RequestHandler = async () => {
	return json({
		message: 'Posts retrieved successfully.',
		data: BLOG_POSTS
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const authHeader = request.headers.get('Authorization');

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return json({ message: 'Unauthenticated.' }, { status: 401 });
	}

	try {
		const body = await request.json();
		const errors: Record<string, string[]> = {};

		if (!body.title) {
			errors.title = ['The title field is required.'];
		}
		if (!body.category_id) {
			errors.category_id = ['The category id field is required.'];
		}
		if (!body.content) {
			errors.content = ['The content field is required.'];
		}

		if (Object.keys(errors).length > 0) {
			return json(
				{
					message: `The ${Object.keys(errors)[0]} field is required. (and ${Object.keys(errors).length - 1} more errors)`,
					errors
				},
				{ status: 422 }
			);
		}

		const slug = body.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
		const now = new Date().toISOString();

		const newArticle = {
			id: BLOG_POSTS.length + 1,
			user_id: 1,
			category_id: body.category_id,
			title: body.title,
			slug,
			excerpt: body.excerpt || '',
			content: body.content,
			status: body.status || 'published',
			published_at: now,
			meta_title: body.meta_title || `${body.title} | Barizaloka`,
			meta_description: body.meta_description || body.excerpt || '',
			created_at: now,
			updated_at: now,
			category: {
				id: body.category_id,
				name: 'Umum'
			},
			tags: body.tag_ids || []
		};

		return json(
			{
				message: 'Article created successfully.',
				data: newArticle
			},
			{ status: 201 }
		);
	} catch (err) {
		return json({ message: 'Invalid JSON payload.' }, { status: 400 });
	}
};
