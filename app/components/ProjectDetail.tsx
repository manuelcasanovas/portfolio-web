"use client";

import { Project } from "../data/projects";

interface ProjectDetailProps {
  project: Project;
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

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const imageGroups = project.images ? groupImages(project.images, project.pairs) : [];

  return (
    <article className="space-y-6 md:space-y-8 w-full max-w-5xl mx-auto py-4">
      <div className="space-y-6 md:space-y-8 pt-4">
        {imageGroups.length > 0 ? (
          imageGroups.map((group, groupIndex) => {
            if (group.type === "full") {
              const item = group.items[0];
              return (
                <div
                  key={groupIndex}
                  className="w-full overflow-hidden flex justify-center bg-neutral-50/30"
                >
                  <img
                    src={item.src}
                    alt={`${project.title} - Imagen ${item.index + 1}`}
                    className="w-full h-auto block object-contain"
                    loading={item.index === 0 ? "eager" : "lazy"}
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
                    className="w-full overflow-hidden flex justify-center bg-neutral-50/30"
                  >
                    <img
                      src={item.src}
                      alt={`${project.title} - Imagen ${item.index + 1}`}
                      className="w-full h-auto block object-contain"
                      loading="lazy"
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
    </article>
  );
}
