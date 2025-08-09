"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

type CopyableCAProps = {
  value: string
}

const CopyableCA: React.FC<CopyableCAProps> = ({ value }) => {
  const [copied, setCopied] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setShowToast(true)
    } catch (_) {
      // no-op
    }
  }, [value])

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 1800)
    return () => clearTimeout(timer)
  }, [showToast])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1200)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <>
      <button
        onClick={handleCopy}
        aria-label="Copy contract address"
        className="group relative mt-8 inline-flex max-w-[92vw] items-center gap-2 rounded-full bg-seagreen-600/90 px-4 py-2 text-white shadow ring-1 ring-white/20 transition-all duration-300 hover:bg-seagreen-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seagreen-400"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center">
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </span>
        <span className="truncate max-w-[60vw] sm:max-w-[22rem] transition-all duration-300 group-hover:max-w-[70vw] sm:group-hover:max-w-[32rem]">
          CA: {value}
        </span>
      </button>

      {showToast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center">
          <div
            role="status"
            aria-live="polite"
            className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 rounded-full bg-seagreen-800 text-white px-4 py-2 shadow"
          >
            CA Copied to clipboard
          </div>
        </div>
      )}
    </>
  )
}

export default CopyableCA

