"use client";

import ColorModeToggle from "@/components/ColorModeToggle";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
const ThemeProvider = dynamic(
  () => import("@/components/ui/provider").then(mod => mod.Provider),
  { ssr: false }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <ColorModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
