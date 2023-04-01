import { createContext, useState, useEffect } from "react";

import * as authService from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const onLoginSubmitHandler = async (values) => {
        const result = await authService.login(values);

        setAuth(result);
    }

    const contextValues = {
        onLoginSubmitHandler,
        userId: auth._id,
        userEmail: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}