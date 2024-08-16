import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CursorLight from '@/components/CursorLight'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gagan Kishor Reasume',
  description: 'Gagan Kishor Reasume',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CursorLight />
        <main className="mx-auto ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
