'use client';

import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { Destination } from '@/types';
import { useLocale } from '@/contexts/LocaleContext';
import YouTubePlayer from '@/components/YouTubePlayer';

export interface DestinationGalleryProps {
  destination: Destination;
  activeImageIdx: number;
  onSelectImage: (idx: number) => void;
}

/**
 * Desktop media grid: video/photo 2 (left tall) + photo 3, 4 (right column)
 * + bottom full-width active image with "+N foto" overlay.
 *
 * Extracted from DestinationDetail — only needs destination data, the active
 * image index, and a setter so the parent can keep the slideshow in sync.
 */
export default function DestinationGallery({
  destination,
  activeImageIdx,
  onSelectImage,
}: DestinationGalleryProps) {
  const { t } = useLocale();

  const imgs = destination.images;
  const firstUrl = imgs.find(i => i?.url)?.url ?? null;
  const getUrl = (idx: number): string | null => imgs[idx]?.url || firstUrl;
  const activeUrl = getUrl(activeImageIdx);

  const handleSelect = (idx: number) => {
    onSelectImage(idx);
  };

  return (
    <div className="lg:col-span-6 grid grid-cols-2 grid-rows-3 gap-3 h-[420px]">

      {/* Video — tall, spans 2 rows left side */}
      <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden bg-black/40">
        {destination.videoUrl ? (
          <YouTubePlayer
            videoUrl={destination.videoUrl}
            thumbnailUrl={getUrl(1) || undefined}
            title={destination.name}
            label={t('destination_detail.media_tab_cinematic')}
            className="rounded-2xl"
          />
        ) : getUrl(1) ? (
          <button
            onClick={() => handleSelect(1)}
            className="relative w-full h-full group"
          >
            <Image
              src={getUrl(1)!}
              alt="foto 2"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ) : (
          <div className="w-full h-full bg-royal-900" />
        )}
      </div>

      {/* Photo top-right */}
      <button
        className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-white/5"
        onClick={() => handleSelect(2)}
      >
        {getUrl(2) && (
          <Image
            src={getUrl(2)!}
            alt={`${destination.name} foto 3`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </button>

      {/* Photo middle-right */}
      <button
        className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-white/5"
        onClick={() => handleSelect(3)}
      >
        {getUrl(3) && (
          <Image
            src={getUrl(3)!}
            alt={`${destination.name} foto 4`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </button>

      {/* Bottom full-width: active image + "+N Foto Lainnya" */}
      <button
        className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group bg-white/5"
        onClick={() => handleSelect(0)}
      >
        {activeUrl && (
          <Image
            src={activeUrl}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {imgs.length > 4 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2 group-hover:bg-black/40 transition-colors">
            <Camera className="h-5 w-5 text-white" />
            <span className="text-white font-bold text-sm">+{imgs.length - 4} {t('destination_detail.more_photos')}</span>
          </div>
        )}
      </button>

    </div>
  );
}
