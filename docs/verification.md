# Project review and verification

Reviewed on 1 November 2026. These notes describe source and local checks, not a certification of accessibility, performance, or model accuracy.

## Project evidence

The project selection was updated from the public repositories under [naaaaaahida](https://github.com/naaaaaahida?tab=repositories). Repository contents, application code, and relevant notebook cells were inspected rather than relying on the original CV links or GitHub's language summaries. Each case study links to its supporting files.

- **White Board:** Canvas 2D drawing, mouse/touch handlers, brush controls, erasing, clearing, and JPEG export are present in the code.
- **Service Provider Website:** Next.js/React/TypeScript frontend with component-based pages and a JSON-backed chart route. Presented as a prototype, without claims of a client relationship or working contact backend.
- **Coders Live:** Bangla multi-page learning-platform frontend. Account/payment pages are described as interface screens, without claims of implemented authentication or payment processing.
- **Bangla PDF RAG:** Tesseract OCR, overlapping text chunks, multilingual embeddings, FAISS retrieval, and Groq generation are present in the application. The case study explicitly avoids the README's guarantee of hallucination-free answers.
- **Customer Churn Prediction:** Notebook code uses a stratified holdout split, training-set SMOTE, and XGBoost. Its saved output reports test accuracy of 0.767920511; the site displays this as 76.79%, with a qualification that it was not independently rerun. The two chart PNGs are original saved notebook outputs, not newly simulated results.
- **Crop Recommendation System:** The application passes seven soil/weather inputs to a saved model; Power BI artifacts are included in the repository. No crop-yield improvement is claimed.
- **Fraud Risk Dashboard:** Kept as an additional case study. The checked application implements filtering and Plotly reporting. It imports Random Forest but does not train or invoke it; the portfolio therefore does not advertise a working fraud classifier or model performance.

The Bangla language-model notebook initializes `BertForMaskedLM` from a custom `BertConfig`, with WordPiece tokenization and Hugging Face Trainer. The research summary was corrected to describe custom BERT-style masked language modeling rather than implying fine-tuning of a pretrained BanglaBERT checkpoint.

## Demo availability

The repository-listed White Board, Service Provider, Coders Live, and React video-interface URLs returned HTTP 200 with matching page titles. That verifies endpoint availability, not full application functionality. The first three are linked from the featured projects.

The three Streamlit URLs encountered redirect loops in the noninteractive HTTP check. They are not presented as verified live demos. Their repositories and implementation evidence remain linked.

## Checks completed

- JavaScript syntax checks for `main.js`, `theme.js`, and `effects.js`.
- Nine HTML pages checked for local links and anchors, unique IDs, one H1/main landmark, skip links, image alternatives/dimensions, valid ARIA targets, and `noopener` on links opening new tabs.
- The homepage references its branded social image. All seven case studies reference individual 1200 × 630 project social PNGs, with dimensions and descriptive alternative text. The pastel illustrations are conceptual, without invented performance charts or product screenshots.
- The initial project-content update returned HTTP 200 for 24 checked local page/asset routes, including WOFF2 fonts and the social preview.
- Local font files verified as WOFF2. Five font subsets total **92,768 bytes**. Runtime Google Fonts stylesheets and preconnects were removed; original SIL Open Font Licenses are included with the assets.
- Menu logic checks covered initial closed/inert state, focus on opening, focus transfer to the selected section, Escape focus restoration, and clearing inert state for desktop navigation.
- Nine primary text/background pairs checked in each theme: minimum contrast **4.86:1 in light mode** and **7.04:1 in dark mode**. These checks do not replace review of every rendered element.
- Reduced-motion handling retained. The custom cursor now falls back to the native pointer under forced-colors/high-contrast settings.
- Portrait-first mobile reading order, existing profile details, custom scroll controls, theme switching, and the absence of CV links were preserved.
- CSS delimiter checks and `git diff --check` passed.

The project-preview refinement keeps the Crop and Bangla RAG leaf/document motifs. All six cards use closely framed illustration scenes with separate light/dark palettes. Mobile cards enlarge the drawings and omit the small concept caption. The actual contract-type chart remains in the churn case study alongside its confusion matrix, preserving both notebook outputs as evidence. Editable card/scene/share SVGs and PNG share exports are in `assets/projects/previews/`.

## Visual refinement

The prior implementation was committed as `48462f0` before these refinements. Her full name now leads the hero, with “Curious mind. Engineer at heart.” as its supporting line. Introductory copy was shortened, body text increased, text measures constrained, and section spacing tightened. The project grid retains six equal entries.

The experience timeline consistently presents employer, role, location, and a one-sentence description, with a separate current-role badge for Unibox IT. Dates, remote/onsite status, education, and the portrait-first mobile reading order are preserved.

A custom “n.” monogram is shared by navigation/footer wordmarks, a theme-aware SVG favicon, a 32px PNG fallback, a 180px Apple touch icon, and the social images. The dark illustration palettes are vector colors rather than image filters. Light/dark image pairs and the favicon were rendered and visually inspected outside the browser. Calculations using the actual heading font's metrics found that the name fits the intended text column at 320, 360, 390, 430, 760, 1100, and 1440px viewport widths; this does not replace browser layout testing.

After refinement, source checks covered all nine pages and 33 referenced local resources, including the new icon and scene files. Navigation logic tests passed at the updated 1000px menu breakpoint. The new scene/icon paths were validated on disk, without a fresh rendered-browser or HTTP audit.

## Portrait accessories and readable labels

The visual-refinement version was committed as `bf01147` before these changes. The portrait note is now a fabric-style hang tag with an eyelet, thread loop, weave texture, and stitched border. It follows the photo mount in normal layout flow, rather than sitting over the subject's body. The atom motif was replaced with line-drawn spectacles on the portrait and homepage share image.

The location line uses 16px text at every breakpoint. Informative rem-based labels have a 13px minimum; the fabric tag's first line is 14px and its italic line is 18–19px. The label/background contrast checks passed in both themes. The garment tag and its exact browser appearance still need the manual layout review described below.

All decorative and action glyphs were replaced with CSS geometry or SVG paths. A source scan of HTML, JavaScript, CSS, and SVG files found no Unicode emoji/pictographic text characters. Copy-email success feedback is plain text. Nine-page structure/link checks, script syntax checks, CSS structure checks, and `git diff --check` passed.

## Floating portrait composition

The offset outline was removed from the portrait. The photo now has a padded, softly rounded frame and a soft shadow. The fabric tag remains below the photo; spectacles, a ribbon bow, an outlined heart, and a botanical sprig surround the frame. All artwork is decorative SVG. Independent transform-only animations are enabled only when reduced motion is not requested, with smaller accessories at the mobile breakpoint. The portrait-first mobile reading order is preserved.

Monogram SVGs were removed from all nine pages' navigation and footer areas; the text home links remain. Favicon and share-image branding are unchanged. Source checks passed for IDs, headings, local resources, CSS structure, script syntax, portrait ordering, monogram removal, and the absence of emoji. The updated floating composition has not been inspected in a rendered browser.

## Dimensional charms, portrait seal, and name greeting

Six SVG ornaments plus the spectacles now use shaded gradients, highlights, and layered shadows. A pearl, flower, and faceted gold charm join the bow, heart, and botanical sprig. Their mobile sizes remain bounded around the portrait. The former caption is a raised circular seal over the lower photo, with the same wording around its rim.

On each document load, the visible surname expands from Bina to Binaaaaaa and contracts once. Extra letters are removed after completion or cancellation; a screen-reader-only final surname remains stable throughout. The animation waits for fonts, fits the available heading width, and is skipped for reduced motion or unavailable Web Animations support. Temporary runtime checks passed for one-shot behavior, cleanup, cancellation, narrow-heading fitting, and pages without the surname. HTML references/IDs, CSS structure, and script syntax checks passed. The mobile detail-page text home link also remains visible after monogram removal.

These changes have not received rendered-browser visual review.

## Bottom-center stamp and personal footer credit

The circular seal was replaced with a transparent, double-bordered ink-style stamp centered over the lower portrait. Lipstick, a compact, a notebook, a pencil, and a tulip join the existing floating ornaments. The eleven decorative charms and spectacles keep their dimensional shading, independent motion, and mobile sizing; reduced-motion handling is unchanged.

All nine pages now include “Built with ♡ by husband” in their footer. The husband link targets https://zunaaaaayed.github.io in a new tab with noopener/noreferrer and a screen-reader hint. Footer text uses 14px sizing. The outlined heart is explicitly requested for this credit.

Nine-page structure/reference checks, footer URL/target checks, stamp placement, decorative SVG checks, CSS structure, script syntax, one-shot name animation checks, and git diff whitespace checks passed. Exact stamp placement and ornament spacing still require rendered-browser review.

## Imperfect circle and orbiting ornaments

The stamp was removed. The portrait uses a square aspect ratio with asymmetric elliptical corner radii for an imperfect circular frame. A shaded perfume bottle replaces the pencil. Twelve evenly phased orbit carriers take the decorative SVGs around the portrait once every 90 seconds; inner carriers counter-rotate to keep each object upright, and the individual bobbing animations remain independent. The fabric note stays readable beneath the composition. Reduced motion disables orbiting and bobbing while retaining evenly distributed static positions.

Source checks passed for all nine pages' IDs/local references, stamp/pencil removal, replacement artwork, twelve carrier phases, CSS structure, and script syntax. A numerical full-route check confirmed equal angular spacing and cancelling carrier rotations. This verifies the animation geometry, not rendered mobile spacing; browser visual review remains pending.

## Orbit decoration visibility fix

The global `img, svg { max-width: 100%; }` rule constrained decorative SVGs to their zero-width orbit anchors. The portrait accessory selector now explicitly sets `max-width: none`, preserving each object's declared desktop/mobile dimensions.

A local-file preview in native Chrome was visually inspected after the fix. The desktop dark-theme portrait displayed all twelve ornaments around the imperfect circular frame, including spectacles, makeup, flowers, notebook, perfume bottle, and pearl. This is a desktop visual check; mobile, light-theme, reduced-motion, and full accessibility/performance audits remain outstanding.

## Flat, stationary-position decorations and attached tag

The shaded accessories were redrawn as single-color SVG outlines. Gradients, highlights, ornament shadows, orbit wrappers, and rotation animations were removed. The twelve objects now have fixed, spaced positions outside the portrait and only bob vertically. The photo and tag share one gently floating mount; the tag sits 18px below the frame and its centered thread overlaps the frame edge so it stays attached throughout motion.

The updated desktop dark-theme composition was visually checked in Chrome after reloading from disk: flat artwork, separated placement, and the centered connected tag were visible. Source checks passed for all twelve outline SVGs, removed orbit/shadow styles, tag structure, CSS structure, and all nine pages' IDs/local references. Mobile and light-theme visual checks remain outstanding.

## Droplet frame, revised flowers, and adaptive name length

The focus strip and its three topics were removed, together with their unused styles. A rose, cosmos, and lavender stem replace the previous floral artwork, and a flat line-drawn pen joins the decorations. The tag thread now runs from the lower frame to an eyelet near the tag's upper-left corner.

The portrait border continuously morphs through four asymmetric circular shapes over 14 seconds; the image inherits the changing radius. Reduced-motion settings keep the frame static. The surname greeting now measures the loaded font and the first-name line to choose the number of added a's, without reducing its font size. It contracts once, removes the extra characters, and cancels safely on resize or a motion-preference change.

Desktop Chrome visual inspection confirmed the revised frame, flowers, pen, and corner attachment. Temporary runtime checks passed for the adaptive name width on wide/narrow layouts, increased letter count, one-shot behavior, reduced motion, cleanup, and resize cancellation. Nine-page references/IDs, CSS structure, script syntax, and whitespace checks passed. Mobile/light-theme visual review remains outstanding.

## Spectacles, diamond ring, and full-height landing

The overlapping lavender/cosmos cluster was removed, and the spectacles were moved into that lower-side space. A matching flat diamond-ring drawing now occupies the spectacles' former upper position. The remaining rose is separate from the replaced cluster.

The hero now has a viewport-based minimum height that subtracts the sticky header and safe-area inset, with a vh fallback and dynamic-viewport sizing. Old fixed/minimum-height breakpoint overrides were removed so the next section stays below the initial viewport while content may grow naturally on short or mobile screens.

Nine-page structure/local-reference checks, removal/replacement checks, CSS structure, breakpoint source checks, and whitespace checks passed.
A fresh Chrome preview visibly showed the ring above the frame, spectacles in the former flower-cluster area, and no lighter next-section strip at the bottom of the initial viewport.

## Balanced ornaments and literary introduction

The pen moved to the right, with more vertical spacing between the heart and spectacles. Lipstick, rose, and star positions were spread out on the left. The professional summary in the hero was replaced with the requested two-line quotation and a J. R. R. Tolkien attribution, using semantic figure/blockquote/figcaption markup and a citation URL.

Quote/attribution, local references, IDs, CSS structure, and whitespace checks passed. The current native Chrome reload stalled on a blank content area, so this latest composition did not receive a completed rendered visual review.

## Tag wording and faster frame motion

“Curious mind. Engineer at heart.” now appears only on the fabric tag; the duplicate line beneath the name and the old tag wording were removed. The continuous droplet morph now takes 5 seconds instead of 14, with reduced-motion handling retained. Source and whitespace checks passed.

## Distinct project preview palettes

Every project's preview now has a separate palette: White Board lavender, Service Provider sand, Coders Live blue, Bangla PDF RAG sea glass, Customer Churn rose, Crop Recommendation sage, and Fraud Risk honey. The changed projects' card SVGs, light/dark scene SVGs, social SVGs, and 1200×630 social PNGs were updated together, along with homepage card colors in both themes.

All seven social previews were visually inspected together as a contact sheet. Checks confirmed unique social background colors, valid SVG variants, correct PNG sizes, and text contrast of at least 4.5:1 for social-image labels and the changed light/dark card labels. CSS structure and whitespace checks passed.

## British English, Italian, and French

The navigation contact button was removed from the homepage and project pages. All nine pages now have a circular language control beside the theme toggle, showing the selected UK/Italian/French SVG flag and opening three labelled choices. The compact menu supports keyboard focus, Escape, outside-click dismissal, and pressed-state indication.

The shared catalogue contains 244 translated phrases covering homepage and case-study prose, the 404 page, navigation, dates/roles, metadata, image descriptions, footer, menu/copy feedback, theme labels, and scroll-control labels. Original names, institutions, publication titles, source filenames, code/tool names, and source-project artwork remain original. British English is the static no-JavaScript default (`en-GB`); prose and preview captions now use British spellings, and the churn social PNG was regenerated accordingly. README wording was updated.

Language choice persists in local storage and language-qualified internal links, with a URL query overriding storage and working when storage is blocked. Translation updates text nodes in place, preserving icons, links, animations, and event handlers. Source titles and metadata also change with the language. English, Italian, and French switching was exercised in native Chrome, including the circular flag menu, Italian case-study navigation, translated accessibility labels, and return to English.

Temporary runtime checks passed for reversible translations, dynamic feedback, proper-name/whitespace preservation, saved/URL preferences, blocked storage, internal-link query/hash preservation, cross-tab updates, invalid-language handling, and percentage labels. All nine pages passed locale-control/script-order checks, local-resource/anchor checks, metadata-translation coverage, British-English prose checks, SVG/CSS validation, script syntax checks, and whitespace checks. The adaptive surname greeting check still passes. No full mobile-device or screen-reader audit is claimed.

## Remaining manual checks

Browser control timed out in this session. No Safari/Chrome rendered-layout review, real-phone testing, screen-reader walkthrough, automated browser accessibility scan, or Lighthouse score is claimed.

Before publication, review both themes at 320, 390, 430, 760, and desktop widths; check landscape phones and 200% zoom; walk through the mobile menu and top scroll range with the keyboard; inspect all case-study pages; and verify demo functionality interactively. Measure performance on the published site under mobile network/CPU conditions.

Project code, model training, and project backends were not executed locally or modified during this portfolio update. External demos were checked for endpoint availability only.
