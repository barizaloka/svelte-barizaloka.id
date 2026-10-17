<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import {
		Rocket,
		ShieldCheck,
		Search,
		Building2,
		ShoppingBag,
		Link2,
		CreditCard,
		Sparkles,
		CheckCircle2,
		Check,
		X,
		MessageSquare,
		ExternalLink,
		Globe,
		Code2,
		Laptop,
		Server,
		Smartphone,
		Zap,
		Crown,
		Layers,
		Handshake,
		ArrowRight
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Analisis SUMU & Harapan Digitalisasi Ekonomi Umat — Barizaloka</title>
	<meta
		name="description"
		content="Analisis platform Serikat Usaha Muhammadiyah (sumu.or.id), keunggulan Laravel, prinsip transparansi, kepemilikan aset web vs media sosial, dan peluang marketplace mandiri dari Founder Barizaloka."
	/>
	<link rel="canonical" href="https://barizaloka.id/sumu-serikat-usaha-muhammadiyah" />
	<meta
		property="og:title"
		content="Analisis SUMU & Harapan Digitalisasi Ekonomi Umat — Barizaloka"
	/>
	<meta
		property="og:description"
		content="Analisis platform Serikat Usaha Muhammadiyah (sumu.or.id), keunggulan Laravel, prinsip transparansi, kepemilikan aset web vs media sosial, dan peluang marketplace mandiri dari Founder Barizaloka."
	/>
	<meta property="og:url" content="https://barizaloka.id/sumu-serikat-usaha-muhammadiyah" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Analisis SUMU & Harapan Digitalisasi Ekonomi Umat — Barizaloka"
	/>
	<meta
		name="twitter:description"
		content="Analisis platform Serikat Usaha Muhammadiyah (sumu.or.id), keunggulan Laravel, prinsip transparansi, kepemilikan aset web vs media sosial, dan peluang marketplace mandiri."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Inisiatif SUMU' }]} />

	<!-- HERO SECTION -->
	<section
		class="relative my-8 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-indigo-50/50 p-8 text-center shadow-lg sm:p-14 dark:border-emerald-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/60"
	>
		<!-- Background Accents -->
		<div
			class="pointer-events-none absolute top-0 left-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
		></div>
		<div
			class="pointer-events-none absolute right-10 bottom-0 h-80 w-80 translate-y-1/3 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10"
		></div>

		<div class="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-5">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-sm backdrop-blur-sm dark:border-emerald-800/80 dark:bg-emerald-950/70 dark:text-emerald-300"
			>
				<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
				<span>💚 Dakwah Ekonomi Umat • Muhammadiyah</span>
			</div>

			<h1
				class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
			>
				Serikat Usaha Muhammadiyah <span
					class="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-400 dark:to-indigo-400"
					>(SUMU)</span
				><br />
				<span class="text-xl font-bold text-slate-700 sm:text-3xl dark:text-slate-300">
					Analisis Laravel & Harapan Web Software Engineer
				</span>
			</h1>

			<p
				class="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
			>
				Refleksi dan ide pemikiran dari <strong class="text-slate-900 dark:text-white"
					>Ahla (Founder Barizaloka)</strong
				>
				— seorang warga Muhammadiyah sekaligus <i>Web Software Engineer</i>, tentang akselerasi
				gerakan ekonomi wirausaha umat melalui fondasi
				<strong class="text-emerald-700 dark:text-emerald-400">Laravel</strong>, prinsip
				transparansi, kepemilikan aset digital mandiri, hingga potensi pembuatan
				<strong class="text-indigo-700 dark:text-indigo-400">Marketplace Sendiri</strong>.
			</p>

			<div class="mt-4 flex flex-wrap items-center justify-center gap-3">
				<a
					href="#analisis-teknis"
					class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-600"
				>
					<Laptop class="h-4 w-4" />
					<span>Lihat Analisis & Fondasi Laravel</span>
				</a>
				<a
					href="#marketplace-mandiri"
					class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
				>
					<ShoppingBag class="h-4 w-4" />
					<span>Potensi Marketplace Mandiri</span>
				</a>
				<a
					href="https://sumu.or.id"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
				>
					<Globe class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
					<span>Kunjungi sumu.or.id</span>
					<ExternalLink class="h-3.5 w-3.5 text-slate-400" />
				</a>
			</div>
		</div>
	</section>

	<!-- STATS HIGHLIGHT -->
	<section class="my-10">
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<div
				class="rounded-2xl border border-emerald-100 bg-white p-5 text-center shadow-sm dark:border-emerald-950 dark:bg-slate-900"
			>
				<div class="text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
					SUMU
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
					Serikat Usaha Muhammadiyah
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-white p-5 text-center shadow-sm dark:border-emerald-950 dark:bg-slate-900"
			>
				<div class="text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
					Laravel
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
					Sistem Web Berkinerja Tinggi
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-white p-5 text-center shadow-sm dark:border-emerald-950 dark:bg-slate-900"
			>
				<div class="text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
					Transparan
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
					Akuntabilitas Ekonomi Umat
				</div>
			</div>
			<div
				class="rounded-2xl border border-emerald-100 bg-white p-5 text-center shadow-sm dark:border-emerald-950 dark:bg-slate-900"
			>
				<div class="text-2xl font-black text-emerald-700 sm:text-3xl dark:text-emerald-400">
					Mandiri
				</div>
				<div class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
					Bebas Aturan Medsos Pihak Ke-3
				</div>
			</div>
		</div>
	</section>

	<!-- MENGENAL SUMU SECTION -->
	<section
		class="my-12 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50"
	>
		<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
			<div>
				<span
					class="inline-block rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase dark:bg-emerald-950/60 dark:text-emerald-300"
				>
					Tentang SUMU
				</span>
				<h2
					class="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Wadah Wirausaha Memakmurkan Anggota & Memajukan Indonesia
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
					<strong>Serikat Usaha Muhammadiyah (SUMU)</strong> adalah wadah dan platform kolaborasi gerakan
					kewirausahaan inklusif yang digagas untuk memperkuat jaring-jaring wirausaha warga Muhammadiyah
					dan masyarakat luas.
				</p>
				<p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
					SUMU tidak hanya menjadi wadah silaturahmi pengusaha, tetapi juga mesin pertumbuhan ekonomi
					yang berorientasi pada pencetakan konglomerasi Islam yang beretika, profesional, transparan,
					dan berdaya saing global.
				</p>
				<div
					class="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200/80 bg-white p-4 shadow-sm dark:border-emerald-800/80 dark:bg-slate-900"
				>
					<span class="text-2xl">🎯</span>
					<div>
						<h4 class="text-sm font-bold text-slate-900 dark:text-white">Visi Besar 2045</h4>
						<p class="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
							Mengantarkan setidaknya 30 anggota SUMU masuk ke dalam daftar 100 orang terkaya di
							Indonesia pada tahun 2045, sejalan dengan visi Indonesia Emas.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div
					class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
					>
						<Smartphone class="h-5 w-5" />
					</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">SUMU Pro</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Platform interaksi, aplikasi jejaring wirausaha, serta sesi mentoring intensif antar
						anggota.
					</p>
				</div>
				<div
					class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400"
					>
						<Zap class="h-5 w-5" />
					</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">SUMU Catalyst</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Kolaborasi antar usaha anggota untuk akselerasi pertumbuhan bisnis secara sinergis dan
						berkelanjutan.
					</p>
				</div>
				<div
					class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
					>
						<Rocket class="h-5 w-5" />
					</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">Venture Builder</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Inkubasi & kurasi bisnis terstruktur untuk persiapan scaling up dan ekspansi pasar
						ekspor.
					</p>
				</div>
				<div
					class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"
					>
						<Crown class="h-5 w-5" />
					</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">Exclusive Club</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Pendampingan strategi khusus bagi pelaku usaha skala besar (>100 karyawan / aset
						>Rp10M).
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ANALISIS TEKNIS & LARAVEL -->
	<section id="analisis-teknis" class="my-16 scroll-mt-24">
		<div class="mx-auto mb-12 max-w-2xl text-center">
			<span
				class="inline-block rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-bold tracking-widest text-emerald-700 uppercase dark:bg-emerald-950/60 dark:text-emerald-300"
			>
				Perspektif Software Engineer
			</span>
			<h2
				class="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Membangun Sistem SUMU dengan Arsitektur <code
					class="rounded bg-emerald-100 px-2 py-0.5 font-mono text-lg text-emerald-800 sm:text-xl dark:bg-emerald-950 dark:text-emerald-300"
					>Laravel</code
				>
			</h2>
			<p class="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
				Mengapa framework Laravel menjadi pilihan ideal untuk menghadirkan kecepatan tinggi, keamanan
				terjamin, serta keleluasaan membangun portal organisasi dan ekosistem bisnis modern.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Mengapa Laravel -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-5 flex items-center gap-3">
					<div
						class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
					>
						<Rocket class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
							Mengapa Memilih Laravel?
						</h3>
						<p class="text-xs text-slate-500 dark:text-slate-400">
							Kinerja Maksimal, Skalabilitas, & Fleksibilitas
						</p>
					</div>
				</div>
				<ul class="space-y-4 text-sm text-slate-600 dark:text-slate-300">
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white">Performa Ringan & Cepat:</strong> Laravel
							tidak memuat beban plugin berlebih. Halaman terbuka dalam hitungan milidetik, hemat kuota
							internet pengguna, dan sangat stabil diakses via smartphone.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white">Kustomisasi Tanpa Batas:</strong> Seluruh
							fitur (pendaftaran anggota, sistem kurasi bisnis, sertifikasi verifikasi) dapat disesuaikan
							100% dengan alur kerja SUMU tanpa batasan template.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white">Keamanan Tingkat Enterprise:</strong> Dilengkapi
							perlindungan bawaan terhadap serangan SQL Injection, Cross-Site Scripting (XSS), dan CSRF
							untuk menjaga data anggota tetap aman.
						</span>
					</li>
				</ul>
			</div>

			<!-- Prinsip Transparansi Digital -->
			<div
				class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="mb-5 flex items-center gap-3">
					<div
						class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
					>
						<Search class="h-6 w-6" />
					</div>
					<div>
						<h3 class="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
							Prinsip Transparansi Digital
						</h3>
						<p class="text-xs text-slate-500 dark:text-slate-400">
							Akuntabilitas Publik & Kepercayaan Umat
						</p>
					</div>
				</div>
				<ul class="space-y-4 text-sm text-slate-600 dark:text-slate-300">
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-indigo-600 dark:text-indigo-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white"
								>Transparansi Data & Verifikasi Usaha:</strong
							> Setiap profil bisnis anggota terverifikasi secara terbuka, membangun kepercayaan tinggi
							di antara sesama wirausahawan dan konsumen.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-indigo-600 dark:text-indigo-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white"
								>Laporan Arus Dana & Program Publik:</strong
							> Dashboard transparan untuk menampilkan perkembangan program pemberdayaan, statistik anggota,
							hingga pencapaian target usaha secara real-time.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="mt-0.5 font-bold text-indigo-600 dark:text-indigo-400">•</span>
						<span>
							<strong class="text-slate-900 dark:text-white">Open & Auditable Workflow:</strong> Sistem
							berbasis arsitektur modern memungkinkan auditibilitas data yang jelas dan rapi untuk pelaporan
							keanggotaan persyarikatan.
						</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- WEBSITE SENDIRI VS MEDIA SOSIAL ORANG LAIN -->
	<section
		class="my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl sm:p-12 dark:border dark:border-slate-800"
	>
		<div class="mx-auto mb-12 max-w-3xl text-center">
			<span
				class="inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase"
			>
				Pentingnya Kemandirian Digital
			</span>
			<h2 class="mt-3 text-2xl font-bold leading-tight sm:text-4xl">
				Beda Website Milik Sendiri dengan <span class="text-emerald-400"
					>Media Sosial Orang Lain</span
				>
			</h2>
			<p class="mt-3 text-sm text-slate-300 sm:text-base">
				Mengapa wirausahawan dan organisasi Muhammadiyah tidak boleh hanya mengandalkan platform
				pihak ketiga.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Media Sosial (Sewa Tanah Orang Lain) -->
			<div
				class="relative overflow-hidden rounded-2xl border border-red-500/30 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
			>
				<div
					class="absolute top-0 right-0 rounded-bl-xl border-b border-l border-red-500/30 bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300"
				>
					📱 Media Sosial (Pihak Ke-3)
				</div>
				<h3 class="mt-2 mb-4 text-xl font-bold text-red-400">"Menumpang di Tanah Orang Lain"</h3>
				<ul class="space-y-3.5 text-sm text-slate-300">
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-red-400">✕</span>
						<span>
							<strong class="text-white">Rentan Perubahan Algoritma:</strong> Jangkauan bisnis bisa anjlok
							drastis kapan saja tergantung kebijakan sepihak pemilik platform (Meta, TikTok, X).
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-red-400">✕</span>
						<span>
							<strong class="text-white">Risiko Blokir & Pembatasan Akun:</strong> Akun bisnis bisa ditangguhkan
							(<i>banned</i>) tanpa peringatan, membekukan akses ke seluruh pengikut dan pelanggan.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-red-400">✕</span>
						<span>
							<strong class="text-white">Data Bukan Milik Anda:</strong> Anda tidak memegang database
							email/WhatsApp pelanggan secara mandiri, melainkan dikuasai penuh oleh raksasa teknologi
							luar.
						</span>
					</li>
				</ul>
			</div>

			<!-- Website Sendiri (Rumah & Aset Mandiri) -->
			<div
				class="relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 backdrop-blur-sm sm:p-7"
			>
				<div
					class="absolute top-0 right-0 rounded-bl-xl border-b border-l border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300"
				>
					🏠 Website Resmi (Aset Mandiri)
				</div>
				<h3 class="mt-2 mb-4 text-xl font-bold text-emerald-400">
					"Rumah & Aset Digital Milik Sendiri"
				</h3>
				<ul class="space-y-3.5 text-sm text-slate-200">
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-emerald-400">✓</span>
						<span>
							<strong class="text-white">Kontrol 100% Penuh & Bebas:</strong> Brand, tampilan, alur bisnis,
							dan konten sepenuhnya berada di tangan Anda tanpa campur tangan algoritma luar.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-emerald-400">✓</span>
						<span>
							<strong class="text-white">Kepemilikan Database Pelanggan:</strong> Data transaksi, daftar
							anggota, dan kontak menjadi aset berharga jangka panjang bagi usaha & organisasi.
						</span>
					</li>
					<li class="flex items-start gap-2.5">
						<span class="font-bold text-emerald-400">✓</span>
						<span>
							<strong class="text-white">Kredibilitas Profesional & Resmi:</strong> Memiliki domain resmi
							(<code>.or.id</code>, <code>.id</code>, atau <code>.com</code>) meningkatkan kepercayaan
							publik, perbankan, dan mitra bisnis global.
						</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- POTENSI MARKETPLACE MANDIRI -->
	<section id="marketplace-mandiri" class="my-16 scroll-mt-24">
		<div
			class="relative overflow-hidden rounded-3xl border border-indigo-700/50 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-8 text-white shadow-2xl sm:p-12"
		>
			<div
				class="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
			></div>

			<div class="relative z-10">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3.5 py-1.5 text-xs font-bold text-indigo-300"
				>
					<ShoppingBag class="h-4 w-4" />
					<span>Kemandirian Ekonomi Digital</span>
				</div>

				<h2 class="mb-4 text-2xl font-extrabold text-white sm:text-4xl">
					Bahkan, Kita Bisa Membangun <span class="text-indigo-300">Marketplace Sendiri</span>!
				</h2>

				<p class="mb-8 max-w-3xl text-sm leading-relaxed text-indigo-100/90 sm:text-base">
					Dengan keahlian <i>software engineering</i> dan arsitektur web modern, persyarikatan tidak
					hanya berhenti pada website profil biasa. Muhammadiyah melalui SUMU berpotensi membangun
					<strong>Platform Marketplace B2B & B2C Mandiri Ekosistem Muhammadiyah</strong>.
				</p>

				<div class="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
					<div
						class="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm"
					>
						<div class="mb-3 text-3xl">🛍️</div>
						<h3 class="mb-1 text-base font-bold text-white">Bebas Biaya Komisi Luar</h3>
						<p class="text-xs leading-relaxed text-indigo-200">
							Transaksi antar wirausahawan Muhammadiyah tanpa perlu terpotong biaya komisi tinggi
							dari platform marketplace komersial luar.
						</p>
					</div>

					<div
						class="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm"
					>
						<div class="mb-3 text-3xl">🔗</div>
						<h3 class="mb-1 text-base font-bold text-white">Sinergi Rantai Pasok Internal</h3>
						<p class="text-xs leading-relaxed text-indigo-200">
							Menghubungkan produsen bahan baku, distributor, hingga toko eceran milik anggota SUMU
							dalam satu rantai pasok terintegrasi.
						</p>
					</div>

					<div
						class="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm"
					>
						<div class="mb-3 text-3xl">💳</div>
						<h3 class="mb-1 text-base font-bold text-white">Integrasi Pembayaran Nasional</h3>
						<p class="text-xs leading-relaxed text-indigo-200">
							Mendukung QRIS, transfer bank nasional, hingga sistem pembayaran berbasis syariah yang
							aman, efisien, dan transparan.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- HARAPAN & KONTRIBUSI FOUNDER -->
	<section
		class="my-16 rounded-3xl border border-emerald-100 bg-emerald-50/50 p-8 text-center sm:p-12 dark:border-emerald-950 dark:bg-emerald-950/20"
	>
		<div class="mx-auto max-w-4xl">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-black text-white shadow-lg shadow-emerald-500/20"
			>
				A
			</div>
			<span
				class="inline-block rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-bold tracking-widest text-emerald-800 uppercase dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300"
			>
				Pernyataan & Harapan Founder
			</span>

			<blockquote
				class="mx-auto my-6 max-w-3xl text-xl font-bold leading-snug italic text-slate-800 sm:text-2xl dark:text-slate-100"
			>
				"Sebagai warga Muhammadiyah yang bergerak di bidang Software Engineering, saya melihat
				persyarikatan memiliki modal sosial yang sangat masif. Tugas kita adalah menyinergikan modal
				sosial tersebut dengan infrastruktur digital mandiri dan transparan berbasis Laravel."
			</blockquote>

			<p class="text-sm font-bold text-emerald-900 dark:text-emerald-300">
				Ahla — Founder Barizaloka
			</p>
			<p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
				Web Software Engineer • Pemuda Muhammadiyah Rembang, Jawa Tengah
			</p>

			<div class="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
				<div
					class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900"
				>
					<div class="mb-3 text-3xl">🛠️</div>
					<h3 class="mb-2 text-base font-bold text-slate-900 dark:text-white">
						1. Digitalisasi Website Mandiri
					</h3>
					<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Barizaloka siap mendukung penuh usaha anggota SUMU agar memiliki website mandiri berbasis
						Laravel yang cepat, aman, transparan, dan terpercaya tanpa tergantung media sosial pihak
						ketiga.
					</p>
				</div>

				<div
					class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900"
				>
					<div class="mb-3 text-3xl">🤝</div>
					<h3 class="mb-2 text-base font-bold text-slate-900 dark:text-white">
						2. Sinergi Teknis & Pendampingan
					</h3>
					<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Kami siap berkolaborasi dalam pendampingan teknologi, riset arsitektur web, hingga
						pengembangan prototipe portal & marketplace mandiri.
					</p>
				</div>

				<div
					class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900"
				>
					<div class="mb-3 text-3xl">🌟</div>
					<h3 class="mb-2 text-base font-bold text-slate-900 dark:text-white">
						3. Mewujudkan Kemandirian Umat
					</h3>
					<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
						Mendorong pertumbuhan ekosistem bisnis yang <i>Fastabiqul Khairat</i> — berlomba-lomba dalam
						kebaikan, transparansi, dan profesionalisme karya digital untuk kejayaan ekonomi Indonesia
						2045.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA SINERGI -->
	<section
		class="relative my-16 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-indigo-950 p-8 text-center text-white shadow-2xl sm:p-14"
	>
		<div class="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
			<span class="text-5xl">🚀</span>
			<h2 class="text-3xl font-extrabold leading-tight sm:text-4xl">
				Mari Mendorong Kemajuan Ekonomi Umat Melalui Teknologi Web Modern
			</h2>
			<p class="max-w-xl text-sm text-emerald-100/90 sm:text-base">
				Apakah Anda anggota SUMU, pengusaha UMKM, atau pengurus organisasi yang butuh solusi
				pembuatan website Laravel & digitalisasi marketplace mandiri?
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20tertarik%20berkolaborasi%20dan%20diskusi%20pembuatan%20website%20Laravel/marketplace%20mandiri"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50 active:scale-95"
				>
					<MessageSquare class="h-4 w-4" />
					<span>Diskusi & Kolaborasi via WhatsApp</span>
				</a>
				<a
					href="/harga"
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
				>
					<span>Lihat Paket Web Barizaloka</span>
					<ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>
</div>
