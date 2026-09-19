<script lang="ts">
	import { ChevronDown, HelpCircle, Search } from 'lucide-svelte';
	import { FAQ_DATA, type FaqItem } from '$lib/data/faq_data';

	let { initialCategory = 'Semua' } = $props();

	let searchQuery = $state('');
	let selectedCategory = $state(initialCategory);
	let openItem = $state<string | null>(FAQ_DATA[0]?.id || null);

	const categories = [
		'Semua',
		'Umum',
		'Pesantren & Masjid',
		'Desa & UMKM',
		'Domain & Hosting',
		'Pembayaran & Garansi'
	];

	const filteredFaqs = $derived(
		FAQ_DATA.filter((faq) => {
			const matchesCategory = selectedCategory === 'Semua' || faq.category === selectedCategory;
			const matchesSearch =
				searchQuery.trim() === '' ||
				faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
				faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);

	function toggleItem(id: string) {
		openItem = openItem === id ? null : id;
	}
</script>

<div class="space-y-6">
	<!-- Filter & Search Controls -->
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<!-- Category Tabs -->
		<div class="flex flex-wrap gap-1.5">
			{#each categories as cat}
				<button
					onclick={() => (selectedCategory = cat)}
					class="rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all {selectedCategory ===
					cat
						? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
						: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Search Input -->
		<div class="relative w-full sm:w-64">
			<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Cari pertanyaan..."
				class="w-full rounded-xl border border-slate-200 bg-white py-2 pr-4 pl-9 text-xs text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
			/>
		</div>
	</div>

	<!-- Accordion List -->
	{#if filteredFaqs.length === 0}
		<div
			class="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
		>
			Tidak ditemukan pertanyaan yang cocok dengan pencarian Anda.
		</div>
	{:else}
		<div class="space-y-3">
			{#each filteredFaqs as faq (faq.id)}
				<div
					class="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md transition-all dark:border-slate-800 dark:bg-slate-900/60"
				>
					<button
						onclick={() => toggleItem(faq.id)}
						class="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-bold text-slate-800 transition-colors hover:text-emerald-600 sm:p-5 dark:text-slate-200 dark:hover:text-emerald-400"
					>
						<span class="flex items-center gap-2.5">
							<HelpCircle class="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
							<span>{faq.question}</span>
						</span>
						<ChevronDown
							class="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 {openItem ===
							faq.id
								? 'rotate-180 text-emerald-600 dark:text-emerald-400'
								: ''}"
						/>
					</button>

					{#if openItem === faq.id}
						<div
							class="animate-in fade-in border-t border-slate-200/80 bg-slate-50/50 p-4 text-xs leading-relaxed text-slate-700 duration-150 sm:p-5 sm:text-sm dark:border-slate-800/80 dark:bg-slate-950/40 dark:text-slate-300"
						>
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
