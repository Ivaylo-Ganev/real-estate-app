import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as propertyService from "../services/propertyService";

export const PropertyContext = createContext();

export const PropertyProvider = ({
    children
}) => {
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        propertyService.getAll()
            .then(result => {
                setProperties(result);
            })
    }, []);
    
    const onCreateSubmitHandler = async (data) => {
        const newProperty = await propertyService.create(data);

        setProperties(state => [...state, newProperty]);
        navigate("/catalog");
    }

    const contextValues = {
        properties,
        onCreateSubmitHandler
    }

    return (
        <PropertyContext.Provider value={contextValues}>
            {children}
        </PropertyContext.Provider>
    );
}