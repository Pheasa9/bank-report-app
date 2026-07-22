import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { ActiveThemeProvider } from "@/components/themes/active-theme";
import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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