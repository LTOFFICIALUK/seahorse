"use client"

import React, { useEffect, useState } from 'react'

type TwitchPlayerProps = {
  channel?: string
  title?: string
  id?: string
}

const TwitchPlayer: React.FC<TwitchPlayerProps> = ({
  channel = 'andrewshaman',
  title = 'Twitch Live Stream',
  id = 'live',
}) => {
  const [parentHost, setParentHost] = useState<string>('localhost')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location?.hostname) {
      setParentHost(window.location.hostname)
    }
  }, [])

  const playerSrc = `https://player.twitch.tv/?channel=${encodeURIComponent(
    channel,
  )}&parent=${encodeURIComponent(parentHost)}&muted=true&autoplay=true`

  return (
    <section id={id} className="container-screen mt-16 sm:mt-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-seagreen-900">{title}</h3>
        <div className="mt-4 overflow-hidden rounded-xl shadow">
          <iframe
            src={playerSrc}
            title={`${channel} Twitch player`}
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default TwitchPlayer

