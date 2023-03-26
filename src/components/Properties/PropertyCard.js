import { Link } from "react-router-dom";

export const PropertyCard = ({
    name,
    location,
    price,
    imageUrl,
    size,
    _id
}) => {

    return (
        <div className="property">
                <div className="image-wrap">
                    <img src={imageUrl} />
                </div>
                <h3>{name}</h3>
                <h2>Location: {location}</h2>
                <h2>Price: € {price}</h2>
                <h2>Size: {size} sq.m.</h2>

                <div className="data-buttons">
                    <Link to={`/catalog/${_id}`} className="btn details-btn">
                        Details
                    </Link>
                </div>
            </div>
    );
}