import { Group } from "@mantine/core";
import { routes } from "@/config";
import NavButton from "../Buttons/NavButton";
import { useStyles } from "./styles";
import { INavButtonProps } from "@/types/props";

export default function NavLinks() {

    const { classes } = useStyles();

    const items = routes.map(({ link, label } : INavButtonProps) => {
        return <NavButton key={label} link={link} label={label}/>;
    });

    return (
        // <Group spacing={0} className={classes.links}>
        //     {items}
        // </Group>

        <>
            {items}
        </>
    )
};