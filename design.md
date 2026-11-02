# Design — amureki.me

## Personal website

The user selected refined direction A: a quiet, white, typography-led portfolio.
The shared layout is implemented in `templates/base.html` and `styles/styles.css`; personal colors and type roles live in `styles/personal-tokens.css`.

- Typography: locally hosted Instrument Sans for body text and project titles; Space Grotesk 700 for page and section headings. Body: 16px, 1.65 line height. Page headings: 40px (34px on mobile); section headings: 24px; project titles: 18px, weight 600.
- White paper `#ffffff`, text `#242824`, secondary text `#626760`, dividers `#e7e9e4`, green focus/hover `#294d39`.
- System dark mode: background `#171b18`, text `#e6ebe4`, secondary text `#afb8ac`, dividers `#343e34`, green focus/hover `#9cc6a3`. Theme colors, selections, link underlines, and article typography follow the system preference. Keep screenshots unchanged and the QR code on a white surface.
- Container: maximum 1000px including 48px side padding; 24px side padding below 640px.
- Header: 44px logo linked to home, then Home, Experience, Notes, Contact. Use the supplied pencil logo in `static/logo.png`, contained without cropping. The image is decorative inside a link with an accessible home label; do not repeat the name as visible header text.
- Footer: name, Notes, RSS, GitHub, Wishes. RSS uses text links consistent with the navigation; also show it beside the homepage writing section and above the notes index.
- Home: introduction combining engineering focus, open-source maintenance, and personal apps; one visible list of selected work with category labels and short descriptions; three latest notes generated from the notes section. Show voiio first; the small list does not need filters or a project count.
- Experience: one career page at `/cv/`, labelled Experience in the navigation. `/experience/` redirects to it; maintain career content only in `content/cv.md`.
- CV: use the full shared container for company headings, dates, job separators, and skills rows. Keep the introduction, descriptions, and bullet lists at a 66ch reading width, with body-size summary text and semibold company headings. Overall dates sit to the right of companies on wider screens; role and promotion details appear below, aligned left. Stack the header and skills labels above values on mobile. Keep subtle separators between jobs; use spacing for sections and skills rows. Preserve the compact print layout.
- Contact: Berlin location and an invitation to talk about Django, open source, and project monetization, continued by a brief paragraph about helping teams with an inline `/hire/` link. Email and social links follow in one vertical list.
- QR: dedicated `/qr/` page for showing at conferences and meetups. Center the website QR code at up to 330px, with `amureki.me` below it; scale to fit mobile screens.
- Wishes: one reading column, category headings, standard bullet lists, and a closing paragraph linking to support. Use spacing between groups without dividers.
- Notes: align title, date, and prose with the shared left edge used by other pages, keeping prose at 66ch. Keep the date close to the title; allow standalone screenshots, code blocks, tables, and figures to use the wider shared container. Preserve code scrolling and copy controls, original metadata, and RSS.
- Navigation links have 44px minimum touch heights. Focus outlines remain visible. No animated reveals.
- External web links use the SVG arrow indicator from the previous design. Mark template links with `external-link`; Markdown external links use Zola’s `target="_blank"` marker. Internal links remain text only in development and production. Hide indicators when printing.
- Personal pages follow the system light/dark preference without a manual toggle. Print uses the light palette and removes navigation and interactive controls.

## Project websites

Per, Glanceful, and Centsu keep their independent templates and original appearance.
`styles/project-pages.css` preserves their previous shared styling, compiled to
`static/project-pages.css`. Their warm light/dark tokens remain in `tokens.css`.
Do not apply personal-site design decisions to these product surfaces implicitly.

## URLs

`/contact/` is new; `/experience/` redirects to `/cv/`. Existing notes, project, support, privacy,
CV, hire, utility, feed, and archive URLs remain available. The design drafts have been removed.
