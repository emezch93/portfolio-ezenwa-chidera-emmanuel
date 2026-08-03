# Ezenwa Chidera Emmanuel — Portfolio

Personal portfolio site for Ezenwa Chidera Emmanuel (frontend developer, AI automationist, founder of CodeVent Digital). Built as static HTML, Tailwind (CDN), and vanilla JS. Deployed via GitHub Pages.

## Structure

```
/
├── index.html          Homepage: hero, flagship work, skills, services preview, about, CTA
├── projects.html       Full project archive with case study cards
├── services.html       Detailed service offerings
├── contact.html        Contact page
├── IMG_20250810_093813_451.jpg   Profile photo (used in About + social preview)
└── projects/
    ├── codevent-digital.html   CodeVent Digital hub, embedded replica of the live product
    ├── chat.html               CodeVent AI Chat (standalone demo, own header)
    ├── community.html          CodeVent community page
    ├── learning.html           CodeVent curriculum page
    ├── shop.html                CodeVent shop page
    ├── toolkit.html            CodeVent developer toolkit page
    ├── testimonial.html        CodeVent success stories page
    ├── contact.html            CodeVent contact page
    ├── privacy.html / terms.html   CodeVent legal pages
    ├── code-editor.html        Case study: Portable Code Editor
    ├── fashion-website.html    Case study: Samuel Chukwuemeka Fashion
    ├── educommex.html          Case study: Educommex
    ├── swift-course.html       Case study: Swift Web Dev Course
    └── codevent-icon.svg       Shared CodeVent Digital brand icon (see below)
```

**Important distinction inside `/projects/`:** two different kinds of pages live in the same folder.

- **Case studies** (`code-editor.html`, `fashion-website.html`, `educommex.html`, `swift-course.html`) are write-ups about a project, styled like the rest of the portfolio, and link back to the portfolio root using `../` (e.g. `../index.html`, `../projects.html`).
- **The CodeVent Digital bundle** (`codevent-digital.html`, `chat.html`, `community.html`, `learning.html`, `shop.html`, `toolkit.html`, `testimonial.html`, `contact.html`, `privacy.html`, `terms.html`) is a self-contained replica of the actual live product at [codeventdigital.site](https://codeventdigital.site). These pages link to **each other** using plain filenames (`codevent-digital.html`, `shop.html`, etc.), never `../`, because they're meant to feel like the real site, not a portfolio subpage. `codevent-digital.html` is the entry point; it's the only file in this bundle linked directly from the portfolio root (`index.html`).

Getting these two link styles crossed is the single easiest mistake to make in this repo, if a page in the CodeVent bundle ever needs to link back to the portfolio itself, it should be a rare, deliberate exception, not the default.

## Brand icon

`projects/codevent-icon.svg` is the single source of truth for the CodeVent Digital mark (gradient indigo-to-teal square, `</>` glyph). It's referenced by:
- The nav logo on all 10 CodeVent bundle pages
- The browser tab favicon on all 10 CodeVent bundle pages
- The CodeVent Digital project card image on the portfolio homepage (`index.html`)

If the logo ever changes again, this is the only file that needs updating, every page pulls from it directly rather than embedding its own copy.

## Live links referenced in this portfolio

- Portfolio: `https://emezch93.github.io/portfolio-ezenwa-chidera-emmanuel/`
- CodeVent Digital (real product): `https://codeventdigital.site`
- CodeVent AI Chat (live proof): `https://codeventdigital.site/chat.html`
- Riverside Dental Care (AI automation demo): `https://emezch93.github.io/riverside-dental-care/`
- Portable Code Editor: `https://emezch93.github.io/Code-Editor-/`

## Recent fixes (this pass)

- Fixed broken footer logo links (`index.html` → `codevent-digital.html`) on two CodeVent pages that would have 404'd inside the bundle.
- Replaced a mismatched favicon (leftover from a different project sharing this folder) with the correct CodeVent brand icon across all 9 pages that reference one.
- Added the missing logo icon to `toolkit.html`.
- Rerouted the "Join Community" CTA on `codevent-digital.html` from a raw WhatsApp link to `community.html`, matching the site's own established pattern.
- Added a "current features" section to `codevent-digital.html` reflecting what the platform actually has today (curriculum, AI assistant, community, toolkit, shop, installable app).
- Built the previously-missing `projects/code-editor.html`, closing a navigation loop that `swift-course.html` and `fashion-website.html` already expected to link to.
- Fixed the homepage's broken social preview image (`og:image`/`twitter:image` pointed at a file that didn't exist) and added a missing `twitter:card` tag.
- Added a small grammar fix to the About section and a missing comma in the hero headline.
- Added live proof links (Riverside Dental Care, CodeVent AI Chat) to the homepage, services page, and projects page AI/automation cards.
- Rebuilt the CodeVent Digital brand icon as a proper SVG matching the official logo artwork, replacing an earlier placeholder.

## Deployment

Static site, no build step. Push to `main`, GitHub Pages serves directly from the repo root.
