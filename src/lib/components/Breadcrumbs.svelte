<script lang="ts">
	import { ChevronRight, Home } from 'lucide-svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	let { items = [] }: { items: BreadcrumbItem[] } = $props();
</script>

<nav
	aria-label="Breadcrumb"
	class="my-4 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
>
	<a
		href="/"
		class="flex items-center gap-1 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
	>
		<Home class="h-3.5 w-3.5" />
		<span>Beranda</span>
	</a>

	{#each items as item, idx}
		<ChevronRight class="h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-600" />
		{#if item.href && idx < items.length - 1}
			<a
				href={item.href}
				class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
			>
				{item.label}
			</a>
		{:else}
			<span class="line-clamp-1 font-medium text-slate-900 dark:text-slate-200">{item.label}</span>
		{/if}
	{/each}
</nav>
