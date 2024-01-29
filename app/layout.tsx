import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayoub Benziza | Software Enginner",
  description:
    "Hi, I'm Ayoub Benziza and this is my portfolio site. I'm a French web developer, living in Montpellier, France. I've always been passionate about technology and how it has advanced over the years. In my final year of high school, I was introduced to IT development and knew that this was what I wanted to do later in life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
