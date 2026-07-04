# @zacharymays-cpu/oci-research-system

Shared "Research System" methodology content, consumed by both `zacharymays.com`
(author site) and `organizationalcoercionindex.org` (OCI). Update the content
here once; both sites pick it up on their next `npm install` + rebuild.

## Consuming this package

```js
import { Overview, OverviewMetadata } from '@zacharymays-cpu/oci-research-system';

export const metadata = OverviewMetadata;

export default function Page() {
  return (
    <main className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <Overview />
    </main>
  );
}
```

Each component is exported alongside a `<Name>Metadata` object (the page's
`title`/`description`) — re-export that as the route's `metadata`.

## Styling contract — the consuming site MUST define these

Components use inline styles referencing CSS custom properties, and a small
set of structural class names, so content is shared while presentation stays
native to each site. A consuming site must define, in its global stylesheet:

**CSS custom properties** (color-mix() with `--accent` is also used):
- `--text-1`, `--text-2`, `--text-3`, `--text-faint` — body/heading text, in
  decreasing emphasis
- `--gold` — accent/label color (eyebrows, mono labels, link underlines)
- `--accent` — the site's primary accent (also used via
  `color-mix(in srgb, var(--accent) N%, transparent)` for tints)
- `--rule` — hairline border/divider color
- `--overlay` — a subtle fill for boxed/inset content

**Structural class names** (already defined identically in both sites'
`globals.css` as of 2026-07-04 — no action needed unless a third site adopts
this package):
`.hero`, `.hero__eyebrow`, `.hero__title`, `.hero__title--compact`,
`.hero__subtitle`, `.hero__subtitle--compact`, `.section`, `.section__label`,
`.pull-quote`, `.pull-quote__text`, `.rule`, `.container--wide`,
`.container--narrow`, `.book-card`.

## Updating content

1. Edit the relevant component in `components/`.
2. Commit + push to `main`.
3. In each consuming repo: `npm install github:zacharymays-cpu/oci-research-system-content#main`, rebuild, redeploy.

There is no CI automation wiring the two sites together yet — bumping the
dependency in both repos is a manual step after any content change.
