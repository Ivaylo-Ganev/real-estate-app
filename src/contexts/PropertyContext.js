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
    const onEditSubmitHandler = async (data) => {
        const propertyId = data._id;
        const editedProperty = await propertyService.edit(propertyId, data);
        console.log(editedProperty)

        navigate(`/catalog/${propertyId}`);
    }

    const contextValues = {
        properties,
        onCreateSubmitHandler,
        onEditSubmitHandler
    }

    return (
        <PropertyContext.Provider value={contextValues}>
            {children}
        </PropertyContext.Provider>
    );
}