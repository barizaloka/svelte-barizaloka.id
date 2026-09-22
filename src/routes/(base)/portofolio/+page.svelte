<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import {
		PORTFOLIO_ITEMS,
		PORTFOLIO_CATEGORIES,
		type PortfolioItem
	} from '$lib/data/portofolio_data';
	import {
		GraduationCap,
		Landmark,
		Building2,
		Store,
		BookOpen,
		Users,
		Sparkles,
		ExternalLink,
		MessageSquare,
		CheckCircle2,
		Search,
		MapPin,
		Calendar,
		ArrowRight,
		Quote,
		Laptop,
		ShieldCheck,
		Zap,
		RotateCcw
	} from 'lucide-svelte';

	let selectedCategory = $state<string>('Semua');
	let searchQuery = $state<string>('');

	const filteredProjects = $derived(
		PORTFOLIO_ITEMS.filter((item: PortfolioItem) => {
			const matchesCategory =
				selectedCategory === 'Semua' || item.category === selectedCategory;
			const query = searchQuery.toLowerCase().trim();
			const matchesSearch =
				!query ||
				item.title.toLowerCase().includes(query) ||
				item.client.toLowerCase().includes(query) ||
				item.location.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query) ||
				item.features.some((f) => f.toLowerCase().includes(query)) ||
				item.techStack.some((t) => t.toLowerCase().includes(query));

			return matchesCategory && matchesSearch;
		})
	);

	function getCategoryIcon(cat: string) {
		switch (cat) {
			case 'Pesantren':
				return GraduationCap;
			case 'Masjid':
				return Landmark;
			case 'Desa':
				return Building2;
			case 'UMKM':
				return Store;
			case 'Sekolah':
				return BookOpen;
			case 'Organisasi':
				return Users;
			default:
				return Laptop;
		}
	}

	function getCategoryCount(cat: string) {
		if (cat === 'Semua') return PORTFOLIO_ITEMS.length;
		return PORTFOLIO_ITEMS.filter((item) => item.category === cat).length;
	}

	function resetFilters() {
		selectedCategory = 'Semua';
		searchQuery = '';
	}
</script>

