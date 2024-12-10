import { Button, Link, TextField } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form className="row gy-2 ">
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
            <Button variant="contained" fullWidth>Login</Button>
          </div>
          <div className="col-md-6">
            <Button variant="contained" fullWidth>
              <Google sx={{ mr: 1 }} />
              Google
            </Button>
          </div>

          <div className="col-md-12 d-flex justify-content-end mt-4">
            <Link component={RouterLink} color="inherit" to="/auth/register">Crear una cuenta</Link>
          </div>
        </div>
      </form>
    </AuthLayout>



  );
};

