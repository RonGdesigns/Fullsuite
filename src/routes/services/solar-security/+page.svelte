<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const useCases = [
		{
			title: 'Construction Sites',
			description: 'Temporary solar cameras that go up fast, run 24/7, and move with the project. No trenching, no electrician needed.',
		},
		{
			title: 'Remote Properties',
			description: 'Farms, storage facilities, vacant land — locations where running power to a camera isn\'t practical.',
		},
		{
			title: 'Parking Lots & Outdoor Areas',
			description: 'Cover large outdoor areas without pulling power runs across your lot.',
		},
		{
			title: 'Events & Temporary Installations',
			description: 'Short-term rental units that deploy and redeploy without infrastructure costs.',
		},
	];

	const saleVsRental = [
		{
			type: 'Purchase',
			points: [
				'Own the hardware outright',
				'No ongoing rental fees',
				'Best for permanent or long-term installations',
				'Full warranty and service support',
			],
		},
		{
			type: 'Rental',
			points: [
				'Low upfront cost',
				'Flexible — rent for weeks or months',
				'We handle setup, takedown, and maintenance',
				'Ideal for construction sites and events',
			],
		},
	];
</script>

<svelte:head>
	<title>Solar Security Cameras Metro Detroit — Sales & Rental | Motor City Security Solutions</title>
	<meta
		name="description"
		content="Solar-powered security cameras for construction sites, remote properties, and outdoor areas in Metro Detroit. Available for purchase and rental. Call (586) 800-3188."
	/>
	<meta property="og:title" content="Solar Security Cameras — Motor City Security Solutions | Metro Detroit" />
	<meta property="og:description" content="Off-grid solar security cameras — sales and rental for construction sites, remote properties, and outdoor areas across Metro Detroit." />
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">Solar Security</span>
		</nav>
		<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
			Sales &amp; Rental — Metro Detroit
		</p>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
			Security cameras that run anywhere — no power lines needed.
		</h1>
		<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
			Solar-powered security cameras for locations where running wired power isn't practical. Available for purchase or short-term rental — deployed and configured by our team.
		</p>
		<div class="flex flex-col sm:flex-row gap-4">
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				Get a Quote
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

<!-- Where they work -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12">
			<h2 class="text-3xl font-bold text-slate-900">Where Solar Cameras Make Sense</h2>
			<p class="text-slate-500 mt-3 max-w-xl">
				Any location where trenching conduit or hiring an electrician to run power costs more than the camera itself.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each useCases as uc}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
					<div class="w-2 h-2 rounded-full bg-amber-500 mb-4"></div>
					<h3 class="text-base font-semibold text-slate-900 mb-2">{uc.title}</h3>
					<p class="text-slate-500 text-sm leading-relaxed">{uc.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Sale vs Rental -->
<section class="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-3">Purchase or Rent</h2>
		<p class="text-slate-500 mb-10 max-w-xl">We offer both options — the right one depends on how long you need coverage and whether the location is permanent.</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
			{#each saleVsRental as option}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
					<h3 class="text-lg font-semibold text-slate-900 mb-5">{option.type}</h3>
					<ul class="space-y-3">
						{#each option.points as point}
							<li class="flex gap-3 text-sm text-slate-600">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
								</svg>
								{point}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- How it works -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">How It Works</h2>
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
			{#each [
				{ step: '01', label: 'Contact Us', desc: 'Tell us the location, how long you need coverage, and whether you want to buy or rent.' },
				{ step: '02', label: 'We Assess', desc: 'We review the site, confirm solar exposure, and recommend the right unit and placement.' },
				{ step: '03', label: 'We Deploy', desc: 'Our team installs, configures remote viewing, and confirms the system is recording.' },
				{ step: '04', label: 'You Monitor', desc: 'View live and recorded footage from your phone. We handle any issues for the life of the rental.' },
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

<!-- CTA -->
<section class="bg-slate-950 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Need coverage where there's no power?</h2>
		<p class="text-slate-400 mb-8">Tell us the location and timeline — we'll put together a rental or purchase quote.</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
		>
			Request a Quote
		</a>
	</div>
</section>
