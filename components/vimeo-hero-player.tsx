"use client"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

type VimeoPlayerInstance = {
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
  setCurrentTime: (seconds: number) => Promise<void>
  play: () => Promise<void>
  pause: () => Promise<void>
}

declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLIFrameElement) => VimeoPlayerInstance
    }
  }
}

type VimeoHeroPlayerProps = {
  videoUrl: string
  freezeTimeSeconds?: number
}

export function VimeoHeroPlayer({ videoUrl, freezeTimeSeconds = 122 }: VimeoHeroPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<VimeoPlayerInstance | null>(null)
  const [overlayVisible, setOverlayVisible] = useState(true)
  const [playerReady, setPlayerReady] = useState(false)

  useEffect(() => {
    let intervalId: number | null = null

    const cleanup = () => {
      if (intervalId) {
        window.clearInterval(intervalId)
      }
      if (playerRef.current) {
        playerRef.current.off("loaded", handleLoaded)
        playerRef.current.off("play", handlePlay)
      }
      playerRef.current = null
    }

    const handleLoaded = async () => {
      setPlayerReady(true)
      if (!playerRef.current) return
      try {
        if (freezeTimeSeconds > 0) {
          await playerRef.current.setCurrentTime(freezeTimeSeconds)
          await playerRef.current.pause()
        } else {
          await playerRef.current.pause()
          await playerRef.current.setCurrentTime(0)
        }
      } catch (error) {
        console.warn("Unable to prepare Vimeo frame", error)
      }
    }

    const handlePlay = () => {
      setOverlayVisible(false)
    }

    const tryInitPlayer = () => {
      if (!iframeRef.current || !window.Vimeo?.Player) {
        return false
      }
      playerRef.current = new window.Vimeo.Player(iframeRef.current)
      playerRef.current.on("loaded", handleLoaded)
      playerRef.current.on("play", handlePlay)
      return true
    }

    if (!tryInitPlayer()) {
      intervalId = window.setInterval(() => {
        if (tryInitPlayer() && intervalId) {
          window.clearInterval(intervalId)
          intervalId = null
        }
      }, 200)
    }

    return cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl, freezeTimeSeconds])

  const handleStart = useCallback(async () => {
    if (!playerRef.current) return
    try {
      await playerRef.current.setCurrentTime(0)
      await playerRef.current.play()
    } catch (error) {
      console.warn("Unable to start Vimeo playback", error)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <iframe
        ref={iframeRef}
        title="vimeo-player"
        src={`${videoUrl}?badge=0&autopause=0&player_id=hero-vimeo`}
        className="absolute inset-0 h-full w-full"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
      <button
        type="button"
        aria-label="Play 79 Ratio overview video"
        onClick={handleStart}
        disabled={!playerReady}
        className={cn(
          "absolute inset-0 flex items-center justify-center overflow-hidden px-6 transition-opacity duration-500",
          "bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-sm",
          overlayVisible && playerReady ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <span className="sr-only">Play video</span>
        <Image
          src="/bg.png"
          alt="79 Ratio preview background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative flex items-center justify-center">
          <div className="logo-glow" aria-hidden="true" />
          <Image
            src="/79ratio-logo.png"
            alt="79 Ratio logo"
            width={320}
            height={320}
            className="logo-fade-overlay relative z-10"
            priority
          />
        </div>
      </button>
    </div>
  )
}
