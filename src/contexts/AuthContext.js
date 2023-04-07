import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const [hasLoginError, setHasLoginError] = useState('');
    const [hasRegisterError, setHasRegisterError] = useState('');
    const navigate = useNavigate();

    const onLoginSubmitHandler = async (values) => {
        setHasLoginError('');
        try {
            const result = await authService.login(values);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            setHasLoginError(error.message);
        }
    }

    const onRegisterSubmitHandler = async (values) => {
        setHasRegisterError('');
        const {confirmPassword, ...registerValues} = values;
        if (confirmPassword !== registerValues.password) {
            setHasRegisterError('Passwords do not match');
            return;
        }
        try {
            const result = await authService.register(registerValues);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            setHasRegisterError(error.message);
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
        hasRegisterError,
        hasLoginError
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}