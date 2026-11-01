# Nahida Zaman Bina · Personal portfolio

A lavender-accented portfolio for **Nahida Zaman Bina**, a software engineer with a frontend background, currently working remotely as an AI Engineer at Unibox IT (Venice, Italy). Built with semantic HTML, responsive CSS, and a small amount of vanilla JavaScript, for hosting on GitHub Pages.

**Intended URL:** <https://naaaaaahida.github.io/>

## Run locally

There is no build step, dependency installation, or package manager requirement. From the repository root, start any static HTTP server. For example, with Python 3 installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. Stop the server with `Ctrl+C`.

You can also open `index.html` directly, although a local server better reflects hosting behavior. Clipboard access is progressively enabled only when the browser supports it in a secure context, such as HTTPS or localhost.

## Repository structure

```text
.
├── index.html                       # Main portfolio and SEO metadata
├── 404.html                         # GitHub Pages error page
├── projects/
│   ├── customer-churn.html          # Customer retention project overview
│   ├── fraud-risk.html              # Transaction risk project overview
│   ├── bangla-rag.html              # Bangla document retrieval project overview
│   └── crop-recommendation.html     # Agricultural classification project overview
├── src/
│   ├── styles/main.css             # Tokens, components, layouts, breakpoints, print
│   └── scripts/
│       ├── main.js                 # Menu, section indicator, copy email, year
│       ├── theme.js                # Early theme initialization and theme controls
│       └── effects.js              # Responsive cursor and top scroll control
├── assets/
│   ├── branding/favicon.svg        # Small lavender wordmark icon
│   ├── documents/
│   │   └── Nahida-Zaman-Bina_CV.pdf
│   └── images/
│       ├── bina.png                # Supplied original, retained unchanged
│       ├── bina.jpg                # Compressed 1024px portrait
│       └── bina-512.jpg            # Smaller responsive portrait
├── .gitignore
└── README.md
```

`PORTFOLIO_PLAN.md` is local planning material and is intentionally ignored by Git. Operating system files, local editor settings, environment files, and temporary tool outputs are ignored too.

## Design and behavior

