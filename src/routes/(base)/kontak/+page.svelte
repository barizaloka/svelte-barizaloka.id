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
	<meta
		name="description"
		content="Hubungi tim Barizaloka untuk konsultasi pembuatan website pesantren, masjid, desa, dan UMKM. Alamat kantor Rembang, WhatsApp, & Email."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<Breadcrumbs items={[{ label: 'Kontak Kami' }]} />

	<div class="mx-auto my-12 max-w-2xl space-y-4 text-center">
		<h1 class="text-3xl font-black text-slate-900 sm:text-5xl dark:text-white">
			Hubungi Barizaloka
		</h1>
		<p class="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
			Siap mentransformasi lembaga atau bisnis Anda ke era digital? Tim kami siap melayani
			konsultasi dan memberikan estimasi perencanaan biaya secara transparan.
		</p>
	</div>

	<div class="my-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
		<!-- Contact Form Column -->
		<div
			class="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:col-span-7 dark:border-slate-800 dark:bg-slate-900/80"
		>
			{#if isSubmitted}
				<div class="space-y-4 py-12 text-center">
					<div
						class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
					>
						<CheckCircle2 class="h-10 w-10" />
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						Pesan Anda Berhasil Terkirim!
					</h3>
					<p class="mx-auto max-w-md text-xs text-slate-600 dark:text-slate-300">
						Terima kasih, <strong>{name}</strong>. Tim Barizaloka akan segera menghubungi Anda
						melalui nomor WhatsApp <strong>{phone}</strong> dalam waktu maksimal 1x24 jam.
					</p>
					<button
						onclick={() => (isSubmitted = false)}
						class="mt-4 rounded-xl border border-slate-200 bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
					>
						Kirim Pesan Lain
					</button>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-4">
					<h3 class="mb-2 text-lg font-bold text-slate-900 dark:text-white">
						Formulir Konsultasi Layanan
					</h3>

					<div>
						<label
							for="name"
							class="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
							>Nama Lengkap / Nama Lembaga *</label
						>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							placeholder="Contoh: Pengurus PP Al-Hidayah / Bpk. Ahmad"
							class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder-slate-500"
						/>
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label
								for="category"
								class="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
								>Kategori Website *</label
							>
							<select
								id="category"
								bind:value={category}
								class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
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
							<label
								for="phone"
								class="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
								>Nomor WhatsApp *</label
							>
							<input
								type="tel"
								id="phone"
								bind:value={phone}
								required
								placeholder="081234567890"
								class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder-slate-500"
							/>
						</div>
					</div>

					<div>
						<label
							for="message"
							class="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300"
							>Detail Kebutuhan / Catatan</label
						>
						<textarea
							id="message"
							rows="4"
							bind:value={message}
							placeholder="Tuliskan gambaran website yang Anda inginkan..."
							class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder-slate-500"
						></textarea>
					</div>

					<button
						type="submit"
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-300"
					>
						<Send class="h-4 w-4" />
						<span>Kirim Pesan Konsultasi</span>
					</button>
				</form>
			{/if}
		</div>

		<!-- Direct Info Column -->
		<div class="space-y-6 lg:col-span-5">
			<div
				class="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl sm:p-8 dark:border-slate-800 dark:bg-slate-900/60"
			>
				<h3 class="text-lg font-bold text-slate-900 dark:text-white">Informasi Kontak Direct</h3>

				<div class="space-y-4 text-xs text-slate-700 dark:text-slate-300">
					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400"
						>
							<MapPin class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-slate-900 dark:text-white">Alamat Studio & Studio</div>
							<p class="mt-0.5 text-slate-500 dark:text-slate-400">
								Jl. Raya Rembang - Pati KM 3, Kabupaten Rembang, Jawa Tengah 59211
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400"
						>
							<MessageSquare class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-slate-900 dark:text-white">WhatsApp Fast Response</div>
							<p class="mt-0.5 text-slate-500 dark:text-slate-400">
								+62 851-8815-8542 (Aktif 24 Jam)
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400"
						>
							<Mail class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-slate-900 dark:text-white">Email Resmi</div>
							<p class="mt-0.5 text-slate-500 dark:text-slate-400">halo@barizaloka.id</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400"
						>
							<Clock class="h-5 w-5" />
						</div>
						<div>
							<div class="font-bold text-slate-900 dark:text-white">Jam Operasional</div>
							<p class="mt-0.5 text-slate-500 dark:text-slate-400">
								Senin - Sabtu: 08:00 - 17:00 WIB (WA 24/7)
							</p>
						</div>
					</div>
				</div>

				<div class="border-t border-slate-200 pt-4 dark:border-slate-800">
					<a
						href="https://wa.me/6285188158542?text=Halo%20Barizaloka,%20saya%20ingin%20konsultasi%20langsung"
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs font-bold text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-400"
					>
						<MessageSquare class="h-4 w-4" />
						<span>Chat Langsung via WA</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
