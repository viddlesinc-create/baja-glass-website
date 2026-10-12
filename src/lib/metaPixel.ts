// Meta Pixel (browser) + Conversions API relay (server) with event_id dedup.
//
// Event contract:
//   PageView — browser only. Fired once by initMetaPixel() and on every SPA pathname
//              change by useMetaPageView(). The Pixel's own pushState tracking is
//              disabled so one navigation = exactly one PageView.
//   Lead     — browser + server, same event_id. Fired ONLY from a lead form's success
//              branch (after Formspree accepted the submit). Never on phone clicks.
//   Contact  — browser + server, same event_id. Fired on every tel: link click via one
//              delegated listener, so no individual link needs wiring.
//
// The CAPI access token never touches this file — it lives only in the Netlify Function
// (netlify/functions/meta-capi.mts). Raw form fields are POSTed to that same-origin
// function in a JSON body (never a URL) and hashed there.
//
// Existing GTM/GA4 dataLayer pushes (src/lib/analytics.ts) are untouched by this module.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
  disablePushState?: boolean;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const PIXEL_ID: string | undefined = import.meta.env.VITE_META_PIXEL_ID;
const CAPI_ENDPOINT = "/.netlify/functions/meta-capi";
const FBC_MAX_AGE_SECONDS = 90 * 24 * 60 * 60;

let initialized = false;

const isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";
const isEnabled = () => isBrowser() && !!PIXEL_ID;

export const newEventId = (): string => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
};

const readCookie = (name: string): string | undefined => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
};

/**
 * If the visitor landed from a Meta ad (fbclid in the URL) and no _fbc cookie exists yet,
 * build one in Meta's format and persist it first-party for 90 days.
 */
const captureFbclid = () => {
  if (readCookie("_fbc")) return;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) return;
  const value = `fb.1.${Date.now()}.${fbclid}`;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `_fbc=${encodeURIComponent(value)}; Max-Age=${FBC_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
};

export const getFbCookies = (): { fbp?: string; fbc?: string } => {
  if (!isBrowser()) return {};
  return { fbp: readCookie("_fbp"), fbc: readCookie("_fbc") };
};

/**
 * Standard Meta Pixel base code, split so the stub (which queues calls) installs
 * immediately while fbevents.js itself loads on the same schedule as GTM in index.html:
 * first interaction or 3s, whichever comes first. Keeps the network clear for LCP.
 */
const installFbqStub = (): Fbq => {
  if (window.fbq) return window.fbq;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  return n;
};

const loadFbeventsDeferred = () => {
  let loaded = false;
  const events = ["scroll", "mousemove", "touchstart", "keydown", "pointerdown"];
  const load = () => {
    if (loaded) return;
    loaded = true;
    events.forEach((e) => window.removeEventListener(e, load));
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const first = document.getElementsByTagName("script")[0];
    if (first?.parentNode) first.parentNode.insertBefore(script, first);
    else document.head.appendChild(script);
  };
  events.forEach((e) => window.addEventListener(e, load, { passive: true }));
  window.setTimeout(load, 3000);
};

const onTelClick = (event: MouseEvent) => {
  const target = event.target as Element | null;
  if (target?.closest?.('a[href^="tel:"]')) trackMetaContact();
};

/** Call once at app startup (client only). No-op without VITE_META_PIXEL_ID. */
export const initMetaPixel = () => {
  if (!isBrowser() || initialized) return;
  if (!PIXEL_ID) {
    if (import.meta.env.DEV) console.warn("[metaPixel] VITE_META_PIXEL_ID is not set — Meta Pixel disabled.");
    return;
  }
  initialized = true;

  captureFbclid();

  const fbq = installFbqStub();
  // We fire SPA PageViews ourselves from useMetaPageView(); the Pixel's automatic
  // history tracking would double-count them.
  fbq.disablePushState = true;
  fbq("init", PIXEL_ID);
  fbq("track", "PageView");
  loadFbeventsDeferred();

  // Capture phase so it runs even if a link's own handler stops propagation.
  document.addEventListener("click", onTelClick, true);
};

/** PageView on SPA pathname changes. The initial load is covered by initMetaPixel(). */
export const useMetaPageView = () => {
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (!isEnabled() || !window.fbq) return;
    window.fbq("track", "PageView");
  }, [pathname]);
};

export const trackMeta = (
  eventName: string,
  { eventId, customData }: { eventId: string; customData?: Record<string, unknown> }
) => {
  if (!isEnabled() || !window.fbq) return;
  window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
};

type CapiUserFields = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  zip?: string;
  city?: string;
};

const sendCapi = (
  eventName: "Lead" | "Contact",
  eventId: string,
  user: CapiUserFields,
  customData?: Record<string, unknown>
) => {
  const { fbp, fbc } = getFbCookies();
  try {
    fetch(CAPI_ENDPOINT, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        fbp,
        fbc,
        ...user,
        custom_data: customData,
      }),
    }).catch(() => {});
  } catch {
    // Tracking must never break the page.
  }
};

const clean = (value: unknown): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
};

/**
 * Lead: call ONLY from a form's success branch. Accepts a single `name` (split on the
 * first space) or explicit first/last names.
 */
export const trackMetaLead = (fields: {
  email?: unknown;
  phone?: unknown;
  name?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  zip?: unknown;
  city?: unknown;
  service?: unknown;
}) => {
  if (!isEnabled()) return;
  let first = clean(fields.firstName);
  let last = clean(fields.lastName);
  const full = clean(fields.name);
  if (full && !first && !last) {
    const [head, ...rest] = full.split(/\s+/);
    first = head;
    last = rest.length ? rest.join(" ") : undefined;
  }

  const service = clean(fields.service);
  const customData = service ? { content_name: service } : undefined;
  const eventId = newEventId();

  trackMeta("Lead", { eventId, customData });
  sendCapi(
    "Lead",
    eventId,
    {
      email: clean(fields.email),
      phone: clean(fields.phone),
      first_name: first,
      last_name: last,
      zip: clean(fields.zip),
      city: clean(fields.city),
    },
    customData
  );
};

/** Contact: tel: link click. No user fields — matched on fbp/fbc/IP/UA only. */
export const trackMetaContact = () => {
  if (!isEnabled()) return;
  const eventId = newEventId();
  trackMeta("Contact", { eventId });
  sendCapi("Contact", eventId, {});
};
