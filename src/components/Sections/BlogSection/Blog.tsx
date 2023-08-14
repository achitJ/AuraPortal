import { IBlog } from "@/types/sanity";
import { Container, Title, Text, Divider, Image, Center } from "@mantine/core";

export default function Blog({blog} : {blog: IBlog}) {
    const heightWidth: string[] | undefined = blog.imageURL?.split('-')[1].split('.')[0].split('x');
    return (
        <Container size="sm" mt={90}>
            <Title order={1} align="center">{blog.title}</Title>

            <Center mt={30}>
                {blog.imageURL &&
                    <Image
                        src={blog.imageURL}
                        alt={blog.title}
                        width={heightWidth ? heightWidth[0] : 0}
                        height={heightWidth ? heightWidth[1] : 0}
                        radius="md"
                    />
                }
            </Center>

            <Divider my="xl" />
            <Text ta="justify" size="xl">{blog.content}</Text>
        </Container>
    )
}