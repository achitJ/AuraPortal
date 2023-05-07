import { useStore } from '@/utils/stores/store'
import Link from 'next/link'
import { useStyles } from './styles'
import { INavButtonProps } from '@/types/props'

export default function NavButton({ link, label }: INavButtonProps) {
	const { classes, cx } = useStyles()

	function closeBurger() {
		useStore.getState().setBurger(false);
	}

	return (
		<Link key={label} href={link} className={classes.link} onClick={closeBurger}>
			{label}
		</Link>
	)
}
