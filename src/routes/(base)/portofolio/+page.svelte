<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { PORTFOLIO_PROJECTS, type PortfolioProject } from '$lib/data/portfolio_data';
	import { ExternalLink, MapPin, CheckCircle2 } from 'lucide-svelte';

	let activeFilter = $state('Semua');

	const filters = ['Semua', 'Pesantren', 'Masjid', 'Desa', 'UMKM', 'Sepeda Listrik'];

	const filteredProjects = $derived(
		activeFilter === 'Semua'
			? PORTFOLIO_PROJECTS
			: PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter)
	);
</script>

<svelte:head>
	<title>Portofolio Proyek Website | Barizaloka</title>
	<meta
		name="description"
		content="Showcase galeri hasil karya pembuatan website pesantren, masjid, portal desa cyber, katalog UMKM, dan showroom sepeda listrik buatan Barizaloka."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Portofolio Proyek' }]} />

	<div class="mx-auto my-12 max-w-2xl space-y-4 text-center">
		<h1 class="text-3xl font-black text-slate-900 sm:text-5xl dark:text-white">
			Portofolio Proyek Terpercaya
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
			Jelajahi berbagai karya pembuatan website dan sistem informasi yang telah kami selesaikan
			untuk mitra pesantren, masjid, kelurahan desa, dan pengusaha di Jawa Tengah dan sekitarnya.
		</p>
	</div>

	<!-- Category Filter Tabs -->
	<div class="my-8 flex flex-wrap justify-center gap-2">
		{#each filters as f}
			<button
				onclick={() => (activeFilter = f)}
				class="rounded-full px-5 py-2 text-xs font-bold transition-all {activeFilter === f
					? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
					: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'}"
			>
				{f}
			</button>
		{/each}
	</div>

	<!-- Projects Grid -->
	<div class="my-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredProjects as project (project.id)}
			<div
				class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900/70"
			>
				<div class="space-y-4">
					<div class="relative h-52 overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute top-3 left-3">
							<span
								class="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md"
							>
								{project.category}
							</span>
						</div>
					</div>

					<div class="space-y-3 p-6">
						<div
							class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"
						>
							<span class="flex items-center gap-1">
								<MapPin class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
								{project.location}
							</span>
							<span class="font-bold text-slate-400 dark:text-slate-500">{project.year}</span>
						</div>

						<h3
							class="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300"
						>
							{project.title}
						</h3>

						<p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
							{project.description}
						</p>

						<div class="space-y-1.5 border-t border-slate-200 pt-2 dark:border-slate-800/80">
							<div
								class="text-[11px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400"
							>
								Fitur Utama:
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each project.features as feat}
									<span
										class="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
									>
										{feat}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<div class="p-6 pt-0">
					<div
						class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[11px] font-medium text-emerald-800 dark:border-emerald-800/30 dark:bg-emerald-950/30 dark:text-emerald-300"
					>
						✨ {project.results}
					</div>

					{#if project.url}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
						>
							<span>Kunjungi Website Live</span>
							<ExternalLink class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<CtaBanner />
</div>
