import { IGallerySectionProps } from "@/types/props";
import { IImage } from "@/types/sanity";
import { Card, Center, Container, Divider, Stack, Title } from "@mantine/core";
import { useStyles } from "./styles";
import GalleryCard from "./GalleryCard";

export default function BlogSection({ images }: IGallerySectionProps) {
    const { classes } = useStyles();

    return (
        <Container size="md" mt={90}>
            <Center>
                <Title order={1} align="center">Gallery</Title>
            </Center>
            <Divider my="xl" />

            <div className={classes.gallery}>
                {images.map((image: IImage) => (
                    <GalleryCard image={image} key={image._id} />
                ))}
            </div>
        </Container>
    )
}