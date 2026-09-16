<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
</script>

<svelte:head>
	<title>FAQ & Tanya Jawab | Barizaloka</title>
	<meta name="description" content="Pertanyaan umum yang sering ditanyakan seputar jasa pembuatan website pesantren, masjid, desa, UMKM, harga, domain, hosting, dan garansi di Barizaloka." />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'FAQ & Tanya Jawab' }]} />

	<div class="text-center max-w-2xl mx-auto my-12 space-y-4">
		<h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
			Pusat Bantuan & FAQ
		</h1>
		<p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
			Temukan jawaban lengkap mengenai proses pengerjaan website, harga, garansi, serta tata cara pendaftaran domain .desa.id / .or.id.
		</p>
	</div>

	<div class="my-12">
		<FaqAccordion initialCategory="Semua" />
	</div>

	<CtaBanner
		title="Masih Punya Pertanyaan Lain yang Belum Terjawab?"
		description="Jangan ragu untuk langsung berdiskusi dengan tim teknis Barizaloka via WhatsApp. Kami siap menjawab setiap detail kebutuhan Anda."
		ctaText="Tanyakan via WhatsApp"
	/>
</div>
