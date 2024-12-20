import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: "checking", /* si el usuario está autenticado o No */
    uid: null,
    email: null,
    displayName: null,
    PhotoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: () => { },
        logout: () => { },
        checkingCredentials: () => { }
    }
})

export const { login, logout, checkingCredentials } = authSlice.actions;