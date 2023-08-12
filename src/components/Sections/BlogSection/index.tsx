import { IBlogSectionProps } from "@/types/props";
import { IBlogShortened } from "@/types/sanity";
import { Card, Container, Divider, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import Image from "next/image";
import { useStyles } from "./styles";
import { useEffect } from "react";

export default function BlogSection({ blogs }: IBlogSectionProps) {
    const { classes } = useStyles();
    let url = "";

    useEffect(() => {
        url = window.location.href;
        console.log(url);
    }, []);

    return (
        <Container size="md" mt={90}>
            <Stack spacing="xl">
                {blogs.map((blog: IBlogShortened) => (
                    <div key={blog._id}>
                        <Divider my="xl" />

                        <Flex wrap="nowrap" align="center" justify="space-between" className={classes.wrapper}>
                            <Stack spacing="xs">
                                <Title order={3}>{blog.title}</Title>
                                <Text size="lg" className={classes.content}>{blog.content}...</Text>
                                <IconShare size={24} color="gray" className={classes.shareIcon}/>
                            </Stack>

                            {blog.imageURL && 
                                <Card 
                                    shadow="sm" 
                                    padding="lg" 
                                    radius="md" 
                                    withBorder 
                                    className={classes.ImageCard}
                                >
                                    <Image
                                        src={blog.imageURL}
                                        alt={blog.title}
                                        fill
                                        sizes="100%"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </Card>
                            }
                        </Flex>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}