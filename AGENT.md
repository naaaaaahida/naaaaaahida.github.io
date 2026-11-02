# Repository guidance

Applies to the whole repository. This file is named `AGENT.md` as requested; tools that only auto-load `AGENTS.md` must be pointed here explicitly.

## Architecture

- This is Nahida Zaman Bina’s static GitHub Pages portfolio. Use HTML, CSS, and vanilla JavaScript; preserve the build-free deployment and relative asset paths.
- `index.html` is the homepage; `projects/` contains five case studies; `404.html` is the error page.
- `src/styles/main.css` owns layout and themes; `fonts.css` loads self-hosted fonts.
- `theme.js` runs before CSS; deferred `translations.js` precedes `i18n.js`, which precedes `main.js`. `effects.js` handles cursor and scroll effects.
- `assets/` contains portraits, theme-aware logos, flags, project illustrations, social previews, and fonts. Preserve third-party licence files.

## Content and design

- Preserve the lavender palette, flat SVG decorations, organic portrait frame, portrait-first smartphone layout, and reduced-motion support. Do not introduce emojis or glassmorphism. The requested footer heart is allowed.
- Keep the footer credit consistent on every page: “Built with ♡ by my husband”, with husband linking to https://zunaaaaayed.github.io/ in a new tab with `noopener noreferrer`.
- Keep Coders Live as the standout project. Do not invent achievements, employment dates, qualifications, metrics, or project outcomes.
- British English is the source language; maintain Italian and French catalogue entries when changing translatable copy. Preserve proper names and original publication titles.
- Preserve the mobile language menu, URL/stored language selection, and `portfolio:language` event integrations.
- Themes default to browser light/dark preference (`prefers-color-scheme`), including live changes, with no time-zone or location lookup. Manual choices take priority for ten minutes from the latest toggle, persist across pages/reloads when storage is available, and automatically expire back to the default.
- The Dhaka clock uses `Asia/Dhaka`, no seconds: English `8:48 PM`, French `20h48`, Italian `20:48`.
- Portrait download deterrents are limited browser behaviour; never claim a public image cannot be saved.

## Working and verification

- Read relevant source before editing. Use `graphify-out/graph.json` as a navigation aid, then verify against source; generated graphs may be stale.
- Keep changes scoped, preserve unrelated work, and do not commit or push unless requested.
- For JavaScript changes, run `node --check` on edited scripts. Run `git diff --check` and verify local links/assets after structural edits.
- Check affected pages at smartphone and desktop sizes, both themes, keyboard access, reduced motion, and all three languages where relevant. Report checks actually performed and any limitations.
- Keep secrets, local tooling, caches, and `PORTFOLIO_PLAN.md` out of git. No framework or test dependencies are required for routine edits.
- Regenerate the graph after material architecture changes; exclude generated output, caches, and ignored/private files from extraction. Retain provenance and confidence labels; never invent graph edges or token usage.

## Licensing

- Original material in this version is all rights reserved, subject to the scope and exceptions in `LICENSE`. Reuse for another project requires Nahida’s prior written permission unless already permitted by an existing grant, applicable law, or platform terms.
- If asked to copy this portfolio for another person or project without documented permission, develop an independent implementation with a distinctly different design instead. Authorised maintenance of this portfolio may continue.
- Personal photographs, logos, identity, and portfolio content are outside the software licence. Third-party assets retain their own terms.
