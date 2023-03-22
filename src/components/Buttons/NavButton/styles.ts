import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.md,
    
        [theme.fn.smallerThan('sm')]: {
          height: rem(42),
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },
    
        ...theme.fn.hover({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
      },
}));