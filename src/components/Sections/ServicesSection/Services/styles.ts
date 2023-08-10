import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	image: {
		width: "70%",

		[theme.fn.smallerThan('xs')]: {
            width: '45%'
        },
	},

	inner: {
		width: "220px",
		aspectRatio: "1 / 1.2",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		margin: "0 auto",

		[theme.fn.smallerThan('xs')]: {
            width: '300px',
			flexDirection: 'row',
			aspectRatio: '1 / 0.2',
			justifyContent: 'space-between',
        },
	},

    title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: "center",
		fontWeight: 700,
		lineHeight: 1,
		fontSize: rem(22),
    },
  
    price: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 500,
		fontSize: rem(22),
		// lineHeight: 1,
    },
}));