<svelte:head>
	<title>Portofolio Website Pesantren, Masjid, Desa & UMKM | Barizaloka</title>
	<meta
		name="description"
		content="Koleksi hasil karya pembuatan website profesional Barizaloka untuk pesantren, masjid, kantor desa, UMKM, dan lembaga pendidikan. Cepat, mobile-friendly, dan terima beres."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Portofolio' }]} />

	<!-- Hero Header -->
	<div class="mx-auto my-12 max-w-3xl space-y-4 text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
		>
			<Sparkles class="h-3.5 w-3.5" />
			<span>Karya Digital & Cerita Keberhasilan Klien</span>
		</div>
		<h1 class="text-3xl font-black text-slate-900 sm:text-5xl dark:text-white">
			Portofolio Karya Barizaloka
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
			Setiap website kami bangun dengan pendekatan custom code yang cepat, rapi, aman, dan mudah
			dikelola. Berikut adalah contoh solusi digital yang telah kami kerjakan untuk berbagai sektor.
		</p>

		<!-- Highlight Stats -->
		<div class="grid grid-cols-2 gap-3 pt-6 text-center sm:grid-cols-4">
			<div
				class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
			>
				<div class="text-2xl font-black text-emerald-600 dark:text-emerald-400">50+</div>
				<div class="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
					Website Terbangun
				</div>
			</div>
			<div
				class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
			>
				<div class="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
				<div class="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
					Mobile & SEO Ready
				</div>
			</div>
			<div
				class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
			>
				<div class="text-2xl font-black text-emerald-600 dark:text-emerald-400">99%</div>
				<div class="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
					Kepuasan Klien
				</div>
			</div>
			<div
				class="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
			>
				<div class="text-2xl font-black text-emerald-600 dark:text-emerald-400">1 Th</div>
				<div class="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
					Garansi & Support
				</div>
			</div>
		</div>
	</div>

	<!-- Filter & Search Toolbar -->
	<div class="my-8 space-y-4">
		<div
			class="flex flex-col items-stretch justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center dark:border-slate-800 dark:bg-slate-900"
		>
			<!-- Search Bar -->
			<div class="relative flex-1">
				<Search
					class="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500"
				/>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari berdasarkan nama, lokasi, fitur (misal: sarang, infaq, PSB)..."
					class="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-xs text-slate-900 transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400"
				/>
				{#if searchQuery}
					<button
						onclick={() => (searchQuery = '')}
						class="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
					>
						Hapus
					</button>
				{/if}
			</div>

			<!-- Result Counter -->
			<div class="flex items-center justify-between text-xs text-slate-500 md:justify-end">
				<span>Menampilkan <strong>{filteredProjects.length}</strong> karya</span>
				{#if searchQuery || selectedCategory !== 'Semua'}
					<button
						onclick={resetFilters}
						class="ml-3 inline-flex items-center gap-1 font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
					>
						<RotateCcw class="h-3 w-3" />
						<span>Reset</span>
					</button>
				{/if}
			</div>
		</div>

		<!-- Category Filter Pills -->
		<div class="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2">
			{#each PORTFOLIO_CATEGORIES as category}
				{@const Icon = getCategoryIcon(category)}
				<button
					onclick={() => (selectedCategory = category)}
					class="group inline-flex flex-shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all {selectedCategory ===
					category
						? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 dark:bg-emerald-500 dark:text-slate-950'
						: 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					<Icon
						class="h-3.5 w-3.5 {selectedCategory === category
							? 'text-white dark:text-slate-950'
							: 'text-slate-500 group-hover:text-slate-700 dark:text-slate-400'}"
					/>
					<span>{category}</span>
					<span
						class="ml-1 rounded-full px-1.5 py-0.2 text-[10px] {selectedCategory === category
							? 'bg-white/20 text-white dark:bg-black/20 dark:text-slate-950'
							: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}"
					>
						{getCategoryCount(category)}
					</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Portfolio Projects Grid -->
	{#if filteredProjects.length > 0}
		<div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as item (item.id)}
				{@const CategoryIcon = getCategoryIcon(item.category)}
				<article
					class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400/50"
				>
					<!-- Browser Mockup Window Header -->
					<div
						class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-950"
					>
						<div class="flex items-center gap-1.5">
							<div class="h-2.5 w-2.5 rounded-full bg-rose-400/80"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></div>
						</div>
						<div
							class="flex max-w-[170px] items-center gap-1 truncate rounded-md bg-white px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:bg-slate-900 dark:text-slate-400"
						>
							<span class="text-emerald-500">https://</span>{item.id}.barizaloka.id
						</div>
						<span
							class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500"
						>
							<Calendar class="h-3 w-3" />
							{item.year}
						</span>
					</div>

					<!-- Visual Card Banner -->
					<div
						class="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-100 p-6 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-slate-950"
					>
						<!-- Decorative Glow Circle -->
						<div
							class="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl dark:bg-emerald-500/20"
						></div>

						<div class="relative z-10 flex flex-col items-center text-center">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-md ring-1 ring-emerald-500/20 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800 dark:text-emerald-400 dark:ring-emerald-400/30"
							>
								<CategoryIcon class="h-7 w-7" />
							</div>
							<div class="mt-2 text-xs font-bold text-slate-800 dark:text-slate-200">
								{item.client}
							</div>
							<div
								class="mt-0.5 inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400"
							>
								<MapPin class="h-3 w-3 text-emerald-500" />
								<span>{item.location}</span>
							</div>
						</div>

						<!-- Badge Pill -->
						{#if item.badge}
							<div class="absolute top-3 right-3">
								<span
									class="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950"
								>
									{item.badge}
								</span>
							</div>
						{/if}

						<div class="absolute top-3 left-3">
							<span
								class="rounded-full border border-slate-200 bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300"
							>
								{item.category}
							</span>
						</div>
					</div>

					<!-- Card Body Content -->
					<div class="flex-1 space-y-4 p-6">
						<div>
							<h3
								class="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
							>
								{item.title}
							</h3>
							<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
								{item.description}
							</p>
						</div>

						<!-- Results Callout -->
						{#if item.results}
							<div
								class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs leading-snug text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-300"
							>
								<strong class="font-bold">Dampak:</strong>
								{item.results}
							</div>
						{/if}

						<!-- Key Features Checklist -->
						<div class="space-y-1.5 pt-1">
							<div
								class="text-[11px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400"
							>
								Fitur Unggulan:
							</div>
							<ul class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
								{#each item.features.slice(0, 3) as feat}
									<li class="flex items-start gap-1.5">
										<CheckCircle2
											class="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
										/>
										<span>{feat}</span>
									</li>
								{/each}
								{#if item.features.length > 3}
									<li class="text-[11px] text-slate-500 italic dark:text-slate-400">
										+ {item.features.length - 3} fitur lainnya
									</li>
								{/if}
							</ul>
						</div>

						<!-- Tech Stack Badges -->
						<div class="pt-2">
							<div class="flex flex-wrap gap-1.5">
								{#each item.techStack as tech}
									<span
										class="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- Testimonial Quote -->
						{#if item.testimonial}
							<div
								class="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-600 dark:border-slate-800/80 dark:bg-slate-950/40 dark:text-slate-400"
							>
								<Quote class="mb-1 h-3.5 w-3.5 text-emerald-500 opacity-60" />
								<p class="text-[11px] italic leading-relaxed">
									"{item.testimonial.quote}"
								</p>
								<div class="mt-2 text-[10px] font-bold text-slate-800 dark:text-slate-300">
									— {item.testimonial.name}, <span class="font-normal"
										>{item.testimonial.role}</span
									>
								</div>
							</div>
						{/if}
					</div>

					<!-- Card Footer Actions -->
					<div
						class="flex items-center gap-2 border-t border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
					>
						<a
							href={item.demoUrl || '/harga'}
							class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
						>
							<ExternalLink class="h-3.5 w-3.5" />
							<span>Lihat Layanan</span>
						</a>

						<a
							href="https://wa.me/6281234567890?text={encodeURIComponent(
								`Halo Barizaloka, saya tertarik membuat website seperti portofolio: ${item.title} (${item.client})`
							)}"
							target="_blank"
							rel="noopener noreferrer"
							class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-xs font-bold text-slate-950 shadow-sm transition-all hover:from-emerald-400 hover:to-teal-400 active:scale-95"
						>
							<MessageSquare class="h-3.5 w-3.5" />
							<span>Pesan Serupa</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	{:else}
		<!-- Empty State -->
		<div
			class="my-16 rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800"
		>
			<div
				class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
			>
				<Search class="h-6 w-6" />
			</div>
			<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
				Tidak ada karya yang sesuai kriteria
			</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Coba gunakan kata kunci pencarian lain atau klik tombol reset di bawah.
			</p>
			<button
				onclick={resetFilters}
				class="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950"
			>
				<RotateCcw class="h-3.5 w-3.5" />
				<span>Tampilkan Semua Karya</span>
			</button>
		</div>
	{/if}

	<!-- Client Trust / Value Proposition -->
	<section
		class="my-16 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl sm:p-12 dark:border-slate-800 dark:bg-slate-900/60"
	>
		<div class="mx-auto max-w-3xl text-center">
			<div
				class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
			>
				<ShieldCheck class="h-4 w-4" />
				<span>Standar Mutu Karya Barizaloka</span>
			</div>
			<h2 class="mt-2 text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
				Mengapa Klien Mempercayakan Website Kepada Barizaloka?
			</h2>
			<p class="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
				Kami tidak sekadar memasang template instan, melainkan merancang sistem informasi yang
				terbukti membantu operasional harian pengurus lembaga dan pebisnis daerah.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
			<div
				class="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 dark:border-slate-800/80 dark:bg-slate-800/40"
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
				>
					<Zap class="h-5 w-5" />
				</div>
				<h3 class="mt-4 text-sm font-bold text-slate-900 dark:text-white">
					Kecepatan Muat Ekstra Kilat
				</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Website ringan saat diakses melalui smartphone walau sinyal minim, tanpa beban plugin
					berat.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 dark:border-slate-800/80 dark:bg-slate-800/40"
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
				>
					<CheckCircle2 class="h-5 w-5" />
				</div>
				<h3 class="mt-4 text-sm font-bold text-slate-900 dark:text-white">
					Pendampingan Input Awal
				</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Anda tinggal mengirimkan materi foto dan profil, kami input sampai rapi dan siap online.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 dark:border-slate-800/80 dark:bg-slate-800/40"
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
				>
					<ShieldCheck class="h-5 w-5" />
				</div>
				<h3 class="mt-4 text-sm font-bold text-slate-900 dark:text-white">
					Garansi & Bantuan 1 Tahun
				</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
					Bantuan jika terjadi kendala teknis atau perbaikan langsung ditangani pengembang lokal yang
					bisa dihubungi kapan saja.
				</p>
			</div>
		</div>

		<div class="mt-8 text-center">
			<a
				href="/harga"
				class="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950"
			>
				<span>Lihat Paket Harga Pembuatan Website</span>
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</section>

	<CtaBanner />
</div>
