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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project, index) => {
        const coverSrc = project.coverImage || (project.images && project.images[0]);
        const coverPos = project.coverPosition || "center";

        return (
          <article
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100/90 border border-neutral-200/60 flex items-center justify-center">
              {coverSrc ? (
                <>
                  <Image
                    src={coverSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 6}
                    style={{ objectPosition: coverPos }}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4 z-10">
                  <h3 className="font-serif text-lg md:text-xl text-white font-normal tracking-wide">
                    {project.title}
                  </h3>
                  {project.year && (
                    <p className="font-mono text-xs text-neutral-200/80 font-light mt-1">
                      {project.year}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">
                {project.title}
              </span>
            )}
          </div>
        </article>
      );
    })}
    </section>
  );
}
