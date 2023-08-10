import { Ref } from "react";
import { create } from "zustand";

interface IStoreActions {
    toggleBurger: () => void;
    setBurger: (burger: boolean) => void;
}

interface IStore {
    burger: boolean;
};

const initialState: IStore = {
    burger: false,
}

export const useStore = create<IStore & IStoreActions>((set) => ({
    ...initialState,
    toggleBurger: () => set((state) => ({ burger: !state.burger })),
    setBurger: (burger: boolean) => set({ burger }),
}));