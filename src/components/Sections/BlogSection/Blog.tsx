import { IBlog } from "@/types/sanity";
import { Container, Title, Text, Divider, Image, Center, Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Blog({blog} : {blog: IBlog}) {
    const heightWidth: string[] | undefined = blog.imageURL?.split('-')[1].split('.')[0].split('x');
    return (
        <Container size="sm" mt={90}>
            <Group>
                <Link href="/blog">
                    <IconArrowLeft size={30} />
                </Link>
            </Group>
            <Title order={1} align="center">{blog.title}</Title>

            <Center mt={30}>
                {blog.imageURL &&
                    <Image
                        src={blog.imageURL}
                        alt={blog.title}
                        width={heightWidth ? `min(${heightWidth[0]}, 90vw)` : 0}
                        // height={heightWidth ? heightWidth[1] : 0}
                        maw="90vw"
                        radius="md"
                    />
                }
            </Center>

            <Divider my="xl" />
            <Text ta="justify" size="xl">{blog.content}</Text>
        </Container>
    )
}