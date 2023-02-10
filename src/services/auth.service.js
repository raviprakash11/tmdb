import { axiosOwnServer as axios } from './request.service';

export const register = async (data) => {
    try {
        const res = await axios.post('register', data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const res = await axios.post('login', data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const logout = () => {
    localStorage.clear();
}