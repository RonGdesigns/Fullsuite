<script>
	import { enhance } from '$app/forms';

	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	let { form } = $props();
</script>

<svelte:head>
	<title>Get a Free Quote — Motor City Security Solutions | Ferndale, MI</title>
	<meta
		name="description"
		content="Request a free quote from Motor City Security Solutions. CCTV, access control, VOIP, low voltage wiring, and solar security. Serving Ferndale and Metro Detroit. Call (586) 800-3188."
	/>
	<meta property="og:title" content="Free Quote — Motor City Security Solutions | Ferndale, MI" />
	<meta
		property="og:description"
		content="Free security system quote — CCTV, access control, VOIP, and more. Metro Detroit."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-slate-950 text-white py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">Contact</span>
		</nav>
		<h1 class="text-4xl font-extrabold mb-3">Get a free on-site quote.</h1>
		<p class="text-slate-300 text-lg max-w-lg">
			Fill out the form and Jason will follow up within one business day to schedule a free site walk.
		</p>
	</div>
</section>

<!-- Contact section -->
<section class="py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">

		<!-- Left: form -->
		<div class="md:col-span-2">
			{#if form?.success}
				<div class="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<h2 class="text-xl font-bold text-slate-900 mb-2">Request received!</h2>
					<p class="text-slate-600">Jason will reach out within one business day to schedule your free site walk.</p>
				</div>
			{:else}
				<form method="POST" action="?/quote" use:enhance class="space-y-6">
					{#if form?.error}
						<div class="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
							{form.error}
						</div>
					{/if}

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={form?.values?.name ?? ''}
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
								placeholder="John Smith"
							/>
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5">Phone number *</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
								value={form?.values?.phone ?? ''}
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
								placeholder="(248) 555-0100"
							/>
						</div>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
						<input
							type="email"
							id="email"
							name="email"
							value={form?.values?.email ?? ''}
							class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
							placeholder="john@example.com"
						/>
					</div>

					<div>
						<label for="service" class="block text-sm font-medium text-slate-700 mb-1.5">Service needed *</label>
						<select
							id="service"
							name="service"
							required
							class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
						>
							<option value="" disabled selected>Select a service…</option>
							<option value="cctv-new">CCTV / Camera System</option>
							<option value="access-control">Access Control</option>
							<option value="legacy-upgrade">Legacy System Upgrade</option>
							<option value="low-voltage">Low Voltage Wiring</option>
							<option value="voip-networking">VOIP &amp; Networking</option>
							<option value="solar-security">Solar Security</option>
							<option value="other">Other / Not Sure</option>
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your property</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							class="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
							placeholder="e.g., 4-unit apartment building in Royal Oak, have old coax wiring, want to upgrade to HD cameras…"
						>{form?.values?.message ?? ''}</textarea>
					</div>

					<button
						type="submit"
						class="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
					>
						Send Quote Request
					</button>
				</form>
			{/if}
		</div>

		<!-- Right: contact info -->
		<div class="space-y-8">
			<div>
				<h2 class="text-lg font-semibold text-slate-900 mb-4">Prefer to call?</h2>
				<a
					href={phoneHref}
					class="inline-flex items-center gap-3 rounded-lg bg-slate-950 px-5 py-4 text-white font-semibold hover:bg-slate-800 transition-colors w-full justify-center"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/>
					</svg>
					{phone}
				</a>
			</div>

			<div class="rounded-xl bg-slate-50 border border-slate-100 p-6 space-y-4 text-sm">
				<div>
					<p class="font-semibold text-slate-900 mb-1">Service Area</p>
					<p class="text-slate-500">Ferndale, Royal Oak, Southfield, Warren, Detroit, and greater Metro Detroit</p>
				</div>
				<div>
					<p class="font-semibold text-slate-900 mb-1">Hours</p>
					<p class="text-slate-500">Mon–Fri: 8am–6pm<br />Sat: 9am–2pm</p>
				</div>
				<div>
					<p class="font-semibold text-slate-900 mb-1">Response Time</p>
					<p class="text-slate-500">Within 1 business day. Same-week installs often available.</p>
				</div>
			</div>
		</div>

	</div>
</section>
