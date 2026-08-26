import { useLocation } from "react-router-dom";
import pageDates from "@/data/pageDates.json";

interface LastUpdatedProps {
  /** Overrides the generated date — used by blog posts, which carry curated dates. */
  date?: string;
  className?: string;
}

/** "2026-08-26" -> "August 26, 2026", parsed as a plain date so no timezone shift occurs. */
export const formatUpdated = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
};

/**
 * Visible freshness signal. Google and AI answer engines both weigh how recently a page
 * changed, and the date was previously only present inside JSON-LD where no reader sees it.
 * Sourced from src/data/pageDates.json so the visible date, the schema dateModified and the
 * sitemap <lastmod> all come from one place and cannot drift apart.
 */
/**
 * Service and location pages show the date automatically. Blog posts are excluded here
 * because they render it inside their byline, using the curated date from blogPosts.ts.
 * Utility pages (contact, sitemap, legal) gain nothing from a freshness signal.
 */
const showsDate = (pathname: string) =>
  pathname.startsWith("/shower-doors-las-vegas") ||
  pathname.startsWith("/glass-company-las-vegas") ||
  /^\/shower-doors-[a-z-]+-nv$/.test(pathname) ||
  pathname === "/shower-enclosures-las-vegas" ||
  pathname === "/shower-door-installation-las-vegas";

const LastUpdated = ({ date, className = "" }: LastUpdatedProps) => {
  const { pathname } = useLocation();
  if (!date && !showsDate(pathname)) return null;
  const iso = date || (pageDates as Record<string, string>)[pathname];
  if (!iso) return null;
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      Last updated: <time dateTime={iso}>{formatUpdated(iso)}</time>
    </p>
  );
};

export default LastUpdated;
