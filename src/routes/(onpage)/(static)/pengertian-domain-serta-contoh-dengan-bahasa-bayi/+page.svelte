<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import {
		Globe,
		Baby,
		Home,
		MapPin,
		Search,
		Sparkles,
		BookOpen,
		ArrowRight,
		CheckCircle2,
		XCircle,
		HelpCircle,
		Check,
		Layers,
		Filter,
		ShieldCheck,
		MessageSquare,
		Smartphone,
		Server,
		ChevronDown,
		Compass,
		ExternalLink,
		Zap
	} from 'lucide-svelte';

	// Simulator Interaktif "Buku Kontak HP vs Domain Internet"
	let isDomainActive = $state(true);

	const DOMAIN_EXAMPLES = [
		{
			brand: 'Barizaloka',
			domain: 'barizaloka.id',
			ip: '104.21.55.19',
			category: 'Website & IT',
			icon: '🚀',
			ext: '.id',
			analogi: 'Plang Toko Teknologi Barizaloka di Kompleks Indonesia (.id)'
		},
		{
			brand: 'Google',
			domain: 'google.com',
			ip: '142.250.190.46',
			category: 'Mesin Pencari',
			icon: '🔍',
			ext: '.com',
			analogi: 'Alamat Perpustakaan Raksasa Sedunia di Kompleks Global (.com)'
		},
		{
			brand: 'YouTube',
			domain: 'youtube.com',
			ip: '172.217.16.206',
			category: 'Video & Hiburan',
			icon: '📺',
			ext: '.com',
			analogi: 'Bioskop Kartun & Video Terbesar di Dunia (.com)'
		},
		{
			brand: 'Sekolah Cerdas',
			domain: 'sekolahcerdas.sch.id',
			ip: '103.112.5.88',
			category: 'Pendidikan',
			icon: '🏫',
			ext: '.sch.id',
			analogi: 'Gedung Sekolah Resmi di Kompleks Sekolah Indonesia (.sch.id)'
		},
		{
			brand: 'Pesantren Al-Barakah',
			domain: 'pesantrenbarakah.ponpes.id',
			ip: '103.247.12.9',
			category: 'Pondok Pesantren',
			icon: '🕌',
			ext: '.ponpes.id',
			analogi: 'Asrama Santri di Kompleks Pesantren Indonesia (.ponpes.id)'
		},
		{
			brand: 'Toko Mainan Seru',
			domain: 'tokomainanseru.com',
			ip: '198.51.100.42',
			category: 'Toko Mainan',
			icon: '🧸',
			ext: '.com',
			analogi: 'Toko Mainan Anak Komplit yang Bisa Dikunjungi Siapa Saja (.com)'
		}
	];

	// Filter Ekstensi Domain di Simulasi
	let selectedExt = $state('Semua');
	const EXTENSION_TABS = ['Semua', '.com', '.id', '.sch.id', '.ponpes.id'];

	const filteredDomains = $derived(
		selectedExt === 'Semua'
			? DOMAIN_EXAMPLES
			: DOMAIN_EXAMPLES.filter((item) => item.ext === selectedExt)
	);

	// Interactive FAQ State
	let openFaq = $state<number | null>(0);

	const faqs = [
		{
			q: 'Apa bedanya Domain dengan Website dan Hosting?',
			a: 'Pakai bahasa bayi: Hosting adalah TANAH kavling tempat membangun rumah. Website adalah BANGUNAN fisik rumahnya (dinding, pintu, perabot). Sedangkan Domain adalah PAPAN NAMA ALAMAT di pagar depan rumah (misal: "Jalan Melati No. 5") supaya teman-temanmu tahu ke mana harus berkunjung!'
		},
		{
			q: 'Kenapa kita tidak langsung pakai deretan angka IP saja?',
			a: 'Karena manusia bukan komputer! Bayangkan kalau setiap mau ke rumah teman, kamu harus menghafal titik koordinat GPS 6.9175° S, 107.6191° E. Tentu jauh lebih mudah mengingat "Rumah Budi di Jalan Mangga". Domain diciptakan agar internet ramah di otak manusia.'
		},
		{
			q: 'Apa arti akhiran .COM, .ID, dan .SCH.ID?',
			a: 'Itu disebut TLD (Top-Level Domain) atau ibarat nama "Kecamatan / Wilayah". Akhiran .com artinya wilayah komersial umum sedunia. Akhiran .id adalah wilayah resmi Indonesia. Sedangkan .sch.id khusus untuk sekolah di Indonesia.'
		},
		{
			q: 'Apakah satu nama domain bisa dimiliki dua orang sekaligus?',
			a: 'Tidak bisa! Domain bersifat "First Come, First Served" (siapa cepat mendaftar, dialah pemiliknya). Tidak boleh ada dua rumah di dunia yang memiliki papan nama domain persis sama. Jika barizaloka.id sudah terdaftar, orang lain tidak bisa membelinya lagi kecuali pemiliknya berhenti berlangganan.'
		},
		{
			q: 'Berapa lama masa aktif sebuah domain?',
			a: 'Domain disewa dengan sistem tahunan, umumnya mulai dari 1 tahun hingga 10 tahun. Setiap tahun Anda perlu memperpanjang masa sewanya ke registrar agar alamat rumah digital Anda tidak dilelang ke orang lain.'
		},
		{
			q: 'Bagaimana cara memiliki nama domain sendiri?',
			a: 'Sangat mudah! Anda cukup mengecek ketersediaannya di tool cek domain Barizaloka, lalu memesan paket pembuatan website atau pendaftaran domain dengan biaya yang sangat terjangkau.'
		}
	];

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// Interactive Quiz State
	let quizAnswer = $state<number | null>(null);
	let quizAnswered = $state(false);
