import { useContext, useState } from "react";

import { useForm } from "../../hooks/useForm";
import { PropertyContext } from "../../contexts/PropertyContext";

export const CreateProperty = () => {
    const {onCreateSubmitHandler} = useContext(PropertyContext);
    const [formErrors, setFormErrors] = useState({
        propertyName: '',
        location: ''
    });

    const {values, onChangeHandler, onSubmit} = useForm({
        propertyName: '',
        location: '',
        price: '',
        imageUrl: '',
        size: '',
        bedrooms: '',
        floor: '',
        description: ''
    }, onCreateSubmitHandler);

    const onBlur = (e) => {
        e.preventDefault();
        const currentValue = e.target.value;
        const currentName = e.target.name;
        
        if (currentName === 'propertyName' && currentValue.length > 3) {
            const propertyNameError = "Property name too long"
            setFormErrors(state => ({...state, [currentName]: propertyNameError}));
        } else if (currentName === 'propertyName' && currentValue.length <= 3) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }

        if (currentName === 'location' && currentValue.length > 3) {
            const locationNameError = "Location name too long"
            setFormErrors(state => ({...state, [currentName]: locationNameError}));           
        } else if (currentName === 'location' && currentValue.length <= 3) {
            setFormErrors(state => ({...state, [currentName]: ''}));
        }
    }

    return (
        <section id="create-page" className="auth">
            
        <form id="create" action="POST" onSubmit={onSubmit}>
            <div className="container">

                <h1>Create Property</h1>
                <label htmlFor="propertyName">Property name:</label>
                <input
                type="text"
                id="propertyName"
                name="propertyName"
                placeholder="Enter property name..."
                value={values.propertyName}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['propertyName'] && (
                <p className="form-error">{formErrors.propertyName}</p>
                )}
                
                <label htmlFor="location">Location:</label>
                <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location..."
                value={values.location}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['location'] && (
                <p className="form-error">{formErrors.location}</p>
                )}
                <label htmlFor="price">Price in EUR:</label>
                <input type="number" id="price" name="price" min="1" value={values.price} onChange={onChangeHandler}/>

                <label htmlFor="property-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={values.imageUrl} onChange={onChangeHandler}/>

                <label htmlFor="size">Size:</label>
                <input type="number" id="size" name="size" min="1" value={values.size} onChange={onChangeHandler}/>

                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input type="number" id="bedrooms" name="bedrooms" min="1" value={values.bedrooms} onChange={onChangeHandler}/>

                <label htmlFor="floor">Floor:</label>
                <input type="number" id="floor" name="floor" min="0" value={values.floor} onChange={onChangeHandler}/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" value={values.description} onChange={onChangeHandler}></textarea>
                <input className="btn submit" type="submit" value="Create Property"/>
            </div>
        </form>
    </section>
    );
}