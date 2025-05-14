'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@workspace/ui/components/dialog"
import { Badge } from "@workspace/ui/components/badge"

import type { PagebuilderType } from "@/types"

type GalleryBentoProps = PagebuilderType<"galleryBento">

export function GalleryBentoBlock({
  label,
  title,
  description,
  images,
}: GalleryBentoProps): React.JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center space-y-8 text-center w-full">
          {/* Section header */}
          <div className="space-y-4">
            {label && <Badge variant="secondary">{label}</Badge>}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          {/* Bento grid gallery */}
          {images && images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
              {/* First row - large image on left, medium on right */}
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="relative aspect-[4/3] md:aspect-auto md:row-span-2 col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl overflow-hidden bg-muted hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(images[0]?.asset?.url || '')}
                  >
                    <img
                      src={images[0]?.asset?.url || "/placeholder.svg"}
                      alt={images[0]?.alt || "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-1">
                  <img
                    src={selectedImage || ''}
                    alt="Enlarged gallery image"
                    className="w-full h-auto rounded-md"
                  />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="relative aspect-square col-span-1 rounded-3xl overflow-hidden bg-muted hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(images[1]?.asset?.url || '')}
                  >
                    <img
                      src={images[1]?.asset?.url || "/placeholder.svg"}
                      alt={images[1]?.alt || "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-1">
                  <img
                    src={selectedImage || ''}
                    alt="Enlarged gallery image"
                    className="w-full h-auto  rounded-md"
                  />
                </DialogContent>
              </Dialog>

              {/* Second row - three equal images */}
              {images.slice(2, 5).map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <button
                      className="relative aspect-square col-span-1 rounded-3xl overflow-hidden bg-muted hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(image?.asset?.url || '')}
                    >
                      <img
                        src={image?.asset?.url || "/placeholder.svg"}
                        alt={image?.alt || "Gallery image"}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-1">
                    <img
                      src={selectedImage || ''}
                      alt="Enlarged gallery image"
                      className="w-full h-auto  rounded-md"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}