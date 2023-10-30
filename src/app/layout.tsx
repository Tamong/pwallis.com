import "@/styles/globals.css";

import { GeistSans } from "geist/font";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Philip Wallis",
  description: "Personal Website of Philip Wallis",
  icons: [{ rel: "icon", url: "/leaf.svg" }],
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
