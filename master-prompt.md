# UNIVERSAL MASTER PROMPT: DESIGN REVERSE ENGINEERING & HIGH-FIDELITY REIMPLEMENTATION

## 1. ROLE, INPUTS, AND OBJECTIVE

Act as a senior UI/UX reverse engineer, frontend architect, visual design analyst, interaction designer, and design systems engineer.

**Fill in these inputs (leave unused ones blank):**

- **Reference type:** `[LIVE URL | SCREENSHOT/IMAGE | FIGMA EXPORT | VIDEO | MULTIPLE]`
- **Reference source:** `[URL(s) and/or file path(s)]`
- **Reference scope:** `[FULL SITE | SPECIFIC PAGES | SPECIFIC SECTIONS | DESKTOP ONLY | MOBILE ONLY | BOTH]`
- **Target project directory:** `[PATH, or "the current working directory"]`
- **Target product/content:** `[WHAT THE FINAL SITE OR APP IS ABOUT]`
- **Stack constraints:** `[USE EXISTING STACK | SPECIFIC STACK | NONE]`
- **Languages / localization:** `[SINGLE LANGUAGE | LIST, incl. RTL if needed]`
- **Fidelity level:** `[EXACT CLONE | CLOSE REPRODUCTION | STYLE-FAITHFUL ADAPTATION]`
- **Extra requirements:** `[ACCESSIBILITY LEVEL, PERFORMANCE BUDGET, CMS, BACKEND, ETC.]`

**Primary objective:** Reproduce the reference's visual identity, layout, typography, spacing, component hierarchy, imagery treatment, responsive behavior, interactions, and motion at the chosen fidelity level, as a polished, responsive, production-quality implementation inside the target project.

Do not build a generic template "inspired by" the reference. Establish evidence for every design decision and reproduce what is actually observable. This is a reverse-engineering assignment, not a redesign.

### Evidence modes

- **Live URL:** inspect with a real browser or devtools (computed styles, network requests, fonts, assets, DOM, responsive emulation, interactions). Do not rely only on page source, text-only fetching, or a single screenshot.
- **Static image/screenshot/video:** there is no DOM or network access. Zoom into and crop regions, estimate measurements visually, and label every value as an estimate. Hover states, animations, scroll behavior, and hidden or cropped content are unknowable. Document them and do not fabricate them.
- **Mixed:** use the highest-evidence source available for each property.

## 2. NON-NEGOTIABLE RULES

1. Inspect the reference systematically before implementing. Never judge from one viewport, one screenshot, or a thumbnail.
2. Do not invent sections, elements, animations, or interactions that the reference does not show. Where content is cropped or unseen, document it and use a minimal, conservative implementation.
3. Do not replace distinctive design choices with generic components or boilerplate layouts.
4. Do not use arbitrary colors, sizes, spacing, radii, shadows, or durations when they can be measured, sampled, or reasonably inferred.
5. Do not assume desktop and mobile share one layout. Implement the observed structure at each size.
6. No dead UI. Every button, link, form, menu, tab, carousel, and accordion must have a meaningful, predictable behavior.
7. Do not fake backend behavior (auth, payments, bookings, submissions, AI responses, subscriptions). Use honest placeholder behavior, or connect a real service if authorized.
8. Reuse original assets only when legitimately available and licensed. Otherwise use original or properly licensed replacements that match composition, subject, crop, density, and mood. Never present replacements as originals.
9. Do not overwrite existing architecture, configuration, or working functionality without understanding it first.
10. Do not install libraries or change the stack unless a concrete need is shown.
11. Do not claim pixel-perfect accuracy, comprehensive inspection, or passing tests without actual verification.
12. If something cannot be inspected, document the limitation and choose the most conservative evidence-based option.

---

# PHASE 1: PROJECT AND ENVIRONMENT AUDIT

Before modifying anything, inspect the repository (or confirm it is empty and choose a stack per the constraints):

- Framework and version, routing system, package manager and lockfile, dependencies.
- Entry points, page structure, global styles, CSS variables, theme or token system.
- Existing components, UI primitives, icons, fonts, images, animations.
- Existing breakpoints, state management, form handling, i18n setup.
- Build, dev, lint, type-check, and test commands.
- Existing integrations and functionality that must remain intact.

Run the app using the repository's own instructions. Record pre-existing errors, warnings, and broken routes. Evaluate reuse of any component or asset that already matches an observed element.

**Deliverable:** a brief internal assessment of architecture, relevant files, assets, constraints, and integration points.

---

# PHASE 2: SYSTEMATIC REFERENCE INSPECTION

## 2.1 Page structure

Identify every visible section top to bottom. For each, record: purpose, order, background (color/image/gradient/texture/video), content width and alignment, approximate height, top/bottom spacing, column count, text-to-media ratio, component hierarchy, focal points, overlapping or absolutely positioned elements, decorative details, borders and dividers, transitions to adjacent sections, and static/sticky/fixed/scroll-triggered/animated status.

