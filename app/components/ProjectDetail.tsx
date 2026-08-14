"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "../data/projects";
import LightboxModal from "./LightboxModal";
import ProjectImage from "./ProjectImage";

interface ProjectDetailProps {
  project: Project;
  allProjects?: Project[];
  onSelectProject?: (projectId: string) => void;
}

interface ImageGroup {
  type: "full" | "pair";
  items: { src: string; index: number }[];
}

function groupImages(images: string[], customPairs?: number[][]): ImageGroup[] {
  const groups: ImageGroup[] = [];

  if (customPairs && customPairs.length > 0) {
    let i = 0;
    while (i < images.length) {
      const pair = customPairs.find((p) => p[0] === i && p[1] === i + 1);
      if (pair && i + 1 < images.length) {
        groups.push({
          type: "pair",
          items: [
            { src: images[i], index: i },
            { src: images[i + 1], index: i + 1 },
          ],
        });
        i += 2;
      } else {
        groups.push({
          type: "full",
          items: [{ src: images[i], index: i }],
        });
        i += 1;
      }
    }
    return groups;
  }

  // Fallback: render each image full width
  images.forEach((src, index) => {
    groups.push({
      type: "full",
      items: [{ src, index }],
    });
  });

  return groups;
}

export default function ProjectDetail({
  project,
  allProjects = [],
  onSelectProject,
}: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageGroups = project.images ? groupImages(project.images, project.pairs) : [];
  const otherProjects = allProjects.filter(
    (p) => p.id !== project.id && p.images && p.images.length > 0
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="space-y-12 md:space-y-16 w-full max-w-5xl mx-auto py-4">
      <div className="space-y-6 md:space-y-8 pt-4">
        {imageGroups.length > 0 ? (
          imageGroups.map((group, groupIndex) => {
            if (group.type === "full") {
              const item = group.items[0];
              return (
                <div
                  key={groupIndex}
                  className="w-full flex justify-center cursor-zoom-in group"
                >
                  <ProjectImage
                    src={item.src}
                    alt={`${project.title} - Imagen ${item.index + 1}`}
                    priority={item.index < 2}
                    onClick={() => handleOpenLightbox(item.index)}
                    className="transition-opacity duration-300 group-hover:opacity-95"
                  />
                </div>
              );
            }

            return (
              <div
                key={groupIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center"
              >
                {group.items.map((item) => (
                  <div
                    key={item.index}
                    className="w-full flex justify-center cursor-zoom-in group"
                  >
                    <ProjectImage
                      src={item.src}
                      alt={`${project.title} - Imagen ${item.index + 1}`}
                      priority={item.index < 2}
                      onClick={() => handleOpenLightbox(item.index)}
                      className="transition-opacity duration-300 group-hover:opacity-95"
                    />
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <div className="relative w-full aspect-[16/9] bg-neutral-100/90 border border-neutral-200/60 flex items-center justify-center">
            <span className="font-mono text-xs text-neutral-400">
              {project.title} — Sin imágenes cargadas
            </span>
          </div>
        )}
      </div>

      {otherProjects.length > 0 && (
        <section className="pt-16 border-t border-neutral-200/60 space-y-6">
          <h3 className="font-serif text-lg md:text-xl font-normal tracking-tight text-neutral-900">
            Otros trabajos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {otherProjects.slice(0, 4).map((other) => (
              <article
                key={other.id}
                onClick={() => onSelectProject && onSelectProject(other.id)}
                className="group cursor-pointer flex flex-col overflow-hidden bg-[#F2F2F2] transition-all duration-300 hover:shadow-md"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200/60">
                  {other.images && other.images.length > 0 ? (
                    <Image
                      src={other.images[0]}
                      alt={other.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400">
                      {other.title}
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-4 text-center flex flex-col justify-center items-center flex-1 space-y-1">
                  <h4 className="font-sans text-xs md:text-sm font-semibold tracking-wide text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  {other.year && (
                    <p className="font-mono text-[10px] md:text-xs text-neutral-400 font-light">
                      {other.year}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <LightboxModal
        images={project.images || []}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        projectTitle={project.title}
      />
    </article>
  );
}
