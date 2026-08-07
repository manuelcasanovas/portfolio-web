"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";
import { PROJECTS } from "./data/projects";

export default function Home() {
  const [currentView, setCurrentView] = useState<string>("works");

  const selectedProject = PROJECTS.find((p) => p.id === currentView) || null;

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-neutral-900 flex flex-col md:flex-row">
      <Sidebar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        selectedProject={selectedProject}
      />

      <main className="flex-1 md:ml-64 lg:ml-72 px-6 pt-24 md:pt-12 pb-20 md:px-12 lg:px-16 w-full">
        {currentView === "works" && (
          <ProjectGrid
            projects={PROJECTS}
            onSelectProject={(projectId) => setCurrentView(projectId)}
          />
        )}

        {currentView === "bio" && <AboutView />}

        {(currentView === "contact" || currentView === "contacto") && <ContactView />}

        {selectedProject && <ProjectDetail project={selectedProject} />}
      </main>
    </div>
  );
}
