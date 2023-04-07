import styles from './DeleteProperty.module.css';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as propertyService from "../../services/propertyService";
import { PropertyContext } from "../../contexts/PropertyContext"; 

export const DeleteProperty = () => {
    const [values, setValues] = useState({});
    const [hasError, setHasError] = useState('');
    const [hasGetDeleteError, setHasGetDeleteError] = useState('');
    const {onPropertyDeleteHandler} = useContext(PropertyContext);
    const {propertyId} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        propertyService.getOne(propertyId)
            .then(result => {
                setValues(result);
                setHasGetDeleteError('')
            })
            .catch(error => {
                setHasGetDeleteError(error.message);
            })
    }, [propertyId]);

    const onDeleteClick = async () => {
    try {
        await propertyService.deleteProperty(propertyId);
        setHasError('');
        onPropertyDeleteHandler(propertyId);
        navigate('/catalog');
    } catch (error) {
        setHasError(error.message);
    }  

}
    
    return (
        <section className={`${styles["delete-page"]} ${styles["auth"]}`}>
            {hasError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasError}</p>
                    </div>
                </div>
            )}
             {hasGetDeleteError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasGetDeleteError}</p>
                    </div>
                </div>
            )}
        <form id="delete" >
            <div className={styles["delete-container"]}>

                <h1>Delete Property</h1>
                <label htmlFor="propertyName">Property name:</label>
                <input 
                readOnly
                type="text" 
                id="propertyName" 
                name="propertyName" 
                value={values.propertyName}
                />
                <label htmlFor="location">Location:</label>
                <input
                readOnly
                type="text"
                id="location"
                name="location"
                value={values.location}
                />
                <label htmlFor="price">Price in EUR:</label>
                <input
                readOnly
                type="number"
                id="price"
                name="price"
                value={values.price}    
                />
                <label htmlFor="property-img">Image:</label>
                <input
                readOnly
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                />
                <label htmlFor="size">Size:</label>
                <input
                readOnly
                type="number"
                id="size"
                name="size"
                value={values.size} 
                />
                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input
                readOnly
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={values.bedrooms}
                />
                
                <label htmlFor="floor">Floor:</label>
                <input
                readOnly
                type="number"
                id="floor"
                name="floor"
                value={values.floor}
                />
                
                <label htmlFor="description">Description:</label>
                <textarea 
                readOnly
                name="description" 
                id="description"
                value={values.description}
                >
                </textarea>
                <div className={styles["buttons"]}>
                <input className={`${styles["btn"]} ${styles["submit"]}`} onClick={onDeleteClick} value="Delete"/> 
                <button className={`${styles["btn"]} ${styles["submit"]}`}><Link to={`/catalog/${propertyId}`} className={styles["back"]}>Back</Link></button>
                </div>
            </div>
        </form>
    </section>
    );
}