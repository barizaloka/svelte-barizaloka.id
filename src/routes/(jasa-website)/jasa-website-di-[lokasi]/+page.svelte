<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { LOCATION_PAGES } from '$lib/data/location_pages';
	import {
		MapPin,
		CheckCircle2,
		MessageSquare,
		ArrowRight,
		Sparkles,
		ShieldCheck
	} from 'lucide-svelte';

	let { data } = $props();
	const { location } = data;

	const niches = Object.values(NICHE_PAGES);
	const nearbyList = location.nearbyLocations.map((slug) => LOCATION_PAGES[slug]).filter(Boolean);
</script>

<svelte:head>
	<title>Jasa Pembuatan Website di {location.name} Professional & Terjangkau | Barizaloka</title>
	<meta
		name="description"
		content="Jasa pembuatan website profesional di {location.name}, {location.provinceName}. Spesialis website pesantren, masjid, desa digital, UMKM, dan toko lokal di {location.name}."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[{ label: 'Jangkauan Wilayah' }, { label: `Jasa Website di ${location.name}` }]}
	/>

	<!-- Hero Header -->
	<div class="my-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
		<div class="space-y-6 lg:col-span-7">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
			>
				<MapPin class="h-4 w-4" />
				<span>Layanan IT & Web Developer Area {location.name}</span>
			</div>

			<h1 class="text-3xl leading-tight font-black text-slate-900 sm:text-5xl dark:text-white">
				Jasa Pembuatan Website di <span class="text-emerald-600 dark:text-emerald-400"
					>{location.name}</span
				>
			</h1>

			<p class="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
				Solusi web developer terpercaya untuk memajukan lembaga, desa, masjid, dan bisnis UMKM di {location.type}
				{location.name} dan sekitarnya.
			</p>

			<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
				{location.highlights} Tim Barizaloka siap membantu pembuatan website modern, cepat diakses di
				koneksi seluler, dan teroptimasi SEO Lokal di pencarian Google {location.name}.
			</p>

			<div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20jasa%20website%20di%20{encodeURIComponent(
						location.name
					)}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 sm:w-auto"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi WA {location.name}</span>
				</a>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div
				class="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90"
			>
				<h3 class="text-lg font-bold text-slate-900 dark:text-white">
					Mengapa Pilih Barizaloka di {location.name}?
				</h3>
				<ul
					class="space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300"
				>
					<li class="flex items-start gap-2.5">
						<CheckCircle2
							class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
						/>
						<span>Pengalaman mendampingi instansi & UMKM di {location.provinceName}</span>
					</li>
					<li class="flex items-start gap-2.5">
						<CheckCircle2
							class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
						/>
						<span>Optimasi Google Maps & Kata Kunci SEO Lokal di {location.name}</span>
					</li>
					<li class="flex items-start gap-2.5">
						<CheckCircle2
							class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
						/>
						<span>Pendampingan admin gratis hingga mahir mengelola website</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Niche combinations in location -->
	<div class="my-20 space-y-8">
		<div class="mx-auto max-w-2xl space-y-2 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Spesialisasi Sektor di {location.name}
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Pilih Layanan Niche di {location.name}
			</h3>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each niches as niche}
				<a
					href="/jasa-website-{niche.slug}-di-{location.slug}"
					class="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-colors hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/60"
				>
					<h4
						class="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
					>
						Jasa Website {niche.label} di {location.name}
					</h4>
					<p class="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						{niche.tagline}
					</p>
					<div
						class="flex items-center gap-1 pt-2 text-xs font-bold text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400"
					>
						<span>Lihat Penawaran {location.name}</span>
						<ArrowRight class="h-3.5 w-3.5" />
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Nearby Locations -->
	{#if nearbyList.length > 0}
		<div
			class="my-16 space-y-4 rounded-3xl border border-slate-200 bg-slate-100/80 p-8 text-center dark:border-slate-800 dark:bg-slate-900/40"
		>
			<h3 class="text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
				Jasa Website di Wilayah Sekitar {location.name}
			</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each nearbyList as near}
					<a
						href="/jasa-website-di-{near.slug}"
						class="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
					>
						📍 Website di {near.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<FaqAccordion initialCategory="Umum" />

	<CtaBanner
		title="Siap Memulai Proyek Website di {location.name}?"
		description="Konsultasikan konsep desain dan kebutuhan website Anda bersama tim Barizaloka."
		whatsappMessage="Halo Barizaloka, saya tertarik membuat website di {location.name}"
	/>
</div>
