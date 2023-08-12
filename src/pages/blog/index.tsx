import { getAllBlogs } from '@/backend-services/sanity/blogs';
import BlogSection from '@/components/Sections/BlogSection';
import { IBlogShortened } from '@/types/sanity';
import { Container } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps<{blogs: IBlogShortened[]}> = async () => {
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