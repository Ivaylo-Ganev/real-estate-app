import { createContext, useState, useEffect } from "react";

import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});

    const onLoginSubmitHandler = async (values) => {
        const result = await authService.login(values);
        console.log(result)

        setAuth(result);
    }

    const contextValues = {
        auth,
        onLoginSubmitHandler
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}