import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import SiteFooter from '../components/SiteFooter'
import ScrollBackgroundEffect from '../components/ScrollBackgroundEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$SEAHORSE on BagsApp',
  description: 'The official $SEAHORSE on BagsApp site',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollBackgroundEffect />
        <header className="sticky top-0 z-50 w-full bg-seagreen-800/95 text-white shadow">
          <div className="container-screen flex h-14 sm:h-16 items-center justify-between">
            <Link href="/" className="font-bold tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0" aria-label="$SEAHORSE home">
              $SEAHORSE
            </Link>
            <nav className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs xs:text-sm sm:text-sm md:text-base">
              <Link href="#home" className="hover:underline underline-offset-4 whitespace-nowrap px-1 xs:px-2">Home</Link>
              <Link href="#lore" className="hover:underline underline-offset-4 whitespace-nowrap px-1 xs:px-2">Lore</Link>
              <Link href="#about" className="hover:underline underline-offset-4 whitespace-nowrap px-1 xs:px-2">About</Link>
              <Link href="#live" className="hover:underline underline-offset-4 whitespace-nowrap px-1 xs:px-2">LIVE</Link>
              <Link href="https://dexscreener.com/solana/8bdt3qbp6aurfythfeiz9qttxq6v3erhoawewrx9ugx1" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-2 py-1 xs:px-3 xs:py-1.5 text-white ring-1 ring-white/20 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition-colors whitespace-nowrap flex-shrink-0" aria-label="View $SEAHORSE on DexScreener" tabIndex={0}>Dex</Link>
            </nav>
          </div>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
