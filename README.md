# Motor City Security Solutions — Website

SvelteKit marketing site for **Motor City Security Solutions**, Ferndale, MI.  
Built by [Iron Digital MI](https://irondigitalmi.com).

---

## To-Do Before Launch

### Client Info Needed
- [ ] **Business hours** — full open/close times for each day (currently shows "Opens 9 AM" with no close time). Update in two places in `src/routes/+layout.svelte`: the footer display text and the `openingHoursSpecification` block in the JSON-LD schema
- [ ] **Real domain name** — replace `motorcitysecuritysolutions.com` placeholder in:
  - `src/routes/+layout.svelte` (JSON-LD `"url"` field)
  - `src/routes/sitemap.xml/+server.js` (`BASE` constant)
  - `static/robots.txt` (sitemap URL)
- [ ] **Photo** — replace the grey placeholder box in the About section on the home page (`src/routes/+page.svelte`) with a real photo of the team or storefront
- [ ] **More Google reviews** — currently showing 2 real review snippets from the Google Business Profile. Add more as they come in (same array in `src/routes/+page.svelte`)

### Hosting & Deployment
- [ ] **Set up hosting** — repo uses `@sveltejs/adapter-node` (VPS) by default. If deploying to Netlify or Vercel, swap the adapter:
  - Netlify: `npm i -D @sveltejs/adapter-netlify` and update `svelte.config.js`
  - Vercel: `npm i -D @sveltejs/adapter-vercel` and update `svelte.config.js`
- [ ] **Set environment variables** on your host — copy from `.env.example`:
  - `SMTP_HOST` — your email provider's SMTP server
  - `SMTP_PORT` — usually `587`
  - `SMTP_SECURE` — `false` for port 587, `true` for port 465
  - `SMTP_USER` — the email address sending the notifications
  - `SMTP_PASS` — app password (for Gmail: generate one at myaccount.google.com → Security → App passwords)
  - `LEAD_EMAIL` — where quote requests get delivered (e.g. `jason@motorcitysecuritysolutions.com`)
- [ ] **Connect custom domain** on your host dashboard
- [ ] **Submit sitemap to Google Search Console** — after DNS is live, add `https://yourdomain.com/sitemap.xml`

### Nice-to-Have (Post-Launch)
- [ ] **Access Control service page** — `/services/access-control` (same structure as the CCTV page). Currently the Access Control card on the home page links to `/contact`
- [ ] **VOIP & Networking page** — `/services/voip-networking`
- [ ] **Solar Security page** — `/services/solar-security`
- [ ] **Google Analytics or Plausible** — add tracking snippet to `src/app.html`
- [ ] **OG image** — add a real `og:image` meta tag with a photo for social sharing previews

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Copy `.env.example` to `.env` and fill in your SMTP credentials to test the contact form locally.

```bash
cp .env.example .env
```

## Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  routes/
    +layout.svelte              # Nav, footer, JSON-LD schema, mobile CTA
    +page.svelte                # Home page
    services/
      cctv-installation/        # CCTV service page
      legacy-upgrades/          # Legacy upgrade service page
    contact/
      +page.svelte              # Quote form
      +page.server.js           # Form action — validates input, sends email
    sitemap.xml/
      +server.js                # Dynamic XML sitemap
  app.html                      # HTML shell
  routes/layout.css             # Tailwind v4 import + theme tokens
static/
  robots.txt
.env.example                    # Required environment variables (copy to .env)
```

## Tech Stack

- [SvelteKit 2](https://kit.svelte.dev) with Svelte 5 runes
- [Tailwind CSS v4](https://tailwindcss.com)
- [adapter-node](https://kit.svelte.dev/docs/adapter-node) (swap for Netlify/Vercel if needed)
- [Nodemailer](https://nodemailer.com) for quote form emails
- JSDoc types (no TypeScript build step)
