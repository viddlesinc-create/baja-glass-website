import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

/**
 * Quote form for /lp/frameless-shower-doors-lv.
 *
 * Deliberately its own component rather than the shared `FinalCTA` form the
 * sibling /lp/ pages use: this page needs Name / Phone / ZIP / optional photo
 * (not name/phone/email/city/project-type/message), and the shared form's
 * project-type dropdown contains an option Baja does not sell.
 *
 * Conversion wiring: submission calls `trackFormSubmission`, the same helper
 * every existing landing page uses. It pushes `lp_form_submission` to the
 * dataLayer, which is what the existing "LP Form Submission" Google Ads action
 * (id 7498720245) is wired to in GTM. No new conversion action is introduced.
 */

const FORMSPREE_URL = "https://formspree.io/f/xqaydjpg";
const MAKE_WEBHOOK_URL =
  "https://hook.us2.make.com/gfxiblklsuwae888toxx4nue58bgte6w";

/** Formspree rejects oversized attachments; keep the client-side guard modest. */
const MAX_PHOTO_BYTES = 8 * 1024 * 1024;

interface FramelessQuoteFormProps {
  /** Distinguishes the above-the-fold instance from the closing one in GA4. */
  source: string;
  /** Rendered on a dark panel, so labels/help text need light treatment. */
  tone?: "light" | "dark";
  /** Heading text rendered above the fields. */
  heading: string;
  /** The heading level to render, so the page keeps a logical outline. */
  headingLevel?: "h2" | "h3";
  subheading?: string;
}

