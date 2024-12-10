import { AuthLayout } from "../layouts/AuthLayout";
import { Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registrarse">
      <form className="row gy-2 ">
        <div className="col-md-6">
          <TextField label="Nombre"
            type="correo"
            placeholder="Nombre completo"
            fullWidth></TextField>
        </div>
        <div className="col-md-6">
          <TextField label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            fullWidth></TextField>
        </div>
        <div className="col-md-6">
          <TextField label="Contraseña"
            type="password"
            placeholder="*******"
            fullWidth></TextField>
        </div>

        <div className="row m-0 p-0 mt-4">
          <div className="col-md-6">
            <Button variant="contained" fullWidth>Crear Cuenta</Button>
          </div>
          <div className="col-md-12 d-flex justify-content-end mt-4">
            <Typography>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">Ingresar</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
