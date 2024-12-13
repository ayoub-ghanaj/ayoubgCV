import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Floating_Nav } from "@/components/float-navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <Floating_Nav />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-[#fdfdfd] dark:bg-black" style={{ cursor: `url('w_cursor.png'}), auto` }}>
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/ayoub-ghanaj"
                title="Github"
              >
                <span className="text-default-600">Developped by</span>
                <p className="text-primary">Ayoub Ghanaj</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-LJ669P4SBH" />
    </html>
  );
}
