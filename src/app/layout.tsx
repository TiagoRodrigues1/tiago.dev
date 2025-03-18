import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost'),
  title: {
    template: '%s | Tiago Rodrigues',
    default: 'Tiago Rodrigues',
  },
  description: 'Personal website of Tiago Rodrigues',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-sidebar min-h-full h-full`}
      >
        <SidebarProvider className="flex h-full w-full">
          <AppSidebar />
          <main className="flex-1 h-full min-h-screen ">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
