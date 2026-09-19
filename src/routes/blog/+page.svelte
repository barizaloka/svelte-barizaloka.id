<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { BLOG_POSTS, type BlogPost } from '$lib/data/blog_data';
	import { Search, Clock, ArrowRight } from 'lucide-svelte';

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
	<meta
		name="description"
		content="Artikel, tutorial, dan panduan pembuatan website pesantren, desa digital, serta strategi pemasaran digital UMKM dari tim Barizaloka."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Blog & Panduan' }]} />

	<div class="mx-auto my-12 max-w-2xl space-y-4 text-center">
		<h1 class="text-3xl font-black text-slate-900 sm:text-5xl dark:text-white">
			Blog & Panduan Digital
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
			Wawasan mendalam seputar teknologi web, panduan PSB online pesantren, transparansi desa, dan
			wawasan bisnis digital daerah.
		</p>
	</div>

	<!-- Controls -->
	<div class="my-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex flex-wrap gap-2">
			{#each categories as cat}
				<button
					onclick={() => (selectedCategory = cat)}
					class="rounded-full px-4 py-1.5 text-xs font-semibold transition-all {selectedCategory ===
					cat
						? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
						: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<div class="relative w-full sm:w-72">
			<Search class="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Cari artikel..."
				class="w-full rounded-full border border-slate-200 bg-white py-2.5 pr-4 pl-10 text-xs text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
			/>
		</div>
	</div>

	<!-- Articles Grid -->
	{#if filteredPosts.length === 0}
		<div
			class="my-12 rounded-3xl border border-dashed border-slate-300 p-12 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"
		>
			Tidak ditemukan artikel yang sesuai dengan kriteria pencarian Anda.
		</div>
	{:else}
		<div class="my-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post (post.id)}
				<a
					href="/blog/{post.slug}"
					class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/70"
				>
					<div class="space-y-4">
						<div class="relative h-48 overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div class="absolute top-3 left-3">
								<span
									class="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md"
								>
									{post.category}
								</span>
							</div>
						</div>

						<div class="space-y-3 p-6">
							<div class="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
								<span class="flex items-center gap-1"
									><Clock class="h-3 w-3 text-slate-400" /> {post.readTime}</span
								>
							</div>

							<h3
								class="text-base leading-snug font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
							>
								{post.title}
							</h3>

							<p class="line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
								{post.excerpt}
							</p>
						</div>
					</div>

					<div
						class="mt-4 flex items-center justify-end border-t border-slate-200 p-6 pt-0 dark:border-slate-800/60"
					>
						<div
							class="flex items-center gap-1 text-xs font-bold text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400"
						>
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
