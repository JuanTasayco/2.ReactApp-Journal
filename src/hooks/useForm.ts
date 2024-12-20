/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";



export const useForm = (initialState: any) => {


    const [form, setForm] = useState(initialState);

    const onInputChange = (event: any) => {
        const { value, name } = event.target;

        setForm((valueForm: any) => {
            return ({
                ...valueForm,
                [name]: value,
            })
        })
    }


    const cleanForm = () => {
        setForm(() => initialState)
    }


    return ({
        onInputChange,
        form,
        cleanForm
    })

}