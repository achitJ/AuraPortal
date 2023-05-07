import { create } from "zustand";
import { IStore } from "@/types/stores";

export const useStore = create<IStore>((set) => ({
    burger: false,
    toggleBurger: () => set((state) => ({ burger: !state.burger })),
    setBurger: (burger: boolean) => set({ burger }),
}));