"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Camera, Maximize2, Tag } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  GalleryCategory,
  GalleryMediaItem,
} from "@/content/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

interface GalleryGridProps {
  initialCategory?: GalleryCategory;
  limit?: number;
}

export function GalleryGrid({ initialCategory = "All", limit }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      <h2 className="sr-only">Browse documented field records</h2>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E8E8E2]">
        <span className="text-xs uppercase font-mono tracking-widest text-[#6B6B6B] mr-2 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-[#087A5B]" />
          Filter Archive:
        </span>
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={isActive}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#102A43] text-white shadow-xs"
                  : "bg-white text-[#6B6B6B] hover:text-[#171717] hover:bg-neutral-100 border border-[#E8E8E2]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {displayItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedItem(item); } }}
            role="button"
            tabIndex={0}
            className="group relative bg-white border border-[#E8E8E2] hover:border-[#102A43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087A5B] transition-all duration-300 flex flex-col cursor-pointer overflow-hidden shadow-xs hover:shadow-md"
          >
            {/* Media thumbnail area */}
            <div className="relative aspect-video bg-neutral-900 overflow-hidden">
              {item.type === "video" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.posterSrc || "/images/video-poster.webp"}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Play badge */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#087A5B] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.mediaSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 p-1.5 bg-black/60 text-white rounded-xs">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Category pill */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider bg-[#102A43]/90 text-white px-2.5 py-1">
                <span>{item.category}</span>
              </div>

              {/* View full icon on hover */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#171717] p-1.5">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Content description */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[10px] sm:text-[11px] font-mono text-[#6B6B6B] mb-2 uppercase tracking-wider">
                  <span className="text-[#087A5B] font-semibold">{item.dateBadge}</span>
                  <span>{item.locationBadge}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#102A43] group-hover:text-[#087A5B] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] mt-2 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#087A5B]">
                <span>{item.type === "video" ? "Watch Video Record" : "View Photo Archive"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <GalleryLightbox
        item={selectedItem}
        items={displayItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(newItem) => setSelectedItem(newItem)}
      />
    </div>
  );
}
