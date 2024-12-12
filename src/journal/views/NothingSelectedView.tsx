import { Star } from "@mui/icons-material"
import { Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (<>
        <div className="p-3" style={{ flexGrow: 1, display: "flex" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#262254", flexGrow: 1 }}>
                <div className="Forms d-flex flex-column align-items-center">
                    <Star sx={{ fontSize: 100, color: "white" }}></Star>
                    <Typography variant="h5" className="text-white">Selecciona o crea una entrada</Typography>
                </div>
            </div>
        </div>
    </>)
}