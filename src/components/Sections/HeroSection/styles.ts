import { rem, createStyles } from '@mantine/core'
import { spin } from '@/styles/animations/basic'

export const useStyles = createStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateRows: '1fr',
		gridTemplateColumns: '1.5fr 1fr',
		height: '100vh',
		alignItems: 'center',
		justifyItems: 'center',

		[theme.fn.smallerThan('md')]: {
			maxWidth: "95vw",
			gridTemplateColumns: '1fr',
			gridTemplateRows: '1fr 1fr',
			// marginLeft: 0,
			// marginRight: 0,
			// paddingLeft: 0,
			// paddingRight: 0,
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,

		[theme.fn.smallerThan('md')]: {
			height: '100%',
			justifyContent: 'end',
			// paddingBottom: 0,
		},
	},

	content: {
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
			textAlign: 'center',
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(52),
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('md')]: {
			textAlign: 'center',
		},

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(32),
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	imageContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},

	image: {
		width: '90%',
		height: '90%',
		inset: 0,
		animation: `${spin} 100s linear infinite`,

		[theme.fn.smallerThan('md')]: {
			width: '80%',
			height: '80%',
		},
	},
}))
