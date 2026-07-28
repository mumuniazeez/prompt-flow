import { ProjectResponseDto } from "@/promptflow-api";
import { create } from "zustand";

interface ProjectState {
  projects: ProjectResponseDto[];
  addProject: (project: ProjectResponseDto) => void;
  setProjects: (projects: ProjectResponseDto[]) => void;
}

export const useProjectStore = create<ProjectState>()((set) => ({
  projects: [],
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  setProjects: (projects) => set({ projects }),
}));
