import axios from "axios";

export const baseURL = "/api/v1";

export const getBaseURL = () => {
    return baseURL;
};

const instance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
    crossDomain: true,
});

export default instance;
