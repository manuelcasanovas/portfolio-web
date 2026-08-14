"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROJECTS, Project } from "../data/projects";

interface SidebarProps {
  currentView: "works" | "bio" | "contact" | string;
  onNavigate: (view: "works" | "bio" | "contact" | string) => void;
  selectedProject: Project | null;
}

export default function Sidebar({ currentView, onNavigate, selectedProject }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isProjectView = selectedProject !== null;

  const handleNav = (view: string) => {
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#FBFBFB] border-b border-neutral-200/60 z-40 px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav("works")}
          className="font-serif text-xl tracking-tight text-neutral-900"
        >
          Micaela Bianchi
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-neutral-700 hover:text-neutral-950"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-neutral-900/20 backdrop-blur-xs z-30"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-72 h-full bg-[#FBFBFB] p-8 pt-20 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-serif text-2xl text-neutral-900 font-normal">
              Micaela Bianchi
            </h1>

            <nav className="space-y-4 text-sm font-sans tracking-wide">
              <button
                onClick={() => handleNav("bio")}
                className={`block w-full text-left transition-colors ${currentView === "bio"
                  ? "text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                Sobre mi
              </button>

              <button
                onClick={() => handleNav("contact")}
                className={`block w-full text-left transition-colors ${currentView === "contact"
                  ? "text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                Contacto
              </button>

              <div className="pt-2">
                <button
                  onClick={() => handleNav("works")}
                  className={`block w-full text-left transition-colors mb-3 ${currentView === "works"
                    ? "text-neutral-950 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                    }`}
                >
                  Trabajos
                </button>

                <div className="pl-3 space-y-3 border-l border-neutral-200/80 pt-1">
                  {PROJECTS.map((project) => {
                    const isActive = currentView === project.id;
                    return (
                      <button
                        key={project.id}
                        onClick={() => handleNav(project.id)}
                        className={`block w-full text-left text-xs leading-relaxed transition-all py-0.5 -ml-[13px] pl-3 border-l-2 ${isActive
                          ? "border-neutral-900 text-neutral-950 font-semibold"
                          : "border-transparent text-neutral-400 hover:text-neutral-800 hover:border-neutral-300"
                          }`}
                      >
                        {project.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:block fixed inset-y-0 left-0 z-30 group ${
          isProjectView ? "w-12 hover:w-64 lg:hover:w-72" : "w-64 lg:w-72"
        }`}
      >
        <aside
          className={`w-64 lg:w-72 h-full flex flex-col bg-[#FBFBFB]/95 backdrop-blur-md p-10 lg:p-12 select-none space-y-12 border-r border-neutral-200/60 shadow-lg md:shadow-none transition-transform duration-300 ease-in-out ${
            isProjectView
              ? "-translate-x-[calc(100%-16px)] group-hover:translate-x-0"
              : "translate-x-0"
          }`}
        >
          {isProjectView && (
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-0 transition-opacity pointer-events-none flex flex-col items-center gap-1">
              <div className="w-1 h-8 rounded-full bg-neutral-500/70" />
            </div>
          )}

          <div>
            <button
              onClick={() => handleNav("works")}
              className="text-left group block"
            >
              <h1 className="font-serif text-2xl lg:text-3xl font-normal tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Micaela Bianchi
              </h1>
            </button>
          </div>

          <nav className="space-y-6 text-sm font-sans tracking-wide">
            <div>
              <button
                onClick={() => handleNav("bio")}
                className={`block w-full text-left transition-colors ${currentView === "bio"
                  ? "text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                Sobre mi
              </button>
            </div>

            <div>
              <button
                onClick={() => handleNav("contact")}
                className={`block w-full text-left transition-colors ${currentView === "contact"
                  ? "text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                Contacto
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => handleNav("works")}
                className={`block w-full text-left transition-colors ${currentView === "works"
                  ? "text-neutral-950 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                Trabajos
              </button>

              <div className="space-y-3.5 pl-3 border-l border-neutral-200/80 pt-1">
                {PROJECTS.map((project) => {
                  const isActive = currentView === project.id;
                  return (
                    <button
                      key={project.id}
                      onClick={() => handleNav(project.id)}
                      className={`block w-full text-left text-xs leading-relaxed transition-all py-0.5 -ml-[13px] pl-3 border-l-2 ${isActive
                        ? "border-neutral-900 text-neutral-950 font-semibold"
                        : "border-transparent text-neutral-400 hover:text-neutral-800 hover:border-neutral-300"
                        }`}
                    >
                      {project.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
