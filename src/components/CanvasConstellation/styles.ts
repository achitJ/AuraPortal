import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    cv: {
        position: 'absolute',
        background: "#111",
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        zIndex: '-5',
        opacity: '1',
    }
}));