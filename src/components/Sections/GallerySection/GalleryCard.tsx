import { IGalleryCardProps } from "@/types/props";
import { Card, Modal, Title } from "@mantine/core";
import { useStyles } from "./styles";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";

export default function BlogSection({ image }: IGalleryCardProps) {
    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal 
                size="auto" 
                opened={opened} 
                onClose={close} 
                className={classes.modal}
                centered
            >
                <img
                    src={image.imageURL}
                    alt={image.alt}
                    className={classes.modalImage}
                />
            </Modal>
            <Card 
                shadow="sm" 
                radius="md" 
                padding="none"
                withBorder  
                key={image._id} 
                onClick={open}
                className={classes.galleryItem}
            >
                <Image
                    src={image.imageURL}
                    alt={image.alt}
                    fill
                    style={
                        {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }
                    }
                />
            </Card>
        </>
    )
}