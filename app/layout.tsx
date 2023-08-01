import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Yeşil Mavi Hayat",
  authors: [{ name: "Meltem Soğuk Stropoli" }],
  description: "Meltem Soğuk Stropoli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(font.className, "flex flex-col min-h-screen")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
