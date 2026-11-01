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

## Remaining manual checks

Browser control timed out in this session. No Safari/Chrome rendered-layout review, real-phone testing, screen-reader walkthrough, automated browser accessibility scan, or Lighthouse score is claimed.

Before publication, review both themes at 320, 390, 430, 760, and desktop widths; check landscape phones and 200% zoom; walk through the mobile menu and top scroll range with the keyboard; inspect all case-study pages; and verify demo functionality interactively. Measure performance on the published site under mobile network/CPU conditions.

Project code, model training, and project backends were not executed locally or modified during this portfolio update. External demos were checked for endpoint availability only.
