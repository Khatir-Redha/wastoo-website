# Wastoo landing page — reference analysis and design spec

## Evidence and confidence

The attached reference was inspected at its supplied image dimensions of **564 × 846 px** and via enlarged crops of the desktop and mobile columns. The image is a presentation board: a desktop landing-page capture and a narrow mobile capture are displayed side by side beneath the heading “Landing Pages Redesign / Design Services.” The page designs themselves are scaled down substantially within that board.

Visible observations below describe only what can be seen in the static capture. Values for CSS-like sizes, spacing, widths, radii, and colors are visual estimates extrapolated from the scaled presentation image, not measurements from source files or browser developer tools. The exact source viewport, zoom, design grid, font files, component states, and content below the crop are unknown. **Every numerical design value in this spec is marked as an estimate.** No hover states, animations, transitions, or hidden behavior are inferred.

The reference depicts a nutrition/health product. Its specific text, imagery, charts, metrics, coaching, and product features are not Wastoo content and must not be reused. The Wastoo mapping follows [wastoo-brief.md](../wastoo-brief.md) whenever product content or brand takes precedence.

## 1. Section-by-section structure

The order below follows the visible website content from top to bottom in the reference. The website capture ends partway through the final CTA area; content below that crop is unknown. The mobile column follows a similar content sequence but changes composition and stacks content vertically.

