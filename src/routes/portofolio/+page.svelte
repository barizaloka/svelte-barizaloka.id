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
	<meta name="description" content="Showcase galeri hasil karya pembuatan website pesantren, masjid, portal desa cyber, katalog UMKM, dan showroom sepeda listrik buatan Barizaloka." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Portofolio Proyek' }]} />

	<div class="text-center max-w-2xl mx-auto my-12 space-y-4">
		<h1 class="text-3xl sm:text-5xl font-black text-white">
			Portofolio Proyek Terpercaya
		</h1>
		<p class="text-sm sm:text-base text-slate-300 leading-relaxed">
			Jelajahi berbagai karya pembuatan website dan sistem informasi yang telah kami selesaikan untuk mitra pesantren, masjid, kelurahan desa, dan pengusaha di Jawa Tengah dan sekitarnya.
		</p>
	</div>

	<!-- Category Filter Tabs -->
	<div class="flex flex-wrap justify-center gap-2 my-8">
		{#each filters as f}
			<button
				onclick={() => (activeFilter = f)}
				class="rounded-full px-5 py-2 text-xs font-bold transition-all {activeFilter === f ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'}"
			>
				{f}
			</button>
		{/each}
	</div>

	<!-- Projects Grid -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-12">
		{#each filteredProjects as project (project.id)}
			<div class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300">
				<div class="space-y-4">
					<div class="relative h-52 overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div class="absolute top-3 left-3">
							<span class="rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md border border-white/10">
								{project.category}
							</span>
						</div>
					</div>

					<div class="p-6 space-y-3">
						<div class="flex items-center justify-between text-xs text-slate-400">
							<span class="flex items-center gap-1">
								<MapPin class="h-3.5 w-3.5 text-emerald-400" /> {project.location}
							</span>
							<span class="font-bold text-slate-500">{project.year}</span>
						</div>

						<h3 class="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
							{project.title}
						</h3>

						<p class="text-xs text-slate-400 leading-relaxed">
							{project.description}
						</p>

						<div class="space-y-1.5 pt-2 border-t border-slate-800/80">
							<div class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Fitur Utama:</div>
							<div class="flex flex-wrap gap-1.5">
								{#each project.features as feat}
									<span class="rounded-lg bg-slate-800 px-2.5 py-1 text-[10px] text-slate-300">
										{feat}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<div class="p-6 pt-0">
					<div class="rounded-xl bg-emerald-950/30 border border-emerald-800/30 p-3 text-[11px] text-emerald-300 font-medium">
						✨ {project.results}
					</div>

					{#if project.url}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-800/80 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 transition-colors"
						>
							<span>Kunjungi Website Live</span>
							<ExternalLink class="h-3.5 w-3.5 text-emerald-400" />
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<CtaBanner />
</div>
