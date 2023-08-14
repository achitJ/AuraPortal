import { IBlogSectionProps } from "@/types/props";
import { IBlog } from "@/types/sanity";
import { Container, Stack } from "@mantine/core";
import BlogCard from "./BlogCard";
import { useMediaQuery } from "@mantine/hooks";

export default function BlogSection({ blogs }: IBlogSectionProps) {
    const isPhone = useMediaQuery('(max-width: 600px)');

    return (
        <Container size="md" mt={90}>
            <Stack spacing="xl">
                {blogs.map((blog: IBlog) => (
                    <BlogCard blog={blog} key={blog._id} isPhone={isPhone}/>
                ))}
            </Stack>
        </Container>
    )
}