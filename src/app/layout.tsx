import type { Metadata } from "next";

import "./globals.css";
import "./theme.css";

import { ThemeProvider } from "@/components/themes/theme-provider";
import { ActiveThemeProvider } from "@/components/themes/active-theme";
import { QueryProvider } from "@/components/providers/query-provider";

import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  Roboto_Slab,
  Space_Grotesk,
  Comic_Neue,
  Bungee,
  JetBrains_Mono,
} from "next/font/google";


export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};



const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});


const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic",
});


const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});


const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html

      lang="en"

      suppressHydrationWarning

      className={`
        ${geist.variable}
        ${geistMono.variable}
        ${inter.variable}
        ${playfair.variable}
        ${robotoSlab.variable}
        ${spaceGrotesk.variable}
        ${comicNeue.variable}
        ${bungee.variable}
        ${jetbrains.variable}
      `}

    >


      <body>


        <ThemeProvider

          attribute="class"

          defaultTheme="system"

          enableSystem

          disableTransitionOnChange

        >


          <div className="h-full">

            <ActiveThemeProvider>

              <QueryProvider>

                {children}

              </QueryProvider>

            </ActiveThemeProvider>

          </div>


        </ThemeProvider>


      </body>


    </html>

  );
}