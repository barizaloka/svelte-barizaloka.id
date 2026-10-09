<script lang="ts">
	import { page } from '$app/state';
	import {
		Menu,
		X,
		ChevronDown,
		GraduationCap,
		Landmark,
		Building2,
		Store,
		Zap,
		MessageSquare,
		MapPin,
		Sparkles,
		Search
	} from 'lucide-svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { PROVINCES_LIST } from '$lib/data/provinsi_pages';
	import Logo from '$lib/components/Logo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let isMobileMenuOpen = $state(false);
	let isLayananDropdownOpen = $state(false);
	let dropdownRef = $state<HTMLDivElement | null>(null);
	let buttonRef = $state<HTMLButtonElement | null>(null);
	let provinceSearch = $state('');

	const nicheList = Object.values(NICHE_PAGES);
	const provinces = PROVINCES_LIST;

	const filteredProvinces = $derived(
		provinceSearch.trim() === ''
			? provinces
			: provinces.filter((p) =>
					p.name.toLowerCase().includes(provinceSearch.trim().toLowerCase())
				)
	);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeAllDropdowns() {
		isLayananDropdownOpen = false;
		isMobileMenuOpen = false;
		provinceSearch = '';
	}

	function handleOutsideClick(e: MouseEvent) {
		if (isLayananDropdownOpen && dropdownRef && !dropdownRef.contains(e.target as Node)) {
			isLayananDropdownOpen = false;
			provinceSearch = '';
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isLayananDropdownOpen) {
			isLayananDropdownOpen = false;
			provinceSearch = '';
			buttonRef?.focus();
		}
	}

	function handleFocusOut(e: FocusEvent) {
		if (
			isLayananDropdownOpen &&
			dropdownRef &&
			e.relatedTarget instanceof Node &&
			!dropdownRef.contains(e.relatedTarget)
		) {
			isLayananDropdownOpen = false;
			provinceSearch = '';
		}
	}

	const currentPath = $derived(page.url.pathname);
	const isLayananActive = $derived(
		currentPath.startsWith('/jasa-website-') || currentPath.includes('/potensi-digital')
	);
</script>

<svelte:window onclick={handleOutsideClick} onkeydown={handleKeyDown} />

