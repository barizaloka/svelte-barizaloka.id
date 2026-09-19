<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		showText?: boolean;
	}

	let { size = 'md', showText = true }: Props = $props();

	const imgSizes = {
		sm: 'h-7 w-7 rounded-lg',
		md: 'h-9 w-9 rounded-xl',
		lg: 'h-12 w-12 rounded-2xl'
	};

	const textSizes = {
		sm: 'text-base',
		md: 'text-xl',
		lg: 'text-2xl'
	};
</script>

<div class="group inline-flex items-center gap-2.5">
	<img
		src="/icon-192.png"
		alt="Barizaloka Logo"
		class="{imgSizes[
			size
		]} object-cover shadow-md transition-transform duration-300 group-hover:scale-105 dark:shadow-emerald-500/20"
	/>
	{#if showText}
		<span
			class="{textSizes[
				size
			]} font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
		>
			Jasa <span class="text-emerald-600 dark:text-emerald-400">Website</span> Profesional
		</span>
	{/if}
</div>
