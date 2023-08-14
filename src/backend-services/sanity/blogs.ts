import { IBlog } from "@/types/sanity";
import client from "./client";

export async function getAllBlogs() : Promise<IBlog[]> {
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

export async function getBlogById(id: string) : Promise<IBlog> {
    try {
        const blog = await client.fetch(
            `*[_type == "blog" && _id == "${id}"] {
                _id,
                title,
                "content": content[0].children[0].text,
                "imageURL": image.asset->url
            }`
        );
        return blog[0];
    } catch (error) {
        console.log(error);
        return {} as IBlog;
    }
}