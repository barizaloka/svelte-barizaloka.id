<script lang="ts">
	import { MapPin, Mail, Phone, Heart, Sparkles, Code2, ArrowUpRight } from 'lucide-svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import { LOCATION_PAGES } from '$lib/data/location_pages';
	import Logo from '$lib/components/Logo.svelte';

	const niches = Object.values(NICHE_PAGES);
	const topLocations = Object.values(LOCATION_PAGES).slice(0, 8);
</script>

<footer class="border-t border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 transition-colors duration-200">
	<!-- Main Footer Content -->
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
			<!-- Brand Info Column -->
			<div class="space-y-4 lg:col-span-2">
				<a href="/">
					<Logo size="md" />
				</a>
				<p class="max-w-md text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
					Barizaloka adalah ekosistem teknologi asal Kabupaten Rembang, Jawa Tengah. Kami melayani jasa pembuatan website profesional untuk pondok pesantren, DKM masjid, pemerintah desa, UMKM, dan bisnis daerah di seluruh Indonesia.
				</p>
				<div class="flex flex-col gap-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
					<div class="flex items-center gap-2">
						<MapPin class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
						<span>Kantor & Studio: Rembang, Jawa Tengah 59211</span>
					</div>
					<div class="flex items-center gap-2">
						<Mail class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
						<span>Kontak & Support: halo@barizaloka.id</span>
					</div>
					<div class="flex items-center gap-2">
						<Phone class="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
						<span>Hotline / WhatsApp: +62 812-3456-7890</span>
					</div>
				</div>
			</div>

			<!-- Niche Services Column -->
			<div class="space-y-3">
				<h3 class="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
					Layanan Spesialis
				</h3>
				<ul class="space-y-2 text-xs">
					{#each niches as niche}
						<li>
							<a
								href="/jasa-website-{niche.slug}"
								class="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors flex items-center gap-1 group"
							>
								<span>Jasa Website {niche.label}</span>
								<ArrowUpRight class="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
							</a>
						</li>
					{/each}
					<li>
						<a href="/harga" class="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
							Paket & Penawaran Harga
						</a>
					</li>
				</ul>
			</div>

			<!-- Quick Navigation Column -->
			<div class="space-y-3">
				<h3 class="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
					Navigasi Utama
				</h3>
				<ul class="space-y-2 text-xs">
					<li><a href="/" class="hover:text-slate-900 dark:hover:text-white transition-colors">Beranda</a></li>
					<li><a href="/cek-domain" class="hover:text-slate-900 dark:hover:text-white font-semibold text-emerald-600 dark:text-emerald-400 transition-colors">Order & Cek Domain</a></li>
					<li><a href="/harga" class="hover:text-slate-900 dark:hover:text-white transition-colors">Harga & Paket</a></li>
					<li><a href="/portofolio" class="hover:text-slate-900 dark:hover:text-white transition-colors">Portofolio</a></li>
					<li><a href="/blog" class="hover:text-slate-900 dark:hover:text-white transition-colors">Blog & Panduan</a></li>
					<li><a href="/tentang" class="hover:text-slate-900 dark:hover:text-white transition-colors">Tentang Barizaloka</a></li>
					<li><a href="/faq" class="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ & Tanya Jawab</a></li>
					<li><a href="/kontak" class="hover:text-slate-900 dark:hover:text-white transition-colors">Hubungi Kami</a></li>
				</ul>
			</div>

			<!-- Regional Locations Column -->
			<div class="space-y-3">
				<h3 class="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
					Kota & Daerah Layanan
				</h3>
				<ul class="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
					{#each topLocations as loc}
						<li>
							<a
								href="/jasa-website-di-{loc.slug}"
								class="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
							>
								Website {loc.name}
							</a>
						</li>
					{/each}
				</ul>
				<div class="pt-2">
					<a
						href="/potensi-digital-jawa-tengah"
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
					>
						<Sparkles class="h-3.5 w-3.5" />
						<span>Potensi Digital Jawa Tengah</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Community & Ecosystem Banner -->
		<div class="mt-12 rounded-2xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md shadow-sm">
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
						<Code2 class="h-6 w-6" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900 dark:text-white">Baricode Indonesia Community</h4>
						<p class="text-xs text-slate-600 dark:text-slate-400">
							Inisiatif edukasi koding dan pengembangan skill pemrograman bagi pemula di Rembang & Jawa Tengah.
						</p>
					</div>
				</div>
				<a
					href="https://github.com/barizaloka"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
				>
					<span>GitHub Barizaloka</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>

		<!-- Bottom Copyright Bar -->
		<div class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-8 sm:flex-row text-xs text-slate-500 dark:text-slate-400">
			<div>
				© {new Date().getFullYear()} Barizaloka.id — Hak Cipta Dilindungi. Rembang, Jawa Tengah.
			</div>
			<div class="flex items-center gap-1">
				<span>Dibuat dengan</span>
				<Heart class="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
				<span>di Rembang untuk Indonesia</span>
			</div>
		</div>
	</div>
</footer>
