export const CreateProperty = () => {
    return (
        <section id="create-page" className="auth">
        <form id="create">
            <div className="container">

                <h1>Create Property</h1>
                <label htmlFor="name">Property name:</label>
                <input type="text" id="name" name="name" placeholder="Enter property name..."/>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter location..."/>

                <label htmlFor="price">Price in EUR:</label>
                <input type="number" id="price" name="price" min="1"/>

                <label htmlFor="property-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                <label htmlFor="bedrooms">Number of bedrooms:</label>
                <input type="number" id="bedrooms" name="bedrooms" min="1"/>

                <label htmlFor="floor">Floor:</label>
                <input type="number" id="floor" name="floor" min="0"/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="Create Property"/>
            </div>
        </form>
    </section>
    );
}