<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const services = [
		{
			href: '/services/cctv-installation',
			title: 'CCTV & Camera Systems',
			description:
				'IP cameras, HD-over-coax, NVR configuration, and remote viewing — sized and placed for your specific property.',
		},
		{
			href: '/services/legacy-upgrades',
			title: 'Legacy System Upgrades',
			description:
				'Existing coax runs? Outdated DVR? We modernize analog systems to HD without unnecessary rewiring.',
		},
		{
			href: '/services/access-control',
			title: 'Access Control',
			description:
				'Keypad, fob, and card-reader entry systems for residential and commercial properties. Including FobZZ, ZKteco, and Axis Communications hardware.',
		},
		{
			href: '/contact',
			title: 'Low Voltage Wiring',
			description:
				'Structured cabling, conduit runs, and PoE infrastructure done cleanly the first time.',
		},
		{
			href: '/services/voip-networking',
			title: 'VOIP & Networking',
			description:
				'Business phone systems and network infrastructure installed alongside your security systems.',
		},
		{
			href: '/services/solar-security',
			title: 'Solar Security',
			description:
				'Off-grid solar-powered security cameras and systems — available for sale and rental.',
		},
	];

	const reviews = [
		{
			name: 'Tina Wii',
			text: 'Security experts know the old school tricks.',
		},
		{
			name: 'Kyliee Greenarch',
			text: 'I will be referring you guys out to anyone who will ask me.',
		},
	];
</script>

<svelte:head>
	<title>Motor City Security Solutions — CCTV, Access Control & Security Systems | Ferndale, MI</title>
	<meta
		name="description"
		content="Motor City Security Solutions installs access control, CCTV, low voltage wiring, VOIP, and solar security systems for homes and businesses across Metro Detroit. Call (586) 800-3188."
	/>
	<meta property="og:title" content="Motor City Security Solutions — Ferndale, MI" />
	<meta
		property="og:description"
		content="Access control, CCTV, low voltage wiring, VOIP, networking, and solar security. Residential and commercial. Ferndale, MI."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
		<div class="max-w-3xl">
			<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
				Ferndale, MI &mdash; Residential &amp; Commercial
			</p>
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
				Advanced security systems for Metro Detroit.
			</h1>
			<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
				Motor City Security Solutions specializes in access control, CCTV, low voltage wiring, VOIP, networking, and solar security — tailored installs for homes and businesses.
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
	</div>
</section>

<!-- Trust bar -->
<section class="bg-slate-900 text-slate-300 border-y border-slate-800">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-5">
		<div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium">
			<span class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
				</svg>
				4.98 Stars on Google
			</span>
			<span class="hidden sm:block text-slate-700">|</span>
			<span>Licensed &amp; Insured — Metro Detroit</span>
			<span class="hidden sm:block text-slate-700">|</span>
			<span>Residential &amp; Commercial</span>
			<span class="hidden sm:block text-slate-700">|</span>
			<span>Ferndale, MI</span>
		</div>
	</div>
</section>

<!-- Services -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-slate-900">What We Install</h2>
			<p class="mt-3 text-slate-500 max-w-xl">
				Full-service security system installation for homes and businesses. Every job is tailored — no cookie-cutter packages.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as svc}
				<a
					href={svc.href}
					class="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-amber-400 transition-all"
				>
					<h3 class="text-base font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
						{svc.title}
					</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- About -->
<section class="bg-slate-50 py-20 px-4 sm:px-6 border-y border-slate-100">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
		<div>
			<p class="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
			<h2 class="text-3xl font-bold text-slate-900 mb-5">Tailored security solutions, not off-the-shelf installs.</h2>
			<p class="text-slate-600 leading-relaxed mb-4">
				Motor City Security Solutions is a trusted provider of advanced security systems in Ferndale, MI. We specialize in access control, CCTV, low voltage wiring, solar security, VOIP, and networking — for both residential and commercial clients.
			</p>
			<p class="text-slate-600 leading-relaxed mb-8">
				Every system we design is built around your property and your needs. We bring years of field experience and source quality hardware including Axis Communications, ZKteco, and FobZZ access control products.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				Request a Quote
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
				</svg>
			</a>
		</div>
		<div class="bg-slate-200 rounded-2xl aspect-square flex items-center justify-center text-slate-400">
			<!-- Replace with a photo -->
			<div class="text-center p-8">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
				</svg>
				<p class="text-sm opacity-60">Photo placeholder</p>
			</div>
		</div>
	</div>
</section>

<!-- Reviews -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
			<div>
				<h2 class="text-3xl font-bold text-slate-900">What customers say</h2>
				<p class="text-slate-500 mt-1">4.98 stars on Google</p>
			</div>
			<a
				href="https://www.google.com/maps/search/Motor+City+Security+Solutions+Ferndale+MI"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm font-medium text-amber-600 hover:text-amber-500 transition-colors shrink-0"
			>
				View all Google reviews →
			</a>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each reviews as review}
				<div class="rounded-xl border border-slate-100 bg-white p-7 shadow-sm">
					<div class="flex mb-4">
						{#each { length: 5 } as _}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
							</svg>
						{/each}
					</div>
					<p class="text-slate-700 text-base leading-relaxed mb-5">"{review.text}"</p>
					<p class="text-sm font-semibold text-slate-900">{review.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="bg-amber-500 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-slate-950 mb-4">
			Ready to get started?
		</h2>
		<p class="text-slate-800 mb-8 text-lg">
			Call us or submit a quote request online. We serve Ferndale and all of Metro Detroit.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href={phoneHref}
				class="inline-flex items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800 transition-colors"
			>
				Call {phone}
			</a>
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-md border-2 border-slate-950 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				Request a Quote Online
			</a>
		</div>
	</div>
</section>
