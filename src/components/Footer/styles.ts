import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	footer: {
        marginTop: rem(80),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
        [theme.fn.smallerThan('sm')]: {
            marginTop: rem(40),
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}))
