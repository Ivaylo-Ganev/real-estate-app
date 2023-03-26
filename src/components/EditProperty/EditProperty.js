export const EditProperty = () => {
    return (
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Property</h1>
                <label htmlFor="propertyName">Property name:</label>
                <input type="text" id="propertyName" name="propertyName" placeholder="Enter property name..."/>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter location..."/>

                <label htmlFor="price">Price in EUR:</label>
                <input type="number" id="price" name="price" min="1"/>

                <label htmlFor="property-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                <label htmlFor="size">Size:</label>
                <input type="number" id="size" name="size" min="1"/>

                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input type="number" id="bedrooms" name="bedrooms" min="1"/>

                <label htmlFor="floor">Floor:</label>
                <input type="number" id="floor" name="floor" min="0"/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="Edit Property"/>

            </div>
        </form>
    </section>
    );
}