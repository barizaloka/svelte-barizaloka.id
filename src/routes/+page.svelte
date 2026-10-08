<script lang="ts">
	import {
		GraduationCap,
		Landmark,
		Building2,
		Store,
		Zap,
		CheckCircle2,
		ArrowRight,
		MessageSquare,
		Globe,
		Search,
		Sparkles
	} from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { PRICING_PACKAGES } from '$lib/data/pricing_data';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';

	const niches = Object.values(NICHE_PAGES);
	const packages = PRICING_PACKAGES;

	let domainQuery = $state('');

	function handleDomainSearch(e: SubmitEvent) {
		e.preventDefault();
		const trimmed = domainQuery.trim();
		if (trimmed) {
			goto(`/cek-domain?domain=${encodeURIComponent(trimmed)}`);
		}
	}
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
	class="relative overflow-hidden bg-slate-50/70 pt-16 pb-16 transition-colors duration-200 lg:pt-24 lg:pb-24 dark:bg-slate-950"
>
	<!-- Dot Grid Pattern (webekspor style) -->
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
		style="background-image:radial-gradient(circle, #059669 1.2px, transparent 1.2px);background-size:24px 24px"
	></div>

	<!-- Subtle ambient top gradient -->
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent dark:from-emerald-500/10"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl space-y-6 text-center">
			<!-- Tag / Badge (webekspor style) -->
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 pl-2 pr-4 py-1.5"
			>
				<span
					class="inline-flex size-6 items-center justify-center rounded-full bg-emerald-600 text-white"
				>
					<Sparkles class="size-3.5" />
				</span>
				<span
					class="font-semibold text-[11px] tracking-[0.22em] uppercase text-slate-900 dark:text-emerald-300"
				>
					Bikin Website · Siap Pakai & Tanpa Ribet
				</span>
			</div>

			<!-- Main Heading with skewed highlight (webekspor style) -->
			<h1
				class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white leading-[1.1] sm:leading-[1.15]"
			>
				Sebelum daftar, donasi, atau transfer, mereka cek
				<span class="relative inline-block whitespace-nowrap">
					<span class="relative z-10 italic font-semibold text-emerald-700 dark:text-emerald-400">website Anda</span>
					<span
						aria-hidden="true"
						class="absolute inset-x-0 bottom-1 sm:bottom-2 h-3 sm:h-4 lg:h-5 -skew-x-6 bg-emerald-400/40 dark:bg-emerald-500/30 -z-0 rounded-xs"
					></span>
				</span>
				dulu.
			</h1>

			<!-- Subtitle -->
			<p
				class="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
			>
				Beri kesan pertama yang profesional dan terpercaya. Kami hadirkan website resmi yang cepat,
				elegan, dan siap pakai untuk pesantren, masjid, layanan desa, hingga UMKM Anda.
			</p>

			<!-- Mulai Dari Price Tag (webekspor style) -->
			<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pt-1">
				<span
					class="font-semibold text-[11px] tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400"
				>
					Mulai dari
				</span>
				<span class="font-extrabold text-2xl lg:text-3xl tabular-nums text-slate-900 dark:text-white">
					Rp 1.000.000
				</span>
				<span class="font-medium text-sm text-slate-500 dark:text-slate-400">/tahun</span>
				<span
					class="font-medium text-sm text-slate-400 dark:text-slate-500 line-through tabular-nums"
				>
					Rp 1.500.000
				</span>
			</div>

			<!-- Domain Search Input & Button (webekspor style) -->
			<div class="mx-auto w-full max-w-xl pt-2">
				<form
					onsubmit={handleDomainSearch}
					class="flex w-full flex-col items-stretch gap-2.5 sm:flex-row"
				>
					<input
						type="text"
						bind:value={domainQuery}
						placeholder="ketik nama domain kamu..."
						class="flex-1 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm text-slate-900 shadow-2xs outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-600 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
					/>
					<button
						type="submit"
						disabled={!domainQuery.trim()}
						class="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-500 dark:hover:text-white"
					>
						<span>Cari Domain</span>
						<span
							class="flex size-6 items-center justify-center rounded-full bg-emerald-500 text-slate-950 transition-colors duration-300 group-hover:bg-white group-hover:text-emerald-600 dark:bg-emerald-500 dark:text-white"
						>
							<ArrowRight class="size-3.5" />
						</span>
					</button>
				</form>
				<p class="mt-2.5 text-xs text-slate-500 dark:text-slate-400">
					Sudah termasuk gratis domain (.com / .id / .desa.id) & hosting 1 tahun di semua paket.
				</p>
			</div>

			<!-- Action Links (webekspor style) -->
			<div class="flex flex-wrap items-center justify-center gap-4 pt-1 text-sm">
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
				>
					<MessageSquare class="size-4" />
					<span>Konsultasi WA Gratis</span>
				</a>
				<span class="text-slate-300 dark:text-slate-700">•</span>
				<a
					href="/harga"
					class="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
				>
					<span>Lihat Paket Harga</span>
					<ArrowRight class="size-3.5 text-slate-400" />
				</a>
			</div>

			<!-- Quick Value Proposition Highlights -->
			<div class="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
				<div class="grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:text-center">
					<div
						class="flex items-center gap-2 text-xs font-medium text-slate-600 sm:justify-center dark:text-slate-400"
					>
						<CheckCircle2 class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Mobile-Friendly & Cepat</span>
					</div>
					<div
						class="flex items-center gap-2 text-xs font-medium text-slate-600 sm:justify-center dark:text-slate-400"
					>
						<CheckCircle2 class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Gratis Domain & Hosting 1 Th</span>
					</div>
					<div
						class="flex items-center gap-2 text-xs font-medium text-slate-600 sm:justify-center dark:text-slate-400"
					>
						<CheckCircle2 class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Garansi Maintenance 1 Tahun</span>
					</div>
					<div
						class="flex items-center gap-2 text-xs font-medium text-slate-600 sm:justify-center dark:text-slate-400"
					>
						<CheckCircle2 class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Bantu Legalitas .desa / .or.id</span>
					</div>
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
							href="https://wa.me/6285188158542?text={encodeURIComponent(pkg.whatsappMessage)}"
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

<!-- FAQ SECTION PREVIEW -->
<section
	class="border-t border-slate-200 bg-slate-50 py-16 transition-colors duration-200 lg:py-24 dark:border-slate-800 dark:bg-slate-950"
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
