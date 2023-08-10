import { createStyles } from '@mantine/core';


export const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.xs,
        backgroundImage:'none',
        backgroundColor: 'transparent',
    },

    title: {
        color: theme.colors[theme.primaryColor][0],
    },

    description: {
        color: theme.white,
    },
}));