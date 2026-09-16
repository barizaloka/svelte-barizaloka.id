<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-svelte';

	let name = $state('');
	let category = $state('Pesantren');
	let phone = $state('');
	let message = $state('');
	let isSubmitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name || !phone) return;
		isSubmitted = true;
	}
</script>

<svelte:head>
	<title>Hubungi Kami | Barizaloka Rembang</title>
	<meta name="description" content="Hubungi tim Barizaloka untuk konsultasi pembuatan website pesantren, masjid, desa, dan UMKM. Alamat kantor Rembang, WhatsApp, & Email." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
	<Breadcrumbs items={[{ label: 'Kontak Kami' }]} />

	<div class="text-center max-w-2xl mx-auto my-12 space-y-4">
		<h1 class="text-3xl sm:text-5xl font-black text-white">
			Hubungi Barizaloka
		</h1>
		<p class="text-sm sm:text-base text-slate-300 leading-relaxed">
			Siap mentransformasi lembaga atau bisnis Anda ke era digital? Tim kami siap melayani konsultasi dan memberikan estimasi perencanaan biaya secara transparan.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 my-12">
		<!-- Contact Form Column -->
		<div class="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
			{#if isSubmitted}
				<div class="text-center py-12 space-y-4">
					<div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
						<CheckCircle2 class="h-10 w-10" />
					</div>
					<h3 class="text-xl font-bold text-white">Pesan Anda Berhasil Terkirim!</h3>
					<p class="text-xs text-slate-300 max-w-md mx-auto">
						Terima kasih, <strong>{name}</strong>. Tim Barizaloka akan segera menghubungi Anda melalui nomor WhatsApp <strong>{phone}</strong> dalam waktu maksimal 1x24 jam.
					</p>
					<button
						onclick={() => (isSubmitted = false)}
						class="mt-4 rounded-xl border border-slate-700 bg-slate-800 px-6 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700"
					>
						Kirim Pesan Lain
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-4">
					<h3 class="text-lg font-bold text-white mb-2">Formulir Konsultasi Layanan</h3>

					<div>
						<label for="name" class="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap / Nama Lembaga *</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							placeholder="Contoh: Pengurus PP Al-Hidayah / Bpk. Ahmad"
							class="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
						/>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label for="category" class="block text-xs font-semibold text-slate-300 mb-1">Kategori Website *</label>
							<select
								id="category"
								bind:value={category}
								class="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
							>
								<option value="Pesantren">Website Pesantren</option>
								<option value="Masjid">Website Masjid</option>
								<option value="Desa">Website Desa / Kelurahan</option>
								<option value="UMKM">Website UMKM & Katalog</option>
								<option value="Sepeda Listrik">Website Sepeda Listrik</option>
								<option value="Lainnya">Lainnya / Custom</option>
							</select>
						</div>

						<div>
							<label for="phone" class="block text-xs font-semibold text-slate-300 mb-1">Nomor WhatsApp *</label>
							<input
								type="tel"
								id="phone"
								bind:value={phone}
								required
								placeholder="081234567890"
								class="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
							/>
						</div>
					</div>

					<div>
						<label for="message" class="block text-xs font-semibold text-slate-300 mb-1">Detail Kebutuhan / Catatan</label>
						<textarea
							id="message"
							rows="4"
							bind:value={message}
							placeholder="Tuliskan gambaran website yang Anda inginkan..."
							class="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-300 transition-all"
					>
						<Send class="h-4 w-4" />
						<span>Kirim Pesan Konsultasi</span>
					</button>
				</form>
			{/if}
		</div>

		<!-- Direct Info Column -->
		<div class="lg:col-span-5 space-y-6">
			<div class="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6">
				<h3 class="text-lg font-bold text-white">Informasi Kontak Direct</h3>

				<div class="space-y-4 text-xs text-slate-300">
					<div class="flex items-start gap-3">
						<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 mt-0.5">
							<MapPin class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-white">Alamat Studio & Studio</div>
							<p class="text-slate-400 mt-0.5">Jl. Raya Rembang - Pati KM 3, Kabupaten Rembang, Jawa Tengah 59211</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 mt-0.5">
							<MessageSquare class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-white">WhatsApp Fast Response</div>
							<p class="text-slate-400 mt-0.5">+62 812-3456-7890 (Aktif 24 Jam)</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 mt-0.5">
							<Mail class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-white">Email Resmi</div>
							<p class="text-slate-400 mt-0.5">halo@barizaloka.id</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div class="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 mt-0.5">
							<Clock class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-white">Jam Operasional</div>
							<p class="text-slate-400 mt-0.5">Senin - Sabtu: 08:00 - 17:00 WIB (WA 24/7)</p>
						</div>
					</div>
				</div>

				<div class="pt-4 border-t border-slate-800">
					<a
						href="https://wa.me/6281234567890?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20langsung"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 py-3 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20"
					>
						<MessageSquare class="h-4 w-4" />
						<span>Chat Langsung via WA</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
