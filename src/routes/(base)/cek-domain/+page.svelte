<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import DomainSearchForm from '$lib/components/DomainSearchForm.svelte';
	import { DomainService, type DomainCheckItemResult } from '$lib/services/domain.service';
	import {
		Globe,
		Search,
		CheckCircle2,
		XCircle,
		ShieldCheck,
		ArrowRight,
		Sparkles,
		MessageSquare,
		Copy,
		Check,
		Filter,
		Zap,
		CheckCircle,
		Building2,
		GraduationCap,
		Landmark
	} from 'lucide-svelte';

	// Domain State
	let searchQuery = $state('');
	let isSearching = $state(false);
	let searchPerformed = $state(false);
	let copiedDomain = $state('');
	let activeCategory = $state('Semua');

	let results = $state<DomainCheckItemResult[]>([]);

	const categories = ['Semua', 'Populer', 'Bisnis & Legal', 'Murah & Hemat', 'Lembaga'];

	async function runCheck(nameInput: string) {
		const clean = DomainService.cleanDomainName(nameInput);
		if (!clean) return;

		searchQuery = nameInput;
		isSearching = true;
		searchPerformed = false;

		try {
			const data = await DomainService.fetchCheck(nameInput);
			results = data.results;
		} catch (err) {
			console.error('Error checking domain via RDAP service:', err);
		} finally {
			isSearching = false;
			searchPerformed = true;
		}
	}

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		copiedDomain = text;
		setTimeout(() => {
			copiedDomain = '';
		}, 2000);
	}

	const filteredResults = $derived(
		activeCategory === 'Semua'
			? results
			: results.filter((r) => r.category === activeCategory)
	);

	onMount(() => {
		const paramDomain = page.url.searchParams.get('domain') || page.url.searchParams.get('q');
		if (paramDomain) {
			searchQuery = paramDomain;
			runCheck(paramDomain);
		}
	});

	// Reactively check if search query parameter changes in URL
	$effect(() => {
		const paramDomain = page.url.searchParams.get('domain') || page.url.searchParams.get('q');
		if (paramDomain && paramDomain !== searchQuery && !isSearching) {
			searchQuery = paramDomain;
			runCheck(paramDomain);
		}
	});
</script>

