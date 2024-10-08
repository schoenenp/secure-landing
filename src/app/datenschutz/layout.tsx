import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum & Datenschutzseite der Digitaldruck Pirrot GmbH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" type="image/x-icon" sizes="16x16"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
