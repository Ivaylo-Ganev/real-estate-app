import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formErrors).filter(x => x).length !== 0) {
            return;
        }
        onSubmitHandler(values);
    }
    const changeValues = (newValues) => {
        setValues(newValues);
    }
    const onBlur = (e) => {
        e.preventDefault();
        const currentValue = e.target.value;
        const currentName = e.target.name;
        const regex = /^https?:\/\//;
        
        if (currentName === 'propertyName' && currentValue.length > 10) {
            setFormErrors(state => ({...state, [currentName]: "Name should be maximum 10 symbols"}));
        } else if (currentName === 'propertyName' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Name field cannot be empty"}));
        } else if (currentName === 'propertyName' && currentValue.length <= 10) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }

        if (currentName === 'location' && currentValue.length > 10) {
            setFormErrors(state => ({...state, [currentName]: "Location should be maximum 10 symbols"}));        
        } else if (currentName === 'location' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Location field cannot be empty"}));
        } else if (currentName === 'location' && currentValue.length <= 10) {
            setFormErrors(state => ({...state, [currentName]: ''}));  
        }
        if (currentName === 'price' && Number(currentValue) <= 0) {
            setFormErrors(state => ({...state, [currentName]: "Price should be a positive number"}));        
        } else if (currentName === 'price' && Number(currentValue) > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'imageUrl' && !regex.test(currentValue)) {
            setFormErrors(state => ({...state, [currentName]: "Please enter a valid URL"}));        
        } else if (currentName === 'imageUrl' && regex.test(currentValue)) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'size' && Number(currentValue) <= 0) {
            setFormErrors(state => ({...state, [currentName]: "Size should be a positive number"}));        
        } else if (currentName === 'size' && Number(currentValue) > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'bedrooms' && Number(currentValue) <= 0) {
            setFormErrors(state => ({...state, [currentName]: "Bedrooms should be a positive number"}));        
        } else if (currentName === 'bedrooms' && Number(currentValue) > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'floor' && Number(currentValue) < 0) {
            setFormErrors(state => ({...state, [currentName]: "Floor should be a positive number"}));        
        } else if (currentName === 'floor' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Floor field cannot be empty"}));
        } else if (currentName === 'floor' && Number(currentValue) >= 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'description' && currentValue.length > 150) {
            setFormErrors(state => ({...state, [currentName]: "Description should be maximum 150 symbols"}));
        } else if (currentName === 'description' && currentValue.length < 10) {
            setFormErrors(state => ({...state, [currentName]: "Description should be minimum 10 symbols"}));
        } else if (currentName === 'description' && currentValue.length <= 150) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'email' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Email field cannot be empty"}));
        } else if (currentName === 'email' && currentValue.length > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'password' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Password field cannot be empty"}));
        } else if (currentName === 'password' && currentValue.length > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
        if (currentName === 'confirmPassword' && currentValue.length === 0) {
            setFormErrors(state => ({...state, [currentName]: "Confirm password field cannot be empty"}));
        } else if (currentName === 'confirmPassword' && currentValue.length > 0) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
    }
    return {
        values,
        onSubmit,
        onChangeHandler,
        changeValues,
        onBlur,
        formErrors
    }
}