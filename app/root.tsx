import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '~/app.css';

export function Layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>사이프 백오피스</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50 text-slate-800">
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
