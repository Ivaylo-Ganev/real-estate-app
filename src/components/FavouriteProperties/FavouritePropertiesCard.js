import { useState } from "react";
import { Link } from "react-router-dom";

import * as favouriteService from "../../services/favouritesService";

export const FavouritePropertiesCard = ({
    propertyName,
    location,
    price,
    imageUrl,
    size,
    _id,
    propertyId,
    onDeleteClickHandler
}) => {
    const [hasError, setHasError] = useState('');

    const onDeleteClick = async () => {
        try {
            await favouriteService.deleteFavourite(_id);
            setHasError('');
            onDeleteClickHandler(_id);
        } catch (error) {
            setHasError(error.message);
        }
    }
    return (
        <div className="property">
              {hasError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasError}</p>
                    </div>
                </div>
            )}
                <div className="image-wrap">
                    <img src={imageUrl} alt="property"/>
                </div>
                <h3>{propertyName}</h3>
                <h2>Location: {location}</h2>
                <h2>Price: € {price}</h2>
                <h2>Size: {size} sq.m.</h2>

                <div className="data-buttons">
                    <button><Link to={`/catalog/${propertyId}`} className="btn details-btn">
                        Details
                    </Link>
                    </button>
                </div>

                <button href="#" className="details-btn" onClick={onDeleteClick}>Remove</button>
            </div>
    );
}