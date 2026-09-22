<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { MapPin, Sparkles, MessageSquare, ArrowRight, Search } from 'lucide-svelte';

	let { data } = $props();
	const provinces = $derived(data.provinces);

	let searchQuery = $state('');
	let selectedPulau = $state('Semua');

	const pulauList = $derived([
		'Semua',
		...Array.from(new Set(provinces.map((p) => p.pulau || 'Indonesia'))).sort()
	]);

	const filteredProvinces = $derived(
		provinces.filter((p) => {
			const matchesPulau = selectedPulau === 'Semua' || (p.pulau || 'Indonesia') === selectedPulau;
			const query = searchQuery.trim().toLowerCase();
			const matchesQuery =
				!query ||
				p.name.toLowerCase().includes(query) ||
				(p.ibukota && p.ibukota.toLowerCase().includes(query)) ||
				(p.pulau && p.pulau.toLowerCase().includes(query)) ||
				p.kabupaten_kota.some((k) => k.toLowerCase().includes(query));

			return matchesPulau && matchesQuery;
		})
	);
</script>

<svelte:head>
	<title>Potensi Digital 34 Provinsi Indonesia — Barizaloka</title>
	<meta
		name="description"
		content="Jelajahi potensi digital 34 provinsi di Indonesia: kabupaten/kota, sektor unggulan, dan bagaimana website & aplikasi membuat potensi daerah tumbuh lebih besar."
	/>
	<link rel="canonical" href="https://barizaloka.id/potensi-digital-provinsi" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: '🗺️ 34 Provinsi Indonesia' }]} />

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
				<span>🗺️ Jangkauan Layanan Web 34 Provinsi Indonesia</span>
			</div>

			<h1
				class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
			>
				Potensi Digital &amp; Jasa Website<br />
				<span
					class="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400"
				>
					Setiap Provinsi di Indonesia
				</span>
			</h1>

			<p class="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
				Setiap provinsi memiliki kabupaten/kota, sektor unggulan, dan potensi ekonomi yang dapat
				tumbuh lebih pesat bila didukung website dan aplikasi modern berstandar tinggi.
			</p>

			<div class="mt-2 flex flex-wrap items-center justify-center gap-4">
				<a
					href="/harga"
					class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-98 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
				>
					<span>💎 Lihat Paket &amp; Harga</span>
				</a>
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka%2C%20saya%20ingin%20konsultasi%20website%20untuk%20daerah%20saya"
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

	<!-- ===== INTRO SECTION ===== -->
	<section class="my-14 text-center">
		<div class="mx-auto max-w-3xl space-y-4">
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Pengembangan Digitalisasi Daerah Seluruh Indonesia
			</h2>
			<p class="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
				Indonesia memiliki 34 provinsi dengan ribuan kabupaten/kota, masing-masing menyimpan potensi
				ekonomi yang berbeda: pertanian, perikanan, pariwisata, hingga industri kreatif. Sayangnya,
				banyak UMKM, pesantren, desa, dan pelaku usaha di daerah belum tampil online sehingga
				potensi tersebut belum tergarap maksimal. Pilih provinsi Anda untuk melihat potensinya secara
				lebih detail.
			</p>
		</div>
	</section>

	<!-- ===== PROVINCE DIRECTORY GRID ===== -->
	<section class="my-16">
		<div class="mx-auto mb-10 max-w-2xl text-center">
			<span
				class="mb-3 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
			>
				📍 Direktori Provinsi
			</span>
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				34 Provinsi Indonesia
			</h2>
			<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
				Klik provinsi untuk melihat rincian kabupaten/kota dan potensi unggulannya.
			</p>
		</div>

		<!-- Search & Filter Controls -->
		<div class="mx-auto mb-10 max-w-3xl space-y-4">
			<div class="relative">
				<Search class="absolute top-3.5 left-4 h-5 w-5 text-slate-400 dark:text-slate-500" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari provinsi, ibukota, atau kabupaten/kota..."
					class="w-full rounded-2xl border border-slate-300 bg-white py-3 pr-4 pl-11 text-sm text-slate-900 shadow-2xs focus:border-emerald-500 focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-400"
				/>
			</div>

			<!-- Filter Pulau Pills -->
			<div class="flex flex-wrap justify-center gap-2">
				{#each pulauList as pulau}
					<button
						onclick={() => (selectedPulau = pulau)}
						class="rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all {selectedPulau ===
						pulau
							? 'bg-emerald-600 text-white shadow-xs dark:bg-emerald-500 dark:text-slate-950'
							: 'border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500'}"
					>
						{pulau}
					</button>
				{/each}
			</div>
		</div>

		<!-- Grid of Cards -->
		{#if filteredProvinces.length > 0}
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredProvinces as province}
					<a
						href="/potensi-digital-{province.slug}"
						class="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/50"
					>
						<div>
							<span
								class="mb-2.5 inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
							>
								{province.pulau || 'Indonesia'}
							</span>
							<h3
								class="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
							>
								{province.name}
							</h3>
							<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
								Ibu kota: <strong>{province.ibukota || 'Pusat Daerah'}</strong> &middot;{' '}
								{province.kabupaten_kota.length} Kabupaten/Kota
							</p>
						</div>

						<div
							class="mt-5 flex items-center gap-1.5 text-xs font-bold text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400"
						>
							<span>Lihat Potensi Digital</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div
				class="my-12 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-800 dark:text-slate-400"
			>
				Tidak ditemukan provinsi dengan kata kunci "<strong>{searchQuery}</strong>".
			</div>
		{/if}
	</section>

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
			<span class="text-5xl">🗺️</span>
			<h2 class="text-2xl font-extrabold sm:text-4xl">
				Siap Wujudkan Potensi Daerah Anda Secara Online?
			</h2>
			<p class="max-w-xl text-sm leading-relaxed text-emerald-100 sm:text-base">
				Konsultasi gratis via WhatsApp, tanpa biaya, tanpa kewajiban. Punya website profesional dan
				cepat untuk usaha atau lembaga Anda di daerah.
			</p>
			<a
				href="https://wa.me/6285188158542?text=Halo%20Barizaloka%2C%20saya%20ingin%20konsultasi%20website%20untuk%20daerah%20saya"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
			>
				<MessageSquare class="h-4 w-4 text-emerald-700" />
				<span>Mulai Konsultasi WhatsApp Gratis</span>
			</a>
		</div>
	</section>
</div>
