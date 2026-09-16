<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { LOCATION_PAGES } from '$lib/data/location_pages';
	import { MapPin, CheckCircle2, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from 'lucide-svelte';

	let { data } = $props();
	const { location } = data;

	const niches = Object.values(NICHE_PAGES);
	const nearbyList = location.nearbyLocations
		.map((slug) => LOCATION_PAGES[slug])
		.filter(Boolean);
</script>

<svelte:head>
	<title>Jasa Pembuatan Website di {location.name} Professional & Terjangkau | Barizaloka</title>
	<meta
		name="description"
		content="Jasa pembuatan website profesional di {location.name}, {location.provinceName}. Spesialis website pesantren, masjid, desa digital, UMKM, dan toko lokal di {location.name}."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Jangkauan Wilayah' },
			{ label: `Jasa Website di ${location.name}` }
		]}
	/>

	<!-- Hero Header -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center my-12">
		<div class="lg:col-span-7 space-y-6">
			<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
				<MapPin class="h-4 w-4" />
				<span>Layanan IT & Web Developer Area {location.name}</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-black text-white leading-tight">
				Jasa Pembuatan Website di <span class="text-emerald-400">{location.name}</span>
			</h1>

			<p class="text-base sm:text-lg text-slate-300 leading-relaxed">
				Solusi web developer terpercaya untuk memajukan lembaga, desa, masjid, dan bisnis UMKM di {location.type} {location.name} dan sekitarnya.
			</p>

			<p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
				{location.highlights} Tim Barizaloka siap membantu pembuatan website modern, cepat diakses di koneksi seluler, dan teroptimasi SEO Lokal di pencarian Google {location.name}.
			</p>

			<div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20jasa%20website%20di%20{encodeURIComponent(location.name)}"
					target="_blank"
					rel="noopener noreferrer"
					class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 transition-all"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi WA {location.name}</span>
				</a>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl space-y-6">
				<h3 class="text-lg font-bold text-white">Mengapa Pilih Barizaloka di {location.name}?</h3>
				<ul class="space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-300">
					<li class="flex items-start gap-2.5">
						<CheckCircle2 class="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
						<span>Pengalaman mendampingi instansi & UMKM di {location.provinceName}</span>
					</li>
					<li class="flex items-start gap-2.5">
						<CheckCircle2 class="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
						<span>Optimasi Google Maps & Kata Kunci SEO Lokal di {location.name}</span>
					</li>
					<li class="flex items-start gap-2.5">
						<CheckCircle2 class="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
						<span>Pendampingan admin gratis hingga mahir mengelola website</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Niche combinations in location -->
	<div class="my-20 space-y-8">
		<div class="text-center max-w-2xl mx-auto space-y-2">
			<h2 class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Spesialisasi Sektor di {location.name}</h2>
			<h3 class="text-2xl sm:text-4xl font-extrabold text-white">Pilih Layanan Niche di {location.name}</h3>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each niches as niche}
				<a
					href="/jasa-website-{niche.slug}-di-{location.slug}"
					class="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-emerald-500/40 transition-colors"
				>
					<h4 class="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
						Jasa Website {niche.label} di {location.name}
					</h4>
					<p class="text-xs text-slate-400 leading-relaxed line-clamp-2">
						{niche.tagline}
					</p>
					<div class="pt-2 text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
						<span>Lihat Penawaran {location.name}</span>
						<ArrowRight class="h-3.5 w-3.5" />
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Nearby Locations -->
	{#if nearbyList.length > 0}
		<div class="my-16 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center space-y-4">
			<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Jasa Website di Wilayah Sekitar {location.name}</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each nearbyList as near}
					<a
						href="/jasa-website-di-{near.slug}"
						class="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-all"
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
