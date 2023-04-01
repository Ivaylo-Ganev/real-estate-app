import * as requester from "./requester";
const baseUrl = "http://localhost:3030/data/properties";

export const getAll = async () => {
    const result = await requester.get(baseUrl);
    return Object.values(result);
}
export const create = async (data) => {
    const result = await requester.post(baseUrl, data);
    return result;
}
export const getOne = async (propertyId) => {
    const result = await requester.get(`${baseUrl}/${propertyId}`);
    return result;
}