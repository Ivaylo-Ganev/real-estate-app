import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as propertyService from "../../services/propertyService";
import * as favouritesService from "../../services/favouritesService";
import { AuthContext } from "../../contexts/AuthContext";
import { PropertyContext } from "../../contexts/PropertyContext";

export const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const [addedFavourite, setAddedFavourite] = useState(false);
    const {propertyId} = useParams();
    const {userId} = useContext(AuthContext);
    const {onPropertyDelete} = useContext(PropertyContext);
    const navigate = useNavigate();
    useEffect(()=> {
        Promise.all([
            propertyService.getOne(propertyId),
            favouritesService.getFavouritesByUser(userId)
        ])        
            .then(([currentProperty, userFavourites]) => {
                setProperty(currentProperty);
                if (userFavourites.find(x => x.propertyId === propertyId)) {
                    setAddedFavourite(true);
                }
            })
    }, [propertyId, userId]);
    const isOwner = userId === property._ownerId;

    const onDeleteClick = async () => {
                // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this property?");
        if (result) {
            await propertyService.deleteProperty(propertyId);
            onPropertyDelete(propertyId);
            navigate('/catalog');
        }
    }
    const onFavouritesClick = async (e) => {
        e.preventDefault();
        const favouriteData = {
            propertyId,
            imageUrl: property.imageUrl,
            propertyName: property.propertyName,
            location: property.location,
            price: property.price,
            size: property.size
        }
        await favouritesService.addToFavourites(favouriteData);
        setAddedFavourite(true);
    }

    return (
        <section id="property-details">
        <h1>Property Details</h1>
        <div className="info-section">

            <div className="property-header">
                <img className="property-img" src={property.imageUrl} alt="property"/>
                <h1>{property.propertyName}</h1>
               
                <h3>Location: {property.location}</h3>
                <h3>Price: € {property.price}</h3>
                <h3>Size: {property.size} sq.m.</h3>
                <h3>Bedrooms: {property.bedrooms}</h3>
                <h3>Floor: {property.floor}</h3>

            </div>

            <p className="text">
            {property.description}
            </p>
            {isOwner && (
                 <div className="buttons">
                 <button className="button"><Link to={`/catalog/${propertyId}/edit`}>Edit</Link></button>
                 <button href="#" className="button" onClick={onDeleteClick}>Delete</button>
             </div>
            )}
            {!isOwner && userId && !addedFavourite && (
                <button href="#" className="button" onClick={onFavouritesClick}>Add to Favourites</button>
            )}   

            {!isOwner && userId && addedFavourite && (
                <div>
                <h1>This property has been added to your favourites.</h1>
                </div>
            )}

        </div>
        </section>
    );
}