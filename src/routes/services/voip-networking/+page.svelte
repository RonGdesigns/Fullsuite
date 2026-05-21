<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const voipFeatures = [
		'Local and toll-free business numbers',
		'Auto-attendant and call routing',
		'Call forwarding to mobile when out of office',
		'Voicemail to email',
		'Multi-line systems for offices and storefronts',
		'Replaces traditional landlines at lower monthly cost',
	];

	const networkingServices = [
		{
			title: 'Structured Cabling',
			description: 'Cat6 runs to desks, cameras, access points, and equipment racks. Done cleanly with proper labeling and patch panels.',
		},
		{
			title: 'PoE Network Infrastructure',
			description: 'Power over Ethernet switches that feed your IP cameras, access control readers, and phones from a single cable.',
		},
		{
			title: 'Wireless Access Points',
			description: 'Commercial-grade Wi-Fi coverage for offices, warehouses, and multi-floor buildings — not consumer routers.',
		},
		{
			title: 'Network Security',
			description: 'VLAN segmentation to keep your security cameras on a separate network from your business data.',
		},
	];
</script>

<svelte:head>
	<title>VOIP Phone Systems & Business Networking Ferndale MI | Motor City Security Solutions</title>
	<meta
		name="description"
		content="VOIP business phone systems and structured network cabling installed in Ferndale and Metro Detroit. Bundled with CCTV and access control installs. Call (586) 800-3188."
	/>
	<meta property="og:title" content="VOIP & Networking — Motor City Security Solutions | Ferndale, MI" />
	<meta property="og:description" content="Business VOIP phone systems and structured network cabling across Metro Detroit. Bundled with security system installs." />
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">VOIP &amp; Networking</span>
		</nav>
		<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
			Ferndale &amp; Metro Detroit
		</p>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
			Run your phones and network on infrastructure that actually works.
		</h1>
		<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
			We install VOIP phone systems and structured network cabling for businesses — often bundled with a security camera or access control install to keep everything on one contractor and one cable run.
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

<!-- VOIP -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
		<div>
			<h2 class="text-3xl font-bold text-slate-900 mb-3">VOIP Phone Systems</h2>
			<p class="text-slate-500 mb-8 leading-relaxed">
				Internet-based phone systems for offices, storefronts, and multi-location businesses. Lower monthly costs than traditional landlines, with more features and better flexibility.
			</p>
			<ul class="space-y-3">
				{#each voipFeatures as feature}
					<li class="flex gap-3 text-sm text-slate-600 leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded-xl bg-amber-50 border border-amber-100 p-7">
			<p class="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-4">Why bundle with security?</p>
			<p class="text-slate-700 text-sm leading-relaxed mb-4">
				When we're already on-site pulling Cat6 for your IP cameras, adding drops for your phones and wireless access points costs a fraction of a separate contractor visit.
			</p>
			<p class="text-slate-700 text-sm leading-relaxed">
				One crew, one cable run, one invoice. We scope and price it as a single project.
			</p>
		</div>
	</div>
</section>

<!-- Networking -->
<section class="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-3">Network Infrastructure</h2>
		<p class="text-slate-500 mb-10 max-w-xl">
			The cabling and switching that your cameras, phones, and business systems run on. Done right, it's invisible. Done wrong, it causes problems for years.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each networkingServices as svc}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
					<div class="w-2 h-2 rounded-full bg-amber-500 mb-4"></div>
					<h3 class="text-base font-semibold text-slate-900 mb-2">{svc.title}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-950 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Planning a build-out or office move?</h2>
		<p class="text-slate-400 mb-8">Get your cameras, phones, and network cabled in one project. We'll scope it all together.</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
		>
			Request Your Free Quote
		</a>
	</div>
</section>
