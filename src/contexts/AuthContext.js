import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});

    const onLoginSubmitHandler = async (data) => {

        console.log(data)
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