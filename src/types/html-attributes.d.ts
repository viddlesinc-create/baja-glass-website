// Lowercase resource-hint attributes that React 18 passes straight through to
// the DOM but @types/react 18 does not declare. They are valid HTML
// (fetchpriority, imagesrcset, imagesizes); this only teaches TypeScript.
import "react";

declare module "react" {
  interface ImgHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
  interface LinkHTMLAttributes<T> {
    imagesrcset?: string;
    imagesizes?: string;
    fetchpriority?: "high" | "low" | "auto";
  }
}
