import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});

    const onLoginSubmitHandler = async (data) => {

        console.log(data)
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}