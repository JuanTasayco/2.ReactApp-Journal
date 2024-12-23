import axios from "axios";
import { ILogin } from "../interfaces/auth.interface";


export const LoginService = (body: ILogin) => {
    return axios.post('http://localhost:3000/auth/login', body)
}

