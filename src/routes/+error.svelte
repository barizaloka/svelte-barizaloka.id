<script lang="ts">
	import { page } from '$app/state';
	import {
		Home,
		ArrowLeft,
		RefreshCw,
		Search,
		Globe,
		BookOpen,
		Briefcase,
		ShieldAlert,
		AlertTriangle,
		Compass,
		MessageSquare,
		ExternalLink,
		ChevronDown
	} from 'lucide-svelte';

	let showTechnicalDetails = $state(false);

	const status = $derived(page.status ?? 404);
	const errorMessage = $derived(page.error?.message || '');
	const path = $derived(page.url?.pathname || '');

	// Dynamic error configuration based on HTTP status
	const errorConfig = $derived.by(() => {
		if (status === 404) {
			return {
				badge: 'Error 404 • Halaman Tidak Ditemukan',
				badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
				title: 'Waduh, Halamannya Tersesat!',
				description:
					'Halaman yang Anda tuju tampaknya tidak ada, sudah dipindahkan, atau alamat URL salah diketik. Jangan cemas, Anda bisa kembali atau memilih destinasi di bawah ini.',
				isNotFound: true,
				isServer: false
			};
		}

		if (status === 403 || status === 401) {
			return {
				badge: `Error ${status} • Akses Dibatasi`,
				badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400',
				title: 'Maaf, Akses Terbatas',
				description:
					'Anda tidak memiliki izin untuk membuka halaman atau berkas ini. Jika menurut Anda ini kesalahan, silakan hubungi tim Barizaloka.',
				isNotFound: false,
				isServer: false
			};
		}

		if (status >= 500) {
			return {
				badge: `Error ${status} • Kendala Server`,
				badgeColor: 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400',
				title: 'Ups! Server Sedang Rehat',
				description:
					'Terjadi kendala teknis internal pada sistem kami. Tim teknis Barizaloka sedang memperbaikinya. Silakan muat ulang atau coba lagi nanti.',
				isNotFound: false,
				isServer: true
			};
		}

		return {
			badge: `Error ${status} • Terjadi Kendala`,
			badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
			title: 'Terjadi Kendala Teknis',
			description:
				errorMessage ||
				'Permintaan Anda tidak dapat diproses saat ini. Silakan coba kembali ke beranda atau hubungi kami.',
			isNotFound: false,
			isServer: false
		};
	});

	const waReportUrl = $derived.by(() => {
		const fullUrl = typeof window !== 'undefined' ? window.location.href : path;
		const text = `Halo Barizaloka, saya menemukan error ${status} saat mengakses halaman: ${fullUrl}`;
		return `https://wa.me/6285188158542?text=${encodeURIComponent(text)}`;
	});

	function handleGoBack() {
		if (typeof window !== 'undefined' && window.history.length > 1) {
			window.history.back();
		} else {
			window.location.href = '/';
		}
	}

	function handleReload() {
		if (typeof window !== 'undefined') {
			window.location.reload();
		}
	}
</script>

<svelte:head>
	<title>{status} — {errorConfig.title} | Barizaloka</title>
	<meta name="robots" content="noindex, follow" />
	<meta name="description" content="{errorConfig.title} — {errorConfig.description}" />
</svelte:head>

