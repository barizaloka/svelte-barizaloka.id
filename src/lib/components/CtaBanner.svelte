<script lang="ts">
	import { MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-svelte';

	let {
		title = 'Siap Mentransformasi Pesantren, Masjid, Desa, atau Usaha Anda ke Era Digital?',
		description = 'Konsultasikan kebutuhan website Anda bersama tim developer profesional Barizaloka dari Rembang. Dapatkan rancangan desain, penawaran transparan, dan garansi maintenance 1 tahun full.',
		ctaText = 'Konsultasi Gratis via WA',
		whatsappMessage = 'Halo Barizaloka, saya ingin berkonsultasi mengenai pembuatan website'
	} = $props();

	const waLink = $derived(`https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`);
</script>

<section class="relative overflow-hidden py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-emerald-900/20 backdrop-blur-xl">
			<!-- Background Glowing Orbs -->
			<div class="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
			<div class="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"></div>

			<div class="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
				<div class="space-y-6 lg:col-span-8">
					<div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
						<Sparkles class="h-3.5 w-3.5" />
						<span>Solusi Pembuatan Website Terpercaya & Cepat</span>
					</div>

					<h2 class="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
						{title}
					</h2>

					<p class="text-sm text-slate-300 sm:text-base leading-relaxed">
						{description}
					</p>

					<div class="grid grid-cols-1 gap-2.5 sm:grid-cols-3 pt-2 text-xs font-medium text-slate-300">
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 text-emerald-400" />
							<span>Gratis Domain & Hosting 1 Th</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 text-emerald-400" />
							<span>Proses 5 - 14 Hari Kerja</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckCircle2 class="h-4 w-4 text-emerald-400" />
							<span>Garansi 1 Tahun Full</span>
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-3 lg:col-span-4 lg:items-end">
					<a
						href={waLink}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 hover:scale-[1.02] active:scale-95 transition-all duration-200 sm:w-auto"
					>
						<MessageSquare class="h-5 w-5" />
						<span>{ctaText}</span>
						<ArrowRight class="h-4 w-4" />
					</a>

					<a
						href="/harga"
						class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-800 transition-colors sm:w-auto"
					>
						<ShieldCheck class="h-4 w-4 text-emerald-400" />
						<span>Lihat Rincian Harga</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