export const FramelessQuoteForm = ({
  source,
  tone = "light",
  heading,
  headingLevel = "h2",
  subheading,
}: FramelessQuoteFormProps) => {
  const uid = useId();
  const nameId = `${uid}-name`;
  const phoneId = `${uid}-phone`;
  const zipId = `${uid}-zip`;
  const photoId = `${uid}-photo`;
  const errorId = `${uid}-error`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const dark = tone === "dark";
  const Heading = headingLevel;

  const labelClass = dark
    ? "text-white font-semibold"
    : "text-foreground font-semibold";
  const helpClass = dark ? "text-white/80" : "text-muted-foreground";
  const fieldClass = dark
    ? "bg-white text-charcoal placeholder:text-charcoal/60 border-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-white"
    : "bg-background text-foreground border-input focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring";

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoName(null);
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setError("That photo is larger than 8MB. Please choose a smaller one.");
      e.target.value = "";
      setPhotoName(null);
      return;
    }
    setError(null);
    setPhotoName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (digits.length < 10) {
      setError("Please enter a 10-digit phone number so we can call you back.");
      return;
    }
    if (!/^\d{5}$/.test(zip.trim())) {
      setError("Please enter your 5-digit ZIP code.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const lead = {
      name: name.trim(),
      phone: phone.trim(),
      zip: zip.trim(),
      source,
      page: "/lp/frameless-shower-doors-lv",
      interest: "Frameless shower doors",
    };

    const file = fileRef.current?.files?.[0];

    /** Multipart when a photo is attached; JSON otherwise (the existing path). */
    const postLead = async () => {
      if (file) {
        const body = new FormData();
        Object.entries(lead).forEach(([k, v]) => body.append(k, v));
        body.append("photo", file);
        const res = await fetch(FORMSPREE_URL, { method: "POST", body });
        if (res.ok) return true;
        // Attachment rejected (plan limits, size): fall back so the lead still lands.
        const fallback = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...lead,
            photo: `Customer attached "${file.name}" — attachment could not be delivered, please request it on the callback.`,
          }),
        });
        return fallback.ok;
      }

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      return res.ok;
    };

    try {
      const ok = await postLead();
      if (!ok) throw new Error("Lead submission rejected");

      // Mirror to the existing Make.com bucket, same as the other landing pages.
      fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, photo_attached: file ? "yes" : "no" }),
      }).catch(() => {});

      setSubmitted(true);
      // Fires `lp_form_submission` -> existing "LP Form Submission" action.
      trackFormSubmission({
        city: lead.zip,
        projectType: "Frameless shower doors",
        source,
      });
    } catch {
      setError(
        "We couldn't send that just now. Please call (702) 383-0779 and we'll take the details over the phone.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`rounded-xl p-6 md:p-8 ${dark ? "bg-white/10 border border-white/25" : "bg-secondary/30 border border-border"}`}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className={`h-10 w-10 mb-3 ${dark ? "text-white" : "text-green-700"}`}
          aria-hidden="true"
        />
        <h3
          className={`text-2xl font-serif font-bold mb-2 ${dark ? "text-white" : "text-foreground"}`}
        >
          Got it — we have your details.
        </h3>
        <p className={helpClass}>
          A member of the Baja Glass team will call {name.trim() ? `you, ${name.trim()},` : "you"}{" "}
          back on {phone.trim()} to book your free in-home measure. If you'd rather
          not wait, call us directly at{" "}
          <span className={dark ? "text-white font-semibold" : "font-semibold"}>
            (702) 383-0779
          </span>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl p-6 md:p-8 ${dark ? "bg-white/10 border border-white/25" : "bg-background border border-border shadow-lg"}`}
    >
      <Heading
        className={`text-2xl md:text-3xl font-serif font-bold mb-1 ${dark ? "text-white" : "text-foreground"}`}
      >
        {heading}
      </Heading>
      {subheading && <p className={`${helpClass} mb-5 text-sm`}>{subheading}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <div>
            <Label htmlFor={nameId} className={labelClass}>
              Your name
            </Label>
            <Input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1.5 h-12 ${fieldClass}`}
              aria-describedby={error ? errorId : undefined}
            />
          </div>

          <div>
            <Label htmlFor={phoneId} className={labelClass}>
              Phone number
            </Label>
            <Input
              id={phoneId}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`mt-1.5 h-12 ${fieldClass}`}
              aria-describedby={error ? errorId : undefined}
            />
          </div>

          <div>
            <Label htmlFor={zipId} className={labelClass}>
              ZIP code
            </Label>
            <Input
              id={zipId}
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              required
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              className={`mt-1.5 h-12 ${fieldClass}`}
              aria-describedby={error ? errorId : undefined}
            />
          </div>

          <div>
            <Label htmlFor={photoId} className={labelClass}>
              Photo of your shower{" "}
              <span className={`font-normal ${helpClass}`}>(optional)</span>
            </Label>
            <p id={`${photoId}-help`} className={`text-sm mt-1 ${helpClass}`}>
              A quick phone photo helps us come to the measure prepared. JPG,
              PNG or HEIC, up to 8MB.
            </p>
            <input
              ref={fileRef}
              id={photoId}
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              aria-describedby={`${photoId}-help`}
              className={`mt-2 block w-full text-sm rounded-md border px-3 py-2.5 cursor-pointer
                file:mr-3 file:rounded file:border-0 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                ${
                  dark
                    ? "bg-white text-charcoal border-white file:bg-charcoal file:text-white focus-visible:ring-white focus-visible:ring-offset-charcoal"
                    : "bg-background text-foreground border-input file:bg-secondary file:text-foreground focus-visible:ring-ring"
                }`}
            />
            {photoName && (
              <p
                className={`text-sm mt-2 flex items-center gap-1.5 ${dark ? "text-white" : "text-foreground"}`}
              >
                <Paperclip className="h-4 w-4" aria-hidden="true" />
                {photoName}
              </p>
            )}
          </div>
        </div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className={`mt-4 text-sm font-semibold rounded-md px-3 py-2 ${dark ? "bg-white text-red-800" : "bg-red-50 text-red-800 border border-red-200"}`}
          >
            {error}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="mt-6 w-full h-14 text-lg bg-red-accent hover:bg-red-accent-light text-white focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Get my free quote"
          )}
        </Button>

        <p className={`text-xs mt-3 ${helpClass}`}>
          No obligation. We use your number to book the measure and nothing else.
        </p>
      </form>
    </div>
  );
};

export default FramelessQuoteForm;
