/// <reference types="vite/client" />

interface Window {
  prerenderReady: boolean;
  gtag?: (...args: any[]) => void;
}
