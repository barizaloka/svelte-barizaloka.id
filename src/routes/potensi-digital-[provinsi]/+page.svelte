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

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: `Potensi Digital ${provinsi.name}` }]} />

	<!-- Hero -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center my-12">
		<div class="lg:col-span-7 space-y-6">
			<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
				<Sparkles class="h-4 w-4" />
				<span>Transformasi Digital Provinsi {provinsi.name}</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-black text-white leading-tight">
				Potensi Digital & Jasa Website di <span class="text-emerald-400">{provinsi.name}</span>
			</h1>

			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				{provinsi.description}
			</p>

			<p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
				{provinsi.digitalPotential} Barizaloka hadir memberikan pendampingan pembuatan website yang cepat, aman, dan berstandar internasional bagi kota & kabupaten di {provinsi.name}.
			</p>

			<div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20website%20area%20{encodeURIComponent(provinsi.name)}"
					target="_blank"
					rel="noopener noreferrer"
					class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 transition-all"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi Area {provinsi.name}</span>
				</a>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl space-y-6">
				<h3 class="text-lg font-bold text-white">Ringkasan Wilayah</h3>
				<div class="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
					<div class="flex justify-between border-b border-slate-800/60 pb-2">
						<span class="text-slate-400">Ibu Kota Provinsi:</span>
						<span class="font-bold text-emerald-400">{provinsi.capital}</span>
					</div>
					<div class="flex justify-between border-b border-slate-800/60 pb-2">
						<span class="text-slate-400">Dukungan Garansi:</span>
						<span class="font-bold text-white">1 Tahun Full Support</span>
					</div>
					<div class="flex justify-between border-b border-slate-800/60 pb-2">
						<span class="text-slate-400">Domain & Hosting:</span>
						<span class="font-bold text-white">Gratis Tahun Pertama</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Locations List -->
	{#if provinceLocations.length > 0}
		<div class="my-20 space-y-8">
			<div class="text-center max-w-2xl mx-auto space-y-2">
				<h2 class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Cakupan Wilayah</h2>
				<h3 class="text-2xl sm:text-4xl font-extrabold text-white">Layanan Web di Kota & Kabupaten {provinsi.name}</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each provinceLocations as loc}
					<a
						href="/jasa-website-di-{loc.slug}"
						class="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-colors"
					>
						<div class="flex items-center gap-2 text-emerald-400 font-bold text-sm">
							<MapPin class="h-4 w-4" />
							<span>{loc.type} {loc.name}</span>
						</div>
						<p class="text-xs text-slate-400 leading-relaxed line-clamp-2">
							{loc.highlights}
						</p>
						<div class="pt-2 text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
