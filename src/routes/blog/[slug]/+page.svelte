<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { Clock, ArrowLeft, Tag, Share2 } from 'lucide-svelte';

	let { data } = $props();
	const post = $derived(data.post);
	const relatedPosts = $derived(data.relatedPosts);
</script>

<svelte:head>
	<title>{post.metaTitle || post.title}</title>
	<meta name="description" content={post.metaDescription || post.excerpt} />
</svelte:head>

<article class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

	<!-- Article Header -->
	<header class="my-8 space-y-6">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
		>
			<span>{post.category}</span>
		</div>

		<h1 class="text-3xl leading-tight font-black text-slate-900 sm:text-5xl dark:text-white">
			{post.title}
		</h1>

		<div
			class="flex items-center gap-4 border-y border-slate-200 py-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
		>
			<span class="flex items-center gap-1.5"
				><Clock class="h-4 w-4 text-slate-400" /> {post.readTime}</span
			>
		</div>
	</header>

	<!-- Featured Image -->
	<div
		class="my-8 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-800"
	>
		<img src={post.image} alt={post.title} class="max-h-[450px] w-full object-cover" />
	</div>

	<!-- Main Content body -->
	<div
		class="my-12 prose max-w-none text-sm leading-relaxed text-slate-700 prose-emerald sm:text-base dark:text-slate-300 dark:prose-invert"
	>
		{@html post.content}
	</div>

	<!-- Article Tags -->
	<div
		class="my-8 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6 dark:border-slate-800"
	>
		<span class="mr-2 flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
			<Tag class="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Tags:
		</span>
		{#each post.tags as tag}
			<span
				class="rounded-xl border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
			>
				#{tag}
			</span>
		{/each}
	</div>

	<!-- Related Articles -->
	{#if relatedPosts.length > 0}
		<div class="my-16 border-t border-slate-200 pt-12 dark:border-slate-800">
			<h3 class="mb-6 text-xl font-bold text-slate-900 dark:text-white">Artikel Terkait Lainnya</h3>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each relatedPosts as rel}
					<a
						href="/blog/{rel.slug}"
						class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/60"
					>
						<div class="mb-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
							{rel.category}
						</div>
						<h4
							class="line-clamp-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
						>
							{rel.title}
						</h4>
						<p class="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{rel.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<CtaBanner />
</article>
