<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { PRICING_PACKAGES } from '$lib/data/pricing_data';
	import { CheckCircle2, MessageSquare, ShieldCheck, HelpCircle, XCircle } from 'lucide-svelte';

	const packages = PRICING_PACKAGES;

	const featureComparison = [
		{ feature: 'Gratis Domain (.com / .id / .desa.id)', starter: true, business: true, enterprise: true },
		{ feature: 'High-Speed NVMe SSD Cloud Hosting', starter: true, business: true, enterprise: true },
		{ feature: 'SSL Security (HTTPS Encrypted)', starter: true, business: true, enterprise: true },
		{ feature: 'Mobile & Tablet 100% Responsive', starter: true, business: true, enterprise: true },
		{ feature: 'Checkout Direct to WhatsApp', starter: true, business: true, enterprise: true },
		{ feature: 'Multi-Page Halaman Lengkap', starter: false, business: true, enterprise: true },
		{ feature: 'Dashboard Admin Kelola Konten', starter: false, business: true, enterprise: true },
		{ feature: 'Sistem Laporan Kas / Donasi QRIS', starter: false, business: true, enterprise: true },
		{ feature: 'Modul PSB Online / Layanan Surat Desa', starter: false, business: false, enterprise: true },
		{ feature: 'Pelatihan Admin Langsung & Training', starter: false, business: 'Video', enterprise: 'Direct/Zoom' },
		{ feature: 'Garansi Maintenance & Support', starter: '1 Tahun', business: '1 Tahun', enterprise: '1 Tahun Full 24/7' }
	];
</script>

<svelte:head>
	<title>Harga & Paket Jasa Pembuatan Website | Barizaloka</title>
	<meta name="description" content="Daftar paket harga jasa pembuatan website murah & profesional dari Barizaloka. Paket Landing Page, Paket Standard Bisnis, Paket SIM Pesantren & Desa Digital." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Harga & Paket Jasa Website' }]} />

	<!-- Header Title -->
	<div class="text-center max-w-3xl mx-auto my-12 space-y-4">
		<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
			<span>Penawaran Transparan Tanpa Biaya Tersembunyi</span>
		</div>
		<h1 class="text-3xl sm:text-5xl font-black text-white">
			Paket Harga Jasa Pembuatan Website
		</h1>
		<p class="text-sm sm:text-base text-slate-300 leading-relaxed">
			Pilih paket yang paling pas untuk pesantren, masjid, desa, atau UMKM Anda. Seluruh paket sudah termasuk Gratis Domain, Hosting, dan Garansi 1 Tahun.
		</p>
	</div>

	<!-- Pricing Cards -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch my-12">
		{#each packages as pkg}
			<div
				class="relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 {pkg.popular ? 'border-emerald-500 bg-slate-900 shadow-2xl shadow-emerald-500/10 scale-[1.02]' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}"
			>
				{#if pkg.badge}
					<div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
						<span class="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1 text-[11px] font-extrabold text-slate-950 uppercase tracking-wider shadow-md">
							{pkg.badge}
						</span>
					</div>
				{/if}

				<div class="space-y-6">
					<div>
						<h3 class="text-xl font-bold text-white">{pkg.name}</h3>
						<p class="text-xs text-slate-400 mt-1.5 leading-relaxed min-h-[36px]">{pkg.tagline}</p>
					</div>

					<div class="flex items-baseline gap-2">
						<span class="text-3xl font-black text-emerald-400">{pkg.price}</span>
						{#if pkg.originalPrice}
							<span class="text-xs text-slate-500 line-through">{pkg.originalPrice}</span>
						{/if}
					</div>

					<div class="space-y-2 border-t border-slate-800 pt-6">
						<div class="text-xs font-bold uppercase tracking-wider text-slate-400">Target Pengguna:</div>
						<div class="text-xs text-emerald-300 font-semibold bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-2.5">
							{pkg.targetAudience}
						</div>
					</div>

					<div class="space-y-2 border-t border-slate-800 pt-4">
						<div class="text-xs font-bold uppercase tracking-wider text-slate-400">Daftar Fitur:</div>
						<ul class="space-y-2.5 text-xs text-slate-300">
							{#each pkg.features as feat}
								<li class="flex items-start gap-2">
									<CheckCircle2 class="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
									<span>{feat}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-8 pt-6 border-t border-slate-800">
					<a
						href="https://wa.me/6281234567890?text={encodeURIComponent(pkg.whatsappMessage)}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-all {pkg.popular ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}"
					>
						<MessageSquare class="h-4 w-4" />
						<span>{pkg.ctaText}</span>
					</a>
				</div>
			</div>
		{/each}
	</div>

	<!-- Feature Comparison Table -->
	<div class="my-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl">
		<h3 class="text-xl font-bold text-white mb-6 text-center">
			Tabel Perbandingan Fitur Paket
		</h3>

		<div class="overflow-x-auto">
			<table class="w-full text-left text-xs text-slate-300">
				<thead class="border-b border-slate-800 text-slate-400 font-bold uppercase">
					<tr>
						<th class="py-3.5 px-4">Fitur Utama</th>
						<th class="py-3.5 px-4 text-center">Starter</th>
						<th class="py-3.5 px-4 text-center">Standard Bisnis</th>
						<th class="py-3.5 px-4 text-center">Custom Complete</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-800/60">
					{#each featureComparison as row}
						<tr class="hover:bg-slate-800/30">
							<td class="py-3.5 px-4 font-semibold text-slate-200">{row.feature}</td>
							<td class="py-3.5 px-4 text-center">
								{#if typeof row.starter === 'boolean'}
									{#if row.starter}
										<CheckCircle2 class="h-4 w-4 text-emerald-400 inline" />
									{:else}
										<XCircle class="h-4 w-4 text-slate-600 inline" />
									{/if}
								{:else}
									<span class="text-slate-300">{row.starter}</span>
								{/if}
							</td>
							<td class="py-3.5 px-4 text-center">
								{#if typeof row.business === 'boolean'}
									{#if row.business}
										<CheckCircle2 class="h-4 w-4 text-emerald-400 inline" />
									{:else}
										<XCircle class="h-4 w-4 text-slate-600 inline" />
									{/if}
								{:else}
									<span class="text-slate-300">{row.business}</span>
								{/if}
							</td>
							<td class="py-3.5 px-4 text-center">
								{#if typeof row.enterprise === 'boolean'}
									{#if row.enterprise}
										<CheckCircle2 class="h-4 w-4 text-emerald-400 inline" />
									{:else}
										<XCircle class="h-4 w-4 text-slate-600 inline" />
									{/if}
								{:else}
									<span class="text-emerald-400 font-bold">{row.enterprise}</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- FAQ Section -->
	<div class="my-16">
		<h3 class="text-2xl font-bold text-white text-center mb-8">
			Pertanyaan Seputar Harga & Pembayaran
		</h3>
		<FaqAccordion initialCategory="Pembayaran & Garansi" />
	</div>

	<CtaBanner />
</div>
