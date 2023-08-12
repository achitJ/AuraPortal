import { IService } from "@/types/sanity";
import { useStyles } from "./styles";
import { 
    Card,
    Text,
    Flex,
    Image,
} from "@mantine/core";

export default function Service({ title, description, imageURL, price } : IService) {
    const { classes } = useStyles();

    return (
        <>
            <Card shadow="sm" radius="md" withBorder>
                <div className={classes.inner}>
                    <div className={classes.image}>
                        <Image src={imageURL} alt={title}/>
                    </div>
                    <Flex direction="column" align="center">
                        <Text className={classes.title}>
                            {title}
                        </Text>
                        <Text className={classes.price}>
                            INR {price}
                        </Text>
                    </Flex>
                </div>
            </Card>
        </>
    )
}