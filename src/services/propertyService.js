import * as request from "./requester";
const baseUrl = "http://localhost:3030/data/properties";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}
export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
}
export const getOne = async (propertyId) => {
    const result = await request.get(`${baseUrl}/${propertyId}`);
    return result;
}
export const edit = async (propertyId, data) => {
    const result = await request.put(`${baseUrl}/${propertyId}`, data);
    return result;
}