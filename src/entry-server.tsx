import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import App from './AppSSR';

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  });
  
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <TooltipProvider>
          {/* Toaster and Sonner render real DOM (a toast viewport and a
              section) as the first children of #root. main.tsx mounts them on
              the client, so they must be rendered here too and in the same
              order — otherwise hydration finds the page element where it
              expects the toast viewport, fails outside any Suspense boundary,
              and React throws away the whole prerendered tree and re-renders
              the entire page on the client. */}
          <Toaster />
          <Sonner />
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );

  return { html, helmetContext };
}
