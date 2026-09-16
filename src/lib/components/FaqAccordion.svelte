<script lang="ts">
	import { ChevronDown, HelpCircle, Search } from 'lucide-svelte';
	import { FAQ_DATA, type FaqItem } from '$lib/data/faq_data';

	let { initialCategory = 'Semua' } = $props();

	let searchQuery = $state('');
	let selectedCategory = $state(initialCategory);
	let openItem = $state<string | null>(FAQ_DATA[0]?.id || null);

	const categories = ['Semua', 'Umum', 'Pesantren & Masjid', 'Desa & UMKM', 'Domain & Hosting', 'Pembayaran & Garansi'];

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
					class="rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all {selectedCategory === cat ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Search Input -->
		<div class="relative w-full sm:w-64">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Cari pertanyaan..."
				class="w-full rounded-xl border border-slate-800 bg-slate-900 py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
			/>
		</div>
	</div>

	<!-- Accordion List -->
	{#if filteredFaqs.length === 0}
		<div class="rounded-2xl border border-dashed border-slate-800 p-8 text-center text-slate-400 text-xs">
			Tidak ditemukan pertanyaan yang cocok dengan pencarian Anda.
		</div>
	{:else}
		<div class="space-y-3">
			{#each filteredFaqs as faq (faq.id)}
				<div class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md transition-all">
					<button
						onclick={() => toggleItem(faq.id)}
						class="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-200 hover:text-emerald-400 transition-colors gap-3"
					>
						<span class="flex items-center gap-2.5">
							<HelpCircle class="h-4 w-4 text-emerald-400 flex-shrink-0" />
							<span>{faq.question}</span>
						</span>
						<ChevronDown class="h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-200 {openItem === faq.id ? 'rotate-180 text-emerald-400' : ''}" />
					</button>

					{#if openItem === faq.id}
						<div class="border-t border-slate-800/80 bg-slate-950/40 p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-150">
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
