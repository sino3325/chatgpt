import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/font";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "ChatGPTランチャー",
  description: "ChatGPTのPWAランチャー",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
