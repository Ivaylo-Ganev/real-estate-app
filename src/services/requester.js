const requester = async (method, url, data) => {

    const options = {};
    if (data) {
        options.method = method;
        options.headers = {
            "content-type": "application/json"
        };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (response.status === 204) {
        return response;
    }
    if (!response.ok) {
        return response.message
    }
    
    const result = await response.json();
    return result;
}
export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");