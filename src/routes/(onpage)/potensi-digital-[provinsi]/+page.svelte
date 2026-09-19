<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { LOCATION_PAGES } from '$lib/data/location_pages';
	import { Sparkles, MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-svelte';

	let { data } = $props();
	const { provinsi } = data;

	const provinceLocations = provinsi.topLocations
		.map((slug) => LOCATION_PAGES[slug])
		.filter(Boolean);
</script>

<svelte:head>
	<title>Potensi Digital {provinsi.name} & Jasa Pembuatan Website | Barizaloka</title>
	<meta
		name="description"
		content="Analisis potensi digital & solusi pembuatan website profesional di wilayah Provinsi {provinsi.name}. Layanan web developer terpercaya dari Barizaloka."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: `Potensi Digital ${provinsi.name}` }]} />

	<!-- Hero -->
	<div class="my-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
		<div class="space-y-6 lg:col-span-7">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
			>
				<Sparkles class="h-4 w-4" />
				<span>Transformasi Digital Provinsi {provinsi.name}</span>
			</div>

			<h1 class="text-3xl leading-tight font-black text-slate-900 sm:text-5xl dark:text-white">
				Potensi Digital & Jasa Website di <span class="text-emerald-600 dark:text-emerald-400"
					>{provinsi.name}</span
				>
			</h1>

			<p class="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
				{provinsi.description}
			</p>

			<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
				{provinsi.digitalPotential} Barizaloka hadir memberikan pendampingan pembuatan website yang cepat,
				aman, dan berstandar internasional bagi kota & kabupaten di {provinsi.name}.
			</p>

			<div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20website%20area%20{encodeURIComponent(
						provinsi.name
					)}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 sm:w-auto"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi Area {provinsi.name}</span>
				</a>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div
				class="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90"
			>
				<h3 class="text-lg font-bold text-slate-900 dark:text-white">Ringkasan Wilayah</h3>
				<div
					class="space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300"
				>
					<div class="flex justify-between border-b border-slate-200 pb-2 dark:border-slate-800/60">
						<span class="text-slate-500 dark:text-slate-400">Ibu Kota Provinsi:</span>
						<span class="font-bold text-emerald-600 dark:text-emerald-400">{provinsi.capital}</span>
					</div>
					<div class="flex justify-between border-b border-slate-200 pb-2 dark:border-slate-800/60">
						<span class="text-slate-500 dark:text-slate-400">Dukungan Garansi:</span>
						<span class="font-bold text-slate-900 dark:text-white">1 Tahun Full Support</span>
					</div>
					<div class="flex justify-between border-b border-slate-200 pb-2 dark:border-slate-800/60">
						<span class="text-slate-500 dark:text-slate-400">Domain & Hosting:</span>
						<span class="font-bold text-slate-900 dark:text-white">Gratis Tahun Pertama</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Locations List -->
	{#if provinceLocations.length > 0}
		<div class="my-20 space-y-8">
			<div class="mx-auto max-w-2xl space-y-2 text-center">
				<h2
					class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
				>
					Cakupan Wilayah
				</h2>
				<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
					Layanan Web di Kota & Kabupaten {provinsi.name}
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each provinceLocations as loc}
					<a
						href="/jasa-website-di-{loc.slug}"
						class="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-colors hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/60"
					>
						<div
							class="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400"
						>
							<MapPin class="h-4 w-4" />
							<span>{loc.type} {loc.name}</span>
						</div>
						<p class="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{loc.highlights}
						</p>
						<div
							class="flex items-center gap-1 pt-2 text-xs font-bold text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400"
						>
							<span>Jelajahi Jasa Website {loc.name}</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<FaqAccordion initialCategory="Umum" />

	<CtaBanner
		title="Akselerasi Transformasi Digital di {provinsi.name}"
		description="Konsultasikan pembuatan website lembaga, desa, atau bisnis Anda bersama tim profesional Barizaloka."
		whatsappMessage="Halo Barizaloka, saya tertarik konsultasi website di {provinsi.name}"
	/>
</div>
