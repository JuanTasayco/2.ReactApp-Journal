export interface ISign {
    nombre: string;
    correo: string;
    contraseña: string;
}

export type ILogin = Omit<ISign, 'nombre'>