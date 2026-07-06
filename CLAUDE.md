# CLAUDE.md — oci-research-system-content

This package is consumed by **two** separate live sites, each pinning it to an
exact git commit (not a mutable branch ref):

- `/Users/Zack/zacharymays-site` — `package.json` → `@zacharymays-cpu/oci-research-system`
- `/Users/Zack/organizational-coercion-index` — same dependency key

Neither site auto-updates when this repo changes. **There is no CI wiring the
three repos together.** Whenever you change anything under `components/` or
`index.js` in this repo, you MUST do all of the following, in order:

1. **Bump `package.json`'s `version` field** (e.g. `0.1.1` → `0.1.2`), even for
   a small content change. This is not optional: webpack's build cache in both
   consuming sites treats `node_modules` packages as immutable based on their
   declared version. A content-only change with no version bump can silently
   serve stale exports in production — this already broke both sites' first
   deploy of new content once (see git history, commit `5c571d8`).
2. Commit and push to `main` here.
3. Get the new commit's full SHA: `git rev-parse HEAD`.
4. In **each** of the two consuming repos:
   - Update the pinned commit in `package.json`'s
     `@zacharymays-cpu/oci-research-system` dependency line to the new SHA.
   - Run `npm install` (refreshes `package-lock.json`'s `resolved` field to the
     new SHA — check the diff to confirm it actually changed).
   - Run `rm -rf .next && npm run build` — a **clean** build, not an
     incremental one, to rule out a stale local webpack cache masking a real
     failure.
   - Only if that build succeeds: commit and push (or open a PR, per however
     that repo currently works) in that repo too.
5. Do this for **both** consuming repos. Forgetting one leaves the two sites
   showing different content for the same route.

See `README.md` in this repo for the styling contract (CSS custom properties
and structural class names each consuming site must define) that content
changes must stay within.