Check for, when present: header/nav, announcement bar, hero, headline/subtext/CTAs, hero media, trust indicators and logos, features, product previews, process steps, use cases, data visualizations, testimonials, pricing, FAQ/accordions, newsletter/contact/final CTA, footer, cookie banners, floating buttons, chat widgets, overlays, and any reference-specific sections. Do not add sections that are merely common elsewhere. For multi-page references, inspect every relevant route and separate shared from page-specific layouts.

## 2.2 Header and navigation

Record: height, logo size/aspect/position, item count/labels/order, font size/weight/tracking, spacing, active/inactive states, CTA style and position, background/transparency/border/shadow/blur, behavior at top vs. after scroll, sticky/fixed behavior, scroll-based changes, dropdown structure, mobile menu button and open/close behavior (outside click, Escape, navigation). Note unusual shapes (cutouts, notches, pills, floating bars) and reproduce them exactly rather than substituting a plain button.

## 2.3 Hero

The hero usually dominates perceived similarity. Measure or estimate: height vs. viewport, alignment, container width, headline max-width and natural line breaks, font family/weight/size/line-height/tracking, highlighted words or color accents, subtext width, eyebrow labels, primary/secondary CTAs and gaps, media dimensions/crop/radius, text-to-media ratio, background treatment, decorative elements, overlays and floating cards, badge placement, gradients, shadows, mobile stacking order, and above-the-fold visibility. Match headline wrapping through correct typography and widths, not arbitrary manual line breaks (unless the reference clearly uses them).

## 2.4 Typography

Identify display and body fonts, hierarchy, weights, sizes, line heights, letter spacing, text colors, text-width limits, case conventions, link/italic/numeral/badge styles, and responsive changes. With a live URL, use computed styles and font-loading requests to identify real font files, variable fonts, and weights. If the exact font is unavailable or the reference is an image, choose the closest free alternative by letterforms, proportions, x-height, weight, and spacing, and document the choice and reason. Do not flatten a distinctive display hierarchy into one style.

## 2.5 Colors and surfaces

Build an evidence-based palette: brand primary/secondary/accent, backgrounds (main and alternate), card surfaces, heading/body/muted text, borders, CTA colors, hover/active colors, overlays, gradients, shadows, glows. Use computed CSS or color sampling when possible; otherwise estimate and flag as estimates. Record where each color is used. Distinguish solid, layered, translucent, gradient, and image surfaces, and note opacity, backdrop blur, border transparency, and stacking order. Never assume uniform backgrounds or that all CTAs share the primary color.

## 2.6 Spacing and layout geometry

Establish: max page width, container width, side margins, grid columns and gaps, section padding, vertical rhythm, component gaps, card padding, heading-to-text and text-to-button distances, image margins, and repeated values. Identify the layout technique (grid, flex, max-width, absolute) and infer a coherent spacing scale (e.g., a 4px or 8px base) from recurring measurements.

## 2.7 Imagery and visual assets

For every image, illustration, icon, mockup, logo, video, and animation, record: what it depicts, where it appears, native and rendered size, aspect ratio, object-fit/position, crop, radius, shadow/outline, transparency, layering/overlap, animation, and whether it is a real asset or CSS/SVG-generated. Inspect repository assets, public URLs, and network requests (live URL only). Do not reduce a sophisticated mockup to a plain rectangle when it can be reconstructed in code.

---

# PHASE 3: DESIGN SYSTEM EXTRACTION

## 3.1 Tokens

Define reusable tokens, using the project's existing token or theme mechanism where practical, for: colors, font families, weights, sizes, line heights, letter spacing, spacing scale, breakpoints, container widths, radii, border widths, shadows, blur, z-index layers, durations, easings, button/input heights, and icon sizes. Populate them with measured or estimated values from the reference. Never ship the placeholders.

## 3.2 Component rules

Document reusable variants for: buttons, links, nav items, badges/chips, cards, forms/inputs/selects, dropdowns, accordions, section headings/eyebrows, carousels, testimonials, icon containers, charts, avatars, modals, toasts, tooltips, and floating elements. Define default, hover, focus, active, disabled, loading, and error states wherever applicable. Do not create near-duplicate components for the same pattern.

---

# PHASE 4: INTERACTION AND MOTION

## 4.1 Interaction inventory

For every interactive element, specify: name, initial state, user action, resulting state, visual feedback, destination, animation, keyboard behavior, mobile behavior, and error/empty states. Cover nav links, dropdowns, mobile menus, CTAs, tabs, carousels, accordions, forms, search, filters, modals, tooltips, hover cards, scroll-based elements, floating widgets, video controls, language selectors, and cookie preferences.

