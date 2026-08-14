"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";
import { PROJECTS } from "./data/projects";

export default function Home() {
  const [currentView, setCurrentView] = useState<string>("works");

  const selectedProject = PROJECTS.find((p) => p.id === currentView) || null; //todos los proyectos hardcodeados

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-neutral-900 flex flex-col md:flex-row">
      <Sidebar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        selectedProject={selectedProject}
      />

      <main
        className={`flex-1 transition-all duration-300 ease-in-out px-6 pt-24 md:pt-12 pb-20 md:px-12 lg:px-16 w-full ${
          selectedProject ? "md:ml-12 lg:ml-16" : "md:ml-64 lg:ml-72"
        }`}
      >
        <div key={currentView}>
          {currentView === "works" && (
            <ProjectGrid
              projects={PROJECTS}
              onSelectProject={(projectId) => setCurrentView(projectId)} //callback
            />
          )}

          {currentView === "bio" && <AboutView />}

          {currentView === "contact" && <ContactView />}

          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              allProjects={PROJECTS}
              onSelectProject={(projectId) => setCurrentView(projectId)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
