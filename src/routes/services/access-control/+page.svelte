<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const hardware = [
		{
			brand: 'FobZZ',
			price: '$298.00',
			description: 'Key fob entry systems designed for multi-tenant residential and small commercial properties. Simple to manage, reliable day-to-day.',
		},
		{
			brand: 'Axis Communications',
			price: 'From $129.00',
			description: 'Network-based access control readers and door controllers. Scalable from a single door to an enterprise multi-site deployment.',
		},
		{
			brand: 'ZKteco',
			price: 'From $500.00',
			description: 'Biometric and card-based access control systems. Fingerprint, face recognition, and RFID options for higher-security requirements.',
		},
	];

	const useCases = [
		{
			title: 'Apartment Buildings',
			description: 'Secure common entries, mailrooms, and parking garages. Manage tenant access without issuing physical keys.',
		},
		{
			title: 'Commercial Offices',
			description: 'Restrict server rooms, executive areas, or after-hours access. Full audit logs of who entered and when.',
		},
		{
			title: 'Retail & Warehouses',
			description: 'Control employee access to stockrooms, loading docks, and back-of-house areas.',
		},
		{
			title: 'Residential Properties',
			description: 'Keyless entry for homes — issue, revoke, and manage access from your phone without changing locks.',
		},
	];
</script>

<svelte:head>
	<title>Access Control Installation Ferndale MI — Fob, Card & Keypad Systems | Motor City Security Solutions</title>
	<meta
		name="description"
		content="Professional access control installation in Ferndale and Metro Detroit. FobZZ, ZKteco, and Axis Communications systems for residential and commercial properties. Call (586) 800-3188."
	/>
	<meta property="og:title" content="Access Control — Motor City Security Solutions | Ferndale, MI" />
	<meta property="og:description" content="Keypad, fob, and card-reader access control installed across Metro Detroit. Residential and commercial." />
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">Access Control</span>
		</nav>
		<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
			Ferndale &amp; Metro Detroit
		</p>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
			Control who gets in — and when.
		</h1>
		<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
			We install keypad, fob, card-reader, and biometric entry systems for homes and businesses across Metro Detroit. No more lost keys, no locksmith call-outs.
		</p>
		<div class="flex flex-col sm:flex-row gap-4">
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				Get a Free Quote
			</a>
			<a
				href={phoneHref}
				class="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-white hover:border-slate-400 hover:bg-slate-800 transition-colors"
			>
				Call {phone}
			</a>
		</div>
	</div>
</section>

<!-- Hardware we install -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-slate-900">Hardware We Install</h2>
			<p class="text-slate-500 mt-3 max-w-xl">
				We source and install access control hardware matched to your property size, traffic volume, and security requirements.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
			{#each hardware as item}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
					<div class="flex items-start justify-between mb-4">
						<h3 class="text-lg font-semibold text-slate-900">{item.brand}</h3>
						<span class="text-sm font-medium text-amber-600 shrink-0 ml-4">{item.price}</span>
					</div>
					<p class="text-slate-500 text-sm leading-relaxed">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Use cases -->
<section class="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-12">Who We Install For</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each useCases as uc}
				<div class="flex gap-4">
					<div class="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
					<div>
						<h3 class="text-base font-semibold text-slate-900 mb-1">{uc.title}</h3>
						<p class="text-slate-500 text-sm leading-relaxed">{uc.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why access control over keys -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
		<div>
			<h2 class="text-3xl font-bold text-slate-900 mb-5">Why ditch physical keys?</h2>
			<ul class="space-y-4">
				{#each [
					'Revoke access instantly when an employee leaves — no lock change needed',
					'Full audit log: see exactly who entered, which door, and at what time',
					'Set time-based rules — cleaning crew gets access 6–8pm only',
					'Issue temporary codes for contractors or guests without cutting keys',
					'Integrates with your CCTV system to tie footage to entry events',
				] as point}
					<li class="flex gap-3 text-sm text-slate-600 leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						{point}
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded-xl bg-slate-900 text-slate-300 p-8 font-mono text-sm leading-loose">
			<p class="text-amber-400 font-semibold not-italic mb-4">Access Event Log</p>
			<p><span class="text-slate-500">07:54 AM</span> Front Door — <span class="text-green-400">Granted</span></p>
			<p><span class="text-slate-500">08:02 AM</span> Server Room — <span class="text-green-400">Granted</span></p>
			<p><span class="text-slate-500">11:30 AM</span> Front Door — <span class="text-green-400">Granted</span></p>
			<p><span class="text-slate-500">06:15 PM</span> Side Entry — <span class="text-red-400">Denied</span></p>
			<p class="mt-4 text-xs text-slate-600">All events timestamped and stored.</p>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-950 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Ready to upgrade your entry points?</h2>
		<p class="text-slate-400 mb-8">Free site assessment. We'll recommend the right system for your property size and budget.</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
		>
			Request Your Free Quote
		</a>
	</div>
</section>
