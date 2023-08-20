import { createStyles, Anchor, Group, ActionIcon, rem, Container } from '@mantine/core';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useStyles } from './styles';


export default function FooterCentered() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Image
                    src="/images/CatFooter.png"
                    alt="Cat"
                    width={60}
                    height={60}
                />


                <Group spacing="xs" position="right" noWrap>

                    <Link href="https://www.facebook.com/ConsultAnamika" target='_blank'>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandFacebook size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                    </Link>
                    {/* <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon> */}

                    <Link href="https://www.instagram.com/anamikajyotish/" target='_blank'>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandInstagram size="1.05rem" stroke={1.5} />
                        </ActionIcon>
                    </Link>
                </Group>
            </Container>
        </div>
    );
}