import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import * as propertyService from "../../services/propertyService";
import { AuthContext } from "../../contexts/AuthContext";

export const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const {propertyId} = useParams();
    const {userId} = useContext(AuthContext);
    useEffect(()=> {
        propertyService.getOne(propertyId)
            .then(data => {
                setProperty(data);
            })
    }, [propertyId]);
    const isOwner = userId === property._ownerId;

    const onDeleteClick = (propertyId) => {
        // const result = confirm("Are you sure you want to delete this property?");
        // if (result) {

        // }
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
                 <Link to={`/catalog/${propertyId}/edit`} className="button">Edit</Link>
                 <a href="#" className="button" onClick={onDeleteClick}>Delete</a>
             </div>
            )}
           
        </div>
        </section>
    );
}