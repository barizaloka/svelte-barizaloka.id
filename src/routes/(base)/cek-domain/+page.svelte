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
		activeCategory === 'Semua' ? results : results.filter((r) => r.category === activeCategory)
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
	<meta
		name="keywords"
		content="cek domain, order website, rdap domain, status domain, domain indonesia, domain id, jasa website barizaloka"
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
		<div
			class="my-12 flex flex-col items-center justify-center space-y-4 rounded-3xl border border-slate-200 bg-white/60 p-12 text-center backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60"
		>
			<div
				class="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"
			></div>
			<div class="text-sm font-bold text-slate-800 dark:text-slate-200">
				Memeriksa ketersediaan domain <span
					class="font-extrabold text-emerald-600 dark:text-emerald-400">"{searchQuery}"</span
				> via RDAP Protocol...
			</div>
			<p class="text-xs text-slate-500">Mengecek server RDAP resmi IANA & PANDI ID...</p>
		</div>
	{:else if searchPerformed && results.length > 0}
		<section class="animate-in fade-in my-10 space-y-8 duration-300">
			<!-- Results Header & Category Filter -->
			<div
				class="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center dark:border-slate-800"
			>
				<div>
					<div
						class="mb-1 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400"
					>
						<Sparkles class="h-3.5 w-3.5" /> Hasil Pengecekan RDAP Server
					</div>
					<h2 class="text-2xl font-black text-slate-900 dark:text-white">
						Hasil Ketersediaan untuk: <span class="text-emerald-600 dark:text-emerald-400"
							>"{DomainService.cleanDomainName(searchQuery)}"</span
						>
					</h2>
				</div>

				<!-- Category Filter Tabs -->
				<div class="flex flex-wrap items-center gap-2">
					<div
						class="mr-1 flex hidden items-center gap-1 text-xs font-medium text-slate-500 sm:flex"
					>
						<Filter class="h-3.5 w-3.5" /> Filter TLD:
					</div>
					{#each categories as cat}
						<button
							type="button"
							onclick={() => (activeCategory = cat)}
							class="cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all {activeCategory ===
							cat
								? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
								: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}"
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
						class={`relative flex flex-col justify-between rounded-3xl border p-6 shadow-lg transition-all duration-200 ${
							item.status === 'available'
								? 'border-emerald-500/50 bg-gradient-to-b from-emerald-50/80 to-white shadow-emerald-500/5 dark:border-emerald-700/60 dark:from-emerald-950/30 dark:to-slate-900'
								: 'border-slate-200 bg-slate-50/90 opacity-80 dark:border-slate-800 dark:bg-slate-900/50'
						}`}
					>
						<div class="space-y-4">
							<div class="flex items-start justify-between">
								<div>
									<h3 class="text-xl font-black tracking-tight text-slate-900 dark:text-white">
										{item.fullName}
									</h3>
									{#if item.badge}
										<span
											class="mt-1 inline-block rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
										>
											{item.badge}
										</span>
									{/if}
								</div>
								{#if item.status === 'available'}
									<span
										class="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-400"
									>
										<CheckCircle2 class="h-4 w-4 text-emerald-500" /> Tersedia
									</span>
								{:else}
									<span
										class="inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400"
									>
										<XCircle class="h-4 w-4" /> Terdaftar
									</span>
								{/if}
							</div>

							<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
								{item.note}
							</p>

							<!-- Package Recommendation Breakdown -->
							<div
								class="space-y-1 rounded-2xl border border-slate-200/80 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-950/60"
							>
								<div
									class="text-[10px] font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400"
								>
									💡 Rekomendasi Penggunaan:
								</div>
								<div class="text-xs font-bold text-slate-900 dark:text-white">
									{item.recommendedPackage}
								</div>
							</div>
						</div>

						<!-- Action buttons -->
						<div class="mt-6 space-y-2 border-t border-slate-200 pt-4 dark:border-slate-800">
							{#if item.status === 'available'}
								<a
									href={`https://wa.me/6285188158542?text=${encodeURIComponent(
										`Halo Barizaloka, saya ingin memesan pembuatan website dengan nama domain ${item.fullName}. Mohon info kelanjutannya.`
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3 text-xs font-black text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-300"
								>
									<MessageSquare class="h-4 w-4" />
									<span>Pesan Website Dengan Domain Ini</span>
								</a>

								<button
									type="button"
									onclick={() => copyToClipboard(item.fullName)}
									class="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
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
								<div
									class="rounded-xl bg-slate-100 p-2 text-center text-[11px] font-medium text-slate-500 italic dark:bg-slate-800 dark:text-slate-400"
								>
									Domain ini telah teregistrasi. Coba ekstensi lain di atas.
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- Comprehensive Website Package Banner -->
			<div
				class="space-y-4 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 p-6 text-white shadow-xl sm:p-8"
			>
				<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
					<div class="space-y-1">
						<div
							class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300"
						>
							<Zap class="h-3.5 w-3.5 text-emerald-400" />
							<span>Paket Website Terima Beres Barizaloka</span>
						</div>
						<h3 class="text-xl font-black text-white sm:text-2xl">
							Setiap Pembuatan Website Sudah Termasuk Gratis Domain & Cloud Hosting
						</h3>
						<p class="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
							Seluruh pengerjaan website di Barizaloka sudah mencakup Gratis Registrasi Domain, SSL
							HTTPS Keamanan, Hosting Cloud High Speed, serta Garansi Maintenance 1 Tahun.
						</p>
					</div>

					<a
						href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex w-full flex-shrink-0 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 sm:w-auto"
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
		<div class="mx-auto max-w-3xl space-y-3 text-center">
			<span
				class="text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				Panduan Ekstensi Domain
			</span>
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
				Pilihan Ekstensi Domain Populer di Indonesia
			</h2>
			<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
				Setiap jenis TLD (Top Level Domain) memiliki karakter dan peruntukan khas sesuai dengan
				profil lembaga atau usaha Anda:
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400">.COM & .ID</span>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>Umum & Resmi</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Standar utama paling populer untuk semua jenis bisnis, toko online, perusahaan lokal,
					maupun portofolio profesional di Indonesia.
				</p>
			</div>

			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400"
						>.CO.ID & .BIZ.ID</span
					>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>PT / CV & UMKM</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Ditujukan khusus perusahaan legal (PT, CV, Firma) dan UMKM Indonesia untuk membangun
					reputasi dan kredibilitas tinggi di mata klien.
				</p>
			</div>

			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400"
						>.SCH.ID & .PONPES.ID</span
					>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>Sekolah & Pesantren</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Domain resmi pendidikan formal (SD/SMP/SMA/SMK) dan Pondok Pesantren terdaftar untuk
					memfasilitasi informasi digital dan PSB Online.
				</p>
			</div>

			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400"
						>.OR.ID & .ORG</span
					>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>Masjid & Organisasi</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Sangat tepat untuk yayasan non-profit, DKM masjid, organisasi kemasyarakatan, serta
					komunitas dakwah sosial.
				</p>
			</div>

			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400"
						>.DESA.ID & .AC.ID</span
					>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>Desa & Kampus</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Domain khusus portal layanan pemerintah desa mandiri serta perguruan tinggi / akademi
					perguruan formal.
				</p>
			</div>

			<div
				class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-black text-emerald-600 dark:text-emerald-400"
						>.MY.ID & .WEB.ID</span
					>
					<span
						class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300"
						>Personal & Komunitas</span
					>
				</div>
				<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Pilihan praktis untuk portofolio pribadi, blog catatan, dan situs komunitas lokal yang
					mudah diakses.
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
