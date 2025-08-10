'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaDiscord, FaXTwitter, FaTelegram } from 'react-icons/fa6'

type WelcomeCardProps = {
  id?: string
}

type TabType = 'seahorse' | 'dabpen'

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ id = 'lore' }) => {
  const [activeTab, setActiveTab] = useState<TabType>('seahorse')

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
  }

  return (
    <section id={id} className="container-screen mt-16">
      {/* Tab Navigation - Outside the white box */}
      <div className="mx-auto max-w-lg sm:max-w-xl mb-4">
        <div className="flex rounded-xl bg-gradient-to-r from-seagreen-600 to-seagreen-700 p-1 shadow-lg">
          <button
            onClick={() => handleTabClick('seahorse')}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeTab === 'seahorse'
                ? 'bg-white text-seagreen-900 shadow-md'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Seahorse Lore Tab"
            tabIndex={0}
          >
            🐴 Seahorse Lore
          </button>
          <button
            onClick={() => handleTabClick('dabpen')}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              activeTab === 'dabpen'
                ? 'bg-white text-seagreen-900 shadow-md'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Dab Pen Origins Tab"
            tabIndex={0}
          >
            🖊️ The Pen
          </button>
        </div>
      </div>
      
      <div className="mx-auto max-w-lg sm:max-w-xl rounded-2xl bg-white/80 p-5 sm:p-6 shadow">
        {/* Tab Content */}
        {activeTab === 'seahorse' && (
          <>
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
                  Legend says Andrew Shaman looked at a seahorse and thought, <em>&quot;Why not turn this into a token?&quot; </em>
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
                  This didn&#39;t go unnoticed by the community, and by August 2025, a community member relaunched <strong>$SEAHORSE</strong> on 
                  BagsApp so that Andrew could finally claim fees for his efforts.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">🐴💧 Join the Lagoon Gang</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                  Don your fins and join the meme‑powered revolution. With Andrew Shaman at the helm, the Seahorse Meme Coin
                  isn&#39;t just a token—it&#39;s a movement. Are you ready to ride the tide?
                </p>
                <div className="mt-8 flex items-center justify-center gap-6 text-seagreen-900">
                  <Link href="https://discord.gg/wnT6eE24Uq" target="_blank" rel="noopener noreferrer" aria-label="Discord" tabIndex={0} className="transition-opacity hover:opacity-75"><FaDiscord className="h-6 w-6" /></Link>
                  <Link href="https://x.com/Seahorse_Coin" target="_blank" rel="noopener noreferrer" aria-label="X" tabIndex={0} className="transition-opacity hover:opacity-75"><FaXTwitter className="h-6 w-6" /></Link>
                  <Link href="https://t.me/seahorseshaman" target="_blank" rel="noopener noreferrer" aria-label="Telegram" tabIndex={0} className="transition-opacity hover:opacity-75"><FaTelegram className="h-6 w-6" /></Link>
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
          </>
        )}

        {activeTab === 'dabpen' && (
          <>
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-seagreen-900">
                🖊️ The Real Story
              </h2>
              <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-seagreen-900">
                Behind the Seahorse 🔥
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-seagreen-900/90">
                The truth behind $SEAHORSE isn't just about marine life, it's about Andrew Shaman's legendary
                <strong> electric dab pen called "Seahorse"</strong> that became a meme icon on Andrew's stream.
              </p>
            </div>

            <div className="mt-10 space-y-10 text-seagreen-900/90">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">🔥 The Famous Seahorse Pen</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                For over a decade, Andrew has been hitting his trusty dab pen named "Seahorse" on stream. This 
                iconic device became synonymous with his legendary streaming sessions, creating countless clips, 
                memes and unforgettable moments.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">📺 10+ Years of Streaming Legacy</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                  From the early days of content creation to becoming a Solana wizard, Andrew's journey has been fueled 
                  by his community and that famous pen. Through market crashes, bull runs, and everything in between, 
                  the Seahorse pen has been there, creating moments that turned into legends.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">🌿 Community Built on Vibes</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                The Seahorse community isn't just about crypto. It's about the culture, the dabs, and the genuine 
                  connections formed over years of shared experiences. When you buy and hold $SEAHORSE, you're not just holding 
                  a token; you're becoming part of the community.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">💨 The Origin Meme</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                  Every great meme coin has an origin story. Ours involves countless stream highlights, legendary dab 
                  sessions, and a community that recognized the cultural significance of Andrew's Seahorse pen. 
                  This is organic culture that evolved over years of streaming.                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-seagreen-900">🚀 From Pen to Token</h3>
                <p className="mx-auto mt-2 max-w-prose leading-relaxed">
                  When the community decided to honor this legend with a token, it wasn't just about creating another 
                  meme coin. It was about immortalizing a piece of streaming history and giving Andrew the recognition 
                  he deserves for building something truly authentic in the crypto space. Andrew was the dev of the PumpFun 
                  version of $SEAHORSE that launched in December 2024 and skyrocketed to $20M market cap.
                  </p>
                <div className="mt-8 flex items-center justify-center gap-6 text-seagreen-900">
                  <Link href="https://discord.gg/wnT6eE24Uq" target="_blank" rel="noopener noreferrer" aria-label="Discord" tabIndex={0} className="transition-opacity hover:opacity-75"><FaDiscord className="h-6 w-6" /></Link>
                  <Link href="https://x.com/Seahorse_Coin" target="_blank" rel="noopener noreferrer" aria-label="X" tabIndex={0} className="transition-opacity hover:opacity-75"><FaXTwitter className="h-6 w-6" /></Link>
                  <Link href="https://t.me/seahorseshaman" target="_blank" rel="noopener noreferrer" aria-label="Telegram" tabIndex={0} className="transition-opacity hover:opacity-75"><FaTelegram className="h-6 w-6" /></Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default WelcomeCard

