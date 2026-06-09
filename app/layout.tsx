import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heartland Sawmill | Mobile Sawmilling & Quality Local Lumber",
  description:
    "Heartland Sawmill is a mobile sawmilling business serving Central Illinois (Bloomington, Normal, Peoria, Decatur, Urbana and surrounding areas). On-site sawmilling at your location or ours. Quality local hardwood with care.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/heartland_sawmill_log.PNG",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/heartland_sawmill_log.PNG",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/heartland_sawmill_log.PNG",
        type: "image/svg+xml",
      },
    ],
    apple: "/heartland_sawmill_log.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body style={{ margin: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