<div class="relative min-h-[85vh] overflow-hidden py-16 sm:py-24">
	<!-- Ambient Background Glows -->
	<div
		class="pointer-events-none absolute top-10 left-1/2 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/10 blur-[130px] dark:from-emerald-600/20 dark:via-teal-600/15 dark:to-cyan-600/10"
	></div>
	<div
		class="pointer-events-none absolute right-1/4 bottom-10 h-[350px] w-[500px] rounded-full bg-gradient-to-bl from-teal-500/10 to-emerald-500/15 blur-[120px] dark:from-teal-600/15 dark:to-emerald-600/20"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Main Hero Card -->
		<div
			class="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 p-8 text-center shadow-2xl shadow-emerald-500/5 backdrop-blur-xl sm:p-14 dark:border-slate-800/90 dark:bg-slate-900/80 dark:shadow-none"
		>
			<!-- Status Code Badge -->
			<div
				class="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide {errorConfig.badgeColor}"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-current"></span>
				</span>
				<span>{errorConfig.badge}</span>
			</div>

			<!-- Giant Stylized Status Number -->
			<div class="relative my-4 select-none">
				<div
					class="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent sm:text-9xl dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400"
				>
					{status}
				</div>

				<!-- Decorative Floating Icon -->
				<div
					class="absolute -top-3 right-1/2 translate-x-16 animate-bounce rounded-2xl border border-slate-200 bg-white/90 p-2.5 text-emerald-600 shadow-lg [animation-duration:3s] sm:translate-x-24 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400"
				>
					{#if status === 404}
						<Compass class="h-6 w-6 sm:h-7 sm:w-7" />
					{:else if status === 403 || status === 401}
						<ShieldAlert class="h-6 w-6 sm:h-7 sm:w-7" />
					{:else}
						<AlertTriangle class="h-6 w-6 sm:h-7 sm:w-7" />
					{/if}
				</div>
			</div>

			<!-- Headings & Explanations -->
			<h1 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
				{errorConfig.title}
			</h1>

			<p
				class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
			>
				{errorConfig.description}
			</p>

			{#if path}
				<div
					class="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400"
				>
					<span>URL:</span>
					<span
						class="max-w-xs truncate font-semibold text-slate-800 sm:max-w-md dark:text-slate-200"
						>{path}</span
					>
				</div>
			{/if}

			<!-- Action Buttons -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/"
					class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:shadow-emerald-600/30 active:scale-95"
				>
					<Home class="h-4 w-4" />
					<span>Kembali ke Beranda</span>
				</a>

				<button
					type="button"
					onclick={handleGoBack}
					class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
				>
					<ArrowLeft class="h-4 w-4" />
					<span>Halaman Sebelumnya</span>
				</button>

				{#if errorConfig.isServer}
					<button
						type="button"
						onclick={handleReload}
						class="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition-all duration-200 hover:bg-emerald-100 active:scale-95 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
					>
						<RefreshCw class="h-4 w-4" />
						<span>Coba Muat Ulang</span>
					</button>
				{/if}
			</div>

			<!-- Technical Details (If error has specific debug message) -->
			{#if errorMessage && errorMessage !== 'Not Found' && errorMessage !== 'Internal Error'}
				<div class="mt-8 border-t border-slate-200/80 pt-6 text-left dark:border-slate-800/80">
					<button
						type="button"
						onclick={() => (showTechnicalDetails = !showTechnicalDetails)}
						class="flex w-full items-center justify-between text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
					>
						<span>Informasi Diagnostik Teknis</span>
						<ChevronDown
							class="h-4 w-4 transition-transform duration-200 {showTechnicalDetails
								? 'rotate-180'
								: ''}"
						/>
					</button>

					{#if showTechnicalDetails}
						<div
							class="mt-3 rounded-xl border border-slate-200 bg-slate-100 p-4 font-mono text-xs text-rose-600 dark:border-slate-800 dark:bg-slate-950 dark:text-rose-400"
						>
							<p class="break-words">{errorMessage}</p>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Helpful Navigation Hub ("Mungkin Ini yang Anda Cari") -->
		<div class="mt-10">
			<div class="mb-4 text-center">
				<h2
					class="text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400"
				>
					Halaman Populer & Layanan Unggulan
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Card 1: Cek Domain -->
				<a
					href="/cek-domain"
					class="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-emerald-500/40"
				>
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400"
						>
							<Globe class="h-5 w-5" />
						</div>
						<div>
							<h3
								class="text-sm font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
							>
								Cek Domain
							</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Cek .id, .com, dll</p>
						</div>
					</div>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Temukan nama domain resmi terbaik untuk website atau lembaga Anda.
					</p>
				</a>

				<!-- Card 2: Paket Harga -->
				<a
					href="/harga"
					class="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-teal-500/40"
				>
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400"
						>
							<Briefcase class="h-5 w-5" />
						</div>
						<div>
							<h3
								class="text-sm font-bold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400"
							>
								Paket Harga
							</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Mulai Rp 350rb/thn</p>
						</div>
					</div>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Transparan tanpa biaya tersembunyi, siap online dalam 24-48 jam.
					</p>
				</a>

				<!-- Card 3: Portofolio -->
				<a
					href="/portofolio"
					class="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-cyan-500/40"
				>
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white dark:bg-cyan-500/20 dark:text-cyan-400"
						>
							<Search class="h-5 w-5" />
						</div>
						<div>
							<h3
								class="text-sm font-bold text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400"
							>
								Portofolio
							</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Karya & Klien Kami</p>
						</div>
					</div>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Lihat contoh nyata website pesantren, masjid, desa, dan UMKM.
					</p>
				</a>

				<!-- Card 4: Blog & Artikel -->
				<a
					href="/blog"
					class="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-emerald-500/40"
				>
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400"
						>
							<BookOpen class="h-5 w-5" />
						</div>
						<div>
							<h3
								class="text-sm font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
							>
								Blog & Edukasi
							</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Tips & Panduan Web</p>
						</div>
					</div>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Strategi digitalisasi, tips SEO lokal, dan wawasan teknologi praktis.
					</p>
				</a>
			</div>
		</div>

		<!-- Direct Assistance Banner -->
		<div
			class="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-5 sm:flex-row sm:p-6 dark:border-emerald-500/20 dark:from-emerald-950/40 dark:via-teal-950/20"
		>
			<div class="flex items-center gap-3 text-center sm:text-left">
				<div
					class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 sm:flex"
				>
					<MessageSquare class="h-5 w-5" />
				</div>
				<div>
					<p class="text-sm font-bold text-slate-900 dark:text-white">
						Menemukan tautan rusak atau butuh bantuan segera?
					</p>
					<p class="text-xs text-slate-600 dark:text-slate-400">
						Tim Barizaloka siap membantu Anda via WhatsApp setiap hari.
					</p>
				</div>
			</div>

			<a
				href={waReportUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-all duration-200 hover:bg-emerald-400 active:scale-95"
			>
				<MessageSquare class="h-4 w-4" />
				<span>Laporkan ke WhatsApp</span>
				<ExternalLink class="h-3 w-3 opacity-70" />
			</a>
		</div>
	</div>
</div>
