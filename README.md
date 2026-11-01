# Nahida Zaman Bina · Personal portfolio

A lavender-accented portfolio for **Nahida Zaman Bina**, Data Scientist & Analytics Engineer. Built with semantic HTML, responsive CSS, and a small amount of vanilla JavaScript, for hosting on GitHub Pages.

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
│   └── scripts/main.js             # Menu, section indicator, copy email, year
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

- Warm ivory surfaces, lavender accents, deep plum text, and an editorial serif/sans pairing.
- Main-page sections for selected projects, about, research, experience, education, toolkit, and contact.
- Four individually addressable project pages with context, approach, considerations, and source links.
- Responsive portrait, navigation, and layouts; CSS illustrations rather than heavy visual libraries.
- Keyboard focus styles, a skip link, semantic landmarks, reduced-motion support, and print styles.
- Core content and navigation work without JavaScript. The mobile menu is an enhancement; without JavaScript, navigation remains visible.
- Direct CV and email links; no contact backend, analytics, cookies, or client-side framework.

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

Replace the PDF in `assets/documents/` to update the CV without changing links. The current PDF is the supplied document and includes its original contact details. Review the public version before publishing.

### Colors, typography, and layout

Edit the custom properties at the start of `src/styles/main.css`. The rest of the stylesheet is grouped into numbered sections. Responsive rules are near the bottom; motion and print rules follow them. No SCSS compilation is required.

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
git diff --check
git check-ignore PORTFOLIO_PLAN.md
```

Before a release, review the site in a browser:

- Main page and every project page at narrow mobile, tablet, and desktop widths.
- Menu open/close behavior, Escape, keyboard focus, anchor navigation, and browser Back.
- CV, email, repository, publication, and next-project links.
- Copy email success/failure, where the browser exposes clipboard access.
- Reduced motion, 200% zoom, no-JavaScript fallback, and print layout.
- Missing assets, horizontal overflow, browser console errors, and slow-network loading.

Browser visual review and Lighthouse have not been completed in the development session because computer-use permission was unavailable. Do not treat responsive CSS or static checks as proof of rendered accessibility or performance scores.

## Content provenance and review

Professional content is based on the supplied CV. Project descriptions are qualitative; no accuracy, business impact, or production deployment metrics have been invented. The four project repository links come from the CV; repository contents were not independently audited during implementation.

Publication: [Palm Leaf Health Management: A Hybrid Approach for Automated Disease Detection and Therapy Enhancement](https://doi.org/10.1109/ACCESS.2024.3351912), IEEE Access, volume 12, pages 9097–9111 (2024). The DOI and citation were cross-checked against the [DBLP record](https://dblp.org/rec/journals/access/NobelIBKSAM24).

Before launch, confirm the current master's status, preferred public title and contact details, and the exact BanglaBERT training approach. The site uses “from December 2024” for postgraduate study and neutral language-modeling wording so it does not assert an unverified graduation date or resolve the CV’s conflicting training descriptions by assumption.
