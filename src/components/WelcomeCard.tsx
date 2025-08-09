import React from 'react'
import Link from 'next/link'
import { FaDiscord, FaXTwitter, FaTelegram } from 'react-icons/fa6'

type WelcomeCardProps = {
  id?: string
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ id = 'lore' }) => {
  return (
    <section id={id} className="container-screen mt-16">
      <div className="mx-auto max-w-lg sm:max-w-xl rounded-2xl bg-white/80 p-5 sm:p-6 shadow">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-seagreen-900">
            🐴💦 Welcome to the
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-seagreen-900">
            Seahorse Lagoon 💦🐴
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-seagreen-900/90">
            Where meme dreams are made and hodlers become legends. Dive into the lore of the
            <strong> Seahorse Meme Coin</strong>, the only token inspired by majestic marine creatures and led by
            our fearless wizard of solana, <strong>Andrew Shaman</strong>.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {[
            { src: '/welcome1.gif', caption: 'Swim with the grace of a crypto seahorse!' },
            { src: '/welcome2.gif', caption: 'Hodl like a seahorse gripping seaweed!' },
            { src: '/welcome3.gif', caption: 'Ride the crypto wave like a true Lagoon Gang member!' },
          ].map(({ src, caption }) => (
            <div key={src}>
              <div className="overflow-hidden rounded-xl shadow">
                <img
                  src={src}
                  alt={caption}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-seagreen-900/90">{caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-10 text-seagreen-900/90">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-seagreen-900">🌊 The Birth of Seahorse Coin</h3>
            <p className="mx-auto mt-2 max-w-prose leading-relaxed">
              Legend says Andrew Shaman looked at a seahorse and thought, <em>"Why not turn this into a token?" </em>
              Thus, the Seahorse Meme Coin emerged, powered by Solana and fueled by a dream: bringing meme
              enthusiasts and crypto lovers together.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-seagreen-900">✨ Why Seahorses?</h3>
            <p className="mx-auto mt-2 max-w-prose leading-relaxed">
              Seahorses are quirky, resilient, and downright fabulous. They swim sideways, grab onto seaweed when the
              tide gets rough, and mate for life. Like them, this coin is weird, wonderful, and built for those who dare
              to be different.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-seagreen-900">🚀 The Golden Seahorse Moment</h3>
            <p className="mx-auto mt-2 max-w-prose leading-relaxed">
              In December 2024, Seahorse Meme Coin made waves, reaching an all-time high of <strong>$0.0191</strong>.
              This didn't go unnoticed by the community, and by August 2025, a community member relaunched <strong>$SEAHORSE</strong> on 
              BagsApp so that Andrew could finally claim fees for his efforts.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-seagreen-900">🐴💧 Join the Lagoon Gang</h3>
            <p className="mx-auto mt-2 max-w-prose leading-relaxed">
              Don your fins and join the meme‑powered revolution. With Andrew Shaman at the helm, the Seahorse Meme Coin
              isn’t just a token—it's a movement. Are you ready to ride the tide?
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-seagreen-900">
              <Link href="#" aria-label="Discord" tabIndex={0} className="transition-opacity hover:opacity-75"><FaDiscord className="h-6 w-6" /></Link>
              <Link href="#" aria-label="X" tabIndex={0} className="transition-opacity hover:opacity-75"><FaXTwitter className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Telegram" tabIndex={0} className="transition-opacity hover:opacity-75"><FaTelegram className="h-6 w-6" /></Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-seagreen-900">The Actual Moment</h3>
            <div className="mt-3 overflow-hidden rounded-xl shadow">
              <video
                className="h-full w-full object-cover"
                src="/andrew-shawman.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="How it all started"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeCard

