import portfolioItems from './portofolio.json';

export interface Testimonial {
	quote: string;
	name: string;
	role: string;
}

export interface PortfolioItem {
	id: string;
	title: string;
	category: 'Pesantren' | 'Masjid' | 'Desa' | 'UMKM' | 'Sekolah' | 'Organisasi' | string;
	client: string;
	location: string;
	year: string;
	badge?: string;
	featured?: boolean;
	description: string;
	features: string[];
	techStack: string[];
	results?: string;
	demoUrl?: string;
	color?: string;
	testimonial?: Testimonial;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = portfolioItems as PortfolioItem[];

export const PORTFOLIO_CATEGORIES = [
	'Semua',
	'Pesantren',
	'Masjid',
	'Desa',
	'UMKM',
	'Sekolah',
	'Organisasi'
] as const;
