import { Container } from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IBaseLayoutProps } from "@/types/props";
import useStyles from './styles';

export default function BaseLayout(props: IBaseLayoutProps) {
	const { children } = props;
	const { classes } = useStyles();

	return (
		<Container className={classes.masterContainer}>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
}