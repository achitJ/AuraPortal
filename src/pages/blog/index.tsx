import { getAllBlogs } from '@/backend-services/sanity/blogs';
import BlogSection from '@/components/Sections/BlogSection';
import { IBlog } from '@/types/sanity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps<{blogs: IBlog[]}> = async () => {
  const blogs = await getAllBlogs();

  return {
    props: {
      blogs,
    },
  }
}

export default function Blog({ blogs } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <BlogSection blogs={blogs}/>
    </>
  )
}