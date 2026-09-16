<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { Globe, Heart, ShieldCheck, Code2, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tentang Barizaloka | Ekosistem Teknologi Rembang</title>
	<meta name="description" content="Mengenal Barizaloka — ekosistem digital dari Rembang, Jawa Tengah yang berfokus pada jasa pembuatan website pesantren, masjid, desa, dan UMKM serta edukasi koding." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Tentang Barizaloka' }]} />

	<!-- Hero Header -->
	<div class="text-center max-w-3xl mx-auto my-12 space-y-4">
		<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
			<MapPin class="h-3.5 w-3.5" />
			<span>Berbasis di Kabupaten Rembang, Jawa Tengah</span>
		</div>
		<h1 class="text-3xl sm:text-5xl font-black text-white">
			Tentang Barizaloka
		</h1>
		<p class="text-sm sm:text-base text-slate-300 leading-relaxed">
			Barizaloka lahir dari semangat mendorong pemerataan transformasi digital untuk lembaga keagamaan, pemerintahan desa, dan pelaku UMKM daerah.
		</p>
	</div>

	<!-- Vision & Story Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 my-12 items-center">
		<div class="space-y-6">
			<h2 class="text-2xl font-bold text-white leading-tight">
				Membangun Ekosistem Digital Lokal dengan Standar Kualitas Global
			</h2>
			<p class="text-sm text-slate-300 leading-relaxed">
				Kami percaya bahwa website lembaga atau UMKM daerah tidak boleh sekadar jadi 'pajangan', melainkan harus menjadi sarana komunikasi aktif yang cepat, aman, dan mudah digunakan oleh siapapun.
			</p>
			<p class="text-sm text-slate-300 leading-relaxed">
				Dengan fondasi teknologi modern (Svelte, Tailwind, PHP/Laravel, Cloud Infrastructure), setiap baris kode yang kami produksi diuji dengan teliti untuk memastikan stabilitas dan kemudahan pengelolaan bagi pengurus di lapangan.
			</p>

			<div class="space-y-3 pt-2">
				<div class="flex items-start gap-3">
					<div class="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 mt-0.5">
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-white">Fokus pada Dampak Nyata</h3>
						<p class="text-xs text-slate-400">Membantu pendaftaran santri baru, transparansi kas masjid, dan pengurusan surat desa.</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<div class="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 mt-0.5">
						<CheckCircle2 class="h-5 w-5" />
					</div>
					<div>
						<h3 class="text-sm font-bold text-white">Pendampingan Pengelolaan Konten</h3>
						<p class="text-xs text-slate-400">Tim kami mendampingi admin hingga mahir mengunggah artikel, foto, dan laporan.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl space-y-6">
			<div class="flex items-center gap-3">
				<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 font-black">
					<Globe class="h-6 w-6" />
				</div>
				<div>
					<h3 class="text-lg font-bold text-white">Barizaloka & Baricode Indonesia</h3>
					<p class="text-xs text-slate-400">Ekosistem Edukasi & Layanan Digital</p>
				</div>
			</div>

			<div class="space-y-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
				<p>
					Selain menyediakan jasa pembuatan website profesional, kami juga menginisiasi komunitas <strong>Baricode Indonesia</strong> — wadah edukasi koding dan pembinaan talenta digital muda di Rembang dan sekitarnya.
				</p>
				<p>
					Visi utama kami adalah menjadikan kawasan pesisir Jawa Tengah sebagai salah satu pusat inovasi digital yang berdampak nyata bagi masyarakat luas.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-3 pt-2 text-center text-xs">
				<div class="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
					<div class="text-xl font-black text-emerald-400">50+</div>
					<div class="text-[11px] text-slate-400">Website Aktif</div>
				</div>
				<div class="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
					<div class="text-xl font-black text-emerald-400">5 Sektor</div>
					<div class="text-[11px] text-slate-400">Pesantren, Masjid, Desa, UMKM</div>
				</div>
			</div>
		</div>
	</div>

	<CtaBanner />
</div>
