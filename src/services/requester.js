const requester = async (method, url, data) => {

    const options = {
        method
    };
    if (data) {
        options.headers = {
            "content-type": "application/json"
        };
        options.body = JSON.stringify(data);
    }
    const serializedData = localStorage.getItem("auth");
    const parsedData = JSON.parse(serializedData);
    const token = parsedData?.accessToken;

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token
        }
    }

    const response = await fetch(url, options);
    if (response.status === 204 || response.status === 404) {
        return [];
    }
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
    
    return result;
}
export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");