<script>
	import './layout.css';

	let { children } = $props();

	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const nav = [
		{ label: 'CCTV Installation', href: '/services/cctv-installation' },
		{ label: 'Legacy Upgrades', href: '/services/legacy-upgrades' },
		{ label: 'Contact', href: '/contact' },
	];

	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<!-- LocalBusiness JSON-LD Schema -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Motor City Security Solutions",
		"description": "Trusted provider of advanced security systems specializing in access control, CCTV, low voltage wiring, solar security, VOIP and networking for residential and commercial properties in Metro Detroit.",
		"url": "https://motorcitysecuritysolutions.com",
		"telephone": "+15868003188",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "2877 Hilton Rd Suite 1",
			"addressLocality": "Ferndale",
			"addressRegion": "MI",
			"postalCode": "48220",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 42.4606,
			"longitude": -83.1346
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
				"opens": "09:00",
				"closes": "18:00"
			}
		],
		"areaServed": [
			"Ferndale, MI",
			"Royal Oak, MI",
			"Detroit, MI",
			"Southfield, MI",
			"Warren, MI",
			"Metro Detroit"
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.98",
			"bestRating": "5"
		}
	}
	<\/script>`}
</svelte:head>

<!-- Header -->
<header class="sticky top-0 z-50 bg-slate-950 shadow-lg">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2 shrink-0">
				<span class="text-xl font-bold tracking-tight text-white">
					Motor City <span class="text-amber-400">Security Solutions</span>
				</span>
			</a>

			<!-- Desktop nav -->
			<nav class="hidden md:flex items-center gap-6">
				{#each nav as link}
					<a
						href={link.href}
						class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTA -->
			<a
				href={phoneHref}
				class="hidden md:inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
					<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/>
				</svg>
				{phone}
			</a>

			<!-- Mobile hamburger -->
			<button
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				class="md:hidden p-2 text-slate-300 hover:text-white"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile dropdown -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-slate-800 bg-slate-950 px-4 pb-4 pt-2">
			{#each nav as link}
				<a
					href={link.href}
					onclick={() => mobileMenuOpen = false}
					class="block py-3 text-sm font-medium text-slate-300 hover:text-white border-b border-slate-800 last:border-0"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</header>

<!-- Page content -->
<main>
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-slate-950 text-slate-400 mt-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-12">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-3">
			<div>
				<p class="text-lg font-bold text-white mb-2">Motor City <span class="text-amber-400">Security Solutions</span></p>
				<p class="text-sm leading-relaxed">
					Access control, CCTV, low voltage wiring, VOIP, networking, and solar security for homes and businesses across Metro Detroit.
				</p>
			</div>
			<div>
				<p class="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">Services</p>
				<ul class="space-y-2 text-sm">
					<li><a href="/services/cctv-installation" class="hover:text-white transition-colors">CCTV Installation</a></li>
					<li><a href="/services/legacy-upgrades" class="hover:text-white transition-colors">Legacy System Upgrades</a></li>
					<li><a href="/contact" class="hover:text-white transition-colors">Get a Free Quote</a></li>
				</ul>
			</div>
			<div>
				<p class="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">Contact</p>
				<ul class="space-y-2 text-sm">
					<li>
						<a href={phoneHref} class="hover:text-white transition-colors">{phone}</a>
					</li>
					<li>2877 Hilton Rd Suite 1, Ferndale, MI 48220</li>
					<li>Opens 9 AM</li>
				</ul>
			</div>
		</div>

		<div class="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
			<p>&copy; {new Date().getFullYear()} Motor City Security Solutions. All rights reserved. Ferndale, MI.</p>
			<a href="https://irondigitalmi.com" class="hover:text-slate-400 transition-colors">Website by Iron Digital MI</a>
		</div>
	</div>
</footer>

<!-- Mobile sticky CTA (bottom bar) -->
<div class="fixed bottom-0 inset-x-0 z-50 md:hidden">
	<a
		href={phoneHref}
		class="flex items-center justify-center gap-3 bg-amber-500 py-4 text-base font-bold text-slate-950 shadow-2xl hover:bg-amber-400 transition-colors"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
			<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/>
		</svg>
		Call Now — {phone}
	</a>
</div>

<!-- Spacer so mobile CTA doesn't overlap content -->
<div class="h-16 md:hidden"></div>
