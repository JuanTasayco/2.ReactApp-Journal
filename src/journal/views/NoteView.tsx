import { SaveOutlined } from "@mui/icons-material"
import { Button, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
    return (<>

        <div className="container px-5 py-3">
            <div className="d-flex justify-content-between">
                <Typography fontSize={39}>28 de Agosto, 2023</Typography>
                <Button>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined> Guardar
                </Button>
            </div>

            <div className="row gap-2">
                <div className="col-12">
                    <TextField fullWidth type="text" placeholder="Ingrese un título" label="Título" variant="filled"></TextField>
                </div>

                <div className="col-12">
                    <TextField minRows={5} fullWidth type="text" placeholder="¿Qué sucedio el día de hoy?" variant="filled" multiline></TextField>
                </div>

                <div className="col-12">
                    <ImageGallery></ImageGallery>
                </div>
            </div>


        </div>
    </>)
}