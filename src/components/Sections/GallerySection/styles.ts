import { rem, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        gallery: {
            display: "grid",
            gridTemplateRows: "repeat(auto-fill, 300px)",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gridGap: "10px",

            [BREAKPOINT]: {
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gridTemplateRows: "repeat(auto-fill, 200px)",
                gridGap: "5px"
            },
        },
        galleryItem: {
            width: "100%",
            height: "300px",
            objectFit: "cover",
            transition: "transform 0.2s ease-in-out",
            cursor: "pointer",

            [BREAKPOINT]: {
                height: "200px",
            },
        },
        modal: {
            padding: "0",

            ".mantine-Modal-inner": {
                padding: "0",
            }
        },
        modalImage: {
            maxWidth: "80vw",
            maxHeight: "80vh",
        }
    };
});