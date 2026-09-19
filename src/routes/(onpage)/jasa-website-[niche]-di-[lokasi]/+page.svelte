<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import NichePricing from '$lib/components/NichePricing.svelte';
	import { CheckCircle2, MessageSquare, MapPin, ArrowRight } from 'lucide-svelte';

	let { data } = $props();
	const { niche, location } = data;
</script>

<svelte:head>
	<title>Jasa Pembuatan Website {niche.label} di {location.name} | Barizaloka</title>
	<meta
		name="description"
		content="Jasa pembuatan website {niche.label} profesional dan modern di {location.name}, {location.provinceName}. Sistem pengerjaan cepat, fitur lengkap, dan garansi 1 tahun."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[
			{ label: `Jasa Website di ${location.name}`, href: `/jasa-website-di-${location.slug}` },
			{ label: `Website ${niche.label} di ${location.name}` }
		]}
	/>

	<!-- Hero -->
	<div class="my-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
		<div class="space-y-6 lg:col-span-7">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
			>
				<MapPin class="h-4 w-4" />
				<span>Spesialis Web {niche.label} di {location.name}</span>
			</div>

			<h1 class="text-3xl leading-tight font-black text-slate-900 sm:text-5xl dark:text-white">
				Jasa Pembuatan Website <span class="text-emerald-600 dark:text-emerald-400"
					>{niche.label}</span
				>
				di {location.name}
			</h1>

			<p class="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
				{niche.tagline}
			</p>

			<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
				{niche.description} Kami hadir melayani pembuatan dan pengembangan sistem website {niche.label}
				di kawasan {location.type}
				{location.name} dan sekitarnya dengan penawaran harga terbaik.
			</p>

			<div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20website%20{encodeURIComponent(
						niche.label
					)}%20di%20{encodeURIComponent(location.name)}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 sm:w-auto"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Pesan Website {niche.label} di {location.name}</span>
				</a>
				<div class="text-xs font-bold text-emerald-600 dark:text-emerald-400">
					Mulai {niche.priceStarting}
				</div>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div
				class="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90"
			>
				<h3 class="text-lg font-bold text-slate-900 dark:text-white">
					Keunggulan Modul {niche.label}
				</h3>
				<ul
					class="space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300"
				>
					{#each niche.benefits as benefit}
						<li class="flex items-start gap-2.5">
							<CheckCircle2
								class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
							/>
							<span>{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<!-- Features Grid -->
	<div class="my-20 space-y-8">
		<div class="mx-auto max-w-2xl space-y-2 text-center">
			<h2
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Fitur Unggulan
			</h2>
			<h3 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Fitur Terintegrasi untuk {niche.label} di {location.name}
			</h3>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each niche.features as feat}
				<div
					class="space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 font-bold text-emerald-600 dark:text-emerald-400"
					>
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<h4 class="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h4>
					<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Retail vs Custom Pricing Section -->
	<NichePricing
		retailPackages={niche.retailPackages}
		customSolution={niche.customSolution}
		nicheLabel={niche.label}
		locationName={location.name}
	/>

	<FaqAccordion initialCategory="Semua" />

	<CtaBanner
		title="Siap Mendigitalisasi {niche.label} Anda di {location.name}?"
		description="Konsultasikan desain, alur informasi, dan penawaran harga khusus wilayah {location.name}."
		whatsappMessage="Halo Barizaloka, saya mau pesan website {niche.label} di {location.name}"
	/>
</div>
