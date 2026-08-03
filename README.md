# Ezenwa Chidera Emmanuel — Portfolio

Personal portfolio of Ezenwa Chidera Emmanuel, frontend developer and founder of CodeVent Digital.

**Live site:** https://emezch93.github.io/portfolio-ezenwa-chidera-emmanuel/

## Overview

Multi-page portfolio showcasing frontend, AI integration, and automation work, plus an embedded replica of the CodeVent Digital product for case-study browsing.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Tailwind CSS (CDN)
- Font Awesome (CDN)
- Google Fonts: Syne, DM Sans

## File Structure

```
/
├── index.html          Homepage
├── projects.html       Full project archive
├── services.html       Service offerings
├── contact.html        Contact page
└── projects/
    ├── codevent-digital.html   CodeVent Digital bundle entry point
    ├── chat.html, community.html, learning.html,
    │   shop.html, toolkit.html, testimonial.html,
    │   contact.html, privacy.html, terms.html    CodeVent Digital bundle pages
    ├── codevent-icon.svg       CodeVent Digital brand icon (single source, used by every bundle page)
    ├── code-editor.html        Case study: Portable Code Editor
    ├── fashion-website.html    Case study: Samuel Chukwuemeka Fashion
    ├── educommex.html          Case study: Educommex
    └── swift-course.html       Case study: Swift Web Dev Course
```

## Two Link Conventions Inside `/projects/`

- **Case studies** (`code-editor.html`, `fashion-website.html`, `educommex.html`, `swift-course.html`) link back to the portfolio root with `../` (e.g. `../index.html`).
- **CodeVent Digital bundle pages** link to each other by plain filename (e.g. `shop.html`, not `../projects/shop.html`), since they're meant to feel like the real product at [codeventdigital.site](https://codeventdigital.site), not a portfolio subpage. Only `codevent-digital.html` is linked from the portfolio root; the rest are reached through its own nav.

Mixing these two conventions is the most common source of broken links in this repo.

## Known Housekeeping

Not yet resolved, flagging rather than fixing silently:

- `code-editor.html`, `fashion-website.html`, `educommex.html`, and `swift-course.html` currently exist at **both** the repo root and inside `/projects/`. The root pages point to the `/projects/` copies, so the root-level duplicates look like leftovers, worth confirming and removing.
- `projects/README.md` currently documents an unrelated project (a quote site), not this repo. Needs replacing.
- A number of loose images sit at repo root with no page currently referencing them. Worth an audit before the next cleanup pass.

## Deployment

Push to `main`. GitHub Pages serves from the repo root, no build step to run.

---

© 2026 Ezenwa Chidera Emmanuel. All rights reserved.
