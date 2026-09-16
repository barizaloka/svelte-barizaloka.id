<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-svelte';

	let { data } = $props();
	const post = $derived(data.post);
	const relatedPosts = $derived(data.relatedPosts);
</script>

<svelte:head>
	<title>{post.metaTitle || post.title}</title>
	<meta name="description" content={post.metaDescription || post.excerpt} />
</svelte:head>

<article class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Blog', href: '/blog' },
			{ label: post.title }
		]}
	/>

	<!-- Article Header -->
	<header class="my-8 space-y-6">
		<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
			<span>{post.category}</span>
		</div>

		<h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
			{post.title}
		</h1>

		<div class="flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 dark:border-slate-800 py-4 text-xs text-slate-500 dark:text-slate-400">
			<div class="flex items-center gap-3">
				<img src={post.author.avatar} alt={post.author.name} class="h-10 w-10 rounded-full object-cover border border-emerald-500/30" />
				<div>
					<div class="font-bold text-slate-900 dark:text-white text-sm">{post.author.name}</div>
					<div class="text-[11px] text-slate-500 dark:text-slate-400">{post.author.role}</div>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<span class="flex items-center gap-1.5"><Calendar class="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> {post.publishedAt}</span>
				<span class="flex items-center gap-1.5"><Clock class="h-4 w-4 text-slate-400" /> {post.readTime}</span>
			</div>
		</div>
	</header>

	<!-- Featured Image -->
	<div class="my-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
		<img src={post.image} alt={post.title} class="w-full max-h-[450px] object-cover" />
	</div>

	<!-- Main Content body -->
	<div class="prose dark:prose-invert prose-emerald max-w-none my-12 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
		{@html post.content}
	</div>

	<!-- Article Tags -->
	<div class="flex flex-wrap items-center gap-2 border-t border-slate-200 dark:border-slate-800 pt-6 my-8">
		<span class="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">
			<Tag class="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Tags:
		</span>
		{#each post.tags as tag}
			<span class="rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
				#{tag}
			</span>
		{/each}
	</div>

	<!-- Related Articles -->
	{#if relatedPosts.length > 0}
		<div class="my-16 border-t border-slate-200 dark:border-slate-800 pt-12">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Artikel Terkait Lainnya</h3>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each relatedPosts as rel}
					<a
						href="/blog/{rel.slug}"
						class="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60 p-5 hover:border-emerald-500/40 transition-colors shadow-sm"
					>
						<div class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{rel.category}</div>
						<h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors line-clamp-2">
							{rel.title}
						</h4>
						<p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
							{rel.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<CtaBanner />
</article>
