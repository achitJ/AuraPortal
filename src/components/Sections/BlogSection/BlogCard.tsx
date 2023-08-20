import { IBlog } from "@/types/sanity";
import { Card, Container, Divider, Flex, Stack, Text, Title } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { useStyles } from "./styles";
import { useEffect } from "react";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({blog, isPhone}:{blog:IBlog, isPhone: boolean}) {
    const { classes } = useStyles();

    let url = "";

    useEffect(() => {
        url = window.location.href;
    }, []);

    return (
        <>
            <Divider my="xl" />

            <Flex wrap="nowrap" align="center" justify="space-between" className={classes.wrapper}>
                <Stack spacing="xs">
                    <Link href={`/blog/${blog._id}`}>
                        <Title order={3}>{blog.title}</Title>
                    </Link>
                    <Text size="lg" className={classes.content} lineClamp={isPhone ? 1 : undefined}>
                        {blog.content}
                        <Link href={`/blog/${blog._id}`}>
                            ...
                        </Link>
                    </Text>
                    <IconShare 
                        size={24} 
                        color="gray" 
                        onClick={() => {
                            const currentUrl = `${url}/${blog._id}`;

                            if(navigator.share) {
                                navigator.share({
                                    title: blog.title,
                                    text: blog.content,
                                    url: currentUrl
                                })
                            } else {
                                navigator.clipboard.writeText(currentUrl);
                                notifications.show({
                                    title: 'Copied to clipboard',
                                    message: `Link has been copied to clipboard`,
                                    color: 'teal',
                                    icon: null,
                                    autoClose: 1000,
                                })
                            }
                        }}
                        className={classes.shareIcon}
                    />
                </Stack>

                {blog.imageURL && 
                    <Link href={`/blog/${blog._id}`}>
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
                    </Link>
                }
            </Flex>
        </>
    )
}