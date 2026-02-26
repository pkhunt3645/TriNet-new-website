# TriNet Medical — Website

A modern, production-ready healthcare SaaS marketing website for **TriNet Medical**, built with Next.js 16 and React 19. The site showcases TriNet's inventory management, DSCSA compliance, 340B compliance, and EMR/EHR integration solutions for healthcare providers.

---

## Features

- **7 Full Pages** — Home, About, Contact, DSCSA Compliance, Inventory Management, Integrations, ROI Calculator
- **Static Export (SSG)** — Outputs pre-rendered HTML for fast, CDN-friendly hosting
- **Responsive Design** — Mobile-first layout with a fixed header, hamburger menu, and fluid typography
- **Component Architecture** — Page-scoped components with shared common/UI primitives
- **Centralized Data Layer** — All page content defined in `/src/data/` for easy CMS-like updates
- **SEO Ready** — Full Open Graph, Twitter Card, and structured meta tags
- **SOC2 & HIPAA Messaging** — Built-in trust signals for healthcare audiences

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 + PostCSS |
| Icons | Lucide React |
| Carousel | Swiper 12 |
| Linting | ESLint 9 (flat config) |
| Compiler | React Compiler (Babel) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone <repository-url>
cd new-site
npm install
```

### Development

```bash
npm run dev
```

Opens the development server at [http://localhost:8080](http://localhost:8080).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production (static export to `./out`) |
| `npm start` | Serve the production build on port 8080 |
| `npm run lint` | Run ESLint across the project |

---

## Project Structure

```
new-site/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home (/)
│   │   ├── about/                  # About (/about)
│   │   ├── contact/                # Contact (/contact)
│   │   ├── dscsa-compliance/       # DSCSA Compliance (/dscsa-compliance)
│   │   ├── inventory-management/   # Inventory Management (/inventory-management)
│   │   ├── integrations/           # Integrations (/integrations)
│   │   ├── roi-calculator/         # ROI Calculator (/roi-calculator)
│   │   ├── layout.tsx              # Root layout (fonts, metadata)
│   │   └── loading.tsx             # Loading state
│   ├── components/
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   ├── DscsaCompliancePage/
│   │   ├── IntegrationsPage/
│   │   ├── InventoryManagementPage/
│   │   ├── RoiCalculatorPage/
│   │   ├── landingPage/
│   │   ├── Layout/                 # Header & Footer
│   │   ├── common/                 # Shared reusable components
│   │   └── ui/                     # UI primitives (Button, etc.)
│   ├── data/                       # Static page content & configuration
│   ├── styles/
│   │   └── globals.css             # Tailwind v4 theme & custom classes
│   └── utils/
│       └── commonUtils.ts
├── public/
│   ├── images/                     # Product & partner logos
│   │   └── tech-partners/          # EHR integration partner logos
│   └── og/                         # Open Graph social preview images
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero banner, stats, about section, tech partners, testimonials, SOC2 badge, contact CTA |
| `/about` | About | Mission, company history, why choose TriNet |
| `/contact` | Contact | Contact form and company information |
| `/dscsa-compliance` | DSCSA Compliance | Features, benefits, workflow, and advanced solutions for drug serialization compliance |
| `/inventory-management` | Inventory Management | Lot tracking, inventory features and benefits |
| `/integrations` | Integrations | EHR/EMR partner list, integration benefits, how-it-works walkthrough |
| `/roi-calculator` | ROI Calculator | Interactive calculator for estimating return on investment |

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| Primary | `#2157b1` | Brand blue, CTAs, links |
| Secondary | `#021935` | Dark navy, headings, footer |
| Theme Green | `#5c8a10` | Accents, success states |
| Text Gray | `#646464` | Body copy |
| Light Cyan | `#f6f9ff` | Section backgrounds |

### Typography

- **Montserrat** — Primary body font
- **Poppins** — Secondary / UI font
- **Caveat** — Decorative / script accents

### Utility Classes

| Class | Purpose |
|---|---|
| `.tn-container` | Responsive centered container |
| `.tn-section` | Section wrapper with vertical spacing and alternating gradients |
| `.tn-section-head` | Section heading layout wrapper |
| `.tn-section-head--heading` | Small section label (e.g., "OUR FEATURES") |
| `.tn-section-head--title` | Large section title |

---

## Deployment

This project uses **static export** (`output: 'export'` in `next.config.ts`). The production build generates a fully static site in the `./out` directory.

```bash
npm run build
# Deploy the ./out folder to any static host:
# Vercel, Netlify, AWS S3 + CloudFront, GitHub Pages, etc.
```

> **Note:** Because image optimization is disabled (`images.unoptimized: true`), all images are served as-is from the `./public` directory. Optimize images before committing for best performance.

---

## Adding Content

All page content is managed through the data layer in `src/data/`. To update text, features, or section copy without touching component code, edit the corresponding data file:

| File | Controls |
|---|---|
| `headerLinks.ts` | Navigation menu structure |
| `footerLinks.ts` | Footer link groups |
| `landingPageData.ts` | Home page sections |
| `aboutPageData.ts` | About page content |
| `dscsaCompliancePageData.ts` | DSCSA page content |
| `inventoryManagementPageData.ts` | Inventory page content |
| `integrationsPageData.ts` | Integrations page content |
| `roiCalculatorPageData.ts` | ROI calculator configuration |

---

## Path Aliases

The `@/` alias resolves to `./src/`:

```ts
import { Button } from '@/components/ui/Button';
import { landingPageData } from '@/data/landingPageData';
```
