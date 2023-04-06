import styles from './FavouriteProperties.module.css';
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { FavouritePropertiesCard } from "./FavouritePropertiesCard";
import * as favouritesService from "../../services/favouritesService";

export const FavouriteProperties = () => {
    const [favouriteProperties, setFavouriteProperties] = useState([]);
    const {userId} = useContext(AuthContext);

    useEffect(()=> {
        favouritesService.getFavouritesByUser(userId)
            .then(result => {
                setFavouriteProperties(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [userId]);

    const onDeleteClickHandler = (deletedPropertyId) => {
        setFavouriteProperties(state => state.filter(x => x._id !== deletedPropertyId));
    }
    return (
        <section className={styles["catalog-page"]}>
           
            {favouriteProperties.map(x => {
                return <FavouritePropertiesCard key={x._id} {...x} onDeleteClickHandler={onDeleteClickHandler}/>
            })}
            
            {favouriteProperties.length === 0 && <h3 className={styles["no-properties"]}>You have no favourite properties</h3>}
        </section>
    );
};
