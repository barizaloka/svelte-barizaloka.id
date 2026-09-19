<script lang="ts">
	import type { RetailPackage, CustomSolution } from '$lib/data/niche_pages';
	import { CheckCircle2, MessageSquare, ExternalLink, Wrench, Sparkles, ArrowRight, ShieldCheck } from 'lucide-svelte';

	let {
		retailPackages = [] as RetailPackage[],
		customSolution = undefined as CustomSolution | undefined,
		nicheLabel = '',
		locationName = ''
	} = $props();

	const locationText = $derived(locationName ? ` di ${locationName}` : '');
</script>

<section class="my-20 space-y-16">
	<!-- Retail Section Header -->
	<div class="text-center max-w-3xl mx-auto space-y-3">
		<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
			<Sparkles class="h-3.5 w-3.5" />
			<span>Paket Retail Instan (Fixed Price)</span>
		</div>
		<h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
			Paket Website {nicheLabel}{locationText} Siap Pakai
		</h2>
		<p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
			Harga transparan tanpa biaya tersembunyi, pengerjaan cepat, lengkap dengan fitur standar dan gratis domain + hosting.
		</p>
	</div>

	<!-- Retail Packages Grid -->
	{#if retailPackages && retailPackages.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
			{#each retailPackages as pkg}
				<div class="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-8 dark:border-slate-800 dark:bg-slate-900/90 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-500/40">
					{#if pkg.isPopular}
						<div class="absolute -top-3.5 right-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1 text-xs font-black text-slate-950 shadow-md">
							Paling Rekomendasi
						</div>
					{/if}

					<div class="space-y-6">
						<div>
							<h3 class="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
							{#if pkg.description}
								<p class="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{pkg.description}</p>
							{/if}
						</div>

						<div class="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-6">
							<div class="flex items-baseline gap-2">
								<span class="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">{pkg.price}</span>
								<span class="text-xs font-bold text-slate-500 dark:text-slate-400">(Terima Beres)</span>
							</div>
							{#if pkg.renewalPrice}
								<div class="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
									Perpanjang tahun depan: <span class="font-bold">{pkg.renewalPrice}</span>
								</div>
							{/if}
						</div>

						<ul class="space-y-3 text-xs text-slate-700 dark:text-slate-300">
							{#each pkg.features as feat}
								<li class="flex items-start gap-2.5">
									<CheckCircle2 class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
									<span>{feat}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-8 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
						{#if pkg.demoUrl}
							<a
								href={pkg.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm"
							>
								<ExternalLink class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
								<span>Lihat Live Demo</span>
							</a>
						{/if}

						<a
							href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Barizaloka, saya mau pesan ${pkg.name} untuk Website ${nicheLabel}${locationText}`)}`}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-300 transition-all"
						>
							<MessageSquare class="h-4 w-4" />
							<span>Pesan Paket {pkg.name}</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- Custom Development Banner -->
	{#if customSolution}
		<div class="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-900 dark:bg-slate-950 p-8 sm:p-12 text-white shadow-2xl relative">
			<div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>

			<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				<div class="lg:col-span-8 space-y-4">
					<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
						<Wrench class="h-3.5 w-3.5" />
						<span>Layanan Custom & Tailor-Made</span>
					</div>

					<h3 class="text-2xl sm:text-3xl font-black text-white leading-tight">
						{customSolution.title}
					</h3>

					<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
						{customSolution.description}
					</p>

					<div class="space-y-2 pt-2">
						<div class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Modul & Kapabilitas Custom Populer:</div>
						<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
							{#each customSolution.customFeatures as cFeat}
								<li class="flex items-center gap-2">
									<ShieldCheck class="h-4 w-4 text-emerald-400 flex-shrink-0" />
									<span>{cFeat}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
					<a
						href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Barizaloka, saya ingin diskusi kebutuhan website/sistem CUSTOM untuk ${nicheLabel}${locationText}`)}`}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-4 text-xs font-black text-slate-950 shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 transition-all"
					>
						<MessageSquare class="h-4.5 w-4.5" />
						<span>Konsultasi Custom Gratis</span>
						<ArrowRight class="h-4 w-4" />
					</a>
					<span class="mt-2 text-[11px] text-slate-400 text-center lg:text-right w-full">Estimasi pengerjaan & modul disesuaikan kebutuhan</span>
				</div>
			</div>
		</div>
	{/if}
</section>
