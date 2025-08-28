import type { Metadata } from "next";
import { Inter, Baskervville } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner";
import styles from "./layout.module.css";
import logo from "@/public/CE_norm.svg"
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

const bask = Baskervville({subsets: ["latin"], display: "swap", weight: "400"})

export const metadata: Metadata = {
  title: {
    default: "Chambana Eats",
    template: "%s | Chambana Eats",
  },
  description:
    "Chambana Eats is the only Champaign-Urbana publication exclusively focused on food and drink. We're here to give you the behind the scenes of what you eat!",
  openGraph: {
    title: "Chambana Eats",
    description:
      "Chambana Eats is the only Champaign-Urbana publication exclusively focused on food and drink.",
    images: logo.src,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export const runtime = 'edge';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bask.className + " " + styles.body}>
        <GoogleAnalytics gaId="G-0R5D8JKT52" />
        <div className={bask.className + " " + styles.header}> 
          <Banner />
          <hr className={styles.line}/> 
        </div>
        <div className={bask.className + " " + styles.bodyWrap}>
           {children} 
        </div>
        <footer className={styles.foot}>
          <a href="." className={styles.link}>Chambana Eats</a> • © 2025 <a href="https://illinimedia.org" className={styles.link}>Illini Media Company</a>
        </footer>
      </body>
    </html>
  );
}
