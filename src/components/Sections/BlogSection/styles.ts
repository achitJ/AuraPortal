import { rem, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            paddingLeft: rem(30),
            paddingRight: rem(30),

            [BREAKPOINT]: {
                paddingLeft: 0,
                paddingRight: 0,
                alignItems: 'flex-start',
            },
        },

        content: {
            [BREAKPOINT]: {
                // display: 'none',
            },
        },

        shareIcon: {
            cursor: 'pointer',

            [BREAKPOINT]: {
                // marginTop: rem(30),
            },
        },

        ImageCard: {
            maxHeight: rem(150),
            maxWidth: rem(150),
            minHeight: rem(150),
            minWidth: rem(150),
            marginLeft: rem(30),

            [BREAKPOINT]: {
                maxHeight: rem(80),
                maxWidth: rem(80),
                minHeight: rem(80),
                minWidth: rem(80),
            },
        }
    };
});