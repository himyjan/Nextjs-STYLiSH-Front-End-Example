import '@/styles/dist.css';
import React from 'react';
import GlobalNav from './GlobalNav';

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
      </body>
    </html>
  );
}
