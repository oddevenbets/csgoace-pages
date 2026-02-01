# CSGOAce.gg – Provably Fair CS2 Case Openings

This repository contains the static pre-launch website and SEO content for **CSGOAce.gg**, a CS2 case opening platform focused on transparency, provably fair systems, and user trust.

The site is built as a lightweight, crawl-friendly static website and is deployed using **Cloudflare Pages** with automatic GitHub-based deployments.

---

## 🌐 Live Website
https://csgoace.gg

---

## 🧠 SEO Strategy Overview

This site is optimized for search engines using best practices:

- Semantic HTML5 structure
- Clean, crawlable URLs (no JavaScript routing)
- Canonical URLs on all pages
- XML sitemap submitted to Google Search Console
- Open robots.txt with sitemap reference
- Structured data (JSON-LD) for articles
- Internal linking between homepage and articles
- Fast delivery via Cloudflare CDN
- Privacy-friendly Cloudflare Web Analytics

The goal is to establish topical authority for CS2 case opening–related searches before the full platform launch.

---

## 📰 Articles

All content articles are located in `/articles/` and use a shared HTML template with:

- Unique title and meta description
- Article-specific canonical URL
- Article schema (JSON-LD)
- Internal links back to the homepage

New articles are added by creating a new `.html` file and updating `sitemap.xml`.

---

## 🚀 Deployment

This site is deployed using **Cloudflare Pages**.

- Any push to the `main` branch triggers an automatic redeploy
- No build step required (pure static files)
- Extensionless URLs are supported in production

---

## 📊 Analytics

Page views are tracked using **Cloudflare Web Analytics**, which is:

- Cookie-free
- Privacy-friendly
- Zero impact on SEO or performance

---

## 🔐 Security

A `security.txt` file is available at: /.well-known/security.txt

Security issues can be reported via the contact listed in that file.

---

## ⚠️ Notes

This repository represents the **pre-launch SEO and content layer** of CSGOAce.gg.  
The full application (case openings, accounts, payments) will be deployed separately and integrated without disrupting existing URLs.

---

© 2026 CSGOAce.gg
