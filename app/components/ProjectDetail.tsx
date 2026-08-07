"use client";

import Image from "next/image";
import { Project } from "../data/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="space-y-8 max-w-4xl mx-auto py-4">
      <header className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-normal uppercase tracking-wider text-neutral-900">
          {project.title}
        </h2>
        <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
          {project.description}
        </p>
      </header>

      <div className="space-y-6 pt-4">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-neutral-100"
            >
              <Image
                src={img}
                alt={`${project.title} - Imagen ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 80vw"
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <div className="relative w-full aspect-[16/9] bg-neutral-100/90 border border-neutral-200/60 flex items-center justify-center">
            <span className="font-mono text-xs text-neutral-400">
              {project.title} — Sin imágenes cargadas
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
