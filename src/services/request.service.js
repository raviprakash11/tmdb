import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
})

export const axiosOwnServer = axios.create({
    baseURL: `http://localhost:4000`
});

axiosOwnServer.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
        config.headers = { 'Authorization': `Bearer ${accessToken}`}
    }
    return config;
})

export default axiosInstance;