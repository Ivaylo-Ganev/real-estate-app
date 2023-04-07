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
                disabled
                type="text" 
                id="propertyName" 
                name="propertyName" 
                value={values.propertyName}
                readonly
                />
                <label htmlFor="location">Location:</label>
                <input
                disabled
                type="text"
                id="location"
                name="location"
                value={values.location}
                readonly
                />
                <label htmlFor="price">Price in EUR:</label>
                <input
                disabled
                type="number"
                id="price"
                name="price"
                value={values.price}  
                readonly  
                />
                <label htmlFor="property-img">Image:</label>
                <input
                disabled
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                readonly
                />
                <label htmlFor="size">Size:</label>
                <input
                disabled
                type="number"
                id="size"
                name="size"
                value={values.size} 
                readonly
                />
                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input
                disabled
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={values.bedrooms}
                readonly
                />
                
                <label htmlFor="floor">Floor:</label>
                <input
                disabled
                type="number"
                id="floor"
                name="floor"
                value={values.floor}
                readonly
                />
                
                <label htmlFor="description">Description:</label>
                <textarea 
                disabled
                name="description" 
                id="description"
                value={values.description}
                readonly
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