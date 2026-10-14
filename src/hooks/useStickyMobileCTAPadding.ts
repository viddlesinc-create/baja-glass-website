import { useEffect } from "react";

// Bottom padding on <body> (mobile only) so the fixed StickyMobileCTA bar never
// covers a submit button or the site footer. Applied on the body rather than
// the page wrapper because the footer is rendered outside the page component.
const PADDING_CLASSES = ["pb-24", "md:pb-0"];

export const useStickyMobileCTAPadding = () => {
  useEffect(() => {
    document.body.classList.add(...PADDING_CLASSES);
    return () => document.body.classList.remove(...PADDING_CLASSES);
  }, []);
};
