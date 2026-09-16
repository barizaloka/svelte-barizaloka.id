<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppFloating from '$lib/components/WhatsAppFloating.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Barizaloka" />
	<meta name="keywords" content="barizaloka, jasa website rembang, jasa website pesantren, jasa website masjid, jasa website desa, umkm rembang, website sepeda listrik" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500 selection:text-slate-950 antialiased">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
	<WhatsAppFloating />
</div>
