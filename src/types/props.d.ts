import { IService } from "./sanity";

export interface INavButtonProps {
    label: string;
    link: string;
} 

export interface IBaseLayoutProps {
    children: ReactNode;
};

export interface IHomeProps {
    services: IService[];
}