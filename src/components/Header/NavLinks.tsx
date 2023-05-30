import { routes } from "@/config";
import NavButton from "../Buttons/NavButton";
import { useStyles } from "./styles";
import { INavButtonProps } from "@/types/props";
import { useRouter } from "next/router";

export default function NavLinks() {
    const { classes } = useStyles();
    const router = useRouter();

    const items = routes.map(({ link, label } : INavButtonProps) => {
        return <NavButton key={label} link={link} label={label}/>;
    });

    if(router.pathname !== "/") {
        items.unshift(<NavButton key="home" link="/" label="Home"/>);
    }

    return (
        <>
            {items}
        </>
    )
};