"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

interface LatestVideosProps {
  channelId: string
}

// Mock data for videos
const MOCK_VIDEOS = [
  {
    id: "0XI_fZpqvDQ",
    title: "Blockchain technology",
    thumbnail: "/placeholder.svg?height=200&width=360",
    publishedAt: "2022-03-18T14:30:00Z",
    views: "25",
  },
  {
    id: "4UHFccsN2dY",
    title: "Tere Bina Adhura Hoon",
    thumbnail: "/placeholder.svg?height=200&width=360",
    publishedAt: "2023-05-10T10:15:00Z",
    views: "120",
  },
  {
    id: "2z0Shc9tzfE",
    title: "Coding Journey Start at College Student to regrading placement",
    thumbnail: "/placeholder.svg?height=200&width=360",
    publishedAt: "2024-10-18T16:45:00Z",
    views: "151",
  },
  {
    id: "video4",
    title: "Blockchain Technology in 2025",
    thumbnail: "/placeholder.svg?height=200&width=360",
    publishedAt: "2025-02-28T09:20:00Z",
    views: "87",
  },
]

export function LatestVideos({ channelId }: LatestVideosProps) {
  const [videos, setVideos] = useState(MOCK_VIDEOS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, we would fetch videos from the YouTube API here
    // For now, we'll just simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [channelId])

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading
        ? // Loading skeletons
          Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="h-40 w-full rounded-lg bg-gray-700" />
                <Skeleton className="h-4 w-3/4 rounded bg-gray-700" />
                <Skeleton className="h-3 w-1/2 rounded bg-gray-700" />
              </div>
            ))
        : // Video cards
          videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <Link href={`/videos/${video.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="text-white font-medium">Watch Now</span>
                  </div>
                </div>
                <h3 className="font-medium text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{formatDate(video.publishedAt)}</span>
                  <span>{video.views} views</span>
                </div>
              </Link>
            </div>
          ))}
    </div>
  )
}

