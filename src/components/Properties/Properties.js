import { Link } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";

export const Properties = ({
    properties
}) => {
    return (
        <section id="catalog-page">
            <h1>All properties</h1>

            {properties.map(x => <PropertyCard key={x._id} {...x}/>)}
            <div className="property">
                <div className="image-wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJteI2QI70u9fA89Ud2rV_GHgPPSfERtE7Ow&usqp=CAU" />
                </div>
                <h3>Firstline property</h3>
                <h2>Location: Obzor</h2>
                <h2>Price: € 1000</h2>
                <h2>Size: 70 sq.m.</h2>

                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                        Details
                    </a>
                </div>
            </div>
            <div className="property">
                <div className="image-wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxULkVDwd6PAHTb1U8uEIG_UkDwlFPKdwkpA&usqp=CAU" />
                </div>
                <h3>Firstline property with sea view</h3>
                <h2>Location: Obzor</h2>
                <h2>Price: € 1000</h2>
                <h2>Size: 70 sq.m.</h2>

                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                        Details
                    </a>
                </div>
            </div>
            <div className="property">
                <div className="image-wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5mfwqvsSdWFjtIyWiJuGa9ZH69JNo3wLmA&usqp=CAU" />
                </div>
                <h3>Firstline property with sea view</h3>
                <h2>Location: Obzor</h2>
                <h2>Price: € 1000</h2>
                <h2>Size: 70 sq.m.</h2>

                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                        Details
                    </a>
                </div>
            </div>
            <div className="property">
                <div className="image-wrap">
                    <img src="https://imgrabo.com/pics/businesses/1387293603512147.jpeg" />
                </div>
                <h3>Firstline property with sea view</h3>
                <h2>Location: Obzor</h2>
                <h2>Price: € 1000</h2>
                <h2>Size: 70 sq.m.</h2>

                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                        Details
                    </a>
                </div>
            </div>
        </section>
    );
};
