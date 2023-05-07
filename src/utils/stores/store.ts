import { create } from "zustand";
import { IStore } from "@/types/stores";

export const useStore = create<IStore>((set) => ({
    path: "/",
    setPath: (path: string) => set({ path }),
}));