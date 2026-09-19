<script lang="ts">
	import { goto } from '$app/navigation';
	import { Search, Globe, Sparkles, ArrowRight } from 'lucide-svelte';

	interface Props {
		initialQuery?: string;
		targetPage?: string;
		title?: string;
		subtitle?: string;
		placeholder?: string;
		buttonText?: string;
		showPopularBadges?: boolean;
		variant?: 'hero' | 'compact' | 'card';
	}

	let {
		initialQuery = '',
		targetPage = '/cek-domain',
		title = 'Cek Ketersediaan Domain Website',
		subtitle = 'Ketik nama domain atau brand impian Anda di bawah ini untuk mengecek ketersediaannya secara instan.',
		placeholder = 'Ketik nama domain impian (contoh: tokoku.com, pesantrenmodern.id)',
		buttonText = 'Cek Ketersediaan Domain',
		showPopularBadges = true,
		variant = 'hero'
	}: Props = $props();

	let searchQuery = $state(initialQuery);
	let selectedTld = $state('');

	const popularTLDs = [
		'.com',
		'.id',
		'.co.id',
		'.biz.id',
		'.my.id',
		'.web.id',
		'.or.id',
		'.sch.id',
		'.ponpes.id',
		'.ac.id',
		'.desa.id',
		'.org',
		'.net',
		'.info',
		'.xyz',
		'.online',
		'.site',
		'.store'
	];

	const quickSuggestions = [
		{ label: 'tokoanda.com', query: 'tokoanda.com' },
		{ label: 'pesantrenmodern.id', query: 'pesantrenmodern.id' },
		{ label: 'masjidberkah.org', query: 'masjidberkah.org' },
		{ label: 'bengkelsukses.co.id', query: 'bengkelsukses.co.id' }
	];

	function handleSubmit(e?: Event) {
		if (e) e.preventDefault();
		const trimmed = searchQuery.trim();
		if (!trimmed) return;

		let fullQuery = trimmed;
		if (selectedTld && !fullQuery.endsWith(selectedTld)) {
			fullQuery = fullQuery.replace(/\.[a-z0-9.]+$/i, '') + selectedTld;
		}

		goto(`${targetPage}?domain=${encodeURIComponent(fullQuery)}`);
	}

	function selectSuggestion(query: string) {
		searchQuery = query;
		handleSubmit();
	}
</script>

<div
	class={variant === 'hero'
		? 'relative z-10 w-full max-w-4xl mx-auto rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 text-white'
		: variant === 'card'
			? 'relative w-full rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 shadow-xl'
			: 'relative w-full'}
>
	{#if title && variant === 'hero'}
		<div class="mb-5 space-y-1.5 text-center sm:text-left">
			<div class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
				<Sparkles class="h-3.5 w-3.5" />
				<span>Fitur Order & Cek Domain Instan</span>
			</div>
			<h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
				{title}
			</h3>
			{#if subtitle}
				<p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
					{subtitle}
				</p>
			{/if}
		</div>
	{/if}

	<form onsubmit={handleSubmit} class="flex flex-col gap-3">
		<div class="flex flex-col sm:flex-row items-stretch gap-2.5">
			<!-- Main Domain Input -->
			<div class="relative flex-1">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-emerald-400">
					<Globe class="h-5 w-5" />
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					{placeholder}
					class="w-full rounded-2xl border border-slate-700 bg-slate-950/80 pl-11 pr-4 py-4 text-sm font-medium text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-inner transition-all"
				/>
			</div>

			<!-- Extension Selector -->
			<div class="relative sm:w-40">
				<select
					bind:value={selectedTld}
					class="w-full h-full rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-4 text-xs font-bold text-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
				>
					<option value="">Semua TLD</option>
					{#each popularTLDs as tld}
						<option value={tld}>{tld}</option>
					{/each}
				</select>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={!searchQuery.trim()}
				class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 px-7 py-4 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
			>
				<Search class="h-4 w-4" />
				<span>{buttonText}</span>
				<ArrowRight class="h-4 w-4" />
			</button>
		</div>

		<!-- Popular Suggestion Badges -->
		{#if showPopularBadges}
			<div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
				<span class="font-bold text-emerald-400 flex items-center gap-1">
					<Sparkles class="h-3.5 w-3.5" /> Contoh:
				</span>
				{#each quickSuggestions as suggestion}
					<button
						type="button"
						onclick={() => selectSuggestion(suggestion.query)}
						class="rounded-xl border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-[11px] font-medium text-slate-300 hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:text-white transition-all cursor-pointer"
					>
						{suggestion.label}
					</button>
				{/each}
			</div>
		{/if}
	</form>
</div>
