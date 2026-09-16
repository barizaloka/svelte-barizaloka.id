<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import NichePricing from '$lib/components/NichePricing.svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { Building2, CheckCircle2, MessageSquare } from 'lucide-svelte';

	const niche = NICHE_PAGES.desa;
</script>

<svelte:head>
	<title>{niche.title} | Barizaloka</title>
	<meta name="description" content={niche.description} />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Layanan Niche' }, { label: niche.label }]} />

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center my-12">
		<div class="lg:col-span-7 space-y-6">
			<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
				<Building2 class="h-4 w-4" />
				<span>Portal Publik Desa Cyber</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
				{niche.title}
			</h1>

			<p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
				{niche.tagline}
			</p>

			<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
				{niche.description}
			</p>

			<div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
				<a
					href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20tertarik%20pembuatan%20website%20Desa"
					target="_blank"
					rel="noopener noreferrer"
					class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 transition-all"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi Portal Desa</span>
				</a>
				<div class="text-xs font-bold text-emerald-600 dark:text-emerald-400">
					Mulai {niche.priceStarting}
				</div>
			</div>
		</div>

		<div class="lg:col-span-5">
			<div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/90 p-8 shadow-2xl space-y-6">
				<h3 class="text-lg font-bold text-slate-900 dark:text-white">Keunggulan Portal Desa Cyber</h3>
				<ul class="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4 text-xs text-slate-700 dark:text-slate-300">
					{#each niche.benefits as benefit}
						<li class="flex items-start gap-2.5">
							<CheckCircle2 class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
							<span>{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="my-20 space-y-8">
		<div class="text-center max-w-2xl mx-auto space-y-2">
			<h2 class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Fitur Unggulan</h2>
			<h3 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Modul Layanan Mandiri Desa</h3>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each niche.features as feat}
				<div class="rounded-3xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 p-6 space-y-3 shadow-sm">
					<div class="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<h4 class="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h4>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Retail vs Custom Pricing Section -->
	<NichePricing
		retailPackages={niche.retailPackages}
		customSolution={niche.customSolution}
		nicheLabel={niche.label}
	/>

	<FaqAccordion initialCategory="Desa & UMKM" />

	<CtaBanner
		title="Siap Mewujudkan Desa Digital Mandiri?"
		description="Bantu percepatan layanan administrasi warga dan transparansi publik desa Anda bersama Barizaloka."
		whatsappMessage="Halo Barizaloka, saya berminat konsultasi pembuatan website desa."
	/>
</div>
