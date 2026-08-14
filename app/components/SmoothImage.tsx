"use client";

import { useState, useRef, useEffect } from "react";

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export default function SmoothImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...props
}: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset loaded state when src changes
    setIsLoaded(false);
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative w-full overflow-hidden bg-[#F5F5F5] ${wrapperClassName}`}>
      {/* Soft background pulse */}
      <div
        className={`absolute inset-0 bg-neutral-200/40 animate-pulse transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
