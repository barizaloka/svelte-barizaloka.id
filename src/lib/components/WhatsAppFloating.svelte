<script lang="ts">
	import { MessageSquare } from 'lucide-svelte';

	let { message = 'Halo Barizaloka, saya ingin konsultasi pembuatan website.' } = $props();
	const encodedMsg = $derived(encodeURIComponent(message));
</script>

<div class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
	<!-- Pulse Indicator Label on Hover/Desktop -->
	<a
		href="https://wa.me/6281234567890?text={encodedMsg}"
		target="_blank"
		rel="noopener noreferrer"
		class="group flex items-center gap-3 rounded-full bg-emerald-500 p-3.5 text-slate-950 shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300"
		aria-label="Konsultasi via WhatsApp"
	>
		<span class="relative flex h-3 w-3">
			<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
			<span class="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
		</span>
		<MessageSquare class="h-6 w-6 text-slate-950" />
		<span class="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold text-slate-950 transition-all duration-300 group-hover:max-w-xs group-hover:pr-2">
			Konsultasi WA Gratis
		</span>
	</a>
</div>
