import { error } from '@sveltejs/kit';
import { BLOG_POSTS } from '$lib/data/blog_data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = BLOG_POSTS.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Artikel tidak ditemukan');
	}

	const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

	return {
		post,
		relatedPosts
	};
};
