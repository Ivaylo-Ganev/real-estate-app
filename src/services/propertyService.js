import * as requester from "./requester";
const baseUrl = "http://localhost:3030/jsonstore/properties/";

export const getAll = async () => {
    const result = await requester.get(baseUrl);
    return Object.values(result);
}
export const create = async (data) => {
    const result = await requester.post(baseUrl, data);
    return result;
}