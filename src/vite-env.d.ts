/// <reference types="vite/client" />

interface Window {
  prerenderReady: boolean;
  gtag?: (...args: unknown[]) => void;
}

/** Build-time copyright year injected by vite.config.ts `define`. */
declare const __BUILD_YEAR__: number;
