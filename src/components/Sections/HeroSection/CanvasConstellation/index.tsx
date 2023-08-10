import { useStyles } from "./styles";

export default function CanvasConstellation() {
    const { classes } = useStyles()

    return (
        <>
            <canvas className={classes.cv}></canvas>
        </>
    )
}