import { useState } from "react";

export const useLocalStorage = (key, initialValues) => {
    const [state, setState] = useState(()=> {
        const persistedState = localStorage.getItem(key);
        if (persistedState) {
            return JSON.parse(persistedState);
        }
        
        return initialValues;
    })

    const setLocalStorageState = (values) => {
        setState(values);

        localStorage.setItem(key, JSON.stringify(values));
    }

    return [
        state,
        setLocalStorageState
    ]
}