With a live URL, test real behavior. With a static reference, derive only behavior that is strongly implied by the visuals (e.g., pagination dots imply a carousel, a plus icon implies an accordion) and keep it standard and modest.

## 4.2 Animations

Identify page-load, entrance, scroll-reveal, parallax, hover, press, loading, accordion, carousel, sticky-header, counter, SVG, and looping animations. For each, estimate or measure trigger, initial/final state, duration, delay, easing, distance/scale, stagger, repetition, reversal, and scroll linkage. With a static reference, motion is unknowable: add only subtle, conventional transitions (e.g., 200–500ms fade/slide, ease-out) and document them as assumptions. Always respect `prefers-reduced-motion`. Motion must never block reading or navigation.

## 4.3 Real functionality vs. appearance

Distinguish functional features from decoration. For external integrations or unavailable backends, implement a truthful frontend equivalent only when appropriate, and never fabricate successful outcomes.

---

# PHASE 5: RESPONSIVE REVERSE ENGINEERING

Evaluate at minimum: ~1440×900, ~1366×768, ~768×1024, ~390×844, ~320×700, plus intermediate widths (e.g., 430, 600, 1024, 1200). These are test targets, not assumed breakpoints. If the reference shows only some sizes, infer the rest conservatively and document it.

- **Desktop:** max width, margins, columns, nav spacing, hero composition, card density, whitespace, sticky/fixed elements.
- **Tablet:** what shrinks, wraps, stacks, hides, or changes column count or navigation. Do not assume it is a scaled desktop.
- **Mobile:** navigation pattern, header height, logo/menu sizing, hero stacking order, headline wrapping, CTA width and stacking, image crop, hidden or rearranged elements, cards per row, carousel direction, section padding, footer layout, floating controls, touch targets (≥44px), scroll behavior.

**Quality requirements:** no unintended horizontal overflow (horizontally scrolling carousels must scroll within their own container), readable typography, preserved aspect ratios, no clipped labels or buttons, accessible controls, coherent behavior between breakpoints, reasonable portrait and landscape layouts, and no hiding of major content unless the reference does.

---

# PHASE 6: ASSET DISCOVERY AND RECONSTRUCTION

Asset priority:

1. Legitimately available, licensed original asset.
2. Matching asset already in the repository.
3. Faithful original reconstruction in code (SVG/CSS) for logos, icons, charts, cards, mockups, patterns, and shapes.
4. Carefully selected replacement matching composition, subject, crop, color mood, and visual weight.

Do not use irrelevant stock imagery as filler. Do not use emojis as icons unless the reference does. Use one consistent icon style (stroke width, fill style, size, optical alignment). Provide meaningful alt text for informative images and empty alt for decorative ones. Use responsive images and modern formats, set explicit dimensions or aspect ratios to prevent layout shift, load the hero eagerly, and lazy-load below-the-fold media.

---

# PHASE 7: IMPLEMENTATION

Begin implementation only after inspection, asset research, and design-system extraction.

- **Stack:** respect the existing framework, router, language (e.g., TypeScript), and styling system. Do not convert routers, swap styling systems, or add component/animation/state libraries without a demonstrated need.
- **Architecture:** split into logical, reusable components (layout, sections, UI primitives). Build only what the reference and project need. Avoid oversized components, duplicated markup, and deep conditional nesting.
- **CSS:** prefer grid and flexbox over absolute positioning; avoid fixed heights that clip content; avoid brittle selectors and broad overrides; use tokens instead of scattered hardcoded values.
- **Semantics and accessibility:** use proper elements for navigation, main, sections, headings (logical hierarchy, one H1), lists, forms, buttons, and links. No clickable divs. Provide visible focus states, form labels, accessible names, ARIA only where needed, and sufficient contrast.
- **Code quality:** meaningful names, consistent formatting, minimal client-side code, listener/observer/timer cleanup, no hydration mismatches, no runtime errors or console warnings, no changes to unrelated code.
- **Performance:** no unnecessary scripts or heavy dependencies, no expensive large-area blur effects where they hurt rendering, no layout shifts, and no third-party tracking or services without authorization.

---

# PHASE 8: CONTENT AND LANGUAGE

Preserve the reference's content hierarchy, text density, and placement while adapting copy to the target project. Reuse legible reference copy verbatim only when appropriate (fidelity level "exact clone" or when the user supplies it). Otherwise write realistic copy matching length, line count, heading hierarchy, paragraph density, CTA prominence, and semantic purpose. No lorem ipsum or repeated filler. Mark any demo or sample data (numbers, charts, testimonials, names) clearly as sample content.

**If multilingual:** use a real localization structure (not strings scattered in components), a functional language selector, consistent translations of nav, forms, errors, metadata, and footer, a sensible default language, and persistence only when appropriate. For RTL languages (e.g., Arabic) use logical CSS properties, mirrored layouts, correct text direction and alignment, mixed-direction and numeral checks, font coverage, and line-wrapping review. Do not translate brand or product names unnecessarily.

