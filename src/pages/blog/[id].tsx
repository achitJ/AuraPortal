import { getBlogById } from '@/backend-services/sanity/blogs';
import { IBlog } from '@/types/sanity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Blog from '@/components/Sections/BlogSection/Blog';

export const getServerSideProps: GetServerSideProps<{ blog: IBlog }> = async ({resolvedUrl}) => {
    const id = resolvedUrl.split('/')[2];
    const blog = await getBlogById(id);

    return {
        props: {
            blog,
        },
    }
}

export default function BlogPage({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Blog blog={blog} />
        </>
    )
}