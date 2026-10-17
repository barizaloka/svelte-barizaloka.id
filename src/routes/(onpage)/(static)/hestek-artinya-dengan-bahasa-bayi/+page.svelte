<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import {
		Hash,
		Sparkles,
		Baby,
		BookOpen,
		CheckCircle2,
		XCircle,
		HelpCircle,
		ArrowRight,
		MessageSquare,
		TrendingUp,
		Boxes,
		Layers,
		Search,
		ShieldCheck,
		Share2,
		Lightbulb,
		ChevronDown,
		Check,
		Filter,
		Flame,
		Smartphone,
		Globe,
		Eye,
		Zap,
		Tag
	} from 'lucide-svelte';

	// Simulator Kotak Mainan (Simulasi Bahasa Bayi)
	const TOY_ITEMS = [
		{
			id: 1,
			title: 'Kucing Oren Tidur di Mangkok',
			tag: '#KucingLucu',
			category: 'hewan',
			author: '@pus_oren',
			likes: '45.2K',
			icon: '🐱',
			desc: 'Reels video kucing oren menggemaskan tertidur pulas dalam mangkok nasi.'
		},
		{
			id: 2,
			title: 'Resep Bolu Pandan Kukus Lembut',
			tag: '#ResepMasak',
			category: 'kuliner',
			author: '@dapur_bunda',
			likes: '28.7K',
			icon: '🍰',
			desc: 'Tutorial 3 menit membuat bolu pandan tanpa oven anti gagal.'
		},
		{
			id: 3,
			title: 'Cara Bikin Website Toko Online Cepat',
			tag: '#WebsiteKeren',
			category: 'teknologi',
			author: '@barizaloka_id',
			likes: '14.1K',
			icon: '💻',
			desc: 'Tips digitalisasi bisnis UMKM dengan website profesional siap jualan.'
		},
		{
			id: 4,
			title: 'Anak Kucing Main Benang Wol',
			tag: '#KucingLucu',
			category: 'hewan',
			author: '@cat_lovers_id',
			likes: '62.9K',
			icon: '🐾',
			desc: 'Aksi lincah kitten abu-abu melompat mengejar gulungan benang wol.'
		},
		{
			id: 5,
			title: 'Rahasia Sambal Bawang Gurih Nagih',
			tag: '#ResepMasak',
			category: 'kuliner',
			author: '@resep_nusantara',
			likes: '89.3K',
			icon: '🌶️',
			desc: 'Resep sambal bawang pedas nampol awet 1 bulan tanpa pengawet.'
		},
		{
			id: 6,
			title: 'Desain Landing Page Modern 2026',
			tag: '#WebsiteKeren',
			category: 'teknologi',
			author: '@web_craft',
			likes: '19.5K',
			icon: '🚀',
			desc: 'Bedah struktur landing page dengan konversi tinggi dan loading gesit.'
		}
	];

	const AVAILABLE_TAGS = ['Semua Kotak', '#KucingLucu', '#ResepMasak', '#WebsiteKeren'];

	let activeTag = $state('Semua Kotak');

	const filteredToys = $derived(
		activeTag === 'Semua Kotak'
			? TOY_ITEMS
			: TOY_ITEMS.filter((item) => item.tag === activeTag)
	);

	// Interactive FAQ State
	let openFaq = $state<number | null>(0);

	const faqs = [
		{
			q: 'Apa bedanya "Hestek", "Hastag", dan "Tagar"?',
			a: 'Secara fungsi ketiganya adalah barang yang sama! "Hashtag" (atau sering ditulis hastag) adalah ejaan bahasa Inggris aslinya. "Hestek" adalah cara mulut orang Indonesia melafalkannya (fonetik). Sedangkan "Tagar" (Tanda Pagar) adalah istilah resmi dan baku dalam Kamus Besar Bahasa Indonesia (KBBI).'
		},
		{
			q: 'Kenapa kita harus pakai hashtag saat upload di medsos?',
			a: 'Supaya kontenmu tidak terkubur! Di medsos seperti TikTok dan Instagram, algoritma menggunakan hashtag sebagai kompas untuk mengetahui topik video dan menyodorkannya ke orang yang tepat (FYP / Explore), bahkan ke mereka yang belum mengikuti akunmu.'
		},
		{
			q: 'Bolehkah memasukkan 30 hashtag sekaligus di satu postingan?',
			a: 'Sangat tidak disarankan di era sekarang. Medsos modern (seperti Instagram dan TikTok) justru menganggap tumpukan hashtag yang terlalu banyak sebagai sinyal spam. Jumlah ideal saat ini adalah 3 hingga 5 hashtag yang paling relevan dan spesifik.'
		},
		{
			q: 'Apakah hashtag ditulis di caption atau di kolom komentar?',
			a: 'Penelitian terbaru dari platform media sosial menunjukkan bahwa menaruh hashtag langsung di dalam CAPTION lebih efektif untuk SEO pencarian dan pemahaman algoritma AI, dibanding menyembunyikannya di kolom komentar.'
		},
		{
			q: 'Apakah akun dengan nol follower bisa viral hanya karena hashtag?',
			a: 'Bisa membantu sekali! Hashtag adalah "jembatan penemu" (organic discovery). Namun selain hashtag yang tepat, kualitas 3 detik pertama video (hook) dan nilai informasinya tetap menjadi penentu utama video ditonton sampai habis.'
		},
		{
			q: 'Bagaimana cara UMKM atau bisnis memanfaatkan hashtag?',
			a: 'Gunakan kombinasi 3 lapis: 1 tagar umum (#KulinerIndonesia), 2 tagar lokal/niche (#KulinerRembang, #BatikLasem), dan 1 tagar nama brand (#Barizaloka). Cara ini membuat tokomu mudah ditemukan pembeli lokal.'
		}
	];

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// Interactive Mini Quiz State
	let selectedQuizAnswer = $state<number | null>(null);
	let quizSubmitted = $state(false);
