import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: "not-authorized", /* si el usuario está autenticado o No */
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
        login: (state, action) => { },
        logout: (state, payload) => { },
        checkingCredentials: (state) => {
            state.status = "checked"
        }
    }
})

export const { login, logout, checkingCredentials } = authSlice.actions;