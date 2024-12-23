/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { PurpleTheme } from "./PurpleTheme"


export const AppTheme = ({ children }: { children: any }) => {
    return (<>
        <ThemeProvider theme={PurpleTheme}>
            <CssBaseline></CssBaseline>
            {children}
        </ThemeProvider>
    </>)
}