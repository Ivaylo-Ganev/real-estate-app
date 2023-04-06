import styles from './PropertyCard.module.css';
import { Link } from "react-router-dom";

export const PropertyCard = ({
    propertyName,
    location,
    price,
    imageUrl,
    size,
    _id
}) => {

    return (
        <div className={styles["property"]}>
                <div className={styles["image-wrap"]}>
                    <img src={imageUrl} alt="property"/>
                </div>
                <h3>{propertyName}</h3>
                <h2>Location: {location}</h2>
                <h2>Price: € {price}</h2>
                <h2>Size: {size} sq.m.</h2>

                <div className={styles["data-buttons"]}>
                    <button><Link to={`/catalog/${_id}`} className={styles["details-btn"]}>
                        Details
                    </Link>
                    </button>
                </div>
               
            </div>
    );
}