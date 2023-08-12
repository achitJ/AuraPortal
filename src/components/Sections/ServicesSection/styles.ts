import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    cards: {
        display: "flex",
        flexWrap: "wrap",
        gap: rem(30),
        justifyContent: "center",
        marginTop: rem(40),

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            gap: rem(10),
        },
    }
}));