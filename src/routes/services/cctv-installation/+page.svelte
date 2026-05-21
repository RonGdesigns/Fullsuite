<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const systems = [
		{
			title: 'Hikvision IP Camera Systems',
			description:
				'Industry-leading resolution, night vision, and reliability. We install Hikvision\'s full lineup including dome, bullet, and PTZ cameras with NVR recording and secure remote access.',
		},
		{
			title: 'HD-over-Coax (HD-TVI / HD-CVI)',
			description:
				'Already have coax in the walls? We install HD analog cameras that push 2MP–8MP over your existing coax wiring — no new cable runs needed.',
		},
		{
			title: 'Network Video Recorders (NVR)',
			description:
				'Properly sized NVR configured with continuous or motion-triggered recording, remote viewing via mobile app, and RAID storage for business-critical retention.',
		},
		{
			title: 'Structured Cabling & Power',
			description:
				'Cat6 runs, conduit where required, PoE switches, and clean cable management. Every install looks professional from the attic to the monitor.',
		},
	];

	const faqs = [
		{
			q: 'How many cameras do I need?',
			a: 'Most residential properties are well-covered with 4–8 cameras. We walk the property first and recommend placement based on blind spots, entry points, and lighting — not to pad the invoice.',
		},
		{
			q: 'Can I view cameras on my phone?',
			a: 'Yes. Every system we install is configured with the Hik-Connect or iVMS-4500 app so you can view live and recorded footage from anywhere.',
		},
		{
			q: 'How long does installation take?',
			a: 'A typical 4–6 camera residential install takes one full day. Commercial systems vary based on scale. We give you an honest timeline upfront.',
		},
		{
			q: 'Do you service Hikvision cameras I already own?',
			a: 'Yes. We can also integrate cameras you\'ve purchased yourself as long as they are compatible with a proper NVR system.',
		},
	];
</script>

<svelte:head>
	<title>CCTV Installation Ferndale MI — Hikvision Camera Systems | Motor City Security</title>
	<meta
		name="description"
		content="Professional Hikvision CCTV installation in Ferndale, Royal Oak, and Metro Detroit. IP cameras, NVR systems, remote viewing. Free on-site quote from Jason."
	/>
	<meta property="og:title" content="CCTV Installation — Motor City Security | Ferndale, MI" />
	<meta
		property="og:description"
		content="Hikvision IP cameras, HD-over-coax, and NVR systems installed professionally across Metro Detroit."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">CCTV Installation</span>
		</nav>
		<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
			Ferndale &amp; Metro Detroit
		</p>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
			CCTV Installation done by someone who knows cameras.
		</h1>
		<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
			We specialize in Hikvision systems — from single-family homes to multi-building commercial properties. Every camera is placed, mounted, and configured by Jason personally.
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

<!-- Systems we install -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-slate-900 mb-3">What We Install</h2>
			<p class="text-slate-500 max-w-xl">
				Every system is sized and configured for your specific property — not copy-pasted from a generic package.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each systems as sys}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
					<div class="w-2 h-2 rounded-full bg-amber-500 mb-4"></div>
					<h3 class="text-lg font-semibold text-slate-900 mb-2">{sys.title}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{sys.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">How the Process Works</h2>
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
			{#each [
				{ step: '01', label: 'Free Site Walk', desc: 'Jason visits your property to assess entry points, lighting, and cable runs.' },
				{ step: '02', label: 'Written Quote', desc: 'You receive a clear, itemized estimate. No hidden fees, no upselling.' },
				{ step: '03', label: 'Professional Install', desc: 'Cameras mounted, cable run, NVR configured, remote access tested.' },
				{ step: '04', label: 'Handoff & Training', desc: 'You leave knowing exactly how to use your system.' },
			] as s}
				<div class="flex flex-col items-center">
					<span class="text-4xl font-extrabold text-amber-500 mb-3">{s.step}</span>
					<h3 class="text-base font-semibold text-slate-900 mb-2">{s.label}</h3>
					<p class="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-10">Common Questions</h2>
		<div class="space-y-6">
			{#each faqs as faq}
				<div class="border-b border-slate-100 pb-6">
					<h3 class="text-base font-semibold text-slate-900 mb-2">{faq.q}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-950 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Ready to get cameras installed?</h2>
		<p class="text-slate-400 mb-8">Free site walk. Written quote. No pressure.</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
		>
			Request Your Free Quote
		</a>
	</div>
</section>
