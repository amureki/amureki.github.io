# Design — amureki.me

## Personal website

The user selected refined direction A: a quiet, white, typography-led portfolio.
The shared layout is implemented in `templates/base.html` and `styles/styles.css`; personal colors and type roles live in `styles/personal-tokens.css`.

- Body and headings: locally hosted Instrument Sans; 16px body, 1.65 line height, 32px main heading (29px on mobile), 600 weight headings.
- White paper `#ffffff`, text `#242824`, secondary text `#626760`, dividers `#e7e9e4`, green focus/hover `#294d39`.
- Container: maximum 1000px including 48px side padding; 24px side padding below 640px.
- Header: 44px logo linked to home, then Selected work, Experience, Contact. Use the supplied pencil logo in `static/logo.png`, contained without cropping. The image is decorative inside a link with an accessible home label; do not repeat the name as visible header text.
- Footer: name, Notes, GitHub, Wishes.
- Home: short introduction, project filters, short project descriptions, two latest notes generated from the notes section.
- Experience: dates beside concise role descriptions; dates stack on mobile. Keep the full CV at `/cv/`.
- Contact: email first, social links, brief services introduction. Keep `/hire/`.
- Notes: readable prose, code scrolling and copy controls, original metadata and RSS.
- Filters progressively enhance static content: all projects remain visible without JavaScript; controls appear only when their script runs.
- Navigation and filters have 44px minimum touch heights. Focus outlines remain visible. No animated reveals.
- Personal pages intentionally use the selected light theme. Print removes navigation and interactive controls.

## Project websites

Per, Glanceful, and Centsu keep their independent templates and original appearance.
`styles/project-pages.css` preserves their previous shared styling, compiled to
`static/project-pages.css`. Their warm light/dark tokens remain in `tokens.css`.
Do not apply personal-site design decisions to these product surfaces implicitly.

## URLs

`/experience/` and `/contact/` are new. Existing notes, project, support, privacy,
CV, hire, utility, feed, and archive URLs remain available. The design drafts have been removed.
