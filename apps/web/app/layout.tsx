import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Lexend } from "next/font/google";
import "./globals.css";
import RootLayoutProvider from "../components/RootLayoutProvider";
import Analytics from "../components/Analytics";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

const lexend = Lexend({
  variable: '--font-dyslexic',
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dyslexia-First Web App",
  description: "A comprehensive web application designed for dyslexia accessibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${lexend.variable} antialiased`}
      >
        <RootLayoutProvider>
          <Analytics />
          {children}
        </RootLayoutProvider>
      </body>
    </html>
  );
}
