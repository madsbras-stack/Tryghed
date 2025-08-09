import type { Metadata } from 'next'
import './globals.css'
import CallbackModal from '@/components/CallbackModal'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCall from '@/components/StickyCall'

export const metadata: Metadata = {
  title: 'TRYGHED Pension – Uvildig rådgivning',
  description: 'Gratis, uvildigt tjek af pension, begunstigelser, forsikringer samt testamente og fremtidsfuldmagt i samspil.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCall />
        <CallbackModal />
  </body>
    </html>
  )
}
