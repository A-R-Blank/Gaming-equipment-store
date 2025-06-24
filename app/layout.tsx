import type { Metadata } from "next";
import { Geist, Geist_Mono, Tektur } from "next/font/google";
import ClientLanguageProvider from '@/src/providers/ClientLanguageProvider';
import PromoBlock from "@/src/widgets/PromoBlock";
import React from "react";
import Header from "@/src/entities/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tektur = Tektur({
  weight: '400',
  variable: '--font-tektur',
  subsets: ['latin'],
});

const globalStyles = `
  body {
    font-family: var(--font-tektur), ${geistSans.variable}, ${geistMono.variable}, sans-serif;
  }
`;

export const metadata: Metadata = {
  title: "Spellbound Gear",
  description: "Gaming equipment store",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <style dangerouslySetInnerHTML={{__html: globalStyles}}/>
      <link rel="icon" href="/image/laptop.svg" sizes="any"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} ${tektur.variable}`}>
    <ClientLanguageProvider>
      <Header />
      <PromoBlock />
      {children}
    </ClientLanguageProvider>
    </body>
    </html>
  );
}