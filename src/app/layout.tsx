import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Goldfields Pro Clean | Professional Cleaning in Kalgoorlie-Boulder, WA",
  description:
    "Goldfields Pro Clean provides premium home and office cleaning services in Kalgoorlie-Boulder, WA. Local, reliable, and flexible cleaning tailored to your space.",
  keywords: "cleaning service, Kalgoorlie-Boulder, professional cleaning, home cleaning, office cleaning, WA",
  openGraph: {
    title: "Goldfields Pro Clean | Professional Cleaning Services",
    description: "Premium cleaning services in Kalgoorlie-Boulder, WA",
    type: "website",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                if (mediaQuery.matches) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-body-gradient text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
