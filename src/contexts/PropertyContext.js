import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as propertyService from "../services/propertyService";

export const PropertyContext = createContext();

export const PropertyProvider = ({
    children
}) => {
    const [properties, setProperties] = useState([]);
    const [hasError, setHasError] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        propertyService.getAll()
            .then(result => {
                setProperties(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    const onCreateSubmitHandler = async (data) => {
        try {
            const newProperty = await propertyService.create(data);
            setProperties(state => [...state, newProperty]);
            setHasError('');
            navigate("/catalog");
        } catch (error) {
            setHasError(error.message);
        }
    }
    const onEditSubmitHandler = async (data) => {
        try {
            const propertyId = data._id;
            const editedProperty = await propertyService.edit(propertyId, data);
            setProperties(state => state.map(x => x._id === propertyId ? editedProperty : x));
            setHasError('');
            navigate(`/catalog/${propertyId}`);
        } catch (error) {
            setHasError(error.message);
        }   
    }
    
    const onPropertyDeleteHandler = (propertyId) => {
        setProperties(state => state.filter(x => x._id !== propertyId));
    }

    const contextValues = {
        properties,
        onCreateSubmitHandler,
        onEditSubmitHandler,
        onPropertyDeleteHandler,
        hasError
    }

    return (
        <PropertyContext.Provider value={contextValues}>
            {children}
        </PropertyContext.Provider>
    );
}