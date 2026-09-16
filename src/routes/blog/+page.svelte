<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { BLOG_POSTS, type BlogPost } from '$lib/data/blog_data';
	import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-svelte';

	let searchQuery = $state('');
	let selectedCategory = $state('Semua');

	const categories = ['Semua', 'Edukasi & Pesantren', 'Pemerintahan Desa', 'Bisnis & UMKM'];

	const filteredPosts = $derived(
		BLOG_POSTS.filter((post) => {
			const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
			const matchesSearch =
				searchQuery.trim() === '' ||
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Blog & Panduan Website | Barizaloka</title>
	<meta name="description" content="Artikel, tutorial, dan panduan pembuatan website pesantren, desa digital, serta strategi pemasaran digital UMKM dari tim Barizaloka." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Blog & Panduan' }]} />

	<div class="text-center max-w-2xl mx-auto my-12 space-y-4">
		<h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
			Blog & Panduan Digital
		</h1>
		<p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
			Wawasan mendalam seputar teknologi web, panduan PSB online pesantren, transparansi desa, dan wawasan bisnis digital daerah.
		</p>
	</div>

	<!-- Controls -->
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between my-8">
		<div class="flex flex-wrap gap-2">
			{#each categories as cat}
				<button
					onclick={() => (selectedCategory = cat)}
					class="rounded-full px-4 py-1.5 text-xs font-semibold transition-all {selectedCategory === cat ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<div class="relative w-full sm:w-72">
			<Search class="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Cari artikel..."
				class="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
			/>
		</div>
	</div>

	<!-- Articles Grid -->
	{#if filteredPosts.length === 0}
		<div class="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center text-slate-500 dark:text-slate-400 text-sm my-12">
			Tidak ditemukan artikel yang sesuai dengan kriteria pencarian Anda.
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-12">
			{#each filteredPosts as post (post.id)}
				<a
					href="/blog/{post.slug}"
					class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70 shadow-xl backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300"
				>
					<div class="space-y-4">
						<div class="relative h-48 overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute top-3 left-3">
								<span class="rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md border border-white/10">
									{post.category}
								</span>
							</div>
						</div>

						<div class="p-6 space-y-3">
							<div class="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
								<span class="flex items-center gap-1"><Calendar class="h-3 w-3 text-emerald-600 dark:text-emerald-400" /> {post.publishedAt}</span>
								<span>•</span>
								<span class="flex items-center gap-1"><Clock class="h-3 w-3 text-slate-400" /> {post.readTime}</span>
							</div>

							<h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
								{post.title}
							</h3>

							<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
								{post.excerpt}
							</p>
						</div>
					</div>

					<div class="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/60 mt-4">
						<div class="flex items-center gap-2">
							<img src={post.author.avatar} alt={post.author.name} class="h-6 w-6 rounded-full object-cover" />
							<span class="text-xs text-slate-700 dark:text-slate-300 font-medium">{post.author.name}</span>
						</div>
						<div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
							<span>Baca</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}

	<CtaBanner />
</div>
