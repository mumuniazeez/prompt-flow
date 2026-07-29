import { ProjectResponseDto } from "@/promptflow-api";
import { create } from "zustand";

interface ProjectState {
  projects: ProjectResponseDto[];

  addProject: (project: ProjectResponseDto) => void;

  setProjects: (projects: ProjectResponseDto[]) => void;

  updateProject: (projectId: string, project: ProjectResponseDto) => void;

  deleteProject: (projectId: string, project: ProjectResponseDto) => void;
}

export const useProjectStore = create<ProjectState>()((set) => ({
  projects: [],

  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),

  setProjects: (projects) => set({ projects }),

  updateProject: (projectId, project) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, project } : project,
      ),
    })),

  deleteProject: (projectId) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id === projectId),
    })),
}));
