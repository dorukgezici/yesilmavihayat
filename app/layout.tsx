import Footer from "@/components/Footer";
import Header from "@/components/Header";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Inter({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Yeşil Mavi Hayat",
  authors: [{ name: "Meltem Soğuk Stropoli" }],
  description:
    "Meltem Soğuk Stropoli’nin Destek Yayınları'ndan Ağustos ayında çıkan kitabı Yeşil Mavi Hayat hakkında tüm bilgiler",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-89WX1XCMH9" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
            gtag('config', 'G-89WX1XCMH9');
          `}
        </Script>
      </body>
    </html>
  );
}
