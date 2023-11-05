import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PixelBackground from "@/components/pixelBackground";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Locale, getDictionary } from "./dictionaries";
import { Dashboard } from "@/components/dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full h-screen flex flex-col items-center">
            <Dashboard lang={lang} t={t} />
            {children}
          </main>
          <PixelBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
