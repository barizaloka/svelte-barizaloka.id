<script lang="ts">
	import {
		Globe,
		GraduationCap,
		Landmark,
		Building2,
		Store,
		Zap,
		CheckCircle2,
		ArrowRight,
		ShieldCheck,
		Star,
		Users,
		Code2,
		MapPin,
		Sparkles,
		Layers,
		MessageSquare
	} from 'lucide-svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { PORTFOLIO_PROJECTS } from '$lib/data/portfolio_data';
	import { PRICING_PACKAGES } from '$lib/data/pricing_data';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import DomainSearchForm from '$lib/components/DomainSearchForm.svelte';

	const niches = Object.values(NICHE_PAGES);
	const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
	const packages = PRICING_PACKAGES;

	const testimonials = [
		{
			name: 'KH. M. Syukron',
			role: 'Pengasuh PP Al-Hidayah Rembang',
			content:
				'Alhamdulillah, website buatan Barizaloka sangat membantu pendaftaran santri baru online. Wali santri dari Sumatra dan Kalimantan bisa daftar tanpa kendala.',
			avatar:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
		},
		{
			name: 'H. Sudirman, S.Ag',
			role: 'Ketua DKM Masjid Al-Barokah Pati',
			content:
				'Laporan keuangan kas masjid kami jadi jauh lebih transparan. Jemaah bisa cek laporan kas dan jadwal kajian langsung dari smartphone.',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
		},
		{
			name: 'Bpk. Hendro Utomo',
			role: 'Pemilik E-Bike Central Kudus',
			content:
				'Website showroom sepeda listrik yang dibuat rapi sekali. Fitur simulasi kredit membuat pengunjung lebih mudah menghitung cicilan sebelum pesan.',
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
		}
	];
</script>

<svelte:head>
	<title>Barizaloka — Jasa Pembuatan Website Pesantren, Masjid, Desa & UMKM</title>
	<meta
		name="description"
		content="Website resmi Barizaloka — ekosistem teknologi dari Rembang yang menyediakan jasa pembuatan website profesional untuk pesantren, masjid, desa, UMKM, dan toko sepeda listrik."
	/>
</svelte:head>

<!-- HERO SECTION -->
<section
	class="relative overflow-hidden bg-slate-50 pt-12 pb-20 transition-colors duration-200 lg:pt-20 lg:pb-32 dark:bg-slate-950"
>
	<!-- Background Glow effects -->
	<div
		class="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 to-teal-400/10 blur-[120px] dark:from-emerald-600/20 dark:to-teal-500/10"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl space-y-6 text-center">
			<!-- Main Heading -->
			<h1
				class="text-3xl leading-[1.15] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
			>
				Website Profesional untuk <span
					class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400"
					>Pesantren, Masjid, Desa & UMKM</span
				>
			</h1>

			<!-- Subtitle -->
			<p
				class="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300"
			>
				Hadirkan portal digital yang cepat, transparan, dan modern. Dilengkapi sistem PSB Online,
				Laporan Kas DKM, Surat Desa Mandiri, serta Katalog Usaha Direct WhatsApp.
			</p>

			<!-- DOMAIN CHECK & WEBSITE ORDER FORM (Form Sahaja di Landingpage) -->
			<div class="pt-4 text-left">
				<DomainSearchForm
					targetPage="/cek-domain"
					title="Mulai Order Website: Cek Ketersediaan Domain Anda"
					subtitle="Ketik nama domain atau brand impian Anda di bawah ini untuk mengecek ketersediaannya di halaman khusus."
					buttonText="Cek Ketersediaan Domain"
					variant="hero"
				/>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-base font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-300 active:scale-95 sm:w-auto"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi WA Gratis</span>
				</a>
				<a
					href="/harga"
					class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 transition-colors hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
				>
					<span>Lihat Paket Harga</span>
					<ArrowRight class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
				</a>
			</div>

			<!-- Quick Value Proposition Badges -->
			<div
				class="grid grid-cols-2 gap-4 pt-6 text-center text-xs font-medium text-slate-600 sm:grid-cols-4 dark:text-slate-400"
			>
				<div
					class="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
				>
					<div class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">100%</div>
					<div>Custom Code & Mobile Optimized</div>
				</div>
				<div
					class="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
				>
					<div class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">Gratis</div>
					<div>Domain & Hosting 1 Th</div>
				</div>
				<div
					class="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
				>
					<div class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">1 Tahun</div>
					<div>Garansi Error & Maintenance</div>
				</div>
				<div
					class="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
				>
					<div class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">Bantu</div>
					<div>Pendaftaran .desa.id / .or.id</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- NICHE SPECIALIZATION SECTION -->
