/* eslint-disable @typescript-eslint/no-explicit-any */

import { Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }: { children: any, title: string }) => {
    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="p-5 border rounded" style={{maxWidth: "500px"}}>
                    <Typography variant="h5" sx={{ mb: 4 }}>{title}</Typography>
                    {children}
                </div>

            </div>
        </>
    )
}