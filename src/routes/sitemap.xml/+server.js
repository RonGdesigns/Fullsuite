const BASE = 'https://motorcitysecurity.com';

const pages = [
	{ url: '/', priority: '1.0', changefreq: 'weekly' },
	{ url: '/services/cctv-installation', priority: '0.9', changefreq: 'monthly' },
	{ url: '/services/legacy-upgrades', priority: '0.9', changefreq: 'monthly' },
	{ url: '/services/access-control', priority: '0.9', changefreq: 'monthly' },
	{ url: '/services/voip-networking', priority: '0.8', changefreq: 'monthly' },
	{ url: '/services/solar-security', priority: '0.8', changefreq: 'monthly' },
	{ url: '/contact', priority: '0.8', changefreq: 'monthly' },
];

export function GET() {
	const today = new Date().toISOString().split('T')[0];

	const urls = pages
		.map(
			(p) => `
  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600',
		},
	});
}
