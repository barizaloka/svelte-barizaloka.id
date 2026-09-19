<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { themeState } from '$lib/theme.svelte';
</script>

<button
	onclick={() => themeState.toggle()}
	type="button"
	aria-label="Toggle theme"
	title={themeState.current === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
	class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
>
	{#if themeState.current === 'dark'}
		<Sun class="h-4 w-4 text-amber-400" />
	{:else}
		<Moon class="h-4 w-4 text-slate-700" />
	{/if}
</button>
