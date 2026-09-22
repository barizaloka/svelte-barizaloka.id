<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { NICHE_PAGES } from '$lib/data/niche_pages';
	import {
		MapPin,
		Sparkles,
		CheckCircle2,
		MessageSquare,
		ArrowRight,
		Globe,
		TrendingUp,
		Building2,
		Handshake,
		ChevronDown,
		ExternalLink
	} from 'lucide-svelte';

	let { data } = $props();
	const provinsi = $derived(data.provinsi);
	const relatedProvinces = $derived(data.relatedProvinces);

	const niches = Object.values(NICHE_PAGES);
	let openFaq = $state<number | null>(1);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>{provinsi.title}</title>
	<meta name="description" content={provinsi.meta_description} />
	<link rel="canonical" href="https://barizaloka.id/potensi-digital-{provinsi.slug}" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[
			{ label: 'Cakupan Provinsi', href: '/potensi-digital-provinsi' },
			{ label: `🇮🇩 ${provinsi.name}` }
		]}
	/>

	<!-- ===== HERO SECTION ===== -->
	<section
		class="relative my-8 overflow-hidden rounded-3xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-indigo-50/30 p-8 sm:p-12 lg:p-16 dark:border-slate-800 dark:from-slate-900/90 dark:via-emerald-950/20 dark:to-slate-900/90"
	>
		<div
			class="pointer-events-none absolute -top-12 -left-12 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10"
		></div>
		<div
			class="pointer-events-none absolute -right-12 -bottom-12 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10"
		></div>

		<div class="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-xs backdrop-blur-xs sm:text-sm dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300"
			>
				<span class="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500"></span>
				<span>{provinsi.hero_badge || '📍 Potensi Digital Provinsi'}</span>
			</div>

			<h1
				class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
			>
				Potensi Digital &amp; Jasa Website<br />
				<span
					class="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400"
				>
					{provinsi.name}
				</span>
			</h1>

			<p class="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
				{provinsi.hero_subtitle ||
					`Solusi pembuatan website profesional untuk pesantren, masjid, desa, dan UMKM di ${provinsi.name}.`}
			</p>

			<div
				class="inline-flex items-center gap-2 rounded-xl bg-emerald-100/60 px-4 py-2 text-xs font-semibold text-emerald-900 sm:text-sm dark:bg-emerald-950/50 dark:text-emerald-300"
			>
				<MapPin class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
				<span>
					Ibu kota: <strong>{provinsi.ibukota || 'Pusat Daerah'}</strong> &middot;{' '}
					<strong>{provinsi.kabupaten_kota.length}</strong> Kabupaten/Kota
				</span>
			</div>

			<div class="mt-2 flex flex-wrap items-center justify-center gap-4">
				<a
					href="/harga"
					class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-98 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
				>
					<span>💎 Lihat Paket &amp; Harga</span>
				</a>
				<a
					href="https://wa.me/6285188158542?text={encodeURIComponent(
						`Halo Barizaloka, saya dari ${provinsi.name} ingin konsultasi pembuatan website`
					)}"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:bg-slate-50 active:scale-98 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
				>
					<MessageSquare class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
					<span>Konsultasi WA Gratis</span>
				</a>
			</div>
		</div>
	</section>

	<!-- ===== STATS HIGHLIGHT ===== -->
	<section
		class="my-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-800 dark:bg-slate-900/60"
	>
		<div class="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4">
			<div
				class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20"
			>
				<div class="text-3xl font-extrabold text-emerald-700 sm:text-4xl dark:text-emerald-400">
					{provinsi.kabupaten_kota.length}
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400">
					Kabupaten &amp; Kota Terjangkau
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20"
			>
				<div class="text-2xl font-extrabold text-emerald-700 sm:text-3xl dark:text-emerald-400">
					SvelteKit &amp; Cepat
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400">
					Arsitektur Modern &amp; Ringan
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20"
			>
				<div class="text-3xl font-extrabold text-emerald-700 sm:text-4xl dark:text-emerald-400">
					100% Online
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400">
					Layanan Pengerjaan Cepat
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20"
			>
				<div class="text-2xl font-extrabold text-emerald-700 sm:text-3xl dark:text-emerald-400">
					All-in-One
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400">
					Domain, Hosting, SSL &amp; Garansi
				</div>
			</div>
		</div>
	</section>

	<!-- ===== INTRO SECTION ===== -->
	<section class="my-16 text-center">
		<div class="mx-auto max-w-3xl space-y-4">
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Pengembangan Digitalisasi Sektor Unggulan {provinsi.name}
			</h2>
			<p class="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
				{provinsi.intro}
			</p>
		</div>
	</section>

	<!-- ===== KABUPATEN / KOTA ===== -->
	{#if provinsi.kabupaten_kota && provinsi.kabupaten_kota.length > 0}
		<section
			class="my-16 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900/40"
		>
			<div class="mx-auto mb-8 max-w-2xl text-center">
				<span
					class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
				>
					🏘️ Wilayah Administratif
				</span>
				<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
					Kabupaten &amp; Kota di {provinsi.name}
				</h2>
				<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
					{provinsi.name} terdiri dari <strong>{provinsi.kabupaten_kota.length}</strong> kabupaten/kota
					yang masing-masing memiliki potensi besar.
				</p>
			</div>

			<div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
				{#each provinsi.kabupaten_kota as kabupaten}
					<span
						class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-colors hover:border-emerald-500 hover:text-emerald-700 sm:text-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
					>
						<MapPin class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
						<span>{kabupaten}</span>
					</span>
				{/each}
			</div>
		</section>
	{/if}

	<!-- ===== POTENSI SEKTOR UNGGULAN ===== -->
	{#if provinsi.potensi && provinsi.potensi.length > 0}
		<section class="my-16">
			<div class="mx-auto mb-10 max-w-2xl text-center">
				<span
					class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
				>
					✨ Sektor Unggulan
				</span>
				<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
					Potensi Ekonomi &amp; Digital {provinsi.name}
				</h2>
				<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
					Potensi ini dapat berkembang lebih pesat bila didukung infrastruktur website mandiri.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each provinsi.potensi as item}
					<div
						class="flex gap-4 rounded-2xl border border-emerald-100/90 bg-emerald-50/40 p-6 transition-transform hover:-translate-y-1 sm:p-8 dark:border-emerald-500/20 dark:bg-emerald-950/15"
					>
						<span class="text-3xl sm:text-4xl">{item.icon}</span>
						<div>
							<h3 class="mb-1.5 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
								{item.title}
							</h3>
							<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
								{item.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- ===== KENAPA BUTUH WEBSITE ===== -->
	<section
		class="my-16 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900/40"
	>
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<span
				class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
			>
				🚀 Akselerasi Digital
			</span>
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Mengapa Lembaga &amp; Usaha di {provinsi.name} Butuh Website?
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			<div
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
					<Globe class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
					Promosi UMKM &amp; Produk Unggulan Luas
				</h3>
				<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
					Website membantu UMKM dan produk khas {provinsi.name} tampil profesional di mesin pencari Google,
					menjangkau pembeli dari seluruh Indonesia tanpa batas geografis.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
					<TrendingUp class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
					Pariwisata &amp; Potensi Kreatif Terlihat
				</h3>
				<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
					Destinasi wisata dan produk kreatif di {provinsi.name} bisa ditemukan calon wisatawan sebelum
					berkunjung, lengkap dengan katalog visual, rute, dan kontak reservasi.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
					<Building2 class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
					Transparansi Informasi Desa &amp; Lembaga
				</h3>
				<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
					Website resmi membantu pemerintah desa dan lembaga di {provinsi.name} menyampaikan informasi
					program, transparansi anggaran, serta layanan administrasi publik secara terbuka.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-transform hover:-translate-y-1 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
					<Handshake class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
					Investasi &amp; Kemitraan Mudah Masuk
				</h3>
				<p class="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
					Investor dan mitra bisnis yang ingin masuk ke {provinsi.name} mendapatkan gambaran potensi
					daerah secara kredibel dan terstruktur lewat website resmi.
				</p>
			</div>
		</div>

		<div class="mt-10 text-center">
			<a
				href="/harga"
				class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
			>
				<span>Lihat Paket &amp; Harga Website</span>
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</section>

	<!-- ===== NICHE LIST ===== -->
	<section class="my-16">
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<span
				class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
			>
				🛠️ Layanan Kami
			</span>
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Website untuk Berbagai Sektor di {provinsi.name}
			</h2>
		</div>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
			{#each niches as niche}
				<a
					href="/jasa-website-{niche.slug}"
					class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xs transition-all hover:-translate-y-1 hover:border-emerald-500 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400"
				>
					<h3
						class="text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-600 sm:text-base dark:text-slate-100 dark:group-hover:text-emerald-400"
					>
						Website {niche.label}
					</h3>
					<span
						class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
					>
						<span>Detail</span>
						<ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
					</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- ===== FAQ ACCORDION ===== -->
	<section class="my-16">
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<span
				class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
			>
				❓ FAQ
			</span>
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Pertanyaan Seputar Jasa Website di {provinsi.name}
			</h2>
		</div>

		<div class="mx-auto max-w-3xl space-y-4">
			<!-- FAQ 1 -->
			<div
				class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900"
			>
				<button
					onclick={() => toggleFaq(1)}
					class="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition-colors hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50"
				>
					<span class="text-sm sm:text-base">
						Apakah Barizaloka melayani pembuatan website untuk seluruh wilayah {provinsi.name}?
					</span>
					<ChevronDown
						class="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 dark:text-emerald-400 {openFaq ===
						1
							? 'rotate-180'
							: ''}"
					/>
				</button>
				{#if openFaq === 1}
					<div
						class="border-t border-slate-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:border-slate-800 dark:text-slate-300"
					>
						Ya, kami melayani pembuatan website untuk pesantren, UMKM, masjid, dan desa di seluruh
						kabupaten/kota di {provinsi.name}, dikerjakan secara profesional dan 100% online dari
						mana saja.
					</div>
				{/if}
			</div>

			<!-- FAQ 2 -->
			<div
				class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900"
			>
				<button
					onclick={() => toggleFaq(2)}
					class="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition-colors hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50"
				>
					<span class="text-sm sm:text-base">
						Berapa lama estimasi pengerjaan website di {provinsi.name}?
					</span>
					<ChevronDown
						class="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 dark:text-emerald-400 {openFaq ===
						2
							? 'rotate-180'
							: ''}"
					/>
				</button>
				{#if openFaq === 2}
					<div
						class="border-t border-slate-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:border-slate-800 dark:text-slate-300"
					>
						Proses pengerjaan cepat berkisar antara 1 hingga 7 hari kerja setelah materi foto dan
						teks lengkap diserahkan.
					</div>
				{/if}
			</div>

			<!-- FAQ 3 -->
			<div
				class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900"
			>
				<button
					onclick={() => toggleFaq(3)}
					class="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition-colors hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50"
				>
					<span class="text-sm sm:text-base">
						Apakah harga sama untuk semua daerah di {provinsi.name}?
					</span>
					<ChevronDown
						class="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 dark:text-emerald-400 {openFaq ===
						3
							? 'rotate-180'
							: ''}"
					/>
				</button>
				{#if openFaq === 3}
					<div
						class="border-t border-slate-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:border-slate-800 dark:text-slate-300"
					>
						Ya, harga paket kami transparan dan sama rata mulai Rp 350.000/tahun tanpa biaya
						tersembunyi.
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- ===== RELATED PROVINCES ===== -->
	{#if relatedProvinces && relatedProvinces.length > 0}
		<section
			class="my-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900/60"
		>
			<div class="mx-auto max-w-4xl text-center">
				<h3 class="mb-6 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
					Provinsi Lain di Sekitar {provinsi.name}
				</h3>

				<div class="flex flex-wrap justify-center gap-3">
					{#each relatedProvinces as related}
						<a
							href="/potensi-digital-{related.slug}"
							class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-800 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white sm:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-emerald-600"
						>
							<span>Potensi {related.name}</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</a>
					{/each}
				</div>

				<div class="mt-8">
					<a
						href="/potensi-digital-provinsi"
						class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:underline dark:text-emerald-400"
					>
						<span>Lihat Semua 34 Provinsi di Indonesia</span>
						<ArrowRight class="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	{/if}

	<!-- ===== FINAL CTA ===== -->
	<section
		class="relative my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-indigo-950 p-8 text-center text-white shadow-xl sm:p-14"
	>
		<div
			class="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-2xl"
		></div>
		<div
			class="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-2xl"
		></div>

		<div class="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
			<span class="text-5xl">🇮🇩</span>
			<h2 class="text-2xl font-extrabold sm:text-4xl">
				Siap Wujudkan Potensi Digital di {provinsi.name}?
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-emerald-100 sm:text-base">
				Konsultasikan kebutuhan pembuatan website instansi atau usaha Anda di {provinsi.name} secara
				gratis bersama tim Barizaloka.
			</p>
			<a
				href="https://wa.me/6285188158542?text={encodeURIComponent(
					`Halo Barizaloka, saya dari ${provinsi.name} ingin konsultasi website`
				)}"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
			>
				<MessageSquare class="h-4 w-4 text-emerald-700" />
				<span>Mulai Konsultasi WhatsApp {provinsi.name}</span>
			</a>
		</div>
	</section>
</div>
