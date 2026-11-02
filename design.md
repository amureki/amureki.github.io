# Design — amureki.me

## Personal website

The user selected refined direction A: a quiet, white, typography-led portfolio.
The shared layout is implemented in `templates/base.html` and `styles/styles.css`; personal colors and type roles live in `styles/personal-tokens.css`.

- Typography: locally hosted Instrument Sans for body text and project titles; Space Grotesk 700 for page and section headings. Body: 16px, 1.65 line height. Page headings: 40px (34px on mobile); section headings: 24px; project titles: 18px, weight 600.
- White paper `#ffffff`, text `#242824`, secondary text `#626760`, dividers `#e7e9e4`, green focus/hover `#294d39`.
- Container: maximum 1000px including 48px side padding; 24px side padding below 640px.
- Header: 44px logo linked to home, then Selected work, Experience, Notes, Contact. Use the supplied pencil logo in `static/logo.png`, contained without cropping. The image is decorative inside a link with an accessible home label; do not repeat the name as visible header text.
- Footer: name, Notes, RSS, GitHub, Wishes. RSS uses text links consistent with the navigation; also show it beside the homepage writing section and above the notes index.
- Home: short introduction, a compact “What I focus on” list from the previous homepage, project filters, short project descriptions, two latest notes generated from the notes section.
- Experience: dates beside concise role descriptions; dates stack on mobile. Keep the full CV at `/cv/`.
- Contact: Berlin location and an invitation to talk about Django, open source, and project monetization, continued by a brief paragraph about helping teams with an inline `/hire/` link. Email and social links follow in one vertical list.
- QR: dedicated `/qr/` page for showing at conferences and meetups. Center the website QR code at up to 330px, with `amureki.me` below it; scale to fit mobile screens.
- Notes: readable prose, code scrolling and copy controls, original metadata and RSS.
- Filters use All / Work / Personal. Open source is a project label, not a separate filter; Model Bakery and django-devbar belong to Personal. All projects remain visible without JavaScript; controls appear only when their script runs.
- Navigation and filters have 44px minimum touch heights. Focus outlines remain visible. No animated reveals.
- External web links use the SVG arrow indicator from the previous design. Mark template links with `external-link`; Markdown external links use Zola’s `target="_blank"` marker. Internal links remain text only in development and production. Hide indicators when printing.
- Personal pages intentionally use the selected light theme. Print removes navigation and interactive controls.

## Project websites

Per, Glanceful, and Centsu keep their independent templates and original appearance.
`styles/project-pages.css` preserves their previous shared styling, compiled to
`static/project-pages.css`. Their warm light/dark tokens remain in `tokens.css`.
Do not apply personal-site design decisions to these product surfaces implicitly.

## URLs

`/experience/` and `/contact/` are new. Existing notes, project, support, privacy,
CV, hire, utility, feed, and archive URLs remain available. The design drafts have been removed.
