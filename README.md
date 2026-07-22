# Glamgo Website — theglamgo.com

Production-ready compliance + marketing website for Glamgo. Built with Next.js 14
(static export) so it can be hosted anywhere — Vercel, Netlify, Cloudflare Pages,
or GoDaddy static hosting.

## Structure

- `app/` — Next.js App Router pages (9 pages total)
  - `page.tsx` — Home (desktop hero + mobile app-frame)
  - `about/`, `customer/`, `owner/`, `stylist/`, `contact/` — Marketing pages
  - `privacy/`, `terms/`, `refund/` — **Legal pages required for Razorpay LIVE KYC**
- `components/` — Header, Footer, MobileBottomNav
- `out/` — Static export produced by `yarn build` (this is what you deploy)

## Design

- **Same cream/champagne theme** as the mobile app — reverted from the rejected black-gold experiment.
- **Mobile UX** — app-like frame, bottom tab navigation, gradient hero card. On phones the site feels like the actual Glamgo app running in a browser.
- **Desktop UX** — premium startup layout with hero + live app preview panel + feature grid.

## Local development

```bash
cd /app/website
yarn install
yarn dev            # http://localhost:3300
```

## Production build

```bash
cd /app/website
yarn build          # produces /app/website/out/
```

The `out/` directory is a fully static site — no server required.

---

## Deployment

### Option A — Vercel (recommended, free, 5 minutes)

1. Push `/app/website/` to a GitHub repo (or use Vercel CLI: `vercel --cwd /app/website`).
2. In Vercel: New Project → import repo → Framework: **Next.js** → Deploy.
3. Vercel gives you an initial URL like `glamgo.vercel.app`.
4. In Vercel → Domains → add `theglamgo.com` and `www.theglamgo.com`.
5. Vercel shows the exact DNS records to copy into GoDaddy (see next section).
6. SSL is provisioned automatically (Let's Encrypt).

### Option B — Netlify

1. `netlify deploy --dir=/app/website/out --prod` (needs the CLI + login).
2. Add custom domain in Netlify UI. Same DNS pattern as Vercel.

### Option C — Cloudflare Pages / GitHub Pages / any static host

Upload the contents of `/app/website/out/` to any static host. Then point DNS.

---

## GoDaddy DNS records

Copy these into GoDaddy → My Products → theglamgo.com → **DNS Management**.

### For Vercel

| Type | Name | Value | TTL |
|------|------|-------|------|
| `A` | `@` | `76.76.21.21` | 1 hour |
| `CNAME` | `www` | `cname.vercel-dns.com.` | 1 hour |

(If Vercel's dashboard shows different values, **use those**. Vercel occasionally rotates IPs.)

### For Netlify

| Type | Name | Value | TTL |
|------|------|-------|------|
| `A` | `@` | `75.2.60.5` | 1 hour |
| `CNAME` | `www` | `<your-site>.netlify.app.` | 1 hour |

### For Cloudflare Pages

| Type | Name | Value | TTL |
|------|------|-------|------|
| `CNAME` | `@` | `<your-site>.pages.dev.` | Auto |
| `CNAME` | `www` | `<your-site>.pages.dev.` | Auto |

*(GoDaddy accepts `CNAME` at apex only via CNAME-flattening; if it rejects it, use Cloudflare as the DNS host with GoDaddy pointing NS records to Cloudflare, then set the CNAME there. Or use A records provided by Cloudflare Pages.)*

### SSL / HTTPS

Every provider above (Vercel / Netlify / Cloudflare) issues a free Let's Encrypt certificate
automatically once DNS is verified. You do NOT need to buy an SSL cert.
Expect green padlock within 5–15 minutes of DNS propagation.

---

## Razorpay LIVE KYC readiness

All 4 mandatory compliance pages are live:

- `/privacy/` — Privacy Policy
- `/terms/` — Terms & Conditions
- `/refund/` — Cancellation & Refund Policy
- `/contact/` — Contact Us (support email + registered office)

Additional trust signals present on the site:

- Clearly identified operator (**Theglamgo**) in the footer.
- Support email (`support@theglamgo.com`), business email (`hello@theglamgo.com`).
- HTTPS via free SSL.
- Working home page describing the product + who uses it.
- Marketing pages for each user role (customer / owner / stylist).

After DNS propagates and SSL is green, submit `https://theglamgo.com` to
Razorpay Dashboard → Account → Website Details for LIVE mode approval.

---

## Nothing in the mobile app was changed

This website is a **separate deliverable** at `/app/website/`. The Expo app
under `/app/frontend/` and the FastAPI backend under `/app/backend/` were
NOT touched. Money Engine remains locked.
