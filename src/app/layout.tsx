import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure | Digitaldruck Pirrot GmbH",
  description: "Privacy polcy page for Digitaldruck Pirrot GmbH",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">     
      <Head>
      <link
  rel="icon"
  href="/logo?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
