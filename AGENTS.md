# Shared preamble rules

- Follow `master-prompt.md` for process and `wastoo-brief.md` for content and brand when they conflict.
- Inspect existing files and assets before changing them. Preserve working architecture and unrelated user changes.
- Do not invent product features, statistics, testimonials, partners, awards, dates, social accounts, URLs, or app screenshots.
- Use only supplied or repository assets. If an asset is missing, follow the brief's fallback and report the limitation.
- Never present an unsuccessful or unconfigured action as successful.
- Verify APIs against the documentation for the installed versions before relying on them.
- Prefer server components; use client components only for real interaction. Use CSS logical properties for RTL and respect `prefers-reduced-motion`.
- Keep changes scoped to the active phase. At each phase end, run typecheck, lint, and build, and report actual results.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