<svelte:head>
	<title>Cek Domain & Order Website — Status Ketersediaan TLD Indonesia | Barizaloka</title>
	<meta
		name="description"
		content="Cek ketersediaan nama domain (.COM, .ID, .CO.ID, .BIZ.ID, .MY.ID, .SCH.ID, .PONPES.ID, .DESA.ID) via protokol RDAP resmi untuk pembuatan website profesional dari Barizaloka."
	/>
	<meta name="keywords" content="cek domain, order website, rdap domain, status domain, domain indonesia, domain id, jasa website barizaloka" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Layanan' }, { label: 'Order & Cek Domain' }]} />

	<!-- SEARCH HERO SECTION -->
	<section class="my-6">
		<DomainSearchForm
			initialQuery={searchQuery}
			targetPage="/cek-domain"
			title="Cek Ketersediaan Domain Website"
			subtitle="Ketik nama domain atau brand impian Anda di bawah ini untuk mengecek ketersediaannya secara real-time via server RDAP resmi."
			buttonText="Cek Ketersediaan Domain"
			variant="hero"
		/>
	</section>

	<!-- SEARCH RESULTS SECTION -->
	{#if isSearching}
		<div class="my-12 flex flex-col items-center justify-center p-12 text-center space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
			<div class="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
			<div class="text-sm font-bold text-slate-800 dark:text-slate-200">
				Memeriksa ketersediaan domain <span class="text-emerald-600 dark:text-emerald-400 font-extrabold">"{searchQuery}"</span> via RDAP Protocol...
			</div>
			<p class="text-xs text-slate-500">Mengecek server RDAP resmi IANA & PANDI ID...</p>
		</div>
	{:else if searchPerformed && results.length > 0}
		<section class="my-10 space-y-8 animate-in fade-in duration-300">
			<!-- Results Header & Category Filter -->
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
				<div>
					<div class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
						<Sparkles class="h-3.5 w-3.5" /> Hasil Pengecekan RDAP Server
					</div>
					<h2 class="text-2xl font-black text-slate-900 dark:text-white">
						Hasil Ketersediaan untuk: <span class="text-emerald-600 dark:text-emerald-400">"{DomainService.cleanDomainName(searchQuery)}"</span>
					</h2>
				</div>

				<!-- Category Filter Tabs -->
				<div class="flex flex-wrap items-center gap-2">
					<div class="flex items-center gap-1 text-xs text-slate-500 font-medium mr-1 hidden sm:flex">
						<Filter class="h-3.5 w-3.5" /> Filter TLD:
					</div>
					{#each categories as cat}
						<button
							type="button"
							onclick={() => (activeCategory = cat)}
							class="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer {activeCategory === cat ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}"
						>
							{cat}
						</button>
					{/each}
				</div>
			</div>

			<!-- Grid of Domain Results -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each filteredResults as item}
					<div
						class={`rounded-3xl border p-6 transition-all duration-200 flex flex-col justify-between shadow-lg relative ${
							item.status === 'available'
								? 'border-emerald-500/50 bg-gradient-to-b from-emerald-50/80 to-white dark:from-emerald-950/30 dark:to-slate-900 dark:border-emerald-700/60 shadow-emerald-500/5'
								: 'border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-900/50 opacity-80'
						}`}
					>
						<div class="space-y-4">
							<div class="flex items-start justify-between">
								<div>
									<h3 class="text-xl font-black text-slate-900 dark:text-white tracking-tight">{item.fullName}</h3>
									{#if item.badge}
										<span class="mt-1 inline-block rounded-md bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
											{item.badge}
										</span>
									{/if}
								</div>
								{#if item.status === 'available'}
									<span class="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
										<CheckCircle2 class="h-4 w-4 text-emerald-500" /> Tersedia
									</span>
								{:else}
									<span class="inline-flex items-center gap-1 rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400">
										<XCircle class="h-4 w-4" /> Terdaftar
									</span>
								{/if}
							</div>

							<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
								{item.note}
							</p>

							<!-- Package Recommendation Breakdown -->
							<div class="rounded-2xl bg-white/90 dark:bg-slate-950/60 p-4 border border-slate-200/80 dark:border-slate-800 space-y-1">
								<div class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
									💡 Rekomendasi Penggunaan:
								</div>
								<div class="text-xs font-bold text-slate-900 dark:text-white">
									{item.recommendedPackage}
								</div>
							</div>
						</div>

						<!-- Action buttons -->
						<div class="mt-6 border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2">
							{#if item.status === 'available'}
								<a
									href={`https://wa.me/6281234567890?text=${encodeURIComponent(
										`Halo Barizaloka, saya ingin memesan pembuatan website dengan nama domain ${item.fullName}. Mohon info kelanjutannya.`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3 text-xs font-black text-slate-950 shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-300 transition-all cursor-pointer"
								>
									<MessageSquare class="h-4 w-4" />
									<span>Pesan Website Dengan Domain Ini</span>
								</a>

								<button
									type="button"
									onclick={() => copyToClipboard(item.fullName)}
									class="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
								>
									{#if copiedDomain === item.fullName}
										<Check class="h-4 w-4 text-emerald-500" />
										<span class="text-emerald-600 dark:text-emerald-400">Tersalin!</span>
									{:else}
										<Copy class="h-3.5 w-3.5" />
										<span>Salin Nama Domain</span>
									{/if}
								</button>
							{:else}
								<div class="text-center p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400 italic">
									Domain ini telah teregistrasi. Coba ekstensi lain di atas.
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- Comprehensive Website Package Banner -->
			<div class="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 p-6 sm:p-8 text-white space-y-4 shadow-xl">
				<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div class="space-y-1">
						<div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
							<Zap class="h-3.5 w-3.5 text-emerald-400" />
							<span>Paket Website Terima Beres Barizaloka</span>
						</div>
						<h3 class="text-xl sm:text-2xl font-black text-white">
							Setiap Pembuatan Website Sudah Termasuk Gratis Domain & Cloud Hosting
						</h3>
						<p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
							Seluruh pengerjaan website di Barizaloka sudah mencakup Gratis Registrasi Domain, SSL HTTPS Keamanan, Hosting Cloud High Speed, serta Garansi Maintenance 1 Tahun.
						</p>
					</div>

					<a
						href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 transition-all cursor-pointer"
					>
						<MessageSquare class="h-4 w-4" />
						<span>Konsultasi Pembuatan Website</span>
					</a>
				</div>
			</div>
		</section>
	{/if}

	<!-- INFORMASI EKSENSI DOMAIN POPULER DI INDONESIA -->
	<section class="my-16 space-y-8">
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<span class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
				Panduan Ekstensi Domain
			</span>
			<h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Pilihan Ekstensi Domain Populer di Indonesia
			</h2>
			<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
				Setiap jenis TLD (Top Level Domain) memiliki karakter dan peruntukan khas sesuai dengan profil lembaga atau usaha Anda:
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.COM & .ID</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">Umum & Resmi</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Standar utama paling populer untuk semua jenis bisnis, toko online, perusahaan lokal, maupun portofolio profesional di Indonesia.
				</p>
			</div>

			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.CO.ID & .BIZ.ID</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">PT / CV & UMKM</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Ditujukan khusus perusahaan legal (PT, CV, Firma) dan UMKM Indonesia untuk membangun reputasi dan kredibilitas tinggi di mata klien.
				</p>
			</div>

			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.SCH.ID & .PONPES.ID</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">Sekolah & Pesantren</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Domain resmi pendidikan formal (SD/SMP/SMA/SMK) dan Pondok Pesantren terdaftar untuk memfasilitasi informasi digital dan PSB Online.
				</p>
			</div>

			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.OR.ID & .ORG</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">Masjid & Organisasi</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Sangat tepat untuk yayasan non-profit, DKM masjid, organisasi kemasyarakatan, serta komunitas dakwah sosial.
				</p>
			</div>

			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.DESA.ID & .AC.ID</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">Desa & Kampus</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Domain khusus portal layanan pemerintah desa mandiri serta perguruan tinggi / akademi perguruan formal.
				</p>
			</div>

			<div class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-3">
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.MY.ID & .WEB.ID</span>
					<span class="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-bold">Personal & Komunitas</span>
				</div>
				<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
					Pilihan praktis untuk portofolio pribadi, blog catatan, dan situs komunitas lokal yang mudah diakses.
				</p>
			</div>
		</div>
	</section>

	<!-- FAQ SECTION -->
	<FaqAccordion initialCategory="Semua" />

	<!-- CTA BANNER -->
	<CtaBanner
		title="Sudah Memiliki Nama Domain Impian?"
		description="Konsultasikan nama domain & konsep website Anda bersama tim teknis Barizaloka. Pengerjaan cepat, profesional, & hasil memuaskan."
		whatsappMessage="Halo Barizaloka, saya mau konsultasi pendaftaran domain dan pembuatan website."
	/>
</div>
