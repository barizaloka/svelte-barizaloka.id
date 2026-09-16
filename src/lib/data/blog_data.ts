import { load } from 'js-yaml';
import { marked } from 'marked';

export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	category: string;
	categorySlug: string;
	author: {
		name: string;
		avatar: string;
		role: string;
	};
	publishedAt: string;
	readTime: string;
	image: string;
	tags: string[];
	metaTitle?: string;
	metaDescription?: string;
}

function parseFrontMatter(text: string): { data: Record<string, any>; content: string } {
	const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) {
		return { data: {}, content: text };
	}
	const data = (load(match[1]) as Record<string, any>) || {};
	return { data, content: match[2] };
}

const modules = import.meta.glob('/src/content/posts/*.md', { query: '?raw', eager: true });

export const BLOG_POSTS: BlogPost[] = Object.entries(modules)
	.map(([filepath, fileContent]) => {
		const rawContent = typeof fileContent === 'string' ? fileContent : (fileContent as { default: string }).default;
		const { data, content } = parseFrontMatter(rawContent);
		const htmlContent = marked.parse(content) as string;

		return {
			id: String(data.id || ''),
			slug: data.slug || filepath.split('/').pop()?.replace('.md', '') || '',
			title: data.title || '',
			excerpt: data.excerpt || '',
			content: htmlContent,
			category: data.category || '',
			categorySlug: data.categorySlug || '',
			author: data.author || {
				name: '',
				avatar: '',
				role: ''
			},
			publishedAt: data.publishedAt || '',
			readTime: data.readTime || '',
			image: data.image || '',
			tags: Array.isArray(data.tags) ? data.tags : [],
			metaTitle: data.metaTitle,
			metaDescription: data.metaDescription
		};
	})
	.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
