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
                  className={`block w-full text-left transition-colors mb-2 ${currentView === "works"
                    ? "text-neutral-950 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                    }`}
                >
                  Proyectos
                </button>

                <div className="pl-3 space-y-2 border-l border-neutral-200">
                  {PROJECTS.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleNav(project.id)}
                      className={`block w-full text-left text-xs transition-colors ${currentView === project.id
                        ? "text-neutral-950 font-medium"
                        : "text-neutral-400 hover:text-neutral-800"
                        }`}
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar*/}
      <aside className="hidden md:flex w-64 lg:w-72 flex-col fixed inset-y-0 left-0 bg-[#FBFBFB] p-10 lg:p-12 z-30 select-none space-y-12">
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
              Proyectos
            </button>

            <div className="space-y-2.5 pl-1">
              {PROJECTS.map((project) => {
                const isActive = currentView === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleNav(project.id)}
                    className={`block w-full text-left text-xs transition-colors ${isActive
                      ? "text-neutral-950 font-medium"
                      : "text-neutral-400 hover:text-neutral-800"
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
    </>
  );
}
