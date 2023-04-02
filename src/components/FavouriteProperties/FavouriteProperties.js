import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { FavouritePropertiesCard } from "./FavouritePropertiesCard";
import * as propertyService from "../../services/propertyService";
import * as favouritesService from "../../services/favouritesService";

export const FavouriteProperties = () => {
    const [favouriteProperties, setFavouriteProperties] = useState([]);
    const {userId} = useContext(AuthContext);
    // useEffect(()=> {
    //     Promise.all([
    //         propertyService.getAll(),
    //         favouritesService.getByUser(userId)
    //     ])
    //             .then(([allProperties, favourites]) => {
    //                 const result = allProperties.filter(x => {
    //                     const filteredProperties = favourites.some(fav => x._id === fav.propertyId);
    //                     const res = filteredProperties.map(property => ({...property, ["favouriteData"]: favourites.find(y => y.propertyId === property._id)}));
    //                     console.log(res)
    //                     return res;
    //                 })
    //                 setFavouriteProperties(state => {
    //                     // return result.map(property => property.favouriteId = )
    //                 });
    //             })        
    // }, [userId]);

    useEffect(()=> {
        favouritesService.getFavouritesByUser(userId)
            .then(result => {
                setFavouriteProperties(result);
            })
    }, [userId]);

    const onDeleteClickHandler = (deletedPropertyId) => {
        setFavouriteProperties(state => state.filter(x => x._id !== deletedPropertyId));
    }
    return (
        <section id="catalog-page">
            
            {favouriteProperties.map(x => {
                return <FavouritePropertiesCard key={x._id} {...x} onDeleteClickHandler={onDeleteClickHandler}/>
            })}
            
            {favouriteProperties.length === 0 && <h3 className="no-properties">You have no favourite properties</h3>}
        </section>
    );
};
