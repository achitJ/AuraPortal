import { IContactItem, IBlogShortened } from "./misc";
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
	contactItem: IContactItem;
}

interface IContactIconsListProps {
    data?: IContactItem[];
}

interface IBlogSectionProps {
    blogs: IBlogShortened[];
}