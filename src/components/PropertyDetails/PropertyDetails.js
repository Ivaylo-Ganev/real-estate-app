import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as propertyService from "../../services/propertyService";
import * as favouritesService from "../../services/favouritesService";
import { AuthContext } from "../../contexts/AuthContext";
import { PropertyContext } from "../../contexts/PropertyContext";

export const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const [addedFavourite, setAddedFavourite] = useState(false);
    const [favouriteProperty, setFavouriteProperty] = useState({});
    const [hasError, setHasError] = useState('');
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
                const favouriteProperty = userFavourites.find(x => x.propertyId === propertyId);
                if (favouriteProperty) {
                    setAddedFavourite(true);
                    setFavouriteProperty(favouriteProperty);
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [propertyId, userId]);
    const isOwner = userId === property._ownerId;

    const onDeleteClick = async () => {
                // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this property?");
        if (result) {
            try {
                await propertyService.deleteProperty(propertyId);
                setHasError('');
                onPropertyDelete(propertyId);
                navigate('/catalog');
            } catch (error) {
                setHasError(error.message);
            }  
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
        try {
            const newFavouriteProperty = await favouritesService.addToFavourites(favouriteData);
            setAddedFavourite(true);
            setHasError('');
            setFavouriteProperty(newFavouriteProperty);
        } catch (error) {
            setHasError(error.message);
        }  
    }
    const onDeleteFavouritesClick = async () => {
        try {
            await favouritesService.deleteFavourite(favouriteProperty._id);
            setHasError('');
            setAddedFavourite(false);
        } catch (error) {
            setHasError(error.message);
        }
    }

    return (
        <section id="property-details">
             {hasError && (
                <div>
                    <div className="errorContainer">
                         <p>{hasError}</p>
                    </div>
                </div>
            )}
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
                <button href="#" className="button" onClick={onDeleteFavouritesClick}>Remove from Favourites</button>
            )}   

            {/* {!isOwner && userId && addedFavourite && (
                <div>
                <h1>This property has been added to your favourites.</h1>
                </div>
            )} */}

        </div>
        </section>
    );
}