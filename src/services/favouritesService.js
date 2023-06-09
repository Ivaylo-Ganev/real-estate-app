import * as request from "./requester";
const baseUrl = "http://localhost:3030/data/favourites";

export const addToFavourites = (propertyId) => request.post(baseUrl, {propertyId});

export const getFavouritesByUser = async (userId) => {
    const searchQuery = encodeURIComponent(`_ownerId="${userId}"`);
    const favourites = await request.get(`${baseUrl}?where=${searchQuery}`);
    return favourites;
}
export const deleteFavourite = (favouriteId) => request.del(`${baseUrl}/${favouriteId}`)