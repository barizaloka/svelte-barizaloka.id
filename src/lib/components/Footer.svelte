<script lang="ts">
	import { MapPin, Phone, Heart, Sparkles, Code2, ArrowUpRight } from 'lucide-svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { LOCATION_PAGES } from '$lib/data/location_pages';

	const niches = Object.values(NICHE_PAGES);
	const topLocations = Object.values(LOCATION_PAGES).slice(0, 8);

	const socialLinks = [
		{
			name: 'Instagram',
			href: 'https://instagram.com/barizaloka',
			id: 'instagram'
		},
		{
			name: 'TikTok',
			href: 'https://www.tiktok.com/@barizaloka',
			id: 'tiktok'
		},
		{
			name: 'Threads',
			href: 'https://www.threads.net/@barizaloka',
			id: 'threads'
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/@barizaloka',
			id: 'youtube'
		},
		{
			name: 'X',
			href: 'https://x.com/barizaloka',
			id: 'x'
		}
	];
</script>

<footer
	class="border-t border-slate-200 bg-slate-100 text-slate-700 transition-colors duration-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
>
	<!-- Main Footer Content -->
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
			<!-- Brand Info Column -->
			<div class="space-y-4 lg:col-span-2">
				<p class="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
					Barizaloka adalah ekosistem teknologi asal Kabupaten Rembang, Jawa Tengah. Kami melayani
					jasa pembuatan website profesional untuk pondok pesantren, DKM masjid, pemerintah desa,
					UMKM, dan bisnis daerah di seluruh Indonesia.
				</p>
				<div class="flex flex-col gap-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
					<div class="flex items-center gap-2">
						<MapPin class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Kantor & Studio: Rembang, Jawa Tengah 59211</span>
					</div>
					<a
						href="https://wa.me/6285188158542"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
					>
						<Phone class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
						<span>Hotline / WhatsApp: +62 851-8815-8542</span>
					</a>
				</div>

				<!-- Social Media Links -->
				<div class="pt-2">
					<span class="text-xs font-semibold text-slate-700 dark:text-slate-300">
						Ikuti Media Sosial Kami:
					</span>
					<div class="mt-2.5 flex flex-wrap items-center gap-2">
						{#each socialLinks as item}
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={item.name}
								title={item.name}
								class="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
							>
								{#if item.id === 'instagram'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else if item.id === 'tiktok'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.32V8.9a8.28 8.28 0 004.92 1.6V7.07a4.85 4.85 0 01-1-.38z"
										/>
									</svg>
								{:else if item.id === 'facebook'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else if item.id === 'threads'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 192 192" aria-hidden="true">
										<path
											d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
										/>
									</svg>
								{:else if item.id === 'youtube'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fill-rule="evenodd"
											d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else if item.id === 'x'}
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
										/>
									</svg>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Niche Services Column -->
			<div class="space-y-3">
				<h3
					class="text-sm font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400"
				>
					Layanan Spesialis
				</h3>
				<ul class="space-y-2 text-xs">
					{#each niches as niche}
						<li>
							<a
								href="/jasa-website-{niche.slug}"
								class="group flex items-center gap-1 transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
							>
								<span>Jasa Website {niche.label}</span>
								<ArrowUpRight
									class="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
								/>
							</a>
						</li>
					{/each}
					<li>
						<a
							href="/harga"
							class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
						>
							Paket & Penawaran Harga
						</a>
					</li>
				</ul>
			</div>

			<!-- Quick Navigation Column -->
			<div class="space-y-3">
				<h3
					class="text-sm font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400"
				>
					Navigasi Utama
				</h3>
				<ul class="space-y-2 text-xs">
					<li>
						<a href="/" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Beranda</a
						>
					</li>
					<li>
						<a
							href="/cek-domain"
							class="font-semibold text-emerald-600 transition-colors hover:text-slate-900 dark:text-emerald-400 dark:hover:text-white"
							>Order & Cek Domain</a
						>
					</li>
					<li>
						<a href="/harga" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Harga & Paket</a
						>
					</li>
					<li>
						<a
							href="/portofolio"
							class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Portofolio Karya</a
						>
					</li>
					<li>
						<a href="/blog" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Blog & Panduan</a
						>
					</li>
					<li>
						<a href="/tentang" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Tentang Barizaloka</a
						>
					</li>
					<li>
						<a href="/faq" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>FAQ & Tanya Jawab</a
						>
					</li>
					<li>
						<a href="/kontak" class="transition-colors hover:text-slate-900 dark:hover:text-white"
							>Hubungi Kami</a
						>
					</li>
					<li>
						<a
							href="/sumu-serikat-usaha-muhammadiyah"
							class="font-medium text-emerald-600 transition-colors hover:text-slate-900 dark:text-emerald-400 dark:hover:text-white"
							>💚 Inisiatif SUMU</a
						>
					</li>
				</ul>
			</div>

			<!-- Regional Locations Column -->
			<div class="space-y-3">
				<h3
					class="text-sm font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400"
				>
					Kota & Daerah Layanan
				</h3>
				<ul class="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
					{#each topLocations as loc}
						<li>
							<a
								href="/jasa-website-di-{loc.slug}"
								class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
							>
								Website {loc.name}
							</a>
						</li>
					{/each}
				</ul>
				<div class="flex flex-col gap-1.5 pt-2">
					<a
						href="/potensi-digital-jawa-tengah"
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
					>
						<Sparkles class="h-3.5 w-3.5" />
						<span>Potensi Digital Jawa Tengah</span>
					</a>
					<a
						href="/potensi-digital-provinsi"
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
					>
						<ArrowUpRight class="h-3.5 w-3.5" />
						<span>Direktori 34 Provinsi Indonesia</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Community & Ecosystem Banner -->
		<div
			class="mt-12 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-md sm:p-6 dark:border-slate-800 dark:bg-slate-900/60"
		>
			<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
				<div class="flex items-center gap-3">
					<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
						<Code2 class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900 dark:text-white">Baricode Indonesia</h4>
						<p class="text-xs text-slate-600 dark:text-slate-400">
							Inisiatif edukasi koding dan pengembangan skill pemrograman bagi pemula
						</p>
					</div>
				</div>
				<a
					href="https://baricode.org"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
				>
					<span>Kunjungi Website</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>

		<!-- Bottom Copyright Bar -->
		<div
			class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row dark:border-slate-800/80 dark:text-slate-400"
		>
			<div>
				© {new Date().getFullYear()} Barizaloka.id — Hak Cipta Dilindungi. Rembang, Jawa Tengah.
			</div>
			<div class="flex items-center gap-1">
				<span>Dibuat dengan</span>
				<Heart class="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
				<span>di Rembang untuk Indonesia</span>
			</div>
		</div>
	</div>
</footer>
