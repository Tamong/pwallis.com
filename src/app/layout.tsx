import "@/styles/globals.css";

import { GeistSans } from "geist/font";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  openGraph: {
    title: "Philip Wallis",
    description:
      "A student at UTD, graduating Winter of 2023. Currently exploring job opportunities.",
    icons: [{ rel: "icon", url: "/leaf.svg" }],
    images: [{ url: "/thumbnail.png", alt: "Philip Wallis" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
