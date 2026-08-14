"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  onClick,
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="relative w-full overflow-hidden bg-neutral-100/40"
    >
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={933}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto block object-contain transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
