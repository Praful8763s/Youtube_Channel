"use client"

import { useState, useEffect } from "react"

interface YoutubeVideoProps {
  videoId: string
  title: string
}

export function YoutubeVideo({ videoId, title }: YoutubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg shadow-blue-500/20">
      {isLoaded ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  )
}

