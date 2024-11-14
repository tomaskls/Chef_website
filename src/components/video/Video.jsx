import { Grid2 } from "@mui/material";
import { Video1, Video2 } from "./youtube";

export function Video() {
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                        <Video1 />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Video2 />
                </Grid2>
            </Grid2>
        </>

    )
}