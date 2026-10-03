"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryMediaItem } from "@/content/gallery";

interface GalleryLightboxProps {
  item: GalleryMediaItem | null;
  items: GalleryMediaItem[];
  onClose: () => void;
  onSelect: (item: GalleryMediaItem) => void;
}

export function GalleryLightbox({
  item,
  items,
  onClose,
  onSelect,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < items.length - 1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    if (item && !openerRef.current && document.activeElement instanceof HTMLElement) {
      openerRef.current = document.activeElement;
    }
    if (!item && openerRef.current) {
      openerRef.current.focus();
      openerRef.current = null;
    }
  }, [item]);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), video[controls], a[href]");
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, handlePrev, handleNext, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10 backdrop-blur-xs"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Media viewer for ${item.title}`}
    >
      {/* Background overlay click to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#087A5B] transition-colors"
        aria-label="Close media preview"
        ref={closeButtonRef}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      {hasPrev && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#087A5B] transition-colors"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#087A5B] transition-colors"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#102A43] border border-white/10 shadow-2xl overflow-hidden">
        {/* Media Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {item.type === "video" ? (
            <video
              key={item.mediaSrc}
              aria-label={item.title + " video"}
              playsInline
              className="w-full h-full max-h-[65vh] object-contain"
              poster={item.posterSrc ?? "/images/video-poster.webp"}
              controls
              preload="none"
            >
              <source src={item.mediaSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={item.mediaSrc}
                alt={item.title}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-6 bg-[#0c2135] border-t border-white/10 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 bg-[#087A5B] text-white font-semibold uppercase">
                {item.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-[#45BCE7] font-medium">{item.dateBadge}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">{item.locationBadge}</span>
            </div>
            <span className="text-xs text-gray-400 font-mono">
              Item {currentIndex + 1} of {items.length}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-heading font-bold text-white">
            {item.title}
          </h3>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
