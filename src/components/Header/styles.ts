import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	header: {
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1,
		borderBottom: "0.0625rem solid rgb(233, 236, 239)"
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		height: '100%',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	social: {
		width: rem(260),

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	dropdown: {
		position: 'absolute',
		top: 72,
		left: 0,
		right: 0,
		zIndex: -1,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',
		backgroundColor: "white",

	
		[theme.fn.largerThan('sm')]: {
		  display: 'none',
		},
	},
}))
