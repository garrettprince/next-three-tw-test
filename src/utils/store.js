import { create } from "zustand";

export const usePlayDateIconInfo = create((set) => ({
  size: [1, 1, 1],
  setSize: (arr) => set({ size: arr }),
  location: [-0.75, 2, 0],
  setLocation: (arr) => set({ location: arr }),
  rotation: [0, 0, 0],
  setRotation: (arr) => set({ rotation: arr }),
}));
