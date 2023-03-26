import { PropertyCard } from "./PropertyCard";

export const Properties = ({
    properties
}) => {
    return (
        <section id="catalog-page">
            

            {properties.map(x => <PropertyCard key={x._id} {...x}/>)}
            
            {properties.length === 0 && <h3 className="no-properties">No properties for sale</h3>}
        </section>
    );
};
