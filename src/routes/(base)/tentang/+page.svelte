<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Heart, ShieldCheck, Code2, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tentang Barizaloka | Ekosistem Teknologi Rembang</title>
	<meta
		name="description"
		content="Mengenal Barizaloka — ekosistem digital dari Rembang, Jawa Tengah yang berfokus pada jasa pembuatan website pesantren, masjid, desa, dan UMKM serta edukasi koding."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Tentang Barizaloka' }]} />

	<!-- Hero Header -->
	<div class="mx-auto my-12 max-w-3xl space-y-4 text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
		>
			<MapPin class="h-3.5 w-3.5" />
			<span>Berbasis di Kabupaten Rembang, Jawa Tengah</span>
		</div>
		<h1 class="text-3xl font-black text-slate-900 sm:text-5xl dark:text-white">
			Tentang Barizaloka
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
			Barizaloka lahir dari semangat mendorong pemerataan transformasi digital untuk lembaga
			keagamaan, pemerintahan desa, dan pelaku UMKM daerah.
		</p>
	</div>

	<!-- Vision & Story Grid -->
	<div class="my-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
		<div class="space-y-6">
			<h2 class="text-2xl leading-tight font-bold text-slate-900 dark:text-white">
				Membangun Ekosistem Digital Lokal dengan Standar Kualitas Global
			</h2>
			<p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
				Kami percaya bahwa website lembaga atau UMKM daerah tidak boleh sekadar jadi 'pajangan',
				melainkan harus menjadi sarana komunikasi aktif yang cepat, aman, dan mudah digunakan oleh
				siapapun.
			</p>
			<p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
				Dengan fondasi teknologi modern (Svelte, Tailwind, PHP/Laravel, Cloud Infrastructure),
				setiap baris kode yang kami produksi diuji dengan teliti untuk memastikan stabilitas dan
				kemudahan pengelolaan bagi pengurus di lapangan.
			</p>

			<div class="space-y-3 pt-2">
				<div class="flex items-start gap-3">
					<div
						class="mt-0.5 rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400"
					>
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Fokus pada Dampak Nyata
						</h3>
						<p class="text-xs text-slate-500 dark:text-slate-400">
							Membantu pendaftaran santri baru, transparansi kas masjid, dan pengurusan surat desa.
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<div
						class="mt-0.5 rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400"
					>
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Pendampingan Pengelolaan Konten
						</h3>
						<p class="text-xs text-slate-500 dark:text-slate-400">
							Tim kami mendampingi admin hingga mahir mengunggah artikel, foto, dan laporan.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center gap-3">
				<Logo size="lg" showText={false} />
				<div>
					<h3 class="text-lg font-bold text-slate-900 dark:text-white">
						Barizaloka & Baricode Indonesia
					</h3>
					<p class="text-xs text-slate-500 dark:text-slate-400">
						Ekosistem Edukasi & Layanan Digital
					</p>
				</div>
			</div>

			<div
				class="space-y-4 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-700 dark:border-slate-800 dark:text-slate-300"
			>
				<p>
					Selain menyediakan jasa pembuatan website profesional, kami juga menginisiasi komunitas <strong
						>Baricode Indonesia</strong
					> — wadah edukasi koding dan pembinaan talenta digital muda di Rembang dan sekitarnya.
				</p>
				<p>
					Visi utama kami adalah menjadikan kawasan pesisir Jawa Tengah sebagai salah satu pusat
					inovasi digital yang berdampak nyata bagi masyarakat luas.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
				<div
					class="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60"
				>
					<div class="text-xl font-black text-emerald-600 dark:text-emerald-400">50+</div>
					<div class="text-[11px] text-slate-500 dark:text-slate-400">Website Aktif</div>
				</div>
				<div
					class="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60"
				>
					<div class="text-xl font-black text-emerald-600 dark:text-emerald-400">5 Sektor</div>
					<div class="text-[11px] text-slate-500 dark:text-slate-400">
						Pesantren, Masjid, Desa, UMKM
					</div>
				</div>
			</div>
		</div>
	</div>

	<CtaBanner />
</div>