| Reference section (visible order) | Desktop composition | Mobile composition / difference | Wastoo adaptation |
|---|---|---|---|
| Header | A small brand mark at the left; three short text links across the left/center; a small outlined pill action toward the right. No large full-width background bar is apparent. **Estimate:** a compact row within the page width. | Compact mark at the leading edge and a small menu icon at the opposite edge; desktop text-link row and its pill action are not shown in the visible mobile header. | Use the Wastoo logo, brief's three core links, locale selector, and a truthful launch CTA. Mobile menu follows the brief. Preserve a light, pill-oriented treatment without claiming the reference had a language selector. |
| Hero | Asymmetric two-column hero: text and actions occupy the left side; a large lifestyle photograph / media card fills the right side. The headline is large and broken across three lines, with selected words in green. Small eyebrow above, short supporting paragraph, paired actions, then a row of small chips/labels. Three small floating cards overlap the left edge or lower part of the media; a circular arrow control appears near the image's lower edge. | Media is placed first and is nearly the full mobile content width; headline appears over the lower portion of the photo on a darkened/green-tinted area. A compact floating product card is overlaid near the bottom of the photo. Text, small chips, supporting copy, and paired actions follow below. The desktop's broad side-by-side split collapses to a vertically stacked, media-first composition. | Use the brief's asymmetrical hero and Wastoo copy. Use only real Wastoo imagery; absent screenshots require the brief's restrained typographic fallback, not the reference photo or a fabricated app screen. Highlight one meaningful word. Any overlay must state only verified status/context and must not imply a made-up feature. |
| Introductory benefit / insight section | A left-aligned eyebrow and two-line heading introduce benefits. Small supporting copy sits below. A compact row of three icon-and-label benefit summaries appears toward the right. | Centered heading and short copy follow the hero; the benefit summaries become a vertically stacked list with one icon/label row at a time. | Adapt to Wastoo's problem and opportunity: discovery, connection, and organization. Avoid numerical impact or data dashboards. See [brief §10](../wastoo-brief.md#10-problem-and-opportunity-section). |
| Large feature panel and adjacent media | A large saturated green rounded rectangle holds a centered short heading and several small white product/data cards. A separate rounded photographic panel sits adjacent on the right. A pale-green vertical side element is partly visible at the left edge. | The green panel becomes a single-column, nearly full-width surface. Its white mini-cards stack vertically; the adjacent desktop photo panel is not shown alongside it in the visible mobile crop. Pagination dots appear just below the green panel. | Use one large brand-color panel for a concise, already-supported explanation of Wastoo's ecosystem or intended journey. Do not reproduce the nutrient/data cards as fake UI. Adjacent imagery can be omitted unless authentic, supplied Wastoo media exists. |
| Pagination | A small centered row of dots/pill indicators follows the green panel. The image does not establish whether these control a carousel, indicate a slide, or are decorative. | Similar small centered indicators follow the stacked panel. | Only use accessible pagination if it controls a real set of Wastoo screenshots or content panels. Otherwise drop it; never add inert decoration or assume autoplay/swipe behavior. |
| Product / capability section with dark accordion | A new two-column section begins: a rounded lifestyle/product image with a small data-card overlay on the left; on the right an eyebrow, bold heading, pale summary panel with compact insight rows, and a dark rounded accordion with two visible collapsed rows and plus icons. | A centered heading comes before the rounded image; the image spans the content column and includes the overlaid chart card. A short centered paragraph follows, then compact insight rows; the lower continuation is cropped. The desktop's side-by-side image/text arrangement becomes a vertical flow, and the dark accordion is not visible in the mobile crop area shown. | Map to the Wastoo how-it-works or roles content, only after deciding which genuine content belongs here. A dark accordion surface may be used for real Wastoo FAQs as called for by the brief. Do not fabricate a product data panel or accordion features. See [brief §§11–12, 15](../wastoo-brief.md#11-how-wastoo-works). |
| Closing CTA (partially visible) | A short centered line of copy, small colored marker/eyebrow, and a centered bold CTA heading begin at the lower edge. The remainder is cut off. | The corresponding content is below the visible mobile crop. | Use the coming-soon section from [brief §14](../wastoo-brief.md#14-coming-soon-section), with no invented launch date, app-store link, or false signup success. |
| Footer | Not visible in the provided crop. | Not visible in the provided crop. | Build the footer from Wastoo's verified brand/contact information only, following [brief §16](../wastoo-brief.md#16-footer); the screenshot provides no footer evidence. |

### Mobile-specific observations

- The mobile page is a deliberately separate, narrow composition, not merely the desktop columns reduced in scale. Its header is compact, the hero photo leads, its headline is placed over the image, and later content stacks.
- The desktop hero copy/media split becomes a media-first card with text below; the mobile crop shows an overlaid product-style card and headline on the photo.
- Desktop benefit summaries align in a horizontal row; mobile summaries stack in a vertical list.
- The broad green feature panel's mini-cards stack, and its accompanying desktop photo is not beside it in the visible mobile layout.
- A section that is split image/text on desktop becomes heading → image → paragraph/summary list on mobile.
- The reference's visible mobile crop stops before its footer and much of its lower page. No unseen mobile structure is inferred.
- Wastoo's Arabic RTL presentation should be composed with CSS logical properties and language-specific line lengths, not produced by blindly mirroring this nutrition-page screenshot.

## 2. Header

- **Height:** content row appears compact. Proposed Wastoo target: **about 56–72 px desktop and 52–64 px mobile (estimates)**, excluding any outer page padding.
- **Shape:** light, unobtrusive header area; the visible outlined action is pill-shaped. The screenshot does not clearly show the entire nav as a single enclosing capsule, so do not assume a full pill container unless desired for Wastoo's style adaptation. Proposed CTA radius: **about 999 px (estimate)**.
- **Item count:** the reference visibly shows a small mark, approximately three text links, and one outlined pill action on desktop (count is a visual estimate). Mobile shows the mark plus one menu icon; no link list is visible in the collapsed state.
- **CTA style:** small outlined pill at the right of the desktop header, dark/green text and a small icon. Its destination and interaction are unknown. For Wastoo, use the brief's locale control and a launch CTA only with a real, approved destination; the Wastoo brief suggests an emerald primary CTA, so palette and priority may intentionally differ from the reference.
- Sticky behavior, hover/focus appearance, menu opening, and action outcome cannot be observed in the static image.

## 3. Hero

- **Layout ratio:** text at left and media at right. The visible desktop content division is approximately **48:52 (estimate)** within the hero's usable width; the media appears slightly wider. Mobile abandons the ratio and stacks media first with a near-full-width image card.
- **Headline size and wrapping:** approximately three visible desktop lines, with a compact lead-in/eyebrow above; the final words are colored green. At the board's rendered scale, a likely desktop display size is **about 56–68 px, weight 700–800, line-height 1.0–1.15 (estimates)**. Mobile headline overlay appears around **20–26 px, weight 700–800, line-height 1.05–1.2 (estimates)** at its rendered size. These are extrapolated estimates and must be calibrated to the actual Wastoo viewport, font, and translations.
- **Highlighted word treatment:** one or two words are green within an otherwise near-black heading; the highlight appears to be text color, not a solid marker block. This is distinct from the user's shorthand “one highlighted word”; use exactly one important word for Wastoo unless the real image's wording is approved otherwise. Use Wastoo emerald, not the reference's particular green.
- **CTA pair:** one quiet outlined/pale pill and one solid green pill with an arrow/icon are visible below desktop supporting copy. The exact labels and actions are not reusable. For Wastoo, adapt to “Discover Wastoo” and “Coming soon” from [brief §8](../wastoo-brief.md#8-hero-section), with valid section destinations and no download implication.
- **Chips:** a horizontal row of small, low-contrast pill labels appears beneath the desktop actions. The labels are too small to identify confidently, and the mobile crop shows a compact set of short labels below the hero card. Exact wording/count is unknown. Wastoo may use verified context tags only; omit rather than imply unsupported features, audience counts, or capabilities.
- **Media card radius:** the hero photo has prominent, visibly soft corners and a curved/irregular upper silhouette. Proposed Wastoo main media radius: **about 24–32 px on desktop / 20–28 px on mobile (estimates)**. The distinctive top shape may be part of the image/presentation, so do not claim a CSS cutout without inspecting the source.
- **Floating-card pattern:** three small rounded white cards overlap the desktop photo's left/lower edge; they resemble data/list/profile content. The mobile hero shows one compact white pill/card overlapping the photo near the lower edge. For Wastoo, use at most one understated, truthful status/context card and do not cover actual screenshots. The card content, behavior, and relationship to the round arrow control cannot be verified.
- **Arrow control:** a circular arrow appears within the desktop photo near its lower edge. Its purpose is unknown; do not assume carousel navigation. Use only if attached to a valid, accessible action.
- **Imagery fallback:** the reference's lifestyle and product imagery belongs to a nutrition app. It is deliberately excluded. No Wastoo app screenshot is present in the tagged assets for this phase; follow the Wastoo brief's typographic/brand-graphic fallback until authentic screens are provided.

## 4. Typography hierarchy

The reference font cannot be identified reliably from the small raster capture. It appears to use a modern, rounded/geometric sans-serif, with heavy display headings, compact body copy, and green emphasis. **Closest free match by visual character: Inter (estimate)**; it is a practical approximation, not a verified font identification. Wastoo's implementation may use its specified Geist for Latin as a close modern sans match and IBM Plex Sans Arabic for Arabic.

| Role | Reference observation | Proposed Wastoo implementation |
|---|---|---|
| Hero eyebrow | Small green label above the heading. **About 11–14 px, weight 500–600, line-height 1.2–1.4 (estimates).** | Geist (or Inter); Arabic uses IBM Plex Sans Arabic. Use concise localized copy. |
| Hero heading | Bold, near-black, approx. three desktop lines; selected word(s) green. **About 56–68 px desktop, 20–26 px in the displayed mobile capture; weight 700–800; line-height 1.0–1.2 (estimates).** | Geist 600–700 Latin; IBM Plex Sans Arabic 500–700 with a more generous Arabic line height. Adjust fluidly by locale and actual viewport rather than match the board's scaled mobile pixels literally. |
| Section heading | Bold, near-black, sometimes with one green phrase. **About 30–40 px desktop and 20–26 px mobile; weight 650–750; line-height 1.1–1.25 (estimates).** | Geist/IBM Plex Sans Arabic; keep a consistent section hierarchy. |
| Body copy | Small neutral gray-green text. **About 14–17 px desktop and 12–15 px mobile; weight 400–500; line-height 1.45–1.65 (estimates).** | Use Wastoo brief's comfortable body range of 16–19 px as a starting point; do not shrink Wastoo text to the scaled screenshot size. |
| Small insight labels / chips | Very compact text with muted color and small icons. **About 11–13 px; weight 400–600; line-height 1.2–1.4 (estimates).** | Use only real labels; meet contrast and touch-target expectations. |
| Buttons / nav | Compact medium-weight sans-serif. **About 12–15 px; weight 500–600; line-height 1.2–1.4 (estimates).** | Localize without clipping; apply Wastoo brand colors and accessible focus states. |
| Accordion rows | Compact white/light text on a near-black plum-colored rounded panel. **About 14–17 px; weight 500–600 (estimates).** | Dark forest panel `#172B2A`, Wastoo FAQ content, keyboard-operable disclosures. |

Arabic sizes and line-height values are proposed estimates and should be evaluated separately. Never reuse Latin line breaks or alignments as Arabic requirements.

## 5. Spacing, width, radii, shadows

The board does not provide CSS measurements or source viewport metadata. All values below are **visual estimates / implementation starting points**, not inspected measurements.

- **Spacing base:** the screenshot appears to use a compact, consistent rhythm. Proposed **8 px base with 4 px half-steps (estimate)**. Working scale: **4, 8, 12, 16, 24, 32, 48, 64, 80, 96 px (estimates)**.
- **Container width:** desktop webpage appears around **326 px wide on the 564 px board (observed approximate rendered footprint)**; this is the reduced preview, not a source CSS width. If treated as a normal desktop landing page, proposed max content width is **about 1,200–1,280 px (estimate)** with fluid margins. Mobile preview is about **85 px wide on the board (observed approximate rendered footprint)**; it is not the intended device CSS width.
- **Gutters:** visible scaled desktop page side padding suggests roughly **40–64 px per side (estimate when extrapolated to a full desktop layout)**. Proposed Wastoo gutters: **24–32 px desktop, 16–20 px mobile (estimates)**.
- **Section padding:** broad whitespace separates major sections. Proposed **80–112 px desktop / 48–72 px mobile (estimates)**; compact internal media-to-caption spacing may use **16–24 px (estimate)**.
- **Distinct radii:** 
  - Pill controls / chips: **999 px (estimate)**.
  - Hero image and large feature/media panel: **24–36 px (estimate)**.
  - Secondary photo / feature card: **18–28 px (estimate)**.
  - White mini-cards and floating overlays: **10–16 px (estimate)**.
  - Dark FAQ accordion container: **14–20 px (estimate)**.
  - Circular icon/arrow action: **50% / 999 px (estimate)**.
- **Shadows:** cards appear softly elevated against pale surfaces, but the small raster makes shadow extent and opacity uncertain. Proposed subtle card shadow `0 8px 24px rgb(23 43 42 / 8%) (estimate)`; floating overlay `0 10px 28px rgb(23 43 42 / 12%) (estimate)`. Prefer a subtle border over strong shadows in Wastoo's implementation. Do not reproduce the screenshot's softening as blur on actual app screenshots.

## 6. Components

| Component | What is visible | Wastoo adaptation / constraints |
|---|---|---|
| Buttons | Small rounded/pill actions; hero shows one pale/outlined action and one solid green action with a small arrow. | Use Wastoo emerald for the primary action and a quieter secondary action. Preserve the truthful “Discover” and “Coming soon” intent in [brief §8](../wastoo-brief.md#8-hero-section). No dead links or fake download actions. |
| Chips | Small pale pills appear below the hero actions; exact labels are illegible. | Use only verified contextual labels. Omit unknown tags; do not invent materials, features, or locations. |
| Cards | Several small white cards, sometimes layered, appear over images or within the green panel. | Use for real content only. No nutrition data, fake listings, profile cards, user totals, or invented product screen. |
| Hero media | Large rounded lifestyle photo card on desktop and a nearly full-width media card on mobile; desktop image has overlay cards and circular arrow. | Use authentic Wastoo assets only. With screenshots unavailable, use the brief's clean typographic fallback. Keep any static overlay clear of key content. |
| Feature panel | A saturated green rounded rectangle contains a centered short title and multiple white mini-cards; desktop shows another image card beside it. | Translate the panel's strong visual emphasis using Wastoo emerald/mint/pale green and authentic copy. Do not place fictional data UI in it. |
| Accordion | Dark rounded panel with two visible rows and plus marks; rows appear closed in the capture. | Use Wastoo's FAQ questions and accurate answers. The captured closed appearance is visible; open-state details and transition are unknown. Support keyboard use and visible focus. |
| Carousel dots | Small centered dot/pill indicators between page sections, especially below the green panel. | Their function is unknown. Implement only if controlling real, accessible Wastoo slides; otherwise omit. No autoplay or swipe behavior is evidenced. |
| Floating cards | White compact cards overlap the hero/product photos. | Optional single static context/status card only if useful and truthful. Avoid covering authentic product media or suggesting unverified product capabilities. |
| Feature/insight rows | Small icon + label + short value/status rows repeat in pale panels and on mobile. | Do not repurpose as fabricated metrics. A short explanatory list of the Wastoo journey may be used only if product stage supports the wording. |

## 7. Mapping and deliberate drops

| Reference element | Wastoo equivalent | Brief mapping |
|---|---|---|
| Compact brand header and nav links | Wastoo mark, “How it works,” “Our mission,” “FAQ,” language switcher, and configured launch CTA | [§7 Navigation Design](../wastoo-brief.md#7-navigation-design). |
| Eyebrow + bold hero headline | “A new approach to waste recovery in Algeria” and “Turn waste into opportunity.” | [§8 Hero Section](../wastoo-brief.md#8-hero-section). |
| Green-highlighted headline word(s) | Highlight one Wastoo headline word using emerald/mint with readable contrast | [§3 Visual Identity](../wastoo-brief.md#3-visual-identity) and [§8 Hero](../wastoo-brief.md#8-hero-section). |
| Two hero actions | “Discover Wastoo” and truthful “Coming soon” navigation/status action | [§8 Hero](../wastoo-brief.md#8-hero-section); no implication that the app can be downloaded. |
| Hero photo with floating cards | Authentic product screenshot, or typography/brand treatment while screenshots are unavailable; at most one truthful overlay | [§8 Hero](../wastoo-brief.md#8-hero-section) and [§9 Product Preview](../wastoo-brief.md#9-product-preview-section). |
| Benefit headline and insight row | Discovery, connection, and organization explanation | [§10 Problem and Opportunity](../wastoo-brief.md#10-problem-and-opportunity-section). |
| Large saturated feature panel | Wastoo's ecosystem participants or intended journey in one editorial panel | [§11 How Wastoo Works](../wastoo-brief.md#11-how-wastoo-works) and [§12 Ecosystem Participants](../wastoo-brief.md#12-ecosystem-participants). |
| Second image + feature details + dark accordion | A real Wastoo how-it-works / roles explanation plus FAQ disclosures if the content placement remains clear | [§11 How Wastoo Works](../wastoo-brief.md#11-how-wastoo-works), [§12 Ecosystem Participants](../wastoo-brief.md#12-ecosystem-participants), [§15 FAQ](../wastoo-brief.md#15-frequently-asked-questions). No fake app screen. |
| Dots under panel | Accessible pagination only for a real Wastoo media/content carousel | Requires supplied authentic media and actual carousel behavior. Otherwise drop. |
| Lower centered CTA teaser | “Be part of the Wastoo launch” with verified contact/interest path, or a truthful status message | [§14 Coming-Soon Section](../wastoo-brief.md#14-coming-soon-section). |
| Dark bottom / closing footer (not visible in reference) | Wastoo footer in dark forest with verified links and approved logo | [§16 Footer](../wastoo-brief.md#16-footer); not inferred from the reference image. |

### Deliberately drop

- Nutrition, dieting, weight loss, meal planning, food photos, calorie or macro tracking, personal coaches, wellness goals, and any equivalent functionality Wastoo does not have.
- Charts, bar graphs, progress visualizations, “data-driven insights,” counts, report values, and all other invented or unsupported metrics.
- Fake user/profile cards, diet plans, notifications, health scores, AI coaching, or interface screenshots based on the reference.
- The reference photography, logo, page title, copy, iconography if brand-specific, and non-Wastoo palette. Use only supplied Wastoo assets and approved brand colors.
- The plus-row accordion content from the reference; use only Wastoo's verified FAQs.
- Decorative carousel controls unless they control a real, accessible Wastoo asset sequence.
- Any exact release date, app-store badge, social account, testimonial, partner, award, or submission-success state not verified for Wastoo.
- Any hover effect, transition, animation, sticky behavior, carousel autoplay, swipe, or other interaction not observable in this static image or explicitly required by Wastoo's product behavior.

## 8. Proposed Wastoo design tokens

All entries in this table are **estimates/proposals** for adapting the observed design language. The Wastoo palette hex codes themselves are supplied brand values; the table's component assignments are proposals, not sampled reference colors.

| Token | Proposed value | Status / use |
|---|---|---|
| Primary emerald | `#087F5B` | **Estimate for mapping; exact supplied palette value.** Primary CTA, selective text emphasis, small icons. |
| Mint accent | `#42D6B0` | **Estimate for mapping; exact supplied palette value.** Subtle emphasis or supporting panel. Use dark text if contrast requires it. |
| Dark forest | `#172B2A` | **Estimate for mapping; exact supplied palette value.** Dark FAQ/mission/footer surface, replacing the reference's near-black plum tone. |
| Main background | `#FAFCFA` | **Estimate for mapping; exact supplied palette value.** Pale page background. |
| Secondary background | `#F0F6F2` | **Estimate for mapping; exact supplied palette value.** Muted cards/section surface. |
| Card background | `#FFFFFF` | **Estimate for mapping; exact supplied palette value.** Floating cards and light cards. |
| Primary text | `#263D36` | **Estimate for mapping; exact supplied palette value.** Main readable text, replacing reference black. |
| Muted text | `#65756E` | **Estimate for mapping; exact supplied palette value.** Supporting copy; verify contrast at rendered sizes. |
| Subtle border | `#E0EAE4` | **Estimate for mapping; exact supplied palette value.** Outlined actions and card boundaries. |
| Spacing base | `8 px`, with `4 px` half-step | **Estimate.** Proposed scale: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96 px`. |
| Content max width | `1,200–1,280 px` | **Estimate.** Centered desktop container; the board preview width is not a CSS container measurement. |
| Page gutters | `24–32 px desktop; 16–20 px mobile` | **Estimate.** Use logical inline padding and recheck RTL. |
| Section padding | `80–112 px desktop; 48–72 px mobile` | **Estimate.** Adjust to the real page length and content density. |
| Radius: pill controls | `999 px` | **Estimate.** Nav action, buttons, chips. |
| Radius: hero media / large panel | `24–36 px desktop; 20–28 px mobile` | **Estimate.** Large media surface and dominant feature card. |
| Radius: secondary card | `18–28 px` | **Estimate.** Supporting photographic/content panels. |
| Radius: small overlay card | `10–16 px` | **Estimate.** Compact floating info card. |
| Radius: dark accordion | `14–20 px` | **Estimate.** Outer FAQ panel. |
| Radius: circular action | `50%` | **Estimate.** Only for a real icon button/control. |
| Card shadow | `0 8px 24px rgb(23 43 42 / 8%)` | **Estimate.** Low-elevation separation; prefer border over heavy shadow. |
| Overlay shadow | `0 10px 28px rgb(23 43 42 / 12%)` | **Estimate.** Optional static overlay only. |
| Latin font | Inter closest free visual match; use Geist if retaining the project font setup | **Estimate.** Reference font cannot be identified from this raster. |
| Arabic font | IBM Plex Sans Arabic | **Estimate for visual sizing; specified brand preference.** Tune glyph size and line height separately from Latin. |
| Hero type scale | `56–68 px desktop; 20–26 px in displayed mobile capture` | **Estimate from downscaled board.** Implementation should use responsive values appropriate to actual browser viewport, not literal board pixels. |
| Section heading scale | `30–40 px desktop; 20–26 px mobile` | **Estimate.** Weight approximately `650–750`, line height `1.1–1.25`. |
| Body type scale | `14–17 px desktop; 12–15 px in displayed mobile capture` | **Estimate from downscaled board.** Prefer the Wastoo brief's more readable 16–19 px body starting range in actual implementation. |
| Small label scale | `11–14 px` | **Estimate.** Validate legibility and translated Arabic. |

## 9. Open questions

1. Which authentic Wastoo app screenshots, if any, should replace the reference's nutrition imagery in the hero or product-preview areas? No screenshots were attached with this phase. Until supplied, the Wastoo brief's typographic fallback is the correct approach.
2. Should the floating hero card communicate only a static “Coming soon in Algeria” status, or should it be omitted? Its original role cannot be verified, and Wastoo should not invent a feature to fill it.
3. Does Wastoo have a confirmed interest/contact destination for the “Join the launch” CTA, and is the suggested launch form backend actually configured? If not, which verified contact channel should be used?
4. Should a Wastoo carousel exist at all? The reference has pagination dots, but the screenshot does not prove their function; a carousel needs multiple real Wastoo assets and an accessible interaction.
5. Are the supplied `public/brand/wastoo-logo-primary.svg` and `wastoo-logo-white.svg` both approved for nav/footer placement? The white logo variant appears intended for dark surfaces; confirm before using it on pale backgrounds.
6. Once UI implementation begins, should the desktop nav follow the brief's language selector + launch action, and should the mobile menu expose the same links in a disclosure panel? These are Wastoo behavior decisions, not visible in the reference's static mobile header.
7. The reference's desktop capture shows the FAQ-like dark card only in the lower portion; should Wastoo place its FAQ near the footer as in the brief, or retain an earlier placement for visual rhythm? The Wastoo brief's section order should prevail unless you explicitly choose otherwise.

## Sources and phase boundary

- Static reference: user-attached `reference-landing.jpg`, **564 × 846 px**. Enlarged crops were used to inspect the desktop and mobile captures. The reference content is a nutrition landing page and is used only for visual-language analysis.
- Wastoo content, palette, locales, product stage, and asset constraints: [wastoo-brief.md](../wastoo-brief.md).
- Process guidance: [master-prompt.md](../master-prompt.md).
- This is a design-specification phase only. No UI code or files other than this document were changed for this phase.
