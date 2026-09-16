<script lang="ts">
	import { ChevronRight, Home } from 'lucide-svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	let { items = [] }: { items: BreadcrumbItem[] } = $props();
</script>

<nav aria-label="Breadcrumb" class="my-4 flex items-center gap-1.5 text-xs text-slate-400">
	<a href="/" class="flex items-center gap-1 hover:text-emerald-400 transition-colors">
		<Home class="h-3.5 w-3.5" />
		<span>Beranda</span>
	</a>

	{#each items as item, idx}
		<ChevronRight class="h-3.5 w-3.5 text-slate-600 flex-shrink-0" />
		{#if item.href && idx < items.length - 1}
			<a href={item.href} class="hover:text-emerald-400 transition-colors">
				{item.label}
			</a>
		{:else}
			<span class="font-medium text-slate-200 line-clamp-1">{item.label}</span>
		{/if}
	{/each}
</nav>
