import { create } from "zustand";

type StoreState = {};

export const useStore = create<StoreState>((set) => ({}));
