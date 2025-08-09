import React from 'react'
import { FaDiscord, FaXTwitter, FaTelegram, FaTwitch } from 'react-icons/fa6'
import { SiKick } from 'react-icons/si'

const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-seagreen-800/95 text-white">
      <div className="container-screen flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <div className="order-2 sm:order-1 text-sm opacity-90">
          © {currentYear} Seahorse Coin. All rights reserved.
        </div>

        <div className="order-1 sm:order-2 flex items-center gap-5">
          <a
            href="https://discord.gg/wnT6eE24Uq"
            aria-label="Discord"
            tabIndex={0}
            className="transition-opacity hover:opacity-80"
          >
            <FaDiscord className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/i/communities/1954012327235530906"
            aria-label="X"
            tabIndex={0}
            className="transition-opacity hover:opacity-80"
          >
            <FaXTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/seahorseshaman"
            aria-label="Telegram"
            tabIndex={0}
            className="transition-opacity hover:opacity-80"
          >
            <FaTelegram className="h-5 w-5" />
          </a>
          <a
            href="https://kick.com/andrewshaman"
            aria-label="Kick"
            tabIndex={0}
            className="transition-opacity hover:opacity-80"
          >
            <SiKick className="h-5 w-5" />
          </a>
          <a
            href="https://www.twitch.tv/andrewshaman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch"
            tabIndex={0}
            className="transition-opacity hover:opacity-80"
          >
            <FaTwitch className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter

