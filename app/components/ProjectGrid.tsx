"use client";

import Image from "next/image";
import { Project } from "../data/projects";

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export default function ProjectGrid({
  projects,
  onSelectProject,
}: ProjectGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
      {projects.map((project) => (
        <article
          key={project.id}
          onClick={() => onSelectProject(project.id)}
          className="group cursor-pointer space-y-2"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100/90 border border-neutral-200/60 flex items-center justify-center">
            {project.images && project.images.length > 0 ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            ) : (
              <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">
                {project.title}
              </span>
            )}
          </div>

          <div className="space-y-0.5">
            <h3 className="font-serif text-base text-neutral-900 font-normal group-hover:text-neutral-600 transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-[11px] text-neutral-400 font-light">
              {project.year}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
