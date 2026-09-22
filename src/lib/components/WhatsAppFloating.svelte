<script lang="ts">
	import { MessageSquare } from 'lucide-svelte';

	let { message = 'Halo Barizaloka, saya ingin konsultasi pembuatan website.' } = $props();
	const encodedMsg = $derived(encodeURIComponent(message));
</script>

<div class="fixed right-6 bottom-6 z-40 flex items-center gap-3">
	<!-- Pulse Indicator Label on Hover/Desktop -->
	<a
		href="https://wa.me/6285188158542?text={encodedMsg}"
		target="_blank"
		rel="noopener noreferrer"
		class="group flex items-center gap-3 rounded-full bg-emerald-500 p-3.5 text-slate-950 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 active:scale-95"
		aria-label="Konsultasi via WhatsApp"
	>
		<span class="relative flex h-3 w-3">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-950 opacity-75"
			></span>
			<span class="relative inline-flex h-3 w-3 rounded-full bg-slate-950"></span>
		</span>
		<MessageSquare class="h-6 w-6 text-slate-950" />
		<span
			class="max-w-0 overflow-hidden text-xs font-bold whitespace-nowrap text-slate-950 transition-all duration-300 group-hover:max-w-xs group-hover:pr-2"
		>
			Konsultasi WA Gratis
		</span>
	</a>
</div>