</script>

<svelte:head>
	<title>Hestek Artinya dengan Bahasa Bayi? Penjelasan Simpel, Hastag, & Peran Medsos — Barizaloka</title>
	<meta
		name="description"
		content="Penjelasan super simpel arti hestek dengan bahasa bayi! Kenapa ejaan yang benar adalah hashtag/hastag (tagar), bagaimana cara kerjanya, serta 6 peran krusial di dunia medsos."
	/>
	<link rel="canonical" href="https://barizaloka.id/hestek-artinya-dengan-bahasa-bayi" />
	<meta
		property="og:title"
		content="Hestek Artinya dengan Bahasa Bayi? Penjelasan Simpel, Hastag, & Peran Medsos"
	/>
	<meta
		property="og:description"
		content="Arti hestek diterangkan semudah bahasa bayi. Ketahui ejaan aslinya (hashtag/hastag), analogi kotak mainan, dan peran vitalnya di TikTok, Instagram, hingga Twitter."
	/>
	<meta property="og:url" content="https://barizaloka.id/hestek-artinya-dengan-bahasa-bayi" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Hestek Artinya dengan Bahasa Bayi? Penjelasan Simpel & Ejaan Hastag"
	/>
	<meta
		name="twitter:description"
		content="Penjelasan arti hestek dengan analogi super sederhana. Mengapa ejaan yang benar adalah hashtag/hastag dan bagaimana ia mendominasi algoritma media sosial."
	/>

	<!-- JSON-LD Structured Data for Article & FAQPage -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				"headline": "Hestek Artinya dengan Bahasa Bayi? Penjelasan Simpel, Ejaan Hastag, & Peran Medsos",
				"description": "Penjelasan arti istilah hestek dalam bahasa bayi super sederhana, pembenaran ejaan resmi hashtag/hastag/tagar, dan analisis fungsinya di media sosial.",
				"inLanguage": "id-ID",
				"publisher": {
					"@type": "Organization",
					"name": "Barizaloka",
					"url": "https://barizaloka.id"
				},
				"mainEntityOfPage": "https://barizaloka.id/hestek-artinya-dengan-bahasa-bayi"
			},
			{
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Apa bedanya Hestek, Hastag, dan Tagar?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Hashtag (atau hastag) adalah ejaan asli bahasa Inggris. Hestek adalah cara orang Indonesia melafalkannya secara fonetik. Sedangkan Tagar (tanda pagar) adalah istilah resmi dalam KBBI."
						}
					},
					{
						"@type": "Question",
						"name": "Kenapa harus pakai hashtag di media sosial?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Hashtag berfungsi sebagai pengelompok konten, mempermudah mesin pencari medsos mengkategorikan topik, dan menjembatani konten agar ditonton oleh audiens baru yang belum follow."
						}
					},
					{
						"@type": "Question",
						"name": "Berapa banyak hashtag yang ideal untuk sekali posting?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Jumlah optimal saat ini adalah 3 hingga 5 hashtag yang sangat relevan. Menggunakan terlalu banyak hashtag bisa dideteksi sebagai spam oleh algoritma modern."
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
			{ label: 'Hestek Artinya dengan Bahasa Bayi' }
		]}
	/>

	<!-- HERO SECTION -->
	<header
		class="relative my-8 overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-rose-50/50 to-indigo-50/60 p-6 sm:p-12 lg:p-16 shadow-xl dark:border-amber-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/40"
	>
		<!-- Background Floating Blobs -->
		<div
			class="pointer-events-none absolute -top-12 -left-12 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-500/10"
		></div>
		<div
			class="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-rose-300/25 blur-3xl dark:bg-rose-500/10"
		></div>

		<div class="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center gap-5">
			<!-- Cute Baby Language Badge -->
			<div
				class="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/95 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-sm backdrop-blur-md dark:border-amber-700 dark:bg-amber-950/80 dark:text-amber-300"
			>
				<Baby class="h-4 w-4 text-amber-600 dark:text-amber-400" />
				<span>🍼 Penjelasan Level "Bahasa Bayi" • Super Gampang Dimengerti!</span>
			</div>

			<h1
				class="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight dark:text-white"
			>
				Hestek Artinya Apa Sih? <br class="hidden sm:inline" />
				<span
					class="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent dark:from-amber-400 dark:via-rose-400 dark:to-indigo-400"
				>
					Yuk Bahas Pakai Bahasa Bayi!
				</span>
			</h1>

			<p
				class="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300"
			>
				Sering lihat tanda pagar <span class="font-bold text-amber-600 dark:text-amber-400 font-mono text-xl">#</span> 
				di TikTok atau Instagram tapi bingung maksudnya? Di sini kita kupas arti sebenarnya, luruskan bahwa 
				tulisan resminya adalah <strong class="text-slate-900 dark:text-white underline decoration-amber-400 decoration-2">hashtag (hastag)</strong>, 
				dan bongkar kekuatannya bikin video viral di medsos!
			</p>

			<!-- 3 Ringkasan Kilat (Quick Takeaways) -->
			<div class="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 text-left">
				<div
					class="rounded-2xl border border-amber-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-1">
						<span class="text-xl">🧸</span>
						<span>Arti Bahasa Bayi</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Seperti <strong>stiker label di kotak mainan</strong>. Semua mainan sejenis dimasukkan ke dalam kotak bertuliskan nama yang sama.
					</p>
				</div>

				<div
					class="rounded-2xl border border-rose-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm mb-1">
						<span class="text-xl">✍️</span>
						<span>Koreksi Ejaan</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Yang benar ditulis <strong>hashtag</strong> (sering disingkat <strong>hastag</strong>). Di KBBI resmi disebut <strong>Tagar</strong>.
					</p>
				</div>

				<div
					class="rounded-2xl border border-indigo-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
				>
					<div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-1">
						<span class="text-xl">🚀</span>
						<span>Peran di Medsos</span>
					</div>
					<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
						Sebagai <strong>jembatan penemu</strong> dan kompas algoritma agar postingan ditonton jutaan orang tanpa perlu saling follow.
					</p>
				</div>
			</div>
		</div>
	</header>

	<!-- SECTION 1: PENJELASAN BAHASA BAYI (THE CORE ANALOGY) -->
	<section class="my-14">
		<div class="text-center max-w-3xl mx-auto mb-10">
			<div
				class="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 mb-3"
			>
				<Sparkles class="h-3.5 w-3.5" />
				<span>Logika Super Sederhana</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				Bayangkan Medsos Adalah Kamar Penuh Mainan
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Kalau dijelaskan dengan istilah teknis programmer (metadata, indexing, search query), pasti bikin pusing. Mari kita pahami dengan cara termudah di dunia!
			</p>
		</div>

		<!-- 3 Analogi Visual Bahasa Bayi -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<!-- Card Analogi 1 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl mb-5 dark:bg-amber-950/60">
						📦
					</div>
					<span class="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">Analogi 1</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Kotak Mainan Berlabel Gambar
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Bayangkan di kamarmu ada 1.000 mainan tercecer: robot, mobil-mobilan, boneka panda.
						Kalau mau cari mobil balap, capek kan kalau ngubek-ngubek semua lantai?
					</p>
					<div class="mt-4 rounded-xl bg-amber-50 p-3 text-xs text-amber-900 font-medium dark:bg-amber-950/40 dark:text-amber-200">
						💡 <strong>Solusinya:</strong> Ibu menempelkan stiker gambar mobil <code class="font-bold">#Mobilan</code> di satu kotak. Jadi pas kamu teriak mau main mobil, tinggal buka kotak itu!
					</div>
				</div>
			</div>

			<!-- Card Analogi 2 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-3xl mb-5 dark:bg-rose-950/60">
						🧢
					</div>
					<span class="text-xs font-bold text-rose-600 dark:text-rose-400 tracking-wider uppercase">Analogi 2</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Topi Warna-Warni di Taman Bermain
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Kamu lagi di taman bermain raksasa dengan 5.000 anak asing. Kamu mau main petak umpet, tapi nggak tahu siapa anak yang punya hobi sama.
					</p>
					<div class="mt-4 rounded-xl bg-rose-50 p-3 text-xs text-rose-900 font-medium dark:bg-rose-950/40 dark:text-rose-200">
						💡 <strong>Solusinya:</strong> Kamu pakai topi merah bertuliskan <code class="font-bold">#PetakUmpet</code>. Anak-anak lain yang bertopi sama langsung lari nyamperin kamu buat main bareng!
					</div>
				</div>
			</div>

			<!-- Card Analogi 3 -->
			<div
				class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
			>
				<div>
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl mb-5 dark:bg-indigo-950/60">
						🛒
					</div>
					<span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">Analogi 3</span>
					<h3 class="text-lg font-bold text-slate-900 mt-1 mb-3 dark:text-white">
						Papan Petunjuk Lorong Supermarket
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Di minimarket atau supermarket besar, ribuan snack dan minuman berjejer rapi. Ada lorong biskuit bayi, lorong susu, dan lorong sabun mandi.
					</p>
					<div class="mt-4 rounded-xl bg-indigo-50 p-3 text-xs text-indigo-900 font-medium dark:bg-indigo-950/40 dark:text-indigo-200">
						💡 <strong>Solusinya:</strong> Hashtag itu ibarat plang gantung <code class="font-bold">#LorongSusu</code>. Pembeli nggak perlu tanya satpam, langsung jalan ke lorong itu.
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 2: SIMULATOR INTERAKTIF (KOTAK MAINAN HASHTAG) -->
	<section
		class="my-14 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
	>
		<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
			<div>
				<div class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
					<Boxes class="h-4 w-4" />
					<span>Eksperimen Interaktif</span>
				</div>
				<h2 class="text-2xl font-black text-slate-900 dark:text-white mt-1">
					Simulator Kotak Mainan: Cara Medsos Memilah Konten
				</h2>
				<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
					Klik salah satu "stiker label" di bawah ini untuk melihat bagaimana media sosial menyortir postingan ke dalam satu kotak:
				</p>
			</div>

			<!-- Filter Buttons -->
			<div class="flex flex-wrap items-center gap-2">
				{#each AVAILABLE_TAGS as tag}
					<button
						type="button"
						onclick={() => (activeTag = tag)}
						class="rounded-xl px-3.5 py-2 text-xs font-bold transition-all {activeTag === tag
							? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 dark:bg-amber-500'
							: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700'}"
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>

		<!-- Simulator Explanation Notice -->
		<div class="my-6 rounded-2xl bg-amber-50 border border-amber-200/60 p-4 dark:bg-amber-950/30 dark:border-amber-900/40">
			<div class="flex items-start gap-3">
				<span class="text-2xl flex-shrink-0">🍼</span>
				<div class="text-xs sm:text-sm text-amber-950 dark:text-amber-200">
					{#if activeTag === 'Semua Kotak'}
						<p>
							<strong>Kondisi Sekarang:</strong> Semua postingan campur aduk di lantai. Ada kucing, resep kue, sampai pembuatan website.
						</p>
					{:else}
						<p>
							<strong>Hebat! Kamu baru saja mengklik label <span class="font-bold underline">{activeTag}</span>.</strong>
							Sistem secara otomatis menutup kotak lain dan HANYA menampilkan konten yang punya stiker tersebut!
						</p>
					{/if}
				</div>
			</div>
		</div>

		<!-- Simulator Grid Results -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each filteredToys as item (item.id)}
				<div
					class="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
				>
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="text-3xl">{item.icon}</span>
							<span
								class="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 font-mono text-xs font-bold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300"
							>
								<Hash class="h-3 w-3" />
								{item.tag.replace('#', '')}
							</span>
						</div>
						<h3 class="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors dark:text-white dark:group-hover:text-amber-400">
							{item.title}
						</h3>
						<p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed dark:text-slate-400">
							{item.desc}
						</p>
					</div>

					<div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
						<span class="font-medium text-slate-600 dark:text-slate-400">{item.author}</span>
						<span class="flex items-center gap-1">❤️ {item.likes}</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- SECTION 3: MELURUSKAN ISTILAH (HESTEK vs HASTAG vs TAGAR) -->
	<section class="my-16">
		<div class="mx-auto max-w-3xl text-center mb-10">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 mb-3"
			>
				<BookOpen class="h-3.5 w-3.5" />
				<span>Kamus Bahasa & Fakta Ejaan</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				Yang Benar Itu "Hestek", "Hastag", atau Apa Sih?
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Banyak orang sering ragu saat mengetik. Yuk kita luruskan asal-usul ejaannya biar kamu nggak bingung lagi!
			</p>
		</div>

		<!-- Breakdown Komponen Kata -->
		<div class="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div class="space-y-4">
					<h3 class="text-xl font-black text-slate-900 dark:text-white">
						Asal Kata: Dari Bahasa Inggris
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-300">
						Istilah aslinya berasal dari dua kata bahasa Inggris yang digabungkan:
					</p>

					<div class="space-y-3">
						<div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/60">
							<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-mono text-xl font-black text-white">#</span>
							<div>
								<div class="font-bold text-slate-900 text-sm dark:text-white">HASH (Tanda Pagar)</div>
								<div class="text-xs text-slate-500 dark:text-slate-400">Simbol pagar '#' di keyboard komputer & telepon jadul.</div>
							</div>
						</div>

						<div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/60">
							<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-xl font-black text-white">🏷️</span>
							<div>
								<div class="font-bold text-slate-900 text-sm dark:text-white">TAG (Label / Cap Pengenal)</div>
								<div class="text-xs text-slate-500 dark:text-slate-400">Tanda pengenal, seperti price tag baju atau label bagasi.</div>
							</div>
						</div>
					</div>

					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-300">
						Ketika disatukan menjadi <strong class="text-amber-600 dark:text-amber-400">HASHTAG</strong>. Karena telinga orang Indonesia terbiasa mendengar bunyi lafal bahasa Inggrisnya (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">/ˈhæʃtæɡ/</code>), banyak yang menuliskannya secara fonetik menjadi <strong>"hestek"</strong>.
					</p>
				</div>

				<!-- Comparison Table Card -->
				<div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
					<h4 class="font-bold text-slate-900 text-sm mb-4 dark:text-white flex items-center gap-2">
						<Filter class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
						<span>Tabel Komparasi Ejaan Populer</span>
					</h4>

					<div class="space-y-3 text-xs">
						<!-- Row 1 -->
						<div class="rounded-xl bg-white p-3 shadow-sm border border-slate-200/60 dark:bg-slate-900 dark:border-slate-800">
							<div class="flex items-center justify-between">
								<span class="font-black text-emerald-700 dark:text-emerald-400 text-sm">HASHTAG (Hastag)</span>
								<span class="rounded bg-emerald-100 text-emerald-800 px-2 py-0.5 font-bold text-[10px] dark:bg-emerald-950/70 dark:text-emerald-300">Ejaan Baku Global</span>
							</div>
							<p class="text-slate-500 mt-1 dark:text-slate-400">
								Penulisan resmi dalam bahasa Inggris internasional. Sering disederhanakan orang menjadi "hastag".
							</p>
						</div>

						<!-- Row 2 -->
						<div class="rounded-xl bg-white p-3 shadow-sm border border-slate-200/60 dark:bg-slate-900 dark:border-slate-800">
							<div class="flex items-center justify-between">
								<span class="font-black text-sky-700 dark:text-sky-400 text-sm">TAGAR</span>
								<span class="rounded bg-sky-100 text-sky-800 px-2 py-0.5 font-bold text-[10px] dark:bg-sky-950/70 dark:text-sky-300">Resmi KBBI</span>
							</div>
							<p class="text-slate-500 mt-1 dark:text-slate-400">
								Akronim resmi bahasa Indonesia: <strong>Ta</strong>nda Pa<strong>gar</strong>. Dipakai di media massa dan pemerintahan.
							</p>
						</div>

						<!-- Row 3 -->
						<div class="rounded-xl bg-white p-3 shadow-sm border border-slate-200/60 dark:bg-slate-900 dark:border-slate-800">
							<div class="flex items-center justify-between">
								<span class="font-bold text-amber-700 dark:text-amber-400 text-sm">HESTEK</span>
								<span class="rounded bg-amber-100 text-amber-800 px-2 py-0.5 font-bold text-[10px] dark:bg-amber-950/70 dark:text-amber-300">Ejaan Percakapan Lisan</span>
							</div>
							<p class="text-slate-500 mt-1 dark:text-slate-400">
								Cara baca lisan sehari-hari. Populer diketik orang saat mencari di Google karena bunyi ucapannya.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 4: 6 PERAN KRUSIAL HASHTAG DI DUNIA MEDSOS -->
	<section class="my-16">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-bold text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 mb-3"
			>
				<TrendingUp class="h-3.5 w-3.5" />
				<span>Medsos Powerhouse</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-4xl dark:text-white">
				6 Peran Sakti Hashtag di Jagat Media Sosial
			</h2>
			<p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
				Bukan sekadar hiasan tulisan warna biru! Di platform seperti TikTok, Instagram Reels, X (Twitter), dan LinkedIn, hashtag adalah mesin penggerak algoritma:
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Peran 1 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600 mb-4 dark:bg-blue-950/60 dark:text-blue-400">
						🗂️
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						1. Pengelompok & Katalog Konten Otomatis
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Setiap detik ada ratusan ribu video diunggah ke TikTok & Instagram. Hashtag bertindak sebagai arsip digital otomatis yang memasukkan videomu ke folder yang sesuai.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
					Contoh: Mencari tips desain cukup buka #DesainGrafis
				</div>
			</div>

			<!-- Peran 2 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600 mb-4 dark:bg-emerald-950/60 dark:text-emerald-400">
						🌉
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						2. Jembatan Penemu Bagi Non-Follower (Organic Reach)
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Punya 0 follower? Jangan takut! Siapapun yang mencari atau mem-follow topik hashtag tersebut bisa melihat postinganmu di halaman pencarian dan rekomendasi FYP.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
					Membantu akun baru mendapatkan impresi organik
				</div>
			</div>

			<!-- Peran 3 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-600 mb-4 dark:bg-amber-950/60 dark:text-amber-400">
						🤖
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						3. Kompas untuk Robot Algoritma AI
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Algoritma media sosial adalah robot cerdas. Hashtag memberi sinyal konteks ke robot tentang apa isi videomu, sehingga robot tahu harus menyodorkannya ke pengguna mana.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
					Membantu AI mencocokkan minat audiens
				</div>
			</div>

			<!-- Peran 4 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl text-rose-600 mb-4 dark:bg-rose-950/60 dark:text-rose-400">
						🔥
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						4. Panggung Gelombang Tren & Gerakan Viral
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Ketika ada peristiwa gempar, pesta olahraga, atau tren dance challenge, hashtag menyatukan jutaan percakapan dunia menjadi satu panggung utama (Trending Topics).
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
					Contoh: #PialaDunia, #HariGuru, #Promo1010
				</div>
			</div>

			<!-- Peran 5 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-600 mb-4 dark:bg-purple-950/60 dark:text-purple-400">
						👑
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						5. Identitas Branding & Wadah Testimoni (UGC)
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Bisnis yang cerdas membuat tagar khusus nama mereka. Pelanggan diajak mengunggah foto produk sambil menyematkan tagar tersebut untuk mengumpulkan testimoni publik.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-purple-600 dark:text-purple-400">
					Contoh: #ShareACoke, #KeluargaBarizaloka
				</div>
			</div>

			<!-- Peran 6 -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
			>
				<div>
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-2xl text-teal-600 mb-4 dark:bg-teal-950/60 dark:text-teal-400">
						🔍
					</div>
					<h3 class="font-bold text-slate-900 text-base dark:text-white mb-2">
						6. Radar Riset Pasar & Mengintip Kompetitor
					</h3>
					<p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
						Kamu bisa melihat konten seperti apa yang sedang disukai pelanggan di bidang usahamu hanya dengan menelusuri hashtag industri tersebut setiap minggu.
					</p>
				</div>
				<div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
					Alat riset ide konten tanpa biaya sepeserpun
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 5: STRATEGI PIRAMIDA HASHTAG (CARA PAKAI YANG BENAR) -->
	<section
		class="my-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-6 sm:p-12 text-white shadow-xl"
	>
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-10">
				<span class="rounded-full bg-indigo-500/20 px-3.5 py-1 text-xs font-bold text-indigo-300 border border-indigo-400/30">
					💡 Formula Praktis
				</span>
				<h2 class="text-2xl sm:text-4xl font-black mt-3">
					Formula Piramida Hashtag: Jangan Asal Pasang!
				</h2>
				<p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto">
					Memasang 30 hashtag acak tidak akan membuatmu viral. Terapkan strategi piramida 3 lapis ini di caption kamu:
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Level 1 -->
				<div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<div class="text-2xl mb-2">🌐</div>
					<div class="font-bold text-indigo-300 text-sm">1. Tagar Makro (Umum)</div>
					<p class="text-xs text-slate-300 mt-1 leading-relaxed">
						Hashtag dengan jutaan postingan. Menunjukkan topik besar industri kamu.
					</p>
					<div class="mt-3 font-mono text-xs text-amber-300 bg-black/30 p-2 rounded-lg">
						Contoh: #BisnisOnline, #Kuliner
					</div>
				</div>

				<!-- Level 2 -->
				<div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<div class="text-2xl mb-2">🎯</div>
					<div class="font-bold text-emerald-300 text-sm">2. Tagar Mikro / Niche (Spesifik)</div>
					<p class="text-xs text-slate-300 mt-1 leading-relaxed">
						Hashtag spesifik sesuai target audiens atau lokasi bisnismu. Persaingan lebih rendah tapi peminat sangat tinggi!
					</p>
					<div class="mt-3 font-mono text-xs text-emerald-300 bg-black/30 p-2 rounded-lg">
						Contoh: #JasaWebsiteRembang, #KopiSarang
					</div>
				</div>

				<!-- Level 3 -->
				<div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
					<div class="text-2xl mb-2">🏷️</div>
					<div class="font-bold text-rose-300 text-sm">3. Tagar Brand / Unik</div>
					<p class="text-xs text-slate-300 mt-1 leading-relaxed">
						Hashtag identitas usahamu sendiri agar orang lain gampang menemukan seluruh riwayat postingan tokomu.
					</p>
					<div class="mt-3 font-mono text-xs text-rose-300 bg-black/30 p-2 rounded-lg">
						Contoh: #Barizaloka, #KopiSedanOriginal
					</div>
				</div>
			</div>

			<!-- Aturan Emas -->
			<div class="mt-8 rounded-2xl bg-white/10 border border-white/15 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
				<div class="flex items-center gap-3">
					<ShieldCheck class="h-6 w-6 text-emerald-400 flex-shrink-0" />
					<span>
						<strong>Aturan Emas 2026:</strong> Relevansi selalu mengalahkan kuantitas. 3-5 hashtag yang sangat tepat jauh lebih disukai algoritma daripada 20 hashtag yang tidak nyambung.
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 6: KUIS KECIL / SELF CHECK -->
	<section class="my-14 mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
		<div class="text-center mb-6">
			<span class="text-3xl">🎯</span>
			<h3 class="text-lg font-bold text-slate-900 dark:text-white mt-2">
				Kuis Cepat: Uji Pemahamanmu
			</h3>
			<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
				Manakah pernyataan yang PALING TEPAT tentang hashtag di medsos?
			</p>
		</div>

		<div class="space-y-2.5">
			{#each [
				{ id: 0, text: 'A. Semakin banyak hashtag (misal 50 buah), pasti otomatis langsung viral.', correct: false },
				{ id: 1, text: 'B. Hashtag berfungsi seperti label kotak mainan untuk mempermudah orang & algoritma menemukan konten sejenis.', correct: true },
				{ id: 2, text: 'C. Tulisan yang benar di kamus internasional adalah "hestek", bukan "hashtag".', correct: false }
			] as option}
				<button
					type="button"
					onclick={() => {
						selectedQuizAnswer = option.id;
						quizSubmitted = true;
					}}
					class="w-full text-left rounded-xl border p-3.5 text-xs sm:text-sm font-medium transition-all {selectedQuizAnswer === option.id
						? option.correct
							? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
							: 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
						: 'border-slate-200 hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					<div class="flex items-center justify-between">
						<span>{option.text}</span>
						{#if selectedQuizAnswer === option.id}
							{#if option.correct}
								<CheckCircle2 class="h-4 w-4 text-emerald-600 flex-shrink-0" />
							{:else}
								<XCircle class="h-4 w-4 text-rose-600 flex-shrink-0" />
							{/if}
						{/if}
					</div>
				</button>
			{/each}
		</div>

		{#if quizSubmitted}
			<div class="mt-4 rounded-xl p-3 text-xs {selectedQuizAnswer === 1 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'}">
				{#if selectedQuizAnswer === 1}
					🎉 <strong>Tepat Sekali!</strong> Hashtag adalah sistem label kategorisasi konten agar tidak tersesat di rimba media sosial.
				{:else}
					❌ <strong>Kurang Tepat!</strong> Jawaban yang benar adalah B. Ejaan resminya adalah <i>hashtag</i> (hastag), dan algoritma modern justru menghukum postingan yang menumpuk puluhan tagar spam.
				{/if}
			</div>
		{/if}
	</section>

	<!-- SECTION 7: HUBUNGAN MEDSOS & WEBSITE RESMI (SINERGI BARIZALOKA) -->
	<section
		class="my-16 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white p-6 sm:p-12 dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/40"
	>
		<div class="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div>
				<div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-200/80 px-3 py-1 text-xs font-bold text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300 mb-3">
					<Globe class="h-3.5 w-3.5" />
					<span>Sinergi Bisnis Digital</span>
				</div>
				<h2 class="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
					Medsos Tempat Menjaring, Website Tempat Menutup Penjualan
				</h2>
				<p class="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-300">
					Hashtag di TikTok dan Instagram memang ampuh mendatangkan ribuan pasang mata. Tapi ingat, media sosial seperti <strong>ruko sewaan di pasar malam</strong>: ramai, tapi aturannya bisa berubah sewaktu-waktu dan akun bisa terkena penalti.
				</p>
				<p class="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-300">
					Maka langkah terbaik adalah: pancing penonton lewat hashtag di medsos, lalu arahkan mereka ke <strong>website resmi mandiri milikmu</strong> sebagai rumah bisnis hak milik seumur hidup yang kredibel dan bebas potongan komisi.
				</p>

				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href="/harga"
						class="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-800 transition-all active:scale-95 dark:bg-emerald-600 dark:hover:bg-emerald-500"
					>
						<span>Buat Website Bisnismu</span>
						<ArrowRight class="h-3.5 w-3.5" />
					</a>
					<a
						href="/cek-domain"
						class="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-50 transition-all dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800"
					>
						<span>Cek Nama Domain Impian</span>
					</a>
				</div>
			</div>

			<div class="space-y-3">
				<div class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-900/60 dark:bg-slate-900">
					<div class="flex items-center gap-3">
						<span class="text-2xl">📱</span>
						<div>
							<h3 class="font-bold text-slate-900 text-sm dark:text-white">Media Sosial + Hashtag</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Pintu masuk (awareness), menjangkau calon audiens baru lewat FYP dan Explore.</p>
						</div>
					</div>
				</div>

				<div class="text-center font-bold text-emerald-600 text-lg">⬇️ Diarahkan ke</div>

				<div class="rounded-2xl border border-emerald-200 bg-white p-4 shadow-md dark:border-emerald-800 dark:bg-slate-900 ring-2 ring-emerald-500/20">
					<div class="flex items-center gap-3">
						<span class="text-2xl">🏠</span>
						<div>
							<h3 class="font-bold text-slate-900 text-sm dark:text-white">Website Resmi (Barizaloka)</h3>
							<p class="text-xs text-slate-500 dark:text-slate-400">Pusat transaksi, katalog produk lengkap, profil terpercaya, dan database pelanggan mandiri.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- SECTION 8: FAQ ACCORDION -->
	<section class="my-16">
		<div class="text-center max-w-2xl mx-auto mb-10">
			<div
				class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300 mb-2"
			>
				<HelpCircle class="h-3.5 w-3.5" />
				<span>Tanya Jawab Populer</span>
			</div>
			<h2 class="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
				Pertanyaan Sering Diajukan Seputar Hestek
			</h2>
			<p class="text-xs sm:text-sm text-slate-500 mt-1 dark:text-slate-400">
				Jawaban lugas dan santai untuk semua keraguanmu seputar pemakaian tanda pagar.
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
							<span class="text-amber-500">❓</span>
							<span>{faq.q}</span>
						</span>
						<ChevronDown
							class="h-4 w-4 text-slate-400 transition-transform duration-200 {openFaq === idx ? 'rotate-180 text-amber-500' : ''}"
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

	<!-- CTA CONSULTATION SECTION -->
	<section
		class="relative my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950/70 to-indigo-950 p-8 sm:p-14 text-center text-white shadow-2xl"
	>
		<div class="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5">
			<span class="text-5xl animate-bounce">🚀</span>
			<h2 class="text-2xl sm:text-4xl font-extrabold leading-tight">
				Siap Mengembangkan Bisnis dari Medsos ke Website Mandiri?
			</h2>
			<p class="max-w-xl text-xs sm:text-base text-slate-200/90 leading-relaxed">
				Jangan biarkan penonton konten viralmu terbuang sia-sia! Bangun website profesional bersama tim Barizaloka. Cepat, elegan, dan harga sangat ramah UMKM & daerah.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-3 pt-2">
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20mau%20konsultasi%20bikin%20website%20untuk%20sinergi%20dengan%20medsos%20saya"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500 active:scale-95"
				>
					<MessageSquare class="h-4 w-4" />
					<span>Konsultasi Gratis via WhatsApp</span>
				</a>
				<a
					href="/harga"
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
				>
					<span>Lihat Paket Website</span>
					<ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>
</div>
