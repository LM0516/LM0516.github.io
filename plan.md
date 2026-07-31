# Plan: Redesign to "Warm Academic" (option 1b / 2a)

Reference: Personal Site Mockups.dc.html — desktop in 1b, mobile in 2a.

## 1. Palette & type tokens
Replace the `assets/css/style.scss` dark variables with:
- `$bg`: `oklch(97% 0.012 75)` (warm paper)
- `$text-primary`: `oklch(22% 0.02 60)`
- `$text-secondary`: `oklch(45% 0.02 60)`
- `$text-muted`: `oklch(55% 0.02 60)`
- `$border`: `oklch(88% 0.02 70)` (dividers), `oklch(93% 0.015 70)` (section rules)
- `$accent`: `oklch(52% 0.14 45)` (terracotta) — replaces the indigo/violet gradient; used solid, no gradients
- `$card-bg`: `#fff` (flat, no glass/blur)
- Fonts: `Lora` (600/700) for all headings and the site title, `Inter` (400/500/600) for body/nav/meta. Drop the gradient-text logo treatment; use solid `$text-primary` or `$accent`.

## 2. Header / nav (`_layouts/default.html`)
- Remove `backdrop-filter` glass header; flat `$bg` with 1px bottom border.
- Site title in Lora, no gradient clip.
- Active nav link: bottom border in `$accent` instead of background pill.
- Mobile (`≤768px`): collapse nav into a 3-bar hamburger icon (see 2a mockup) that reveals links in a stacked menu; site title stays left-aligned.

## 3. Page templates (new, since none exist yet in the repo)
- `index.md` (Home): hero (headline + one-line bio), "Latest notes" (2-3 items, "View all"), "Projects" (2-3 items, "View all"). Needs a new `home` layout or partials in `default.html`.
- `about.md`: short bio paragraph + GitHub link. New `about` layout or plain page using `default`.
- `projects.md`: 2-column card grid (1 column on mobile), each card = title + one-line description.
- `notes.md` (or reuse `jekyll-feed`/collection): list of notes, each row = title + date, divider-separated (no card chrome, unlike current `.post-item` cards).
- `_layouts/post.html`: restyle to warm palette — centered meta row (date • read time) in muted uppercase, Lora title, single pill category tag in accent-tinted background, back-link in accent color.

## 4. Component pattern changes (vs. current dark theme)
- Cards: replace `rgba(255,255,255,.03)` glass cards with `#fff` + 1px `$border`, no blur, no hover-translate glow — just a subtle shadow lift on hover.
- List rows (home notes, notes page): flat rows separated by `1px solid $border`, not boxed cards — lighter, more editorial.
- Section dividers: thicker `6px` warm-tinted rule between major page sections (see mockups) instead of thin 1px.

## 5. Responsive rules
- Breakpoint at `768px`: single column throughout, nav collapses to hamburger, project grid becomes 1 column, hero/type sizes step down (~22px headline vs 27px desktop).
- Touch targets ≥44px on nav/menu items and note/project rows.

## 6. Build order
1. Swap SCSS variables + fonts, verify header/footer look right on Home (only page that currently has content).
2. Build `about.md`, `projects.md`, `notes.md` pages + any needed layouts/includes.
3. Restyle `_layouts/post.html` per section 3.
4. Add hamburger mobile nav + responsive breakpoints.
5. Add hover-lift micro-interaction on cards/rows (see 2a) — CSS-only `transform`/`box-shadow` transition, no load-in animation.
