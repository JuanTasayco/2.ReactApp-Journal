/* eslint-disable @typescript-eslint/no-explicit-any */

import { checkingCredentials } from "./authSlice"


export const checkingAuthentication: any = () => {
    return async (dispatch: any, getState: any) => {
        dispatch(checkingCredentials())
    }
}