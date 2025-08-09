'use client'

import { useEffect } from 'react'

const ScrollBackgroundEffect: React.FC = () => {
  useEffect(() => {
    const updateBackground = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      
      // Calculate scroll percentage (0 to 1) - smooth transition all the way down
      const scrollPercentage = Math.min(scrollY / documentHeight, 1)
      
      // Define colors - match $SEAHORSE text color at top, lighter seagreen at bottom
      const startR = 6      // seagreen-900 rgb(6, 78, 59) - matches the $SEAHORSE text color
      const startG = 78
      const startB = 59
      
      const endR = 209   // seagreen-100 rgb(209, 250, 229) - light seagreen at bottom
      const endG = 250
      const endB = 229
      
      // Interpolate between start and end colors
      const r = Math.round(startR + (endR - startR) * scrollPercentage)
      const g = Math.round(startG + (endG - startG) * scrollPercentage)
      const b = Math.round(startB + (endB - startB) * scrollPercentage)
      
      // Apply the background color directly
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

    // Set initial background
    updateBackground()
    
    // Add scroll listener with requestAnimationFrame for smoothness
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateBackground()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null // This component doesn't render anything
}

export default ScrollBackgroundEffect