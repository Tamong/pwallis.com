import "@/styles/globals.css";

import { GeistSans } from "geist/font";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  metadataBase: new URL("https://pwallis.com"),

  title: "Philip Wallis",
  description:
    "A student at UTD, graduating Winter of 2023. Currently exploring job opportunities.",

  icons: [{ rel: "icon", url: "/leaf.svg" }],
  openGraph: {
    title: "Philip Wallis",
    description:
      "A student at UTD, graduating Winter of 2023. Currently exploring job opportunities.",
    url: "https://pwallis.com",
    site_name: "Philip Wallis",
    images: [{ url: "/thumbnail.png", alt: "Philip Wallis" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* cloudflare webanalytics*/}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f57e2a5cd25e453995306e09289ad476"}'
        ></script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
