

## Add `window.prerenderReady` Signal

### Why
Some crawlers and services (including Netlify's prerendering plugin) look for `window.prerenderReady = true` to know when a page's content is fully loaded. Your SSG pipeline already generates static HTML, so this is mostly a compatibility signal — but it's harmless and takes one line.

### Changes

**File: `index.html`**
- Add `<script>window.prerenderReady = false;</script>` in `<head>` (initializes the flag)

**File: `src/main.tsx`**
- After React mounts (both hydrate and createRoot paths), set `window.prerenderReady = true`

**File: `src/vite-env.d.ts`**
- Add TypeScript declaration for `window.prerenderReady` to avoid type errors

Three files, three small edits. No functional impact on existing behavior.

