import styles from './EditProperty.module.css';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import * as propertyService from "../../services/propertyService";
import { useForm } from "../../hooks/useForm";
import { PropertyContext } from "../../contexts/PropertyContext";

export const EditProperty = () => {
    const {propertyId} = useParams();
    const [hasGetEditError, setHasGetEditError] = useState('');
    const {onEditSubmitHandler, hasError} = useContext(PropertyContext);
    const {values, formErrors, onBlur, onChangeHandler, onSubmit, changeValues} = useForm({
        propertyName: '',
        location: '',
        price: '',
        imageUrl: '',
        size: '',
        bedrooms: '',
        floor: '',
        description: ''
    }, onEditSubmitHandler);

    useEffect(()=> {
        propertyService.getOne(propertyId)
            .then(result => {
                changeValues(result);
                setHasGetEditError('')
            })
            .catch(error => {
                setHasGetEditError(error.message);
            })
    }, [propertyId]);

    return (
        <section className={`${styles["edit-page"]} ${styles["auth"]}`}>
            {hasError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasError}</p>
                    </div>
                </div>
            )}
             {hasGetEditError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasGetEditError}</p>
                    </div>
                </div>
            )}
        <form id="edit" method="POST" onSubmit={onSubmit}>
            <div className={styles["container"]}>

                <h1>Edit Property</h1>
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
                <input
                type="number"
                id="price"
                name="price"
                min="1"
                value={values.price}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['price'] && (
                <p className="form-error">{formErrors.price}</p>
                )}

                <label htmlFor="property-img">Image:</label>
                <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Upload a photo..."
                value={values.imageUrl}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                 {formErrors['imageUrl'] && (
                <p className="form-error">{formErrors.imageUrl}</p>
                )}

                <label htmlFor="size">Size:</label>
                <input
                type="number"
                id="size"
                name="size"
                min="1"
                value={values.size}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['size'] && (
                <p className="form-error">{formErrors.size}</p>
                )}

                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                min="1"
                value={values.bedrooms}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                 {formErrors['bedrooms'] && (
                <p className="form-error">{formErrors.bedrooms}</p>
                )}

                <label htmlFor="floor">Floor:</label>
                <input
                type="number"
                id="floor"
                name="floor"
                min="0"
                value={values.floor}
                onChange={onChangeHandler}
                onBlur={onBlur}
                />
                {formErrors['floor'] && (
                <p className="form-error">{formErrors.floor}</p>
                )}

                <label htmlFor="description">Description:</label>
                <textarea 
                name="description" 
                id="description"
                value={values.description}
                onChange={onChangeHandler}
                onBlur={onBlur}
                >
                </textarea>
                 {formErrors['description'] && (
                <p className="form-error">{formErrors.description}</p>
                )}
                
                <input className={`${styles["btn"]} ${styles["submit"]}`} type="submit" value="Edit Property"/>

            </div>
        </form>
    </section>
    );
}