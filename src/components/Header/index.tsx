import { Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useStyles } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { InstagramIcon, YoutubeIcon } from './icons';
import NavLinks from './NavLinks';

export default function HeaderMiddle() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={72} mb={20}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        
        <Group spacing={0} className={classes.links}>
          <NavLinks/>
        </Group>

        <Link href="/">
          <Image src="/images/logo.svg" width={137.5} height={50} alt="logo" priority/>
        </Link>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <InstagramIcon />
          </ActionIcon>
          <ActionIcon size="lg">
            <YoutubeIcon/>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}