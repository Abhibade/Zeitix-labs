# Zeitix Labs — Landing Page PRD

## Original Problem Statement
"Build a landing page: for my website zeitixlabs.com — currently it is hosted but it's too much AI generated. Using the actual content make it realistic and a real website to attract clients."

## User Choices
- Contact section: BOTH working inquiry form (saved to backend) and direct email/phone/WhatsApp links
- Contact details: placeholders (hello@zeitixlabs.com, +91 98XXX XXXXX, wa.me placeholder)
- Design direction & sections: defaults (design agent decided — Swiss High-Contrast + Luxury Dark)

## Actual Content (scraped from live zeitixlabs.com)
- Multi-vertical tech company, Pune, India, founded Mar 2026
- 5 verticals: Zeitix Play (games, Zmerge 2048), Zeitix CRM (salon platforms), Zeitix Tools (Geolocation Attendance), Zeitix Grow (marketing), Zeitix Build (custom software)
- Roadmap progress: Play 78%, CRM 55%, Tools 52%, Grow 41%, Build 35%
- Tagline: "We build products that evolve with time"

## Architecture
- Frontend: React (CRA + craco), Tailwind, framer-motion, Lenis smooth scroll, react-fast-marquee, sonner toasts
- Backend: FastAPI + MongoDB (motor), /api prefix
- Fonts: Cabinet Grotesk (headings, Fontshare), IBM Plex Sans/Mono
- Custom SVG logo mark (Z hourglass) used as favicon

## Implemented (Jun 2026)
- Kinetic hero: masked line-by-line reveal, parallax background, stats row
- Editorial marquee (slow drift, lime ✦ separators)
- Bento product grid: 5 verticals, 2 with photography (Play hero block, Build)
- Why Us: 3 editorial list items (time-aware, cross-vertical, human)
- Roadmap: animated progress bars filling on scroll into view
- Contact: direct links (email/phone/WhatsApp) + working inquiry form → POST /api/inquiries (MongoDB)
- Footer with explore/connect links
- Tested: 100% backend + frontend pass (iteration_1.json)

## Backend API
- GET /api/ — health
- POST /api/inquiries — {name, email, company?, interest?, message} → saved inquiry
- GET /api/inquiries — list, newest first

## Backlog / Next
- P1: ~~Replace placeholder email~~ Done (Jun 2026): real email ceo@zeitixlabs.com in contact + footer; fake phone/WhatsApp links removed until real numbers provided
- P1: Admin view or email notification (Resend) for incoming inquiries
- P2: Blog section ("From the Lab"), Team page
- P2: Rate limiting / honeypot on inquiry form
- P2: SEO meta/OG tags, sitemap
