export interface IService {
    title: string;
    price: string;
    description: string;
    imageURL: string;
}

export interface IBlog {
    title: string;
    _id: string;
    content: string;
    imageURL: string | null;
}

export interface IImage {
    _id: string;
    alt: string;
    imageURL: string;
}