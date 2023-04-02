import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    }
    const changeValues = (newValues) => {
        setValues(newValues);
    }
    return {
        values,
        onSubmit,
        onChangeHandler,
        changeValues
    }
}