import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import SiteFooter from '../components/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$seahorse',
  description: 'The official $seahorse site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full bg-seagreen-800/95 text-white shadow">
          <div className="container-screen flex h-14 sm:h-16 items-center justify-between">
            <Link href="/" className="font-bold tracking-tight text-xl sm:text-2xl" aria-label="$seahorse home">
              $seahorse
            </Link>
            <nav className="flex items-center gap-6 text-sm sm:text-base">
              <Link href="#home" className="hover:underline underline-offset-4">Home</Link>
              <Link href="#lore" className="hover:underline underline-offset-4">The Lore</Link>
              <Link href="#about" className="hover:underline underline-offset-4">About Dev</Link>
              <Link href="#live" className="hover:underline underline-offset-4">LIVE</Link>
              <Link href="#dex" className="rounded-full bg-white/10 px-3 py-1.5 text-white ring-1 ring-white/20 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" aria-label="Dex button" tabIndex={0}>Dex</Link>
            </nav>
          </div>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
