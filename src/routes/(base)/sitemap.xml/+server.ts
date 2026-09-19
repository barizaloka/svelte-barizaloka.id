import type { RequestHandler } from './$types';
import { NICHE_PAGES } from '$lib/data/niche_pages';
import { LOCATION_PAGES } from '$lib/data/location_pages';
import { PROVINSI_PAGES } from '$lib/data/provinsi_pages';
import { BLOG_POSTS } from '$lib/data/blog_data';

export const GET: RequestHandler = async () => {
	const domain = 'https://barizaloka.id';

	// Static pages
	const staticPages = [
		'',
		'/cek-domain',
		'/harga',
		'/tentang',
		'/faq',
		'/kontak',
		'/portofolio',
		'/blog',
		'/cara-cek-domain-dengan-mudah'
	];

	// Niche pages
	const nicheSlugs = Object.keys(NICHE_PAGES);
	const nichePages = nicheSlugs.map((slug) => `/jasa-website-${slug}`);

	// Location pages
	const locationSlugs = Object.keys(LOCATION_PAGES);
	const locationPages = locationSlugs.map((slug) => `/jasa-website-di-${slug}`);

	// Niche x Location combination pages
	const combinationPages: string[] = [];
	for (const niche of nicheSlugs) {
		for (const loc of locationSlugs) {
			combinationPages.push(`/jasa-website-${niche}-di-${loc}`);
		}
	}

	// Province pages
	const provinceSlugs = Object.keys(PROVINSI_PAGES);
	const provincePages = provinceSlugs.map((slug) => `/potensi-digital-${slug}`);

	// Blog detail pages
	const blogPages = BLOG_POSTS.map((post) => `/blog/${post.slug}`);

	const allUrls = [
		...staticPages,
		...nichePages,
		...locationPages,
		...combinationPages,
		...provincePages,
		...blogPages
	];

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map((url) => {
		return `  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/jasa-website-') ? '0.8' : '0.6'}</priority>
  </url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(sitemapXml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
