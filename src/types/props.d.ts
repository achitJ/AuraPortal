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

export interface IContactIconProps {
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
}

interface IContactIconsListProps {
    data?: IContactIconProps[];
}