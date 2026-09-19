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
		? 'relative z-10 mx-auto w-full max-w-4xl rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-5 text-white shadow-2xl shadow-emerald-500/10 backdrop-blur-xl sm:p-8'
		: variant === 'card'
			? 'relative w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900'
			: 'relative w-full'}
>
	{#if title && variant === 'hero'}
		<div class="mb-5 space-y-1.5 text-center sm:text-left">
			<div
				class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400"
			>
				<Sparkles class="h-3.5 w-3.5" />
				<span>Fitur Order & Cek Domain Instan</span>
			</div>
			<h3 class="text-xl font-black tracking-tight text-white sm:text-2xl">
				{title}
			</h3>
			{#if subtitle}
				<p class="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
					{subtitle}
				</p>
			{/if}
		</div>
	{/if}

	<form onsubmit={handleSubmit} class="flex flex-col gap-3">
		<div class="flex flex-col items-stretch gap-2.5 sm:flex-row">
			<!-- Main Domain Input -->
			<div class="relative flex-1">
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-emerald-400"
				>
					<Globe class="h-5 w-5" />
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					{placeholder}
					class="w-full rounded-2xl border border-slate-700 bg-slate-950/80 py-4 pr-4 pl-11 text-sm font-medium text-white placeholder-slate-400 shadow-inner transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
				/>
			</div>

			<!-- Extension Selector -->
			<div class="relative sm:w-40">
				<select
					bind:value={selectedTld}
					class="h-full w-full cursor-pointer rounded-2xl border border-slate-700 bg-slate-950/80 px-3 py-4 text-xs font-bold text-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
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
				class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 px-7 py-4 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] hover:from-emerald-400 hover:to-teal-300 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
			>
				<Search class="h-4 w-4" />
				<span>{buttonText}</span>
				<ArrowRight class="h-4 w-4" />
			</button>
		</div>

		<!-- Popular Suggestion Badges -->
		{#if showPopularBadges}
			<div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
				<span class="flex items-center gap-1 font-bold text-emerald-400">
					<Sparkles class="h-3.5 w-3.5" /> Contoh:
				</span>
				{#each quickSuggestions as suggestion}
					<button
						type="button"
						onclick={() => selectSuggestion(suggestion.query)}
						class="cursor-pointer rounded-xl border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-[11px] font-medium text-slate-300 transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:text-white"
					>
						{suggestion.label}
					</button>
				{/each}
			</div>
		{/if}
	</form>
</div>
