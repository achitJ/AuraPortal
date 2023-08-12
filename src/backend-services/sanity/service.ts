import client from './client';
import { IService } from '@/types/sanity';

export async function getAllServices() : Promise<IService[]> {
    try {
        const services = await client.fetch(
            `*[_type == "service"] | order(priority asc) {
                title,
                price,
                description,
                "imageURL": image.asset->url
            }`
        );
        return services;
    } catch (error) {
        console.log(error);
        return [];
    }
}