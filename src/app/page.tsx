import { FaDiscord, FaXTwitter, FaTelegram, FaTwitch } from 'react-icons/fa6'
import { SiKick } from 'react-icons/si'
import { Twitter, Github, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WelcomeCard from '../components/WelcomeCard'
import MeetTheDev from '../components/MeetTheDev'
import TwitchPlayer from '../components/TwitchPlayer'
import CopyableCA from '../components/CopyableCA'

export default function Home() {
  return (
    <main id="home" className="min-h-screen pb-8">
      <section className="container-screen flex flex-col items-center pt-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">$SEAHORSE</h1>

        {/* Circular hero media using the mp4 from public/ */}
        <div className="mt-8 h-60 w-60 sm:h-72 sm:w-72 overflow-hidden rounded-full ring-4 ring-white/60 shadow-lg">
          <video
            className="h-full w-full object-cover"
            src="/seahorse_visualization.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            preload="auto"
            style={{ WebkitPlaysinline: true }}
            aria-label="Seahorse animation"
          />
        </div>

        <CopyableCA value="FFrMkJW5UXWTdGcYZCQdbQipt5cPMeHxgCRbWXAqBAGS" />

        <div className="mt-6 flex items-center gap-4">
          <Link
            href="https://jup.ag/tokens/FFrMkJW5UXWTdGcYZCQdbQipt5cPMeHxgCRbWXAqBAGS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-seagreen-700 px-4 py-2 text-white font-semibold shadow hover:bg-seagreen-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seagreen-400 transition-colors"
            aria-label="Buy $SEAHORSE on Jupiter"
          >
            <Image src="/jupiter-ag-jup-logo.png" alt="Jupiter logo" width={20} height={20} className="h-5 w-5 rounded" />
            Buy $SEAHORSE
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-6 text-white">
          <Link href="https://discord.gg/wnT6eE24Uq" target="_blank" rel="noopener noreferrer" aria-label="Discord" tabIndex={0} className="transition-opacity hover:opacity-75"><FaDiscord className="h-6 w-6" /></Link>
          <Link href="https://x.com/i/communities/1954012327235530906" target="_blank" rel="noopener noreferrer" aria-label="X" tabIndex={0} className="transition-opacity hover:opacity-75"><FaXTwitter className="h-6 w-6" /></Link>
          <Link href="https://t.me/seahorseshaman" target="_blank" rel="noopener noreferrer" aria-label="Telegram" tabIndex={0} className="transition-opacity hover:opacity-75"><FaTelegram className="h-6 w-6" /></Link>
          <Link href="https://kick.com/andrewshaman" target="_blank" rel="noopener noreferrer" aria-label="Kick" tabIndex={0} className="transition-opacity hover:opacity-75"><SiKick className="h-6 w-6" /></Link>
          <Link href="https://www.twitch.tv/andrewshaman" target="_blank" rel="noopener noreferrer" aria-label="Twitch" tabIndex={0} className="transition-opacity hover:opacity-75"><FaTwitch className="h-6 w-6" /></Link>
        </div>
      </section>

      <WelcomeCard id="lore" />

      <MeetTheDev id="about" />

      <TwitchPlayer id="live" channel="andrewshaman" title="Twitch Live Stream" />
    </main>
  )
}
