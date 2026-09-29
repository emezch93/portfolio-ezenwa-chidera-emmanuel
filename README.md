# Ezenwa Chidera Emmanuel | Portfolio

Personal portfolio of Ezenwa Chidera Emmanuel, Full Stack Web Developer, AI Automation Specialist, Digital Product Entrepreneur, and Founder of CodeVent Digital.

**Live site:** https://emezch93.github.io/portfolio-ezenwa-chidera-emmanuel/

## Overview

Multi page portfolio showcasing web development, serverless applications, AI integration, automation, progressive web apps, and digital product work.

The portfolio presents selected projects, services, technical capabilities, and professional information without limiting the work to frontend development alone.

## Tech Stack

* HTML5, CSS3, vanilla JavaScript
* Tailwind CSS (CDN)
* Cloudflare Workers
* Cloudflare D1
* REST APIs
* AI integrations
* Progressive Web Apps
* Font Awesome (CDN)
* Google Fonts: Syne, DM Sans

## File Structure

```text
/
├── index.html          Homepage
├── projects.html       Full project archive
├── services.html       Service offerings
├── contact.html        Contact page
└── projects/
    ├── codevent-digital.html   CodeVent Digital bundle entry point
    ├── chat.html, community.html, learning.html,
    │   shop.html, toolkit.html, testimonial.html
    │   contact.html, privacy.html, terms.html    CodeVent Digital bundle pages
    ├── codevent-icon.svg       CodeVent Digital brand icon (single source, used by every bundle page)
    ├── code-editor.html        Case study: Portable Code Editor
    ├── fashion-website.html    Case study: Samuel Chukwuemeka Fashion
    ├── educommex.html           Case study: Educommex
    └── swift-course.html        Case study: Swift Web Dev Course
```

## Two Link Conventions Inside `/projects/`

* **Case studies** (`code-editor.html`, `fashion-website.html`, `educommex.html`, `swift-course.html`) link back to the portfolio root with `../` (for example, `../index.html`).

* **CodeVent Digital bundle pages** link to each other by plain filename (for example, `shop.html`, not `../projects/shop.html`), since they are designed to feel like the real product at [codeventdigital.site](https://codeventdigital.site), not a portfolio subpage.

* Only `codevent-digital.html` is linked from the portfolio root. The remaining CodeVent Digital bundle pages are reached through its own navigation.

Mixing these two conventions is the most common source of broken links in this repository.

## Deployment

Push to `main`. GitHub Pages serves the site from the repository root, with no build step required.

---

© 2026 Ezenwa Chidera Emmanuel. All rights reserved.
