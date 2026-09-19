<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { PRICING_PACKAGES } from '$lib/data/pricing_data';
	import { CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-svelte';

	const packages = PRICING_PACKAGES;

	const includedFeatures = [
		'Sistem CMS Artikel & Berita Sederhana (Mudah Dipakai)',
		'Gratis Domain Resmi (.com / .id / .or.id / .desa.id / .my.id) 1 Tahun',
		'Gratis High-Speed NVMe SSD Cloud Hosting 1 Tahun',
		'Desain Layout Elegan, Fast Loading & Mobile-Friendly',
		'SSL Security Encrypted (HTTPS Aman & Terpercaya)',
		'Form Kontak & Tombol Share Artikel Direct ke WhatsApp',
		'Dashboard Admin Kelola Artikel Berbahasa Indonesia',
		'Penginputan Konten Perdana & Setup Terima Beres',
		'Optimasi SEO Artikel Dasar (Ramah Pencarian Google)',
		'Garansi Pemeliharaan & Support Perbaikan Error 1 Tahun Full',
		'Biaya Perpanjangan Tahun Ke-2 & Seterusnya Hanya Rp 800.000 / tahun'
	];
</script>

<svelte:head>
	<title>Harga Jasa Pembuatan Website Terima Beres | Barizaloka</title>
	<meta name="description" content="Paket harga jasa pembuatan website murah & terima beres Rp 1.000.000 dari Barizaloka. Perpanjangan tahun depan hanya Rp 800.000/tahun. Gratis domain, hosting, & garansi 1 tahun." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Harga & Paket Jasa Website' }]} />

	<!-- Header Title -->
	<div class="text-center max-w-3xl mx-auto my-12 space-y-4">
		<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
			<Sparkles class="h-3.5 w-3.5" />
			<span>Penawaran Transparan Tanpa Biaya Tersembunyi</span>
		</div>
		<h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
			Paket Pembuatan Website Terima Beres
		</h1>
		<p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
			Hanya 1 Juta Rupiah untuk pembuatan website profesional all-in-one. Tinggal siapkan bahan, kami kerjakan sampai siap rilis. Biaya perpanjang tahun depan hanya 800 Ribu Rupiah per tahun.
		</p>
	</div>

	<!-- Main Pricing Card -->
	<div class="max-w-2xl mx-auto my-12">
		{#each packages as pkg}
			<div
				class="relative flex flex-col justify-between rounded-3xl border border-emerald-500 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300"
			>
				{#if pkg.badge}
					<div class="absolute -top-4 left-1/2 -translate-x-1/2">
						<span class="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-1.5 text-xs font-black text-slate-950 uppercase tracking-wider shadow-md">
							{pkg.badge}
						</span>
					</div>
				{/if}

				<div class="space-y-6">
					<div class="text-center pt-2">
						<h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">{pkg.name}</h2>
						<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{pkg.tagline}</p>
					</div>

					<!-- Pricing Display -->
					<div class="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 p-6 text-center space-y-2">
						<div class="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Biaya Pembuatan (Tahun Pertama)</div>
						<div class="flex items-baseline gap-2">
							<span class="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400">{pkg.price}</span>
							{#if pkg.originalPrice}
								<span class="text-sm text-slate-400 dark:text-slate-500 line-through">{pkg.originalPrice}</span>
							{/if}
						</div>
						<div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
							<span>Perpanjangan Tahun Depan: <strong>{pkg.renewalPrice}</strong></span>
						</div>
					</div>

					<div class="space-y-2 pt-2">
						<div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Target Pengguna:</div>
						<div class="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800/40 rounded-xl p-3">
							{pkg.targetAudience}
						</div>
					</div>

					<div class="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
						<div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Fasilitas & Fitur Terima Beres:</div>
						<ul class="grid grid-cols-1 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
							{#each pkg.features as feat}
								<li class="flex items-start gap-2.5">
									<CheckCircle2 class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
									<span>{feat}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
					<a
						href="https://wa.me/6281234567890?text={encodeURIComponent(pkg.whatsappMessage)}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-extrabold transition-all bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-xl shadow-emerald-500/25 active:scale-95"
					>
						<MessageSquare class="h-5 w-5" />
						<span>{pkg.ctaText}</span>
					</a>
				</div>
			</div>
		{/each}
	</div>

	<!-- Guaranteed Included Checklist -->
	<div class="my-16 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-sm space-y-6">
		<div class="text-center space-y-2">
			<div class="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
				<ShieldCheck class="h-4 w-4" />
				<span>Sudah Termasuk Dalam Paket 1 Juta</span>
			</div>
			<h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
				Apa Saja Yang Anda Dapatkan?
			</h3>
		</div>

		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-4">
			{#each includedFeatures as item}
				<li class="flex items-start gap-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-3">
					<CheckCircle2 class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- FAQ Section -->
	<div class="my-16">
		<h3 class="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
			Pertanyaan Seputar Harga & Perpanjangan
		</h3>
		<FaqAccordion initialCategory="Pembayaran & Garansi" />
	</div>

	<CtaBanner />
</div>
