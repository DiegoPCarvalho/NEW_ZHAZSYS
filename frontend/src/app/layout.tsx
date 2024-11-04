import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainProviders from './MaiProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZhazSys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProviders>
          {children}
        </MainProviders>
      </body>
    </html>
  );
}
