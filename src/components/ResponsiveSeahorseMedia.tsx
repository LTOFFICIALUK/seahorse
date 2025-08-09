'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ResponsiveSeahorseMedia: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      // Check for mobile devices using multiple methods
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth <= 768
      
      // Consider it mobile if any of these conditions are true
      setIsMobile(isMobileUA || (isTouchDevice && isSmallScreen))
    }

    // Check on mount
    checkIsMobile()
    
    // Check on resize
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  if (isMobile) {
    // Show GIF on mobile devices
    return (
      <Image
        src="/seahorse_visualization.gif"
        alt="Seahorse animation"
        width={360}
        height={360}
        className="h-full w-full object-cover"
        priority
        unoptimized
      />
    )
  }

  // Show video on desktop
  return (
    <video
      className="h-full w-full object-cover"
      src="/seahorse_visualization.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Seahorse animation"
    />
  )
}

export default ResponsiveSeahorseMedia