import '@/styles/dist.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import StyledComponentsRegistry from './registry';

export function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="">
        <Layout>
          <div className="">
            <div className="">
              <GlobalNav />
            </div>

            <div className="">

              <div className="">
                {children}
              </div>
            </div>

            <div className="">
            </div>
          </div>
        </Layout>
      </body>
    </html>
  );
}