- Light mode pairs warm ivory and deep plum; dark mode pairs aubergine surfaces with pale lavender accents. Both use an editorial serif/sans pairing, solid surfaces, and understated dividers. The design has no glassmorphism, translucent panels, backdrop blur, or decorative glow backgrounds.
- About comes immediately after the hero and focus strip, followed by selected engineering explorations, research, experience, education, toolkit, and contact.
- The profile, hero introduction, about section, and metadata reflect her current AI Engineer role and frontend background. The personal hero introduction is “Curious mind. Engineer at heart.”
- Experience and Education have their own sections and navigation links. Experience lists the current remote AI Engineer role at Unibox IT (Venice, Italy), Senior Software Engineer at Charm Limited (March 2024–April 2025), and Junior Software Engineer at Revenco (December 2023–March 2024). All experience entries share one paragraph style, with a concise one-sentence description. Unibox summarizes multimodal pipeline optimization and cross-team collaboration; Charm describes leadership of several software projects and engineering teams. Charm and Revenco are marked onsite in Dhaka, Bangladesh.
- Education lists the M.Sc. in Information & Communication Technology, B.Sc., and Higher Secondary Certificate from Birshreshtha Munshi Abdur Rouf Public College (August 2017–May 2019). All three institutions are listed in Dhaka, Bangladesh. The master’s is ongoing from January 2025. Entries show only dates, qualifications, institutions, and locations, without descriptions or CGPA.
- Four individually addressable project pages with context, approach, considerations, and source links.
- Responsive portrait, navigation, and layouts; CSS illustrations rather than heavy visual libraries.
- On smartphones, the portrait is the first hero content, followed by the introduction and actions. It is first in the HTML reading order; named CSS grid areas retain the desktop text-left/photo-right layout. The stacked layout also applies to wider touch phones in landscape, with a smaller portrait for short screens.
- Mobile layouts use larger reading text and touch targets, wrapping actions, responsive image sizes, notch-safe spacing, and a scrollable menu that fits the available viewport. Pinch zoom remains enabled. No JavaScript device detection or separate mobile site is needed.
- Keyboard focus styles, a skip link, semantic landmarks, reduced-motion support, and print styles.
- Core content and navigation work without JavaScript. The mobile menu is an enhancement; without JavaScript, navigation remains visible.
- Email, [LinkedIn](https://www.linkedin.com/in/nahida-zaman-bina-b1549623a/), and GitHub links; no CV view/download controls, contact backend, analytics, cookies, or client-side framework. LinkedIn is also included in the profile’s structured-data `sameAs` list.
- A theme toggle on every page follows the visitor’s system preference initially, then remembers an explicit light/dark choice in `localStorage` under `nahida-theme`. It synchronizes across tabs; if storage is unavailable, toggling still works for the current page.
- A lavender dot and following ring replace the mouse cursor on fine-pointer, hover-capable devices. Links and buttons expand the ring; pressing contracts it. Touch, pen, reduced motion, keyboard use, and native form/media controls retain the native pointer. The animation stops once the ring settles.
- A fixed horizontal bar at the top shows vertical page progress and doubles as a native range control: click, drag, or use touch to scrub through the page; focus it and use the arrow keys, Home, or End for keyboard scrolling. It updates after viewport/content changes and is hidden on pages that do not scroll. Both enhancements share the theme palette, disappear for print, and are absent when JavaScript is disabled.
- The native page scrollbar is hidden. Wheel, touch, keyboard, and the top scroll control remain usable. Anchor navigation uses native smooth scrolling, with reduced-motion preferences respected. Scrolling is never intercepted by wheel/touch handlers; progress updates are batched with animation frames, document height is cached until resizing, and the top fill animates with a transform. The header uses an opaque surface without blur at every screen size.

Fonts are **Instrument Serif** and **DM Sans**, requested from Google Fonts with `display=swap`. Network access is required for the web fonts; readable system serif/sans fallbacks are provided. All other site resources are served locally. Consider self-hosting licensed font files if eliminating third-party requests is important.

## Update content

### Profile, contact, and experience

Edit `index.html`. Keep profile metadata in the `<head>` and JSON-LD aligned with visible content.

If the public email changes, also update `src/scripts/main.js` (the copy-email value) and the contact links on each project page.

### Projects

Edit the corresponding card in `index.html` and its page in `projects/`. Project pages are intentionally plain HTML so every page is directly readable and editable, without a template compiler. Shared styles and scripts live under `src/`.

For a new project:

1. Copy the structure of an existing project page.
2. Replace its title, description, canonical/OG URLs, content, toolkit, and repository link.
3. Add a corresponding main-page project card.
4. Update the next-project links so visitors can continue exploring.

The main-page artwork is explicitly labeled as conceptual illustration. It does not represent measured data. Add real screenshots or charts only when they are supported by the project, with useful image alternatives and explicit dimensions.

### Portrait and CV

The original supplied photo is preserved at `assets/images/bina.png`. The website loads JPEG derivatives to reduce the image transfer from about 1.1 MB to about 178 KB at full size or 57 KB at the smaller size. Replace the derivatives and update the dimensions/`srcset` if the photo changes.

The portrait disables native image dragging, image selection, supported mobile image callouts, and the context menu within its frame. These measures discourage casual saving; they cannot prevent downloading or screenshots of a public image. Image files remain accessible to browser tools and through their public URLs. Other page context menus, selection, and keyboard shortcuts are unaffected.

The supplied PDF is retained in `assets/documents/` as source material. It is not linked anywhere in the website, and there are no CV view or download controls. Since this folder is part of the repository, the PDF remains directly addressable if the repository root is published.

### Colors, typography, and layout

Edit the custom properties at the start of `src/styles/main.css`. The `:root` block defines the light theme and `:root[data-theme='dark']` overrides its semantic tokens for dark mode. Project illustrations retain their own pastel palettes in both modes. The rest of the stylesheet is grouped into numbered sections. Responsive rules are near the bottom; motion and print rules follow them. No SCSS compilation is required.

Every page loads `src/scripts/theme.js` before the stylesheet to apply the chosen theme before rendering. The toggle has a stable “Dark mode” accessible name and an `aria-pressed` state. With JavaScript disabled the site uses its default light appearance and hides the toggle. Print styles use a light palette regardless of screen theme.

### Domain

Canonical, Open Graph, and structured-data URLs target `https://naaaaaahida.github.io/`, based on this repository’s origin. If the domain changes, update those URLs in all HTML files. The main and project pages use relative asset links. The error page deliberately uses root-relative URLs so assets resolve from unknown nested paths on this user-site domain.

## GitHub Pages deployment

This repository is a user site named `naaaaaahida.github.io`. GitHub Pages can serve these files directly from the repository root:

1. Commit and push the site files to the chosen publishing branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the publishing branch and **/(root)**, then save.
5. Wait for GitHub’s Pages deployment to finish and check the published URL.

No `npm` command, build directory, GitHub Actions workflow, or application server is required. These files do not use Jekyll templates. Nothing in local development automatically commits, pushes, changes repository settings, or deploys the site.

Reference: [GitHub’s publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Verification

JavaScript syntax can be checked with Node.js if available:

```sh
node --check src/scripts/main.js
node --check src/scripts/theme.js
node --check src/scripts/effects.js
git diff --check
git check-ignore PORTFOLIO_PLAN.md
```

Before a release, review the site in a browser:

- Main page and every project page at narrow mobile, tablet, and desktop widths.
- Portrait-first hero at 320, 360, 390, 430, and 760px widths, plus landscape touch-phone sizes; desktop grid remains text-left/photo-right. Check iPhone safe areas, Android Chrome, dynamic browser toolbars, and 200% zoom.
- Menu open/close behavior, Escape, keyboard focus, anchor navigation, and browser Back.
- Email, repository, publication, and next-project links; confirm there are no CV controls.
- Both themes on every page, theme persistence between pages/reloads, system preference changes before a manual choice, and storage-disabled behavior.
- Cursor tracking, link/button hover, press feedback, native controls, leaving/re-entering the page, touch, keyboard use, and reduced-motion fallback.
- Top scroll position at the start/middle/end, dragging and keyboard controls, content resizing, and pages with no scrollable content.
- Hidden native scrollbar with wheel, touch, keyboard, and anchor scrolling intact; portrait context-menu/drag restrictions scoped to the image frame.
- Copy email success/failure, where the browser exposes clipboard access.
- Reduced motion, 200% zoom, no-JavaScript fallback, and print layout.
- Missing assets, horizontal overflow, browser console errors, and slow-network loading.

Browser visual review and Lighthouse have not been completed in the development session because computer-use permission was unavailable. Do not treat responsive CSS or static checks as proof of rendered accessibility or performance scores.

## Content provenance and review

Her frontend specialization, employment timeline, and education details follow the owner’s corrections. Other experience, research, and project content are based on the supplied CV. Existing ML/NLP projects are presented as broader engineering explorations; no frontend client projects, frameworks, accuracy, business impact, or production deployment metrics have been invented. The four project repository links come from the CV; repository contents were not independently audited during implementation.

Publication: [Palm Leaf Health Management: A Hybrid Approach for Automated Disease Detection and Therapy Enhancement](https://doi.org/10.1109/ACCESS.2024.3351912), IEEE Access, volume 12, pages 9097–9111 (2024). The DOI and citation were cross-checked against the [DBLP record](https://dblp.org/rec/journals/access/NobelIBKSAM24).

Before launch, confirm preferred contact details and the exact BanglaBERT training approach. The master’s is listed as January 2025–Present following the owner’s update. Neutral language-modeling wording avoids resolving the CV’s conflicting training descriptions by assumption. The Unibox IT role is labeled “Present” without inventing a start date.
