<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppFloating from '$lib/components/WhatsAppFloating.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="author" content="Barizaloka" />
	<meta
		name="keywords"
		content="barizaloka, jasa website rembang, jasa website pesantren, jasa website masjid, jasa website desa, umkm rembang, website sepeda listrik"
	/>
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased transition-colors duration-200 selection:bg-emerald-500 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100"
>
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
	<WhatsAppFloating />
</div>
