export const PropertyDetails = () => {
    return (
        <section id="property-details">
        <h1>Property Details</h1>
        <div className="info-section">

            <div className="property-header">
                <img className="property-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJteI2QI70u9fA89Ud2rV_GHgPPSfERtE7Ow&usqp=CAU" alt="property"/>
                <h1>Teremok</h1>
               
                <h3>Location: Obzor</h3>
                <h3>Price: € 1000</h3>
                <h3>Size: 70 sq.m.</h3>
                <h3>Bedrooms: 2</h3>
                <h3>Year of construction: 2024</h3>

            </div>

            <p className="text">
            Teremok, derived from the Russian word for 'little hideaway’, is a five-star award-winning boutique hotel in Umhlanga Rocks in KwaZulu-Natal. Just one block back from the ocean on the affluent Marine Drive, the property offers eight luxury guest suites, a tranquil dining room, day spa, pool and more.
            </p>

            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>
        </section>
    );
}