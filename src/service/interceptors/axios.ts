import axios from "axios";
import LocalStorage from "../../utils/localstorage";

axios.defaults.baseURL = `https://api.storerestapi.com`;

// Add a request interceptor. set auth token.
axios.interceptors.request.use(
    function (config) {
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${LocalStorage.getLocalStorage("token")}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor.
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
