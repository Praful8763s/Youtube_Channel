"use client"

import Image from "next/image"

export default function ImagesPreview() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Images Preview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">YouTube Channel Logo</h2>
          <div className="relative w-full h-80 mx-auto border border-gray-700 rounded-lg overflow-hidden">
            <Image
              src="/images/youtube.webp"
              alt="The Future Tech Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-center text-gray-400">YouTube channel logo with circuit board background</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Profile Photo</h2>
          <div className="relative w-full h-80 mx-auto border border-gray-700 rounded-lg overflow-hidden">
            <Image
              src="/images/passport.jpeg"
              alt="Praful Sonwane"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-center text-gray-400">Profile photo of Praful Sonwane</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">
          These images are now properly stored in your project's public directory and will display correctly when
          deployed.
        </p>
      </div>
    </div>
  )
}

