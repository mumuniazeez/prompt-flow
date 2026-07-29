import { ProjectResponseDto } from "@/promptflow-api";
import { create } from "zustand";

interface EndpointState {
  endpoint: ProjectResponseDto[];

  addEndpoint: (endpoint: ProjectResponseDto) => void;

  setEndpoints: (endpoint: ProjectResponseDto[]) => void;

  updateEndpoint: (endpointId: string, endpoint: ProjectResponseDto) => void;

  deleteEndpoint: (endpointId: string, endpoint: ProjectResponseDto) => void;
}

export const useEndpointStore = create<EndpointState>()((set) => ({
  endpoint: [],

  addEndpoint: (endpoint) =>
    set((state) => ({ endpoint: [...state.endpoint, endpoint] })),

  setEndpoints: (endpoint) => set({ endpoint }),

  updateEndpoint: (endpointId, endpoint) =>
    set((state) => ({
      endpoint: state.endpoint.map((p) =>
        p.id === endpointId ? { ...p, endpoint } : endpoint,
      ),
    })),

  deleteEndpoint: (endpointId) =>
    set((state) => ({
      endpoint: state.endpoint.filter((p) => p.id === endpointId),
    })),
}));
