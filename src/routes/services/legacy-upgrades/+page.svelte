<script>
	const phone = '(586) 800-3188';
	const phoneHref = 'tel:+15868003188';

	const upgradeReasons = [
		{
			title: 'Low-resolution analog cameras',
			old: '480TVL CRT-era cameras — blurry, washed out, useless for identifying faces or plates.',
			new: '2MP–8MP HD cameras. License plates from across a parking lot. Faces at 30 feet.',
		},
		{
			title: 'Outdated DVR systems',
			old: 'Single hard drive, no remote access, no motion alerts. Requires someone to physically rewind tapes.',
			new: 'Modern NVR with redundant storage, smartphone remote viewing, and smart motion detection.',
		},
		{
			title: 'Coax wiring you want to reuse',
			old: 'Good news: existing coax in your walls doesn\'t have to go.',
			new: 'HD-TVI and HD-CVI technology pushes 4K-quality video over old coaxial cable — zero rewiring.',
		},
		{
			title: 'Systems with dead or dying cameras',
			old: 'Cameras that have failed, or are held on with duct tape and zip ties from the original install.',
			new: 'New cameras integrated cleanly into your existing runs, properly mounted and weatherproofed.',
		},
	];
</script>

<svelte:head>
	<title>Security Camera System Upgrades Metro Detroit — Old Wire, Analog to HD | Motor City Security</title>
	<meta
		name="description"
		content="Upgrade your old analog or coax security system to HD without rewiring. Motor City Security serves Ferndale, Royal Oak, Detroit, and Metro Detroit. Free quote."
	/>
	<meta property="og:title" content="Legacy Security System Upgrades — Motor City Security | Metro Detroit" />
	<meta
		property="og:description"
		content="Modernize your analog cameras and old DVR to HD without tearing up walls. Coax reuse specialists in Metro Detroit."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-slate-950 text-white py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<nav class="text-sm text-slate-500 mb-6">
			<a href="/" class="hover:text-slate-300 transition-colors">Home</a>
			<span class="mx-2">/</span>
			<span class="text-slate-300">Legacy System Upgrades</span>
		</nav>
		<p class="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
			Old Wire? No Problem.
		</p>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
			Upgrade your security system without tearing out the walls.
		</h1>
		<p class="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
			If you have analog cameras, outdated DVR equipment, or old coaxial cable runs, we can modernize your setup to HD resolution — often using the exact wiring already in your building.
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

<!-- Why upgrade callout -->
<section class="bg-amber-50 border-y border-amber-100 py-10 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl flex flex-col sm:flex-row items-center gap-6">
		<div class="text-amber-500 shrink-0">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
			</svg>
		</div>
		<div>
			<p class="text-base font-semibold text-slate-900 mb-1">Your old cameras aren't protecting you.</p>
			<p class="text-sm text-slate-600 leading-relaxed">
				480TVL analog cameras can't identify a face past 10 feet or read a license plate at your driveway. If something happens, that footage is useless to police. A modern HD upgrade changes that completely — and it costs less than most people expect.
			</p>
		</div>
	</div>
</section>

<!-- Before / After breakdown -->
<section class="py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-3xl font-bold text-slate-900 mb-3">What We Upgrade — and What You Get</h2>
		<p class="text-slate-500 mb-12 max-w-xl">
			We assess your existing equipment honestly and upgrade only what needs to change.
		</p>
		<div class="space-y-6">
			{#each upgradeReasons as item}
				<div class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
					<div class="md:col-span-1">
						<div class="w-2 h-2 rounded-full bg-amber-500 mb-3"></div>
						<h3 class="text-base font-semibold text-slate-900">{item.title}</h3>
					</div>
					<div class="md:col-span-1">
						<p class="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">Before</p>
						<p class="text-sm text-slate-500 leading-relaxed">{item.old}</p>
					</div>
					<div class="md:col-span-1">
						<p class="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">After</p>
						<p class="text-sm text-slate-700 leading-relaxed font-medium">{item.new}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Coax highlight -->
<section class="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
		<div>
			<h2 class="text-3xl font-bold text-slate-900 mb-5">Your coax wiring still has value.</h2>
			<p class="text-slate-600 leading-relaxed mb-4">
				HD-TVI and HD-CVI technology lets us push 2MP, 4MP, or even 8MP video over the same coaxial cable that was installed for your old analog system. This means no wall fishing, no new cable runs, and a significantly lower install cost.
			</p>
			<p class="text-slate-600 leading-relaxed mb-8">
				We assess your existing coax during the site walk and tell you honestly which runs can be reused and which need replacing. We don't recommend rewiring unless it's actually necessary.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
			>
				Schedule a Free Site Walk
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
				</svg>
			</a>
		</div>
		<div class="rounded-xl bg-slate-900 text-slate-300 p-8 font-mono text-sm leading-relaxed">
			<p class="text-amber-400 mb-4 font-semibold not-italic">Coax Reuse Assessment</p>
			<div class="space-y-2">
				<p><span class="text-slate-500">cable_type:</span> RG59 / RG6</p>
				<p><span class="text-slate-500">run_length:</span> up to 500ft</p>
				<p><span class="text-slate-500">resolution:</span> <span class="text-green-400">2MP → 8MP</span></p>
				<p><span class="text-slate-500">rewiring_needed:</span> <span class="text-green-400">false</span></p>
				<p><span class="text-slate-500">upgrade_cost:</span> <span class="text-amber-400">significantly lower</span></p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-slate-950 py-16 px-4 sm:px-6">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Let's assess what you have.</h2>
		<p class="text-slate-400 mb-8">Free site walk — we'll tell you exactly what can stay and what needs to go.</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
		>
			Request Your Free Quote
		</a>
	</div>
</section>
