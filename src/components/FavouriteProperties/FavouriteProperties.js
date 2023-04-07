import styles from './FavouriteProperties.module.css';
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { PropertyCard } from '../Properties/PropertyCard';
import * as favouritesService from "../../services/favouritesService";
import * as propertyService from "../../services/propertyService";

export const FavouriteProperties = () => {
    const [favouriteProperties, setFavouriteProperties] = useState([]);
    const {userId} = useContext(AuthContext);

    useEffect(()=> {
        Promise.all([
            favouritesService.getFavouritesByUser(userId),
            propertyService.getAll()
        ])
            .then(([favourites, allProperties]) => {
                const myFavouritesArr = favourites.map(fav => {
                    return allProperties.map(x => x._id === fav.propertyId ? x : '')
                })
                let myFavourites = [];
                myFavouritesArr.forEach(array => {
                    myFavourites = myFavourites.concat(array)
                })
                const result = myFavourites.filter(x => x);
                setFavouriteProperties(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    return (
        <section className={styles["catalog-page"]}>
           
            {favouriteProperties.map(x => {
                return <PropertyCard key={x._id} {...x} />
            })}  
            {favouriteProperties.length === 0 && <h3 className={styles["no-properties"]}>You have no favourite properties</h3>}
        </section>
    );
};
