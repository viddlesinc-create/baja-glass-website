# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c7cf4be3-80e3-47ee-b1b6-1561b58ef995

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c7cf4be3-80e3-47ee-b1b6-1561b58ef995) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c7cf4be3-80e3-47ee-b1b6-1561b58ef995) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Tracking

GTM (`GTM-PJK7SWRX`, loaded in `index.html`) owns GA4 and Google Ads. Its dataLayer events are pushed from `src/lib/analytics.ts` and `src/hooks/usePageTracking.ts`: `page_view`, `generate_lead`, `lp_form_submission`, `phone_call`, `lp_phone_call`, `cta_click`. Meta tracking below is additive and does not change any of them.

### Meta Pixel + Conversions API

| Event | Browser (Pixel) | Server (CAPI) | Fired from |
|---|---|---|---|
| `PageView` | ✅ | — | `initMetaPixel()` on load; `useMetaPageView()` on each SPA pathname change (Pixel's own pushState tracking is disabled) |
| `Lead` | ✅ | ✅ | `trackMetaLead()` in each lead form's success branch, only after Formspree returns `ok` |
| `Contact` | ✅ | ✅ | Any `tel:` link click, via one delegated listener in `initMetaPixel()` |

- **Dedup:** browser `eventID` and server `event_id` are the same `crypto.randomUUID()` per event.
- **Server:** `netlify/functions/meta-capi.mts` (`POST /.netlify/functions/meta-capi`). Allows only `Lead`/`Contact` (else 400) from `https://bajaglass.com` / `https://www.bajaglass.com` (else 403; localhost only under `netlify dev`). Normalizes and SHA-256 hashes email, phone, first/last name, zip and city server-side; IP and user agent are sent unhashed. Always returns 202 once validated, so a Meta outage never breaks a form.
- **Phone clicks are `Contact`, never `Lead`.**

| Env var | Where | Notes |
|---|---|---|
| `VITE_META_PIXEL_ID` | Netlify (build) | Public. Unset → Pixel fully disabled |
| `META_PIXEL_ID` | Netlify (functions) | Same value, server copy |
| `META_CAPI_ACCESS_TOKEN` | Netlify (functions) | **Secret. Never `VITE_`-prefixed** |
| `META_GRAPH_VERSION` | Netlify (functions) | e.g. `v26.0` — confirm on the Graph API changelog |
| `META_TEST_EVENT_CODE` | Netlify (functions) | Only while testing; remove and redeploy after |

If GTM also contains a Meta Pixel tag, pause it — otherwise PageView and Lead double-count.
