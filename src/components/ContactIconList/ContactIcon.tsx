import { ThemeIcon, Text } from '@mantine/core';
import { useStyles } from './styles';
import { IContactIconProps } from '@/types/props';

export default function ContactIcon({
	icon: Icon,
	title,
	description,
	...others
}: IContactIconProps) {
	const { classes } = useStyles();
	return (
		<div className={classes.wrapper} {...others}>
			<ThemeIcon size={40} radius="md" className={classes.icon}>
				<Icon size="1.8rem" />
			</ThemeIcon>

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Text size="md" className={classes.description}>{description}</Text>
			</div>
		</div>
	);
}