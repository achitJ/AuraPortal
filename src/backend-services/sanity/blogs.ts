import { IBlogShortened } from "@/types/sanity";
import client from "./client";

export async function getAllBlogs() : Promise<IBlogShortened[]> {
    try {
        const services = await client.fetch(
            `*[_type == "blog"] | order(_createdAt desc) {
                _id,
                title,
                "content": array::join(string::split(content[0].children[0].text, " ")[0..25], " "),
                "imageURL": image.asset->url
            }`
        );
        return services;
    } catch (error) {
        console.log(error);
        return [];
    }
}