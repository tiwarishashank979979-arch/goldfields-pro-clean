---
description: Goldfields Pro Clean website generation rules (Next.js + Tailwind + shadcn optional)
globs:
  - "**/*"
alwaysApply: true
---

# Goldfields Pro Clean — Cursor Rules

You are building a production-ready marketing website for a cleaning business: **Goldfields Pro Clean** (Kalgoorlie-Boulder, WA).

## Core requirements
- Tech stack: **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**
- Design: clean, modern, premium; glassy cards; subtle gradients; strong CTA
- Must be **mobile-first** and **accessible** (semantic HTML, aria labels, keyboard nav, focus states)
- No pricing displayed anywhere.
- Use the provided assets:
  - Hero background image: `public/images/kalgoorlie-aerial.jpg` (aerial view of Kalgoorlie-Boulder)
- Service card images must be included for all services:
  - Home Cleaning: stove cleaning image
  - Office Cleaning: vacuuming image
  - Deep Cleaning: wiping bench/surface image
  - Vacate/Move-Out: mopping image
  - Window & Glass: window/glass cleaning image
  - Custom Requests: bathroom cleaning image

## Business info (must match exactly)
- Phone: **0457 335 628**
- Email: **goldfieldsproclean@gmail.com**
- Service area: **Kalgoorlie-Boulder, WA**
- CTAs:
  - Primary: “Get a Free Quote”
  - Secondary: “Call Now”

## Pages / Routes
- Single page is fine (recommended): `/`
- Optional: `/privacy` and `/terms` as simple pages (short placeholders)

## Sections required on home page
1. Sticky header with logo + nav anchors
2. Hero section with the Kalgoorlie aerial image as background + gradient overlay
3. Services grid (6 cards, each with required image + short description)
4. “Why choose us” band with 3 highlights
5. Testimonials section (3 cards)
6. Free Quote section:
   - A form with fields: Name, Phone, Email, Service, Frequency, Suburb/Area, Message
   - No backend required; implement as:
     - `mailto:` submit that opens email client to `goldfieldsproclean@gmail.com` with a prefilled body
     - Also include a “Copy details” button to copy the request summary
7. Footer with contact + quick links
8. Floating CTA (Call + Free Quote)

## Image handling rules
- All images must be loaded via Next `<Image />` when possible.
- Place images in `public/images/`.
- Use `alt` text on every image.
- Hero background can be implemented using:
  - `next/image` fill + overlay layer, OR
  - CSS `background-image` using the file in `/public`.
- Do not depend on external hotlinked images for core UI. Use local images.

## Components structure
Prefer:
- `src/components/` for reusable components
- `src/app/page.tsx` for composition
- Each component should be small and focused:
  - `Header`
  - `Hero`
  - `Services`
  - `WhyUs`
  - `Testimonials`
  - `QuoteForm`
  - `Footer`
  - `FloatingCTA`
  - `ModalQuote` (optional)

## Styling rules
- Tailwind only (avoid custom CSS except `globals.css` for base)
- Use consistent spacing, typography scales
- Cards should be rounded-2xl, shadow-soft
- Use a consistent color palette:
  - Primary teal/green: `#0f766e` / `#0ea5a5`
  - Accent amber: `#f59e0b`
- Include subtle background gradients behind sections to avoid plain white feel.

## Content rules
- Keep copy concise and professional.
- Mention “Kalgoorlie-Boulder” at least twice (hero + footer).
- No misleading claims (no “insured”/“police checked” unless user provides).

## Quality gates (must pass before final)
- `npm run lint` passes
- `npm run build` passes
- No TypeScript errors
- All images render correctly
- Quote form works (mailto opens) + copy button works

## When creating files
- Always create the folder structure first.
- Then create components.
- Then wire up `page.tsx`.
- Then final polish pass for responsiveness, spacing, and accessibility.

## Output expectations
- Provide complete code changes.
- If an asset is missing, create a placeholder file and clearly mark it.
- Never leave “TODO” without implementing it (except optional pages).
