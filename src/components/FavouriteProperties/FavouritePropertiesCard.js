import { Link } from "react-router-dom";

import * as favouriteService from "../../services/favouritesService";

export const FavouritePropertiesCard = ({
    propertyName,
    location,
    price,
    imageUrl,
    size,
    _id,
    onDeleteClickHandler
}) => {

    const onDeleteClick = async () => {
        await favouriteService.deleteFavourite(_id);
        onDeleteClickHandler(_id);
    }
    return (
        <div className="property">
                <div className="image-wrap">
                    <img src={imageUrl} alt="property"/>
                </div>
                <h3>{propertyName}</h3>
                <h2>Location: {location}</h2>
                <h2>Price: € {price}</h2>
                <h2>Size: {size} sq.m.</h2>

                <button href="#" className="details-btn" onClick={onDeleteClick}>Delete</button>
            </div>
    );
}