<header
	class="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-md transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-950/90 dark:text-slate-100"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<!-- Brand Logo -->
		<a href="/" onclick={closeAllDropdowns}>
			<Logo size="md" />
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-1 md:flex">
			<!-- Single Layanan Dropdown -->
			<div bind:this={dropdownRef} class="relative" onfocusout={handleFocusOut}>
				<button
					bind:this={buttonRef}
					onclick={() => (isLayananDropdownOpen = !isLayananDropdownOpen)}
					aria-expanded={isLayananDropdownOpen}
					aria-haspopup="true"
					aria-controls="layanan-dropdown-menu"
					class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors {isLayananActive
						? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
						: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
				>
					<span>Layanan</span>
					<ChevronDown
						class="h-4 w-4 transition-transform duration-200 {isLayananDropdownOpen
							? 'rotate-180'
							: ''}"
					/>
				</button>

				{#if isLayananDropdownOpen}
					<div
						id="layanan-dropdown-menu"
						class="animate-in fade-in slide-in-from-top-2 absolute top-full -left-20 lg:left-0 mt-2 flex w-[600px] lg:w-[650px] max-w-[calc(100vw-2rem)] gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl duration-150 dark:border-slate-800 dark:bg-slate-900/95 dark:ring-white/10"
					>
						<!-- Niche Services -->
						<div class="w-44 shrink-0 flex flex-col justify-between">
							<div>
								<div
									class="mb-2 px-2 text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400"
								>
									Sektor Spesialis
								</div>
								<div class="space-y-1">
									{#each nicheList as niche}
										<a
											href="/jasa-website-{niche.slug}"
											onclick={closeAllDropdowns}
											class="flex items-center gap-2.5 rounded-lg p-2 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
										>
											{#if niche.slug === 'pesantren'}
												<GraduationCap
													class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
												/>
											{:else if niche.slug === 'masjid'}
												<Landmark
													class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
												/>
											{:else if niche.slug === 'desa'}
												<Building2
													class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400"
												/>
											{:else if niche.slug === 'umkm'}
												<Store class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
											{:else}
												<Zap class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
											{/if}
											<span>{niche.label}</span>
										</a>
									{/each}
								</div>
							</div>

							<div
								class="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-50/50 p-2.5 dark:border-emerald-500/10 dark:bg-emerald-950/20"
							>
								<p class="text-[11px] font-medium leading-relaxed text-slate-600 dark:text-slate-300">
									Custom website &amp; aplikasi sesuai kebutuhan instansi Anda.
								</p>
								<a
									href="/harga"
									onclick={closeAllDropdowns}
									class="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400"
								>
									<Sparkles class="h-3 w-3" /> Paket &amp; Biaya
								</a>
							</div>
						</div>

						<!-- Regional Coverage (All Provinces) -->
						<div class="min-w-0 flex-1 border-l border-slate-200 pl-4 dark:border-slate-800/80">
							<div class="mb-2 flex items-center justify-between px-1">
								<span
									class="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400"
								>
									Wilayah Layanan (34 Provinsi)
								</span>
								<a
									href="/potensi-digital-provinsi"
									onclick={closeAllDropdowns}
									class="text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
								>
									Direktori &rarr;
								</a>
							</div>

							<!-- Search Box -->
							<div class="relative mb-2">
								<Search class="absolute top-2.5 left-2.5 h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
								<input
									type="text"
									bind:value={provinceSearch}
									placeholder="Cari provinsi..."
									class="w-full rounded-lg border border-slate-200 bg-slate-50/80 py-1.5 pr-2.5 pl-8 text-xs text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:bg-slate-800"
								/>
							</div>

							<!-- Province List -->
							<div class="max-h-[260px] overflow-y-auto pr-1">
								{#if filteredProvinces.length > 0}
									<div class="grid grid-cols-2 gap-x-1 gap-y-0.5">
										{#each filteredProvinces as prov}
											<a
												href="/potensi-digital-{prov.slug}"
												onclick={closeAllDropdowns}
												title={prov.name}
												class="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
											>
												<MapPin class="h-3 w-3 flex-shrink-0 text-emerald-500" />
												<span class="truncate">{prov.name}</span>
											</a>
										{/each}
									</div>
								{:else}
									<div class="py-6 text-center text-xs text-slate-400 dark:text-slate-500">
										Provinsi "{provinceSearch}" tidak ditemukan
									</div>
								{/if}
							</div>

							<div class="mt-2.5 border-t border-slate-200 pt-2 text-center dark:border-slate-800">
								<a
									href="/potensi-digital-provinsi"
									onclick={closeAllDropdowns}
									class="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
								>
									<Sparkles class="h-3 w-3" /> Jelajahi Direktori 34 Provinsi
								</a>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<a
				href="/harga"
				class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {currentPath === '/harga'
					? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
					: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
			>
				Harga
			</a>

			<a
				href="/portofolio"
				class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {currentPath ===
				'/portofolio'
					? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
					: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
			>
				Portofolio
			</a>

			<a
				href="/cek-domain"
				class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {currentPath ===
				'/cek-domain'
					? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
					: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
			>
				Cek Domain
			</a>

			<a
				href="/blog"
				class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {currentPath.startsWith(
					'/blog'
				)
					? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
					: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
			>
				Blog
			</a>

			<a
				href="/tentang"
				class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {currentPath ===
				'/tentang'
					? 'bg-emerald-500/10 font-semibold text-emerald-600 dark:text-emerald-400'
					: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'}"
			>
				Tentang
			</a>
		</nav>

		<!-- Right Actions (Theme Toggle & CTA Button) -->
		<div class="hidden items-center gap-3 md:flex">
			<ThemeToggle />
			<a
				href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all duration-200 hover:from-emerald-400 hover:to-teal-400 active:scale-95"
			>
				<MessageSquare class="h-4 w-4" />
				<span>Konsultasi WA</span>
			</a>
		</div>

		<!-- Mobile Menu & Theme Toggle Button -->
		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<button
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
				class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
			>
				{#if isMobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Drawer -->
	{#if isMobileMenuOpen}
		<div
			class="border-b border-slate-200 bg-white/98 px-4 pt-3 pb-6 md:hidden dark:border-slate-800 dark:bg-slate-950/98"
		>
			<div class="flex flex-col gap-1">
				<a
					href="/"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Beranda
				</a>

				<div class="py-2">
					<div
						class="px-3 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400"
					>
						Sektor Spesialis
					</div>
					<div class="mt-1 grid grid-cols-2 gap-1 pl-2">
						{#each nicheList as niche}
							<a
								href="/jasa-website-{niche.slug}"
								onclick={closeAllDropdowns}
								class="rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
							>
								• {niche.label}
							</a>
						{/each}
					</div>
				</div>

				<div class="py-2">
					<div class="flex items-center justify-between px-3">
						<span
							class="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400"
						>
							Wilayah Layanan (34 Provinsi)
						</span>
						<a
							href="/potensi-digital-provinsi"
							onclick={closeAllDropdowns}
							class="text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
						>
							Semua &rarr;
						</a>
					</div>
					<div
						class="mt-1.5 max-h-48 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50/70 p-2 dark:border-slate-800/80 dark:bg-slate-900/40"
					>
						<div class="grid grid-cols-2 gap-1">
							{#each provinces as prov}
								<a
									href="/potensi-digital-{prov.slug}"
									onclick={closeAllDropdowns}
									class="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
								>
									<MapPin class="h-3 w-3 flex-shrink-0 text-emerald-500" />
									<span class="truncate">{prov.name}</span>
								</a>
							{/each}
						</div>
					</div>
				</div>

				<a
					href="/harga"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Harga & Paket
				</a>
				<a
					href="/portofolio"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Portofolio Karya
				</a>
				<a
					href="/cek-domain"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Order & Cek Domain
				</a>
				<a
					href="/blog"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Blog & Panduan
				</a>
				<a
					href="/tentang"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
				>
					Tentang Barizaloka
				</a>

				<div class="mt-4 border-t border-slate-200 pt-2 dark:border-slate-800">
					<a
						href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/20"
					>
						<MessageSquare class="h-5 w-5" />
						<span>Hubungi Via WhatsApp</span>
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
