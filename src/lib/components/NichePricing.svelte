<script lang="ts">
	import type { RetailPackage, CustomSolution } from '$lib/data/niche_pages';
	import {
		CheckCircle2,
		MessageSquare,
		ExternalLink,
		Wrench,
		Sparkles,
		ArrowRight,
		ShieldCheck
	} from 'lucide-svelte';

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
	<div class="mx-auto max-w-3xl space-y-3 text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
		>
			<Sparkles class="h-3.5 w-3.5" />
			<span>Paket Retail Instan (Fixed Price)</span>
		</div>
		<h2 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
			Paket Website {nicheLabel}{locationText} Siap Pakai
		</h2>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
			Harga transparan tanpa biaya tersembunyi, pengerjaan cepat, lengkap dengan fitur standar dan
			gratis domain + hosting.
		</p>
	</div>

	<!-- Retail Packages Grid -->
	{#if retailPackages && retailPackages.length > 0}
		<div class="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
			{#each retailPackages as pkg}
				<div
					class="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl transition-all hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/90"
				>
					{#if pkg.isPopular}
						<div
							class="absolute -top-3.5 right-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1 text-xs font-black text-slate-950 shadow-md"
						>
							Paling Rekomendasi
						</div>
					{/if}

					<div class="space-y-6">
						<div>
							<h3 class="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
							{#if pkg.description}
								<p class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
									{pkg.description}
								</p>
							{/if}
						</div>

						<div class="space-y-1 border-b border-slate-200 pb-6 dark:border-slate-800">
							<div class="flex items-baseline gap-2">
								<span class="text-3xl font-black text-emerald-600 sm:text-4xl dark:text-emerald-400"
									>{pkg.price}</span
								>
								<span class="text-xs font-bold text-slate-500 dark:text-slate-400"
									>(Terima Beres)</span
								>
							</div>
							{#if pkg.renewalPrice}
								<div class="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
									Perpanjang tahun depan: <span class="font-bold">{pkg.renewalPrice}</span>
								</div>
							{/if}
						</div>

						<ul class="space-y-3 text-xs text-slate-700 dark:text-slate-300">
							{#each pkg.features as feat}
								<li class="flex items-start gap-2.5">
									<CheckCircle2
										class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
									/>
									<span>{feat}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-8 space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800">
						{#if pkg.demoUrl}
							<a
								href={pkg.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white py-3 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
							>
								<ExternalLink class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
								<span>Lihat Live Demo</span>
							</a>
						{/if}

						<a
							href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Barizaloka, saya mau pesan ${pkg.name} untuk Website ${nicheLabel}${locationText}`)}`}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-300"
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
		<div
			class="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 text-white shadow-2xl sm:p-12 dark:bg-slate-950"
		>
			<div
				class="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
			></div>

			<div class="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
				<div class="space-y-4 lg:col-span-8">
					<div
						class="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400"
					>
						<Wrench class="h-3.5 w-3.5" />
						<span>Layanan Custom & Tailor-Made</span>
					</div>

					<h3 class="text-2xl leading-tight font-black text-white sm:text-3xl">
						{customSolution.title}
					</h3>

					<p class="text-xs leading-relaxed text-slate-300 sm:text-sm">
						{customSolution.description}
					</p>

					<div class="space-y-2 pt-2">
						<div class="text-xs font-bold tracking-wider text-emerald-400 uppercase">
							Modul & Kapabilitas Custom Populer:
						</div>
						<ul class="grid grid-cols-1 gap-2 text-xs text-slate-300 sm:grid-cols-2">
							{#each customSolution.customFeatures as cFeat}
								<li class="flex items-center gap-2">
									<ShieldCheck class="h-4 w-4 flex-shrink-0 text-emerald-400" />
									<span>{cFeat}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="flex flex-col items-start justify-center lg:col-span-4 lg:items-end">
					<a
						href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Barizaloka, saya ingin diskusi kebutuhan website/sistem CUSTOM untuk ${nicheLabel}${locationText}`)}`}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-4 text-xs font-black text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 sm:w-auto"
					>
						<MessageSquare class="h-4.5 w-4.5" />
						<span>Konsultasi Custom Gratis</span>
						<ArrowRight class="h-4 w-4" />
					</a>
					<span class="mt-2 w-full text-center text-[11px] text-slate-400 lg:text-right"
						>Estimasi pengerjaan & modul disesuaikan kebutuhan</span
					>
				</div>
			</div>
		</div>
	{/if}
</section>
