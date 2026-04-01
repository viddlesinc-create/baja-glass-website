import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
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
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );

  return { html, helmetContext };
}
