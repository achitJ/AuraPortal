export interface IStore {
    burger: boolean;
    toggleBurger: () => void;
    setBurger: (burger: boolean) => void;
};