<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import { DomainService, type DomainCheckItemResult } from '$lib/services/domain.service';
	import {
		Globe,
		Search,
		CheckCircle2,
		XCircle,
		ShieldCheck,
		HelpCircle,
		ArrowRight,
		Sparkles,
		AlertCircle,
		ExternalLink,
		MessageSquare,
		Copy,
		Check
	} from 'lucide-svelte';

	// Domain Checker Tool State
	let searchQuery = $state('');
	let isSearching = $state(false);
	let searchPerformed = $state(false);
	let copiedDomain = $state('');

	let results = $state<DomainCheckItemResult[]>([]);

	async function handleCheckDomain(e?: Event) {
		if (e) e.preventDefault();
		const name = DomainService.cleanDomainName(searchQuery);
		if (!name) return;

		isSearching = true;
		searchPerformed = false;

		try {
			const data = await DomainService.fetchCheck(searchQuery);
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

	const steps = [
		{
			number: '01',
			title: 'Tentukan Nama Brand & Kata Kunci Utama',
			desc: 'Pilih nama yang mencerminkan bisnis atau kegiatan Anda. Pastikan singkat (1-3 kata), mudah diucapkan, dan tidak membingungkan saat ditik.'
		},
		{
			number: '02',
			title: 'Gunakan Simulator / Tool Cek Ketersediaan Domain',
			desc: 'Ketik nama domain impian Anda di kolom pencarian untuk memeriksa apakah nama tersebut masih tersedia atau sudah dibeli orang lain.'
		},
		{
			number: '03',
			title: 'Pilih Ekstensi Domain yang Paling Tepat (.COM vs .ID)',
			desc: 'Gunakan .COM untuk target pasar global/umum, .ID atau .CO.ID untuk tingkat kepercayaan tinggi di Indonesia, atau .SCH.ID / .PONPES.ID untuk institusi.'
		},
		{
			number: '04',
			title: 'Periksa Riwayat & Reputasi Domain (WHOIS & History)',
			desc: 'Jika membeli domain bekas (expired domain), pastikan domain tersebut bebas dari riwayat pemblokiran Google (penalty) atau aktivitas spam.'
		},
		{
			number: '05',
			title: 'Segera Amankan & Registrasikan Domain Anda',
			desc: 'Domain bersifat "First Come, First Served". Begitu menemukan nama domain yang cocok dan tersedia, langsung daftarkan agar tidak didahului pihak lain.'
		}
	];

	const domainTips = [
		{
			title: 'Maksimal 2-3 Kata & Tanpa Angka',
			desc: 'Nama domain pendek lebih mudah diingat. Hindari mencampur angka atau tanda hubung (-) yang sulit disampaikan via lisan.'
		},
		{
			title: 'Uji Pengucapan (Radio Test)',
			desc: 'Coba sebutkan nama domain Anda ke teman via telepon. Jika mereka bisa mengeja dengan benar tanpa bertanya ulang, nama tersebut bagus.'
		},
		{
			title: 'Amankan Variasi Ekstensi Utama',
			desc: 'Jika Anda mendaftarkan nama-brand.com, sangat disarankan juga mengamankan nama-brand.id untuk melindungi reputasi brand dari peniru.'
		},
		{
			title: 'Perhatikan Hak Cipta & Merek Dagang',
			desc: 'Jangan menggunakan kata yang melanggar trademark perusahaan ternama (seperti menambahkan kata WhatsApp, Shopee, atau Samsung).'
		}
	];
</script>

<svelte:head>
	<title>Cara Cek Domain dengan Mudah & Cepat (Panduan Lengkap 2026) | Barizaloka</title>
	<meta
		name="description"
		content="Panduan praktis cara mengecek ketersediaan domain website (.COM, .ID, .CO.ID), cek status WHOIS, serta tips memilih nama domain terbaik secara gratis & mudah."
	/>
	<meta
		name="keywords"
		content="cara cek domain, cek ketersediaan domain, cek domain murah, cek whois domain, domain .id, domain .com, daftar domain barizaloka"
	/>
	<meta property="og:title" content="Cara Cek Domain dengan Mudah & Cepat | Barizaloka" />
	<meta
		property="og:description"
		content="Ketahui langkah mudah cek ketersediaan domain website Anda, bandingkan harga ekstensi .COM, .ID, .MY.ID, serta amankan nama brand Anda sekarang."
	/>
	<meta property="og:type" content="article" />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Panduan Web' }, { label: 'Cara Cek Domain dengan Mudah' }]} />

	<!-- HERO SECTION -->
	<section
		class="relative my-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-8 text-white shadow-2xl sm:p-12"
	>
		<div
			class="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
		></div>

		<div class="relative z-10 max-w-3xl space-y-6">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold text-emerald-300"
			>
				<Globe class="h-4 w-4 text-emerald-400" />
				<span>Tool & Panduan Cek Domain 2026</span>
			</div>

			<h1 class="text-3xl leading-tight font-black tracking-tight sm:text-5xl">
				Cara Cek Domain dengan Mudah & Instan
			</h1>

			<p class="text-base leading-relaxed text-slate-300 sm:text-lg">
				Ingin membuat website tetapi belum tahu apakah nama domain impian Anda masih tersedia?
				Gunakan simulator cek ketersediaan domain di bawah ini dan pelajari langkah mudah memilih
				nama domain yang tepat untuk bisnis Anda.
			</p>
		</div>

		<!-- DOMAIN CHECKER WIDGET -->
		<div
			class="relative z-10 mt-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:p-6"
		>
			<form onsubmit={handleCheckDomain} class="flex flex-col gap-3 sm:flex-row">
				<div class="relative flex-1">
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
					>
						<Search class="h-5 w-5" />
					</div>
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Ketik nama domain impian (contoh: tokoberkah, umkmsukses)"
						class="w-full rounded-xl border border-slate-700 bg-slate-900/90 py-3.5 pr-4 pl-11 text-sm font-medium text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
					/>
				</div>
				<button
					type="submit"
					disabled={isSearching || !searchQuery.trim()}
					class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300 disabled:opacity-50"
				>
					{#if isSearching}
						<div
							class="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"
						></div>
						<span>Memeriksa...</span>
					{:else}
						<Search class="h-4 w-4" />
						<span>Cek Domain</span>
					{/if}
				</button>
			</form>

			{#if !searchPerformed && !isSearching}
				<div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-300">
					<span class="font-semibold text-emerald-400">Pencarian Populer:</span>
					<button
						type="button"
						onclick={() => {
							searchQuery = 'tokoanda';
							handleCheckDomain();
						}}
						class="rounded-lg bg-white/10 px-2.5 py-1 transition-colors hover:bg-white/20"
						>tokoanda</button
					>
					<button
						type="button"
						onclick={() => {
							searchQuery = 'pesantrenmodern';
							handleCheckDomain();
						}}
						class="rounded-lg bg-white/10 px-2.5 py-1 transition-colors hover:bg-white/20"
						>pesantrenmodern</button
					>
					<button
						type="button"
						onclick={() => {
							searchQuery = 'jasadesain';
							handleCheckDomain();
						}}
						class="rounded-lg bg-white/10 px-2.5 py-1 transition-colors hover:bg-white/20"
						>jasadesain</button
					>
				</div>
			{/if}
		</div>
	</section>

	<!-- RESULTS DISPLAY SECTION -->
	{#if searchPerformed && results.length > 0}
		<section class="my-10 space-y-6">
			<div
				class="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800"
			>
				<div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Hasil Pengecekan Domain</h2>
					<p class="text-xs text-slate-500 dark:text-slate-400">
						Menampilkan ketersediaan untuk nama: <span
							class="font-bold text-emerald-600 dark:text-emerald-400"
							>"{DomainService.cleanDomainName(searchQuery)}"</span
						>
					</p>
				</div>
				<span
					class="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400"
				>
					{results.filter((r) => r.status === 'available').length} Ekstensi Tersedia
				</span>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each results as item}
					<div
						class={`flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-all ${
							item.status === 'available'
								? 'border-emerald-500/40 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20'
								: 'border-slate-200 bg-slate-50/80 opacity-80 dark:border-slate-800 dark:bg-slate-900/40'
						}`}
					>
						<div class="space-y-3">
							<div class="flex items-start justify-between">
								<span class="text-lg font-black text-slate-900 dark:text-white"
									>{item.fullName}</span
								>
								{#if item.status === 'available'}
									<span
										class="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
									>
										<CheckCircle2 class="h-3.5 w-3.5" /> Tersedia
									</span>
								{:else}
									<span
										class="inline-flex items-center gap-1 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400"
									>
										<XCircle class="h-3.5 w-3.5" /> Terdaftar
									</span>
								{/if}
							</div>

							{#if item.badge}
								<div
									class="inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400"
								>
									{item.badge}
								</div>
							{/if}

							<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
								{item.note}
							</p>
						</div>

						<div class="mt-6 space-y-3 border-t border-slate-200 pt-4 dark:border-slate-800">
							{#if item.status === 'available'}
								<div class="flex items-center gap-2">
									<a
										href={`https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20mendaftarkan%20domain%20${encodeURIComponent(item.fullName)}`}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white shadow transition-colors hover:bg-emerald-500"
									>
										<MessageSquare class="h-3.5 w-3.5" />
										<span>Pesan Domain</span>
									</a>
									<button
										type="button"
										onclick={() => copyToClipboard(item.fullName)}
										class="rounded-xl border border-slate-300 p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
										title="Salin Nama Domain"
									>
										{#if copiedDomain === item.fullName}
											<Check class="h-4 w-4 text-emerald-500" />
										{:else}
											<Copy class="h-4 w-4" />
										{/if}
									</button>
								</div>
							{:else}
								<div class="text-[11px] font-medium text-slate-500 italic dark:text-slate-400">
									Domain ini sudah terdaftar oleh orang lain.
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<div
				class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-800 dark:text-emerald-300"
			>
				<div class="flex items-center gap-2">
					<Sparkles class="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
					<span
						><strong>Butuh website sekalian domain & hosting?</strong> Barizaloka menyediakan paket lengkap
						siap pakai mulai Rp350rb/tahun!</span
					>
				</div>
				<a
					href="/harga"
					class="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline dark:text-emerald-300"
				>
					Lihat Paket Harga <ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</section>
	{/if}

	<!-- MAIN CONTENT GUIDE -->
	<article class="my-16 space-y-16">
		<!-- Section Intro & Definition -->
		<div class="max-w-4xl space-y-6">
			<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
				Apa Itu Domain Website dan Mengapa Pengecekan Penting?
			</h2>

			<p class="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
				<strong>Domain</strong> adalah alamat unik di internet yang digunakan pengunjung untuk
				mengakses website Anda (contoh:
				<code
					class="rounded bg-slate-100 px-2 py-0.5 font-mono text-emerald-600 dark:bg-slate-800 dark:text-emerald-400"
					>barizaloka.id</code
				>). Tanpa domain, pengunjung harus mengetik deretan angka alamat IP server yang rumit.
			</p>

			<p class="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
				Sistem nama domain bekerja secara universal dengan prinsip <em
					>"First Come, First Served"</em
				>
				(siapa cepat, dia dapat). Artinya, tidak ada dua pihak yang dapat menguasai nama domain yang
				persis sama dengan ekstensi yang sama secara bersamaan. Oleh karena itu,
				<strong>mengecek ketersediaan domain sejak awal adalah langkah paling krusial</strong> sebelum
				meluncurkan brand, usaha, atau lembaga Anda.
			</p>
		</div>

		<!-- Step-by-Step Guide Cards -->
		<div class="space-y-8">
			<div class="space-y-2">
				<div
					class="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400"
				>
					Panduan Praktis
				</div>
				<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
					5 Langkah Mudah Cek Ketersediaan Domain Website
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each steps as step}
					<div
						class="relative space-y-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/60"
					>
						<div class="text-3xl font-black text-emerald-600/30 dark:text-emerald-400/20">
							{step.number}
						</div>
						<h3 class="text-base leading-snug font-bold text-slate-900 dark:text-white">
							{step.title}
						</h3>
						<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{step.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Comparison Table Section -->
		<div class="space-y-6">
			<div class="space-y-2">
				<div
					class="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400"
				>
					Perbandingan Ekstensi
				</div>
				<h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
					Pilihan Ekstensi Domain Populer di Indonesia
				</h2>
				<p class="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
					Setiap ekstensi domain memiliki peruntukan dan syarat pendaftaran yang berbeda:
				</p>
			</div>

			<div
				class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
			>
				<table class="w-full text-left text-xs text-slate-700 sm:text-sm dark:text-slate-300">
					<thead class="bg-slate-100 font-bold text-slate-900 dark:bg-slate-800/80 dark:text-white">
						<tr>
							<th class="p-4">Ekstensi</th>
							<th class="p-4">Peruntukan Utama</th>
							<th class="p-4">Persyaratan</th>
							<th class="p-4">Keunggulan Utama</th>
						</tr>
					</thead>
					<tbody
						class="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/40"
					>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.COM</td>
							<td class="p-4">Bisnis Komersial, Toko Online, Umum</td>
							<td class="p-4"
								><span class="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800"
									>Tanpa Syarat</span
								></td
							>
							<td class="p-4">Standar global paling populer dan mudah diingat semua orang.</td>
						</tr>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.ID</td>
							<td class="p-4">Brand / Perusahaan Lokal Indonesia</td>
							<td class="p-4"
								><span class="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800"
									>Tanpa Syarat</span
								></td
							>
							<td class="p-4">Menegaskan keberadaan resmi di Indonesia & aman dari siber.</td>
						</tr>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.CO.ID</td>
							<td class="p-4">Perusahaan Resmi (PT, CV, Firma)</td>
							<td class="p-4"
								><span
									class="rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-400"
									>KTP + NIB/SIUP</span
								></td
							>
							<td class="p-4">Kredibilitas institusional tertinggi untuk bisnis profesional.</td>
						</tr>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.MY.ID</td>
							<td class="p-4">Personal Blog, Portofolio, UMKM Pemula</td>
							<td class="p-4"
								><span class="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800"
									>Tanpa Syarat</span
								></td
							>
							<td class="p-4">Harga terjangkau, cocok untuk pemula yang baru belajar website.</td>
						</tr>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.SCH.ID</td>
							<td class="p-4">Sekolah Formal (SD/SMP/SMA/SMK)</td>
							<td class="p-4"
								><span
									class="rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-400"
									>Surat Permohonan Sekolah</span
								></td
							>
							<td class="p-4">Ekstensi wajib terpercaya untuk lembaga pendidikan Indonesia.</td>
						</tr>
						<tr>
							<td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">.PONPES.ID</td>
							<td class="p-4">Pondok Pesantren & Majlis Ta'lim</td>
							<td class="p-4"
								><span
									class="rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-400"
									>SK Kemenag / Pengasuh</span
								></td
							>
							<td class="p-4">Khusus membangun kepercayaan wali santri & dakwah digital.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Tips Choosing Domain -->
		<div
			class="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50"
		>
			<div class="flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 font-bold text-emerald-600 dark:text-emerald-400"
				>
					<ShieldCheck class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						Tips Memilih Nama Domain yang Bagus & Efektif
					</h3>
					<p class="text-xs text-slate-500 dark:text-slate-400">
						Rekomendasi praktis untuk daya saing SEO dan brand jangka panjang
					</p>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each domainTips as tip}
					<div class="space-y-2">
						<h4 class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
							<CheckCircle2 class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
							<span>{tip.title}</span>
						</h4>
						<p class="pl-6 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{tip.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- What to Do Next Section -->
		<div
			class="space-y-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/80 to-slate-900 p-8 text-white"
		>
			<div class="space-y-2">
				<h3 class="text-xl font-bold text-white">Bagaimana Jika Domain Sudah Ditemukan?</h3>
				<p class="text-xs leading-relaxed text-slate-300 sm:text-sm">
					Setelah memastikan nama domain impian Anda tersedia, langkah berikutnya adalah
					mendaftarkan domain beserta hosting dan paket pembuatan website. Barizaloka menyediakan
					layanan lengkap pendaftaran domain, setup SSL gratis, pembuatan website profesional, serta
					pendampingan kelola.
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-4 pt-2">
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20pendaftaran%20domain%20dan%20pembuatan%20website"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-teal-300"
				>
					<MessageSquare class="h-5 w-5" />
					<span>Konsultasi Registrasi Domain via WA</span>
				</a>
				<a
					href="/harga"
					class="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20"
				>
					<span>Cek Paket Website Lengkap</span>
					<ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</article>

	<!-- FAQ SECTION -->
	<FaqAccordion initialCategory="Umum" />

	<!-- CTA BANNER -->
	<CtaBanner
		title="Siap Mengamankan Nama Domain Impian Anda?"
		description="Jangan biarkan nama brand favorit Anda diambil orang lain. Hubungi tim Barizaloka untuk pendaftaran domain & pembuatan website siap pakai."
		whatsappMessage="Halo Barizaloka, saya ingin bantuan cek dan pendaftaran nama domain untuk usaha saya."
	/>
</div>
