import { create } from "zustand";

type StoreState = {
  score: number;
  setScore: (score: number) => void;
};

export const useStore = create<StoreState>((set) => ({
  score: 0,
  setScore: (score) => set({ score }),
}));
