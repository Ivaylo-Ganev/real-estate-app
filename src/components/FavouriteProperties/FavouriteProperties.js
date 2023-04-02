import { useContext, useEffect, useState } from "react";

import { PropertyContext } from "../../contexts/PropertyContext";
import { AuthContext } from "../../contexts/AuthContext";
import { PropertyCard } from "../Properties/PropertyCard";
import * as propertyService from "../../services/propertyService";
import * as favouritesService from "../../services/favouritesService";

export const FavouriteProperties = () => {
    const [favouriteProperties, setFavouriteProperties] = useState([]);
    const {userId} = useContext(AuthContext);
    useEffect(()=> {
        Promise.all([
            propertyService.getAll(),
            favouritesService.getByUser(userId)
        ])
                .then(([allProperties, favourites]) => {
                    const result = allProperties.filter(x => {
                        return favourites.some(fav => x._id === fav.propertyId) 
                    })
                    setFavouriteProperties(result);
                    })        
    }, [userId]);

    return (
        <section id="catalog-page">
            
            {favouriteProperties.map(x => <PropertyCard key={x._id} {...x}/>)}
            
            {favouriteProperties.length === 0 && <h3 className="no-properties">No favourite properties</h3>}
        </section>
    );
};
