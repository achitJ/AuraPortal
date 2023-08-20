import { IContactItem, IBlogShortened } from "./misc";
import { IBlog, IService, IImage } from "./sanity";

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

export interface IContactIconsListProps {
    data: IContactItem[];
}

export interface IBlogSectionProps {
    blogs: IBlog[];
}

export interface IGallerySectionProps {
    images: IImage[];
}

export interface IGalleryCardProps {
    image: IImage;
}