<section
	class="border-y border-slate-200 bg-slate-100/70 py-16 transition-colors duration-200 lg:py-24 dark:border-slate-800/80 dark:bg-slate-900/50"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-2xl space-y-3 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Spesialisasi Sektor
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Solusi Desain Sesuai Kebutuhan Lembaga & Usaha Anda
			</h3>
			<p class="text-sm text-slate-600 dark:text-slate-400">
				Setiap sektor memiliki karakteristik unik. Kami tidak menggunakan template pasaran,
				melainkan merancang alur informasi yang pas.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each niches as niche}
				<a
					href="/jasa-website-{niche.slug}"
					class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900/90"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-slate-950 dark:text-emerald-400"
							>
								{#if niche.slug === 'pesantren'}
									<GraduationCap class="h-6 w-6" />
								{:else if niche.slug === 'masjid'}
									<Landmark class="h-6 w-6" />
								{:else if niche.slug === 'desa'}
									<Building2 class="h-6 w-6" />
								{:else if niche.slug === 'umkm'}
									<Store class="h-6 w-6" />
								{:else}
									<Zap class="h-6 w-6" />
								{/if}
							</div>
							<span
								class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-800 dark:bg-slate-800 dark:text-emerald-400"
							>
								Mulai {niche.priceStarting}
							</span>
						</div>

						<h4
							class="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
						>
							{niche.title}
						</h4>

						<p class="line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{niche.description}
						</p>

						<ul class="space-y-1.5 pt-2 text-xs text-slate-700 dark:text-slate-300">
							{#each niche.features.slice(0, 3) as feat}
								<li class="flex items-center gap-2">
									<CheckCircle2
										class="h-3.5 w-3.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
									/>
									<span>{feat.title}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div
						class="mt-6 flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400"
					>
						<span>Pelajari Selengkapnya</span>
						<ArrowRight class="h-4 w-4" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- PORTFOLIO SHOWCASE TEASER -->
<section class="bg-slate-50 py-16 transition-colors duration-200 lg:py-24 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<h2
					class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
				>
					Hasil Karya Terbaru
				</h2>
				<h3 class="mt-1 text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
					Portofolio Proyek Terpercaya
				</h3>
			</div>
			<a
				href="/portofolio"
				class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
			>
				<span>Lihat Semua Karya ({PORTFOLIO_PROJECTS.length})</span>
				<ArrowRight class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
			</a>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each featuredProjects as item}
				<div
					class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src={item.image}
							alt={item.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute top-3 left-3">
							<span
								class="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md"
							>
								{item.category}
							</span>
						</div>
					</div>

					<div class="space-y-3 p-6">
						<div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
							<MapPin class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
							<span>{item.location}</span>
						</div>

						<h4
							class="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
						>
							{item.title}
						</h4>

						<p class="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{item.summary}
						</p>

						<div
							class="border-t border-slate-200 pt-3 text-[11px] font-medium text-emerald-700 dark:border-slate-800/80 dark:text-emerald-400"
						>
							✨ {item.results}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PRICING PACKAGES TEASER -->
<section
	class="border-t border-slate-200 bg-slate-100/70 py-16 transition-colors duration-200 lg:py-24 dark:border-slate-800 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-2xl space-y-3 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Transparan & Tanpa Biaya Tersembunyi
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Paket Harga Jasa Pembuatan Website
			</h3>
			<p class="text-sm text-slate-600 dark:text-slate-400">
				Seluruh paket sudah termasuk Gratis Domain, Cloud Hosting NVMe High Speed, dan Garansi
				Perbaikan 1 Tahun.
			</p>
		</div>

		<div class="mx-auto max-w-2xl">
			{#each packages as pkg}
				<div
					class="relative flex flex-col justify-between rounded-3xl border border-emerald-500 bg-white p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300 sm:p-8 dark:bg-slate-900"
				>
					{#if pkg.badge}
						<div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
							<span
								class="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1 text-[11px] font-extrabold tracking-wider text-slate-950 uppercase shadow-md"
							>
								{pkg.badge}
							</span>
						</div>
					{/if}

					<div class="space-y-6">
						<div class="text-center">
							<h4 class="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h4>
							<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{pkg.tagline}</p>
						</div>

						<div
							class="flex flex-col items-center justify-center space-y-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center"
						>
							<div class="flex items-baseline gap-2">
								<span class="text-3xl font-black text-emerald-600 sm:text-4xl dark:text-emerald-400"
									>{pkg.price}</span
								>
								{#if pkg.originalPrice}
									<span class="text-xs text-slate-400 line-through dark:text-slate-500"
										>{pkg.originalPrice}</span
									>
								{/if}
							</div>
							<span class="text-xs font-semibold text-slate-600 dark:text-slate-300"
								>Biaya Pembuatan Terima Beres (Tahun 1)</span
							>
							{#if pkg.renewalPrice}
								<div class="mt-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
									Perpanjangan Tahun Depan: {pkg.renewalPrice}
								</div>
							{/if}
						</div>

						<div class="space-y-2 border-t border-slate-200 pt-6 dark:border-slate-800">
							<div
								class="text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400"
							>
								Fitur Termasuk:
							</div>
							<ul
								class="grid grid-cols-1 gap-2 text-xs text-slate-700 sm:grid-cols-2 dark:text-slate-300"
							>
								{#each pkg.features as feat}
									<li class="flex items-start gap-2">
										<CheckCircle2
											class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
										/>
										<span>{feat}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
						<a
							href="https://wa.me/6281234567890?text={encodeURIComponent(pkg.whatsappMessage)}"
							target="_blank"
							rel="noopener noreferrer"
							class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-300"
						>
							<MessageSquare class="h-4 w-4" />
							<span>{pkg.ctaText}</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TESTIMONIALS SECTION -->
<section class="bg-slate-50 py-16 transition-colors duration-200 lg:py-24 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-2xl space-y-3 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Testimoni Mitra
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Apa Kata Klien Kami?
			</h3>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each testimonials as t}
				<div
					class="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
				>
					<div class="flex items-center gap-1 text-amber-500">
						{#each Array(5) as _}
							<Star class="h-4 w-4 fill-amber-400" />
						{/each}
					</div>
					<p class="text-xs leading-relaxed text-slate-700 italic dark:text-slate-300">
						"{t.content}"
					</p>
					<div
						class="flex items-center gap-3 border-t border-slate-200 pt-2 dark:border-slate-800/80"
					>
						<img
							src={t.avatar}
							alt={t.name}
							class="h-10 w-10 rounded-full border border-emerald-500/30 object-cover"
						/>
						<div>
							<div class="text-xs font-bold text-slate-900 dark:text-white">{t.name}</div>
							<div class="text-[11px] text-slate-500 dark:text-slate-400">{t.role}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ SECTION PREVIEW -->
<section
	class="border-t border-slate-200 bg-slate-100/70 py-16 transition-colors duration-200 lg:py-24 dark:border-slate-800 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-12 max-w-2xl space-y-3 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Pertanyaan Umum
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Masih Punya Pertanyaan Seputar Pembuatan Website?
			</h3>
		</div>

		<FaqAccordion initialCategory="Semua" />
	</div>
</section>

<!-- CTA BANNER -->
<CtaBanner />
