"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  projectTitle?: string;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  projectTitle,
}: LightboxModalProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance threshold
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-10 text-white/80 select-none">
        <span className="font-mono text-xs tracking-wider uppercase">
          {projectTitle ? `${projectTitle} — ` : ""}{currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
          aria-label="Cerrar"
        >
          <X size={26} />
        </button>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 md:left-6 z-20 p-3 text-white/70 hover:text-white transition-colors rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 md:right-6 z-20 p-3 text-white/70 hover:text-white transition-colors rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-7xl max-h-[85vh] w-full h-full p-4 md:p-8 flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl transition-opacity duration-300 animate-fade-in"
          decoding="async"
        />
      </div>
    </div>
  );
}
