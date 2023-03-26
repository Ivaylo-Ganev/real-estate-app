import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as propertyService from "../../services/propertyService";
export const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const {propertyId} = useParams()
    useEffect(()=> {
        propertyService.getOne(propertyId)
            .then(data => {
                setProperty(data);
            })
    }, [propertyId]);

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

            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>
        </section>
    );
}