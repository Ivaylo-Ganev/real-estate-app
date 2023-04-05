import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const [hasError, setHasError] = useState('');
    const navigate = useNavigate();

    const onLoginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values);
            setAuth(result);
            setHasError('')
            navigate('/catalog');
        } catch (error) {
            setHasError(error.message);
        }
    }

    const onRegisterSubmitHandler = async (values) => {
        const {confirmPassword, ...registerValues} = values;
        if (confirmPassword !== registerValues.password) {
            return;
        }
        try {
            const result = await authService.register(registerValues);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            console.log(error) //TODO error handling
        }
    }

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    }

    const contextValues = {
        onLoginSubmitHandler,
        onRegisterSubmitHandler,
        onLogout,
        userId: auth._id,
        userEmail: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
        hasError
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}