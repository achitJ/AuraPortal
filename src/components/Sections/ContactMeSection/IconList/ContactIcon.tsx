import { ThemeIcon, Text, Group } from '@mantine/core';
import { useStyles } from './styles';
import { IContactIconProps } from '@/types/props';
import { IconCopy } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

export default function ContactIcon({
	contactItem: {
		title,
		description,
		icon: Icon,
		copy,
		link,
		target,
	}
}: IContactIconProps) {
	const { classes } = useStyles();
	const linkProps = link ? { href: link, target} : {};

	return (
		<div className={classes.wrapper}>
			<ThemeIcon size={40} radius="md" className={classes.icon}>
				<Icon size="1.8rem" />
			</ThemeIcon>

			<div>
				<Text size="xs" className={classes.title}>
					{title}
				</Text>
				<Group spacing="xs">
					<a {...linkProps}>
						<Text size="md" className={classes.description}>{description}</Text>
					</a>
					{copy && 
						<IconCopy 
							onClick={() => {
								navigator.clipboard.writeText(description);
								notifications.show({
									title: 'Copied to clipboard',
									message: `${title} has been copied to clipboard`,
									color: 'teal',
									icon: null,
									autoClose: 1000,
								})
							}}
							size="1.2rem"
							fontWeight={100}
							cursor='pointer'
						/>
					}
				</Group>
			</div>
		</div>
	);
}