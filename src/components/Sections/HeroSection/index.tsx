import {
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from "@mantine/core";
import { useStyles } from "./styles";
import heroAreaSvg from "../../../../public/images/hero-area.svg";
import Image from "next/image";


export default function HeroSection() {
    const { classes, cx } = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Your Stars determine your life&#39;s journey
                    </Title>
                    <Text color="dimmed" mt="md" className={classes.content}>
                        Get solutions to your love, career, business, health, and other life problems, as well as future opportunities and posibilities.
                    </Text>

                    <Group mt={30}>
                        <Button radius="xl" size="md" color="grape" className={classes.control}>
                            Know Your Horoscope
                        </Button>
                    </Group>
                </div>
                <div className={classes.imageContainer}>
                    <Image 
                        className={cx(classes.image, 'selector')} 
                        src={heroAreaSvg} alt="heroArea" 
                        priority={true}
                        placeholder="empty"
						blurDataURL={'/img/hero-area.svg'}
                    />
                </div>
            </Container>
        </>
    )
}