<script lang="ts">
	import { page } from '$app/state';
	import {
		Globe,
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
		Sparkles
	} from 'lucide-svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { LOCATION_PAGES } from '$lib/data/location_pages';

	let isMobileMenuOpen = $state(false);
	let isNicheDropdownOpen = $state(false);
	let isLocationDropdownOpen = $state(false);

	const nicheList = Object.values(NICHE_PAGES);
	const topLocations = Object.values(LOCATION_PAGES).slice(0, 6);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeAllDropdowns() {
		isNicheDropdownOpen = false;
		isLocationDropdownOpen = false;
		isMobileMenuOpen = false;
	}

	const currentPath = $derived(page.url.pathname);
</script>

<header class="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-slate-950/85 backdrop-blur-md text-slate-100 transition-all duration-200">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<!-- Brand Logo -->
		<a href="/" onclick={closeAllDropdowns} class="group flex items-center gap-2.5">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
				<Globe class="h-5 w-5" />
			</div>
			<div class="flex flex-col">
				<span class="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
					BARIZALOKA<span class="text-emerald-400">.ID</span>
				</span>
				<span class="text-[10px] font-medium tracking-wider text-slate-400 uppercase -mt-1">
					Rembang Tech Ecosystem
				</span>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-1 md:flex">
			<a
				href="/"
				class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath === '/' ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
			>
				Beranda
			</a>

			<!-- Niche Dropdown -->
			<div class="relative" onmouseleave={() => (isNicheDropdownOpen = false)}>
				<button
					onclick={() => (isNicheDropdownOpen = !isNicheDropdownOpen)}
					onmouseenter={() => (isNicheDropdownOpen = true)}
					class="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath.startsWith('/jasa-website-') && !currentPath.includes('-di-') ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
				>
					<span>Layanan Niche</span>
					<ChevronDown class="h-4 w-4 transition-transform duration-200 {isNicheDropdownOpen ? 'rotate-180' : ''}" />
				</button>

				{#if isNicheDropdownOpen}
					<div class="absolute left-0 top-full mt-1 w-72 rounded-2xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 animate-in fade-in slide-in-from-top-2 duration-150">
						<div class="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
							Spesialisasi Sektor
						</div>
						{#each nicheList as niche}
							<a
								href="/jasa-website-{niche.slug}"
								onclick={closeAllDropdowns}
								class="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-emerald-950/40 hover:text-emerald-300 group"
							>
								<div class="mt-0.5 rounded-lg bg-emerald-500/10 p-2 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
									{#if niche.slug === 'pesantren'}
										<GraduationCap class="h-4 w-4" />
									{:else if niche.slug === 'masjid'}
										<Landmark class="h-4 w-4" />
									{:else if niche.slug === 'desa'}
										<Building2 class="h-4 w-4" />
									{:else if niche.slug === 'umkm'}
										<Store class="h-4 w-4" />
									{:else}
										<Zap class="h-4 w-4" />
									{/if}
								</div>
								<div>
									<div class="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
										{niche.label}
									</div>
									<div class="text-xs text-slate-400 line-clamp-1">
										{niche.title}
									</div>
								</div>
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Location Dropdown -->
			<div class="relative" onmouseleave={() => (isLocationDropdownOpen = false)}>
				<button
					onclick={() => (isLocationDropdownOpen = !isLocationDropdownOpen)}
					onmouseenter={() => (isLocationDropdownOpen = true)}
					class="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath.includes('-di-') || currentPath.includes('/potensi-digital') ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
				>
					<span>Jangkauan Wilayah</span>
					<ChevronDown class="h-4 w-4 transition-transform duration-200 {isLocationDropdownOpen ? 'rotate-180' : ''}" />
				</button>

				{#if isLocationDropdownOpen}
					<div class="absolute left-0 top-full mt-1 w-80 rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
						<div class="mb-2 flex items-center justify-between border-b border-slate-800 pb-2 px-1">
							<span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
								Wilayah Layanan Unggulan
							</span>
							<span class="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
								<MapPin class="h-3 w-3" /> Rembang & Sekitarnya
							</span>
						</div>
						<div class="grid grid-cols-2 gap-1.5">
							{#each topLocations as loc}
								<a
									href="/jasa-website-di-{loc.slug}"
									onclick={closeAllDropdowns}
									class="flex items-center gap-2 rounded-lg p-2 text-xs font-medium text-slate-300 hover:bg-emerald-950/50 hover:text-emerald-300 transition-colors"
								>
									<MapPin class="h-3.5 w-3.5 text-emerald-500" />
									<span>{loc.name}</span>
								</a>
							{/each}
						</div>
						<div class="mt-3 border-t border-slate-800 pt-2 px-1 text-center">
							<a
								href="/potensi-digital-jawa-tengah"
								onclick={closeAllDropdowns}
								class="text-xs font-semibold text-emerald-400 hover:underline flex items-center justify-center gap-1"
							>
								<Sparkles class="h-3.5 w-3.5" /> Potensi Digital Jawa Tengah
							</a>
						</div>
					</div>
				{/if}
			</div>

			<a
				href="/harga"
				class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath === '/harga' ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
			>
				Harga & Paket
			</a>

			<a
				href="/portofolio"
				class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath === '/portofolio' ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
			>
				Portofolio
			</a>

			<a
				href="/blog"
				class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath.startsWith('/blog') ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
			>
				Blog
			</a>

			<a
				href="/tentang"
				class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors {currentPath === '/tentang' ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'}"
			>
				Tentang
			</a>
		</nav>

		<!-- Right CTA Button -->
		<div class="hidden items-center gap-3 md:flex">
			<a
				href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pembuatan%20website"
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 active:scale-95"
			>
				<MessageSquare class="h-4 w-4" />
				<span>Konsultasi WA</span>
			</a>
		</div>

		<!-- Mobile Menu Toggle Button -->
		<button
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
			class="inline-flex items-center justify-center rounded-xl border border-slate-800 p-2 text-slate-300 hover:bg-slate-900 hover:text-white md:hidden"
		>
			{#if isMobileMenuOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	<!-- Mobile Navigation Drawer -->
	{#if isMobileMenuOpen}
		<div class="border-b border-slate-800 bg-slate-950/98 px-4 pb-6 pt-3 md:hidden">
			<div class="flex flex-col gap-1">
				<a
					href="/"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Beranda
				</a>

				<div class="py-2">
					<div class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
						Layanan Niche
					</div>
					<div class="mt-1 flex flex-col gap-1 pl-2">
						{#each nicheList as niche}
							<a
								href="/jasa-website-{niche.slug}"
								onclick={closeAllDropdowns}
								class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-emerald-950/40 hover:text-emerald-300"
							>
								<span class="text-emerald-400">•</span>
								<span>{niche.label}</span>
							</a>
						{/each}
					</div>
				</div>

				<div class="py-2 border-t border-slate-900">
					<div class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
						Kota / Kabupaten Unggulan
					</div>
					<div class="mt-1 grid grid-cols-2 gap-1 pl-2">
						{#each topLocations as loc}
							<a
								href="/jasa-website-di-{loc.slug}"
								onclick={closeAllDropdowns}
								class="rounded-lg px-3 py-1.5 text-xs text-slate-300 hover:bg-emerald-950/40 hover:text-emerald-300"
							>
								📍 {loc.name}
							</a>
						{/each}
					</div>
				</div>

				<a
					href="/harga"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Harga & Paket
				</a>
				<a
					href="/portofolio"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Portofolio
				</a>
				<a
					href="/blog"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Blog & Panduan
				</a>
				<a
					href="/tentang"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Tentang Barizaloka
				</a>
				<a
					href="/kontak"
					onclick={closeAllDropdowns}
					class="rounded-lg px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-900"
				>
					Kontak Kami
				</a>

				<div class="mt-4 pt-2 border-t border-slate-800">
					<a
						href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi"
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
