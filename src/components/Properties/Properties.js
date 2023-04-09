import styles from './Properties.module.css';
import { useContext } from "react";

import { PropertyContext } from "../../contexts/PropertyContext";
import { PropertyCard } from "./PropertyCard";

export const Properties = () => {
    const {properties} = useContext(PropertyContext);

    return (
        <section className={styles["catalog-page"]}>
            <h1>Property catalog</h1>
            {properties.map(x => <PropertyCard key={x._id} {...x}/>)}
            
            {properties.length === 0 && <h3 className={styles["no-properties"]}>No properties for sale</h3>}
        </section>
    );
};
