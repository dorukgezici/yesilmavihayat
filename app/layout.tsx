import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const font = Inter({ weight: "400", subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Yeşil Mavi Hayat',
  description: 'Meltem Soğuk Stropoli',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