</script>

<svelte:head>
	<title>Pengertian Domain Serta Contoh dengan Bahasa Bayi — Barizaloka</title>
	<meta
		name="description"
		content="Penjelasan super simpel apa itu domain website serta contohnya dengan bahasa bayi! Kenapa kita butuh domain, bedanya dengan hosting, dan contoh .com, .id, dll."
	/>
	<link rel="canonical" href="https://barizaloka.id/pengertian-domain-serta-contoh-dengan-bahasa-bayi" />
	<meta
		property="og:title"
		content="Pengertian Domain Serta Contoh dengan Bahasa Bayi — Barizaloka"
	/>
	<meta
		property="og:description"
		content="Penjelasan arti domain website dengan bahasa bayi dan analogi papan nama alamat rumah. Dilengkapi contoh nyata .com, .id, simulator interaktif, dan kuis seru."
	/>
	<meta property="og:url" content="https://barizaloka.id/pengertian-domain-serta-contoh-dengan-bahasa-bayi" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Pengertian Domain Serta Contoh dengan Bahasa Bayi"
	/>
	<meta
		name="twitter:description"
		content="Arti domain website semudah bahasa bayi. Pahami konsep alamat rumah digital, IP address, dan ragam ekstensinya tanpa pusing!"
	/>

	<!-- JSON-LD Structured Data for Article & FAQPage -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				"headline": "Pengertian Domain Serta Contoh dengan Bahasa Bayi",
				"description": "Panduan edukasi mengenai definisi domain website, komponennya, serta contoh-contoh praktisnya menggunakan pendekatan analogi ramah pemula.",
				"inLanguage": "id-ID",
				"publisher": {
					"@type": "Organization",
					"name": "Barizaloka",
					"url": "https://barizaloka.id"
				},
				"mainEntityOfPage": "https://barizaloka.id/pengertian-domain-serta-contoh-dengan-bahasa-bayi"
			},
			{
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Apa itu domain website dalam bahasa bayi?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Domain adalah papan nama alamat rumah di internet (contoh: barizaloka.id). Dengan domain, orang tidak perlu menghafal angka koordinat IP address yang rumit."
						}
					},
					{
						"@type": "Question",
						"name": "Apa beda domain dengan hosting dan website?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Hosting adalah tanahnya, website adalah bangunan rumahnya, dan domain adalah alamat jalan di pagar rumah."
						}
					},
					{
						"@type": "Question",
						"name": "Apa saja contoh domain dan ekstensinya?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Contoh domain adalah google.com (.com untuk komersial/umum), barizaloka.id (.id untuk identitas Indonesia), dan sekolah.sch.id (.sch.id untuk institusi sekolah)."
						}
					}
				]
			}
		]
	}
	</script>`}
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs
		items={[
			{ label: 'Edukasi Digital', href: '/blog' },
			{ label: 'Pengertian Domain Serta Contoh dengan Bahasa Bayi' }
		]}
	/>

	<!-- HERO SECTION -->
	<header
		class="relative my-8 overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50 via-teal-50/50 to-amber-50/60 p-6 sm:p-12 lg:p-16 shadow-xl dark:border-sky-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/40"
	>
		<!-- Background Floating Blobs -->
		<div
			class="pointer-events-none absolute -top-12 -left-12 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-500/10"
		></div>
		<div
			class="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-500/10"
		></div>

		<div class="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center gap-5">
			<!-- Baby Level Badge -->
			<div
				class="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white/95 px-4 py-1.5 text-xs font-bold text-sky-900 shadow-sm backdrop-blur-md dark:border-sky-700 dark:bg-sky-950/80 dark:text-sky-300"
			>
				<Baby class="h-4 w-4 text-sky-600 dark:text-sky-400" />
				<span>🍼 Penjelasan Level "Bahasa Bayi" • 100% Bebas Jargon Rumit!</span>
			</div>

			<h1
				class="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight dark:text-white"
			>
				Pengertian Domain & Contohnya <br class="hidden sm:inline" />
				<span
					class="bg-gradient-to-r from-sky-600 via-teal-600 to-amber-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-teal-400 dark:to-amber-400"
				>
					Diterangkan Pakai Bahasa Bayi
				</span>
			</h1>

			<p
				class="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300"
			>
				Pernah dengar kata <i>"domain"</i> tapi pusing bayangin server dan koding? Tenang! 
				Di sini kita jelaskan arti domain semudah membayangkan <strong class="text-slate-900 dark:text-white underline decoration-sky-400 decoration-2">papan nama alamat rumah</strong>, 
				lengkap dengan contoh nyata seperti <code class="bg-white/80 dark:bg-slate-800 px-2 py-0.5 rounded text-sky-700 dark:text-sky-300 font-mono text-sm">google.com</code> dan <code class="bg-white/80 dark:bg-slate-800 px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-300 font-mono text-sm">barizaloka.id</code>!
			</p>

			<!-- 3 Kartu Ringkas Inti Pembelajaran -->
			<div class="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 text-left">
				<div
					class="rounded-2xl border border-sky-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm mb-1">
						<span class="text-xl">🏡</span>
						<span>Arti Bahasa Bayi</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Domain adalah <strong>papan nama alamat rumah</strong> di dunia internet agar pengunjung tidak tersesat di jalan raya.
					</p>
				</div>

				<div
					class="rounded-2xl border border-teal-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-sm mb-1">
						<span class="text-xl">📞</span>
						<span>Kenapa Dibuat?</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Supaya otak kita tidak perlu menghafal deretan angka rumit (IP address seperti <code class="text-[10px] bg-slate-100 dark:bg-slate-800 px-1 rounded">142.250.x.x</code>).
					</p>
				</div>

				<div
					class="rounded-2xl border border-amber-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-1">
						<span class="text-xl">🏷️</span>
						<span>Contoh Nyata</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Nama unik (misal: <strong>barizaloka</strong>) ditambah nama wilayah/ekstensi (misal: <strong>.id</strong> atau <strong>.com</strong>).
					</p>
				</div>
			</div>
		</div>
	</header>

	<!-- SECTION 1: 3 ANALOGI UTAMA BAHASA BAYI -->
	<section class="my-14">
		<div class="text-center max-w-3xl mx-auto mb-10">
			<div
				class="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 mb-3"
			>
				<Sparkles class="h-3.5 w-3.5" />
				<span>Dongeng Logika Sederhana</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				3 Analogi Paling Mudah Memahami Domain
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Biar tidak pusing dengan bahasa programmer, bayangkan internet lewat 3 perumpamaan sehari-hari berikut:
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<!-- Analogi 1 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-3xl mb-5 dark:bg-sky-950/60">
						📍
					</div>
					<span class="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">Analogi 1</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Alamat Rumah vs Koordinat GPS
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Kalau kamu pesan paket mainan ke kurir, kamu kasih alamat mana? 
						Pasti kamu sebut: <strong class="text-slate-800 dark:text-slate-200">"Jalan Mawar No. 12"</strong>.
					</p>
					<div class="mt-4 rounded-xl bg-sky-50 p-3 text-xs text-sky-950 font-medium dark:bg-sky-950/40 dark:text-sky-200">
						💡 Kamu nggak mungkin bilang ke kurir: <i>"Antar ke titik garis lintang -6.9175 dan garis bujur 107.6191 ya!"</i>. Nah, nama jalan itu adalah <strong>Domain</strong>, sedangkan angka koordinat adalah <strong>IP Address</strong>.
					</div>
				</div>
			</div>

			<!-- Analogi 2 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-3xl mb-5 dark:bg-teal-950/60">
						📖
					</div>
					<span class="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">Analogi 2</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Buku Kontak di HP Smartphone
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Di handphone ibu ada ratusan nomor telepon. Waktu kamu mau telepon nenek, kamu tinggal ketik atau klik nama: <strong class="text-slate-800 dark:text-slate-200">"Nenek Tersayang"</strong>.
					</p>
					<div class="mt-4 rounded-xl bg-teal-50 p-3 text-xs text-teal-950 font-medium dark:bg-teal-950/40 dark:text-teal-200">
						💡 Kamu tidak perlu menghafal 12 angka <i>0812-3456-7890</i>. Domain itu ibarat <strong>nama kontak di HP</strong> yang menghubungkan kita ke nomor telepon tujuan secara otomatis!
					</div>
				</div>
			</div>

			<!-- Analogi 3 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl mb-5 dark:bg-amber-950/60">
						🏗️
					</div>
					<span class="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">Analogi 3</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Trinitas Rumah: Tanah, Bangunan, & Alamat
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Sering bingung bedain Domain, Hosting, dan Website? Bayangkan proses membangun rumah:
					</p>
					<div class="mt-4 space-y-1.5 rounded-xl bg-amber-50 p-3 text-xs text-amber-950 font-medium dark:bg-amber-950/40 dark:text-amber-200">
						<div>🧱 <strong>Hosting:</strong> Tanah kavling tempat barang disimpan.</div>
						<div>🏠 <strong>Website:</strong> Rumah fisiknya (kamar, foto, menu).</div>
						<div>🏷️ <strong>Domain:</strong> Plang alamat di pagar luar.</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 2: SIMULATOR INTERAKTIF (ALAMAT VS ANGKA IP) -->
	<section
		class="my-14 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
	>
		<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
			<div>
				<div class="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
					<Compass class="h-4 w-4" />
					<span>Eksperimen Interaktif</span>
				</div>
				<h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">
					Simulator Perbandingan: Tanpa Domain vs Pakai Domain
				</h2>
				<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
					Coba klik tombol di bawah untuk merasakan betapa pusingnya hidup di internet tanpa penemuan nama domain!
				</p>
			</div>

			<!-- Switch Toggle Button -->
			<div class="flex items-center gap-2 rounded-2xl bg-white border border-slate-200 p-1.5 shadow-sm dark:bg-slate-800 dark:border-slate-700">
				<button
					type="button"
					onclick={() => (isDomainActive = false)}
					class="rounded-xl px-3.5 py-2 text-xs font-bold transition-all {isDomainActive === false
						? 'bg-rose-600 text-white shadow-md'
						: 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}"
				>
					🤯 Tanpa Domain (Hanya Angka IP)
				</button>
				<button
					type="button"
					onclick={() => (isDomainActive = true)}
					class="rounded-xl px-3.5 py-2 text-xs font-bold transition-all {isDomainActive === true
						? 'bg-emerald-600 text-white shadow-md'
						: 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}"
				>
					✨ Pakai Domain (Mudah & Enak!)
				</button>
			</div>
		</div>

		<!-- Notification Banner Simulator -->
		<div
			class="my-6 rounded-2xl p-4 transition-all {isDomainActive
				? 'bg-emerald-50 border border-emerald-200/80 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-900/60 dark:text-emerald-200'
				: 'bg-rose-50 border border-rose-200/80 text-rose-950 dark:bg-rose-950/40 dark:border-rose-900/60 dark:text-rose-200'}"
		>
			<div class="flex items-start gap-3">
				<span class="text-2xl flex-shrink-0">{isDomainActive ? '🎉' : '😱'}</span>
				<div class="text-xs sm:text-sm">
					{#if isDomainActive}
						<p>
							<strong>Mode Ramah Otak:</strong> Alamat website tampil dalam kata-kata yang mudah dihafal (misal: <span class="font-bold font-mono">barizaloka.id</span>). Bahkan anak kecil pun bisa mengetiknya di browser tanpa salah!
						</p>
					{:else}
						<p>
							<strong>Mode Pusing Kepala:</strong> Kamu harus mengetik deretan angka IP server seperti <span class="font-bold font-mono">104.21.55.19</span> untuk setiap website. Bayangkan kalau punya 50 website favorit, kepala bisa berasap!
						</p>
					{/if}
				</div>
			</div>
		</div>

		<!-- Filter Tabs Ekstensi -->
		<div class="mb-5 flex flex-wrap items-center gap-2">
			<span class="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Filter Ekstensi:</span>
			{#each EXTENSION_TABS as ext}
				<button
					type="button"
					onclick={() => (selectedExt = ext)}
					class="rounded-lg px-3 py-1.5 text-xs font-bold transition-all {selectedExt === ext
						? 'bg-sky-600 text-white dark:bg-sky-500'
						: 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'}"
				>
					{ext}
				</button>
			{/each}
		</div>

		<!-- Grid Items Simulator -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each filteredDomains as item}
				<div
					class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
				>
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="text-3xl">{item.icon}</span>
							<span
								class="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 font-mono"
							>
								{item.ext}
							</span>
						</div>
						<div class="text-xs font-medium text-slate-400 dark:text-slate-500">{item.category}</div>
						<h3 class="font-bold text-slate-900 text-base dark:text-white mt-0.5">{item.brand}</h3>

						<!-- Dynamic Address Box based on toggle -->
						<div
							class="mt-3 rounded-xl p-3 font-mono text-xs font-bold transition-all {isDomainActive
								? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/40'
								: 'bg-rose-50 text-rose-800 border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/40'}"
						>
							{#if isDomainActive}
								<span class="flex items-center gap-1.5">
									<Globe class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
									<span>https://{item.domain}</span>
								</span>
							{:else}
								<span class="flex items-center gap-1.5">
									<Server class="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
									<span>http://{item.ip}</span>
								</span>
							{/if}
						</div>

						<p class="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
							{item.analogi}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- SECTION 3: STRUKTUR ANATOMI DOMAIN (MEMBONGKAR RAHASIA NAMA DOMAIN) -->
	<section class="my-16">
		<div class="mx-auto max-w-3xl text-center mb-10">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 mb-3"
			>
				<BookOpen class="h-3.5 w-3.5" />
				<span>Bedah Anatomi Nama</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				Membongkar Potongan Nama Domain
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Sama seperti nama manusia yang punya nama depan dan nama keluarga, nama domain juga punya 2 bagian utama:
			</p>
		</div>

		<!-- Anatomi Visual Box -->
		<div class="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
			<!-- Visual Domain Badge -->
			<div class="text-center mb-8">
				<div class="inline-flex items-center justify-center gap-1 rounded-2xl bg-slate-100 p-3 sm:p-5 font-mono text-xl sm:text-3xl font-black text-slate-900 dark:bg-slate-800 dark:text-white shadow-inner">
					<span class="text-sky-600 dark:text-sky-400">barizaloka</span>
					<span class="text-slate-400">.</span>
					<span class="text-amber-600 dark:text-amber-400">id</span>
				</div>
				<p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
					Contoh alamat resmi website kita: <strong>barizaloka.id</strong>
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Bagian 1: SLD -->
				<div class="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 dark:border-sky-900/60 dark:bg-sky-950/20">
					<div class="flex items-center justify-between mb-2">
						<span class="font-black text-sky-700 dark:text-sky-300 text-sm">1. Bagian Depan (SLD)</span>
						<span class="rounded bg-sky-200 text-sky-800 px-2 py-0.5 font-bold text-[10px] dark:bg-sky-900 dark:text-sky-200">Nama Toko</span>
					</div>
					<div class="font-mono font-bold text-lg text-slate-900 dark:text-white mb-2">
						"barizaloka"
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
						Ini adalah <strong>Second-Level Domain</strong> atau nama panggilan unik merek/usaha Anda. Anda bebas membuat kata apa saja (seperti nama toko, nama pesantren, atau nama diri sendiri), selama belum diambil orang lain.
					</p>
				</div>

				<!-- Bagian 2: TLD -->
				<div class="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
					<div class="flex items-center justify-between mb-2">
						<span class="font-black text-amber-700 dark:text-amber-300 text-sm">2. Bagian Belakang (TLD / Ekstensi)</span>
						<span class="rounded bg-amber-200 text-amber-800 px-2 py-0.5 font-bold text-[10px] dark:bg-amber-900 dark:text-amber-200">Nama Kompleks</span>
					</div>
					<div class="font-mono font-bold text-lg text-slate-900 dark:text-white mb-2">
						".id"
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
						Ini adalah <strong>Top-Level Domain</strong> (akhiran / ekstensi). Ibarat nama perumahan atau nama negara. Menunjukkan di ranah mana website Anda beroperasi.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 4: CONTOH-CONTOH EKSTENSI DOMAIN DAN ARTINYA -->
	<section class="my-16">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 mb-3"
			>
				<Globe class="h-3.5 w-3.5" />
				<span>Kamus Ekstensi Populer</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				Daftar Contoh Ekstensi Domain di Dunia Nyata
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Supaya tidak salah pilih baju untuk alamat websitemu, kenali arti di balik akhiran domain yang sering dipakai:
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Ekstensi .COM -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-400">.COM</span>
						<span class="text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 dark:bg-emerald-950 dark:text-emerald-300">Paling Populer</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">Komersial Sedunia</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Singkatan dari <i>Commercial</i>. Ekstensi paling terkenal di muka bumi. Cocok untuk semua jenis usaha yang ingin menjangkau pasar luas.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: google.com, lazada.com
				</div>
			</div>

			<!-- Ekstensi .ID -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-rose-600 dark:text-rose-400">.ID</span>
						<span class="text-xs font-bold rounded-full bg-rose-100 text-rose-800 px-2.5 py-0.5 dark:bg-rose-950 dark:text-rose-300">Identitas Lokal</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">Republik Indonesia</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Kode resmi negara Indonesia (ccTLD). Sangat dipercaya oleh masyarakat Indonesia karena aman, nasionalis, dan minim situs penipuan.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: barizaloka.id, telkomsel.id
				</div>
			</div>

			<!-- Ekstensi .SCH.ID -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-sky-600 dark:text-sky-400">.SCH.ID</span>
						<span class="text-xs font-bold rounded-full bg-sky-100 text-sky-800 px-2.5 py-0.5 dark:bg-sky-950 dark:text-sky-300">Resmi Sekolah</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">School Indonesia</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Khusus untuk institusi sekolah (SD, SMP, SMA/SMK). Memerlukan surat perizinan resmi sehingga memiliki tingkat kredibilitas sangat tinggi.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: sman1rembang.sch.id
				</div>
			</div>

			<!-- Ekstensi .PONPES.ID -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-amber-600 dark:text-amber-400">.PONPES.ID</span>
						<span class="text-xs font-bold rounded-full bg-amber-100 text-amber-800 px-2.5 py-0.5 dark:bg-amber-950 dark:text-amber-300">Pondok Pesantren</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">Pesantren Nusantara</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Ekstensi kebanggaan lembaga pesantren di seluruh Indonesia. Sangat cocok untuk dakwah digital, publikasi kitab, dan PPDB santri.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: yanbuulquran.ponpes.id
				</div>
			</div>

			<!-- Ekstensi .DESA.ID -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-teal-600 dark:text-teal-400">.DESA.ID</span>
						<span class="text-xs font-bold rounded-full bg-teal-100 text-teal-800 px-2.5 py-0.5 dark:bg-teal-950 dark:text-teal-300">Pemerintah Desa</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">Desa & Kelurahan</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Dikhususkan untuk website pemerintah desa (Pemdes) dalam program transparansi dana desa, profil potensi desa, dan pelayanan surat warga online.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: karas-sedan.desa.id
				</div>
			</div>

			<!-- Ekstensi .CO.ID -->
			<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<span class="font-mono text-2xl font-black text-indigo-600 dark:text-indigo-400">.CO.ID</span>
						<span class="text-xs font-bold rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-0.5 dark:bg-indigo-950 dark:text-indigo-300">Perusahaan Legal</span>
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-1">Perusahaan Resmi (PT / CV)</h3>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Khusus badan usaha resmi yang memiliki legalitas hukum (NIB, SIUP). Ekstensi paling bergengsi untuk bisnis skala nasional.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
					Contoh: tokopedia.co.id, bca.co.id
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 5: KUIS KECIL / SELF CHECK -->
	<section class="my-14 mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
		<div class="text-center mb-6">
			<span class="text-3xl">🧩</span>
			<h3 class="text-lg font-bold text-slate-900 dark:text-white mt-2">
				Tebak-Tebakan Bahasa Bayi: Siapakah Aku?
			</h3>
			<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
				"Aku adalah papan nama alamat di pagar depan agar teman-temanmu gampang mencari rumah websitemu. Siapakah aku?"
			</p>
		</div>

		<div class="space-y-2.5">
			{#each [
				{ id: 0, text: 'A. Hosting (Tanah kavling tempat barang disimpan)', correct: false },
				{ id: 1, text: 'B. Domain (Papan nama alamat rumah website)', correct: true },
				{ id: 2, text: 'C. Kabel Listrik PLN', correct: false }
			] as opt}
				<button
					type="button"
					onclick={() => {
						quizAnswer = opt.id;
						quizAnswered = true;
					}}
					class="w-full text-left rounded-xl border p-3.5 text-xs sm:text-sm font-medium transition-all {quizAnswer === opt.id
						? opt.correct
							? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
							: 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
						: 'border-slate-200 hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					<div class="flex items-center justify-between">
						<span>{opt.text}</span>
						{#if quizAnswer === opt.id}
							{#if opt.correct}
								<CheckCircle2 class="h-4 w-4 text-emerald-600 flex-shrink-0" />
							{:else}
								<XCircle class="h-4 w-4 text-rose-600 flex-shrink-0" />
							{/if}
						{/if}
					</div>
				</button>
			{/each}
		</div>

		{#if quizAnswered}
			<div class="mt-4 rounded-xl p-3 text-xs {quizAnswer === 1 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'}">
				{#if quizAnswer === 1}
					🎉 <strong>Hebat Banget! Jawabanmu 100% Benar!</strong> Domain adalah nama alamat rumah website yang membuat pengunjung mudah datang.
				{:else}
					❌ <strong>Ups, belum pas!</strong> Jawaban yang benar adalah B (Domain). Hosting itu tanahnya, sedangkan Domain adalah nama alamat rumahnya!
				{/if}
			</div>
		{/if}
	</section>

	<!-- SECTION 6: FAQ ACCORDION -->
	<section class="my-16">
		<div class="text-center max-w-2xl mx-auto mb-10">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300 mb-2"
			>
				<HelpCircle class="h-3.5 w-3.5" />
				<span>Tanya Jawab Populer</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
				Pertanyaan Seputar Domain yang Sering Ditanyakan
			</h2>
			<p class="text-xs sm:text-sm text-slate-500 mt-1 dark:text-slate-400">
				Semua jawaban dijelaskan dengan gaya santai dan mudah dipahami.
			</p>
		</div>

		<div class="max-w-3xl mx-auto space-y-3">
			{#each faqs as faq, idx}
				<div
					class="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all dark:border-slate-800 dark:bg-slate-900"
				>
					<button
						type="button"
						onclick={() => toggleFaq(idx)}
						class="flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
					>
						<span class="flex items-center gap-2.5">
							<span class="text-sky-500">❓</span>
							<span>{faq.q}</span>
						</span>
						<ChevronDown
							class="h-4 w-4 text-slate-400 transition-transform duration-200 {openFaq === idx ? 'rotate-180 text-sky-500' : ''}"
						/>
					</button>

					{#if openFaq === idx}
						<div
							class="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed dark:border-slate-800 dark:text-slate-300"
						>
							{faq.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA SECTION: AMANKAN NAMA DOMAIN & BIKIN WEB DI BARIZALOKA -->
	<section
		class="relative my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 p-8 sm:p-14 text-center text-white shadow-2xl"
	>
		<div class="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5">
			<span class="text-5xl animate-bounce">🏡</span>
			<h2 class="text-2xl sm:text-4xl font-extrabold leading-tight">
				Sudah Punya Ide Nama Domain Impian untuk Usahamu?
			</h2>
			<p class="max-w-xl text-xs sm:text-base text-slate-200/90 leading-relaxed">
				Ingat prinsip domain: <i>siapa cepat dia dapat!</i> Jangan sampai nama brand usahamu didahului orang lain. Cek ketersediaan nama domainmu sekarang juga secara gratis di Barizaloka!
			</p>

			<div class="flex flex-wrap items-center justify-center gap-3 pt-2">
				<a
					href="/cek-domain"
					class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-sky-400 active:scale-95"
				>
					<Search class="h-4 w-4" />
					<span>Cek Nama Domain Gratis</span>
				</a>
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20mau%20konsultasi%20bikin%20website%20dan%20daftarin%20nama%20domain"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
				>
					<MessageSquare class="h-4 w-4" />
					<span>Konsultasi Paket Web via WA</span>
				</a>
			</div>
		</div>
	</section>
</div>
