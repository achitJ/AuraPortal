import client from './client';
import { IImage } from '@/types/sanity';

export async function getAllImages() : Promise<IImage[]> {
    try {
        const images = await client.fetch(
            `*[_type == "gallery"] {
                _id,
                "alt": title,
                "imageURL": image.asset->url  
            }`
        );
        return images;
    } catch (error) {
        console.log(error);
        return [];
    }
}