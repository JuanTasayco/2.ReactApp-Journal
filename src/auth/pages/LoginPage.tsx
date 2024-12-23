/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Link, TextField } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { checkingAuthentication } from "../../store/auth/thunk";

export const LoginPage = () => {
  const { form, cleanForm, onInputChange } = useForm({
    email: "",
    password: "",
  })

  const dispatch = useDispatch();

  const { email, password } = form;

  const submitEvent = (event: any) => {
    event.preventDefault();

  }

  const googleSignIn = (event: any) => {
    event.preventDefault();
    dispatch(checkingAuthentication())
  }

  return (
    <AuthLayout title="Login">
      <form className="row gy-2 ">
        <div className="col-md-6">
          <TextField label="Correo"
            type="text"
            value={email}
            name="email"
            placeholder="correo@gmail.com"
            onChange={onInputChange}
            fullWidth></TextField>
        </div>
        <div className="col-md-6">
          <TextField label="Contraseña"
            type="password"
            value={password}
            name="password"
            placeholder="*******"
            onChange={onInputChange}
            fullWidth></TextField>
        </div>

        <div className="row m-0 p-0 mt-4">
          <div className="col-md-6">
            <Button onClick={(event) => submitEvent(event)} type="submit" variant="contained" fullWidth>Login</Button>
          </div>
          <div className="col-md-6">
            <Button onClick={googleSignIn} variant="contained" fullWidth>
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