---

# PHASE 9: VISUAL CALIBRATION

The first successful render is the start of verification, not completion.

1. **Capture:** screenshot the reference (or use crops of the reference image) and the local build at equivalent viewport sizes, zoom, scroll position, and page state.
2. **Compare:** initial viewport, header, hero, every major section, complex grids/cards, interactive states, footer, and mobile layout, using side-by-side, overlay, or diff images where tools allow. Do not rely only on pixel-diff scores, since antialiasing, compression, and dynamic content create irrelevant differences.
3. **Fix in priority order:**
   - P1: global geometry (container widths, section heights, large spacing, major positioning).
   - P2: typography (font, wrapping, line height, text width, weight).
   - P3: large visual assets (images, mockups, backgrounds, scale, crop).
   - P4: color and surfaces (backgrounds, gradients, text colors, shadows, borders, opacity).
   - P5: components (buttons, cards, radii, icons, internal spacing).
   - P6: fine details (animation timing, small alignments, hover transitions, decoration).
4. **Iterate:** render → capture → compare → fix → re-render → confirm no regressions. Continue until remaining differences are minor or limitations are documented.

Never call the work visually complete because it merely looks attractive.

---

# PHASE 10: RESPONSIVE AND INTERACTION QA

- **Rendering:** every required route loads, direct navigation works, internal links are valid, images and fonts load, no broken paths, no missing sections, no blank regions, no horizontal overflow, no new console errors.
- **Interactions:** header links, dropdowns, mobile menu, CTAs, forms (empty, invalid, valid, submitting, success, error states), accordions, tabs, carousels (click, dots, swipe, keyboard), language selector, modals, hover/focus states, scroll-dependent behavior.
- **Responsive regression:** at each chosen viewport and between breakpoints, confirm the header fits, text is readable, images are positioned correctly, buttons don't overflow, cards don't collapse awkwardly, spacing is coherent, menus work, and fixed or floating elements don't cover content. A layout that works at 390px may fail at 430px.
- **Accessibility:** keyboard navigation, focus visibility, semantic structure, input labels, button names, alt text, contrast, reduced-motion behavior, touch target size.
- **Commands:** run build, lint, type-check, and tests as available, and report real results.

---

# PHASE 11: COMPLETION CRITERIA

**Design fidelity**
- [ ] Every relevant reference section inspected and reproduced in the correct hierarchy.
- [ ] Container geometry, typography, colors, radii, shadows, gradients calibrated.
- [ ] Major images, decorations, navigation, and footer structure correct.
- [ ] Distinctive details preserved, not replaced with generic alternatives.

**Functionality**
- [ ] Every visible control has a meaningful behavior and valid destination.
- [ ] Menus, overlays, forms, and animations behave correctly.
- [ ] No interaction falsely implies a backend capability.

**Responsive**
- [ ] Large desktop, laptop, tablet, mobile, narrow mobile, and intermediate widths tested.
- [ ] No unintended horizontal overflow.

**Engineering**
- [ ] Existing architecture and functionality preserved.
- [ ] Reusable components, consistent styling, optimized assets, no unnecessary dependencies.
- [ ] No new significant runtime errors; build and checks pass.

**Verification**
- [ ] Reference and local screenshots compared and major discrepancies fixed.
- [ ] Interactive and responsive states tested.
- [ ] Remaining limitations documented honestly.

---

# PHASE 12: FINAL REPORT

Provide a concise, specific report:

- **A. Implemented:** pages, sections, components, behaviors.
- **B. Design decisions:** typography, palette, layout system, spacing scale, notable reference-specific details, and which values were measured vs. estimated.
- **C. Files changed:** created, edited, removed, plus any architectural changes.
- **D. Assets:** reference assets reused, project assets reused, elements reconstructed, elements replaced.
- **E. Testing:** viewports, routes, interactions, and commands actually run. Separate passed, failed, and not run.
- **F. Visual differences:** remaining deviations, the reason for each, and whether each affects appearance or functionality (including unseen or cropped content, unidentified fonts, estimated measurements).
- **G. Final status:** complete, partial, or blocked, based on evidence rather than polish.

---

# EXECUTION INSTRUCTIONS

Start with the repository and the reference. Inspect, measure, document, and plan; then implement end to end; then run the app, inspect real output, compare against the reference, correct discrepancies, and test important interactions and viewports.

Do not stop at a plan, a design description, a component skeleton, or an attractive first draft. If something is inaccessible, make the best evidence-based decision, document the limitation, and continue.

**The standard of success is not a site that merely looks good. It is a technically sound, responsive implementation that faithfully reproduces the reference's observable design and behavior at the chosen fidelity level, with every important deviation identified and accounted for.**