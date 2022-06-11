import axios from 'axios';

const configOMB = {
    baseURL: 'https://www.omdbapi.com',
};
const key = '3804f4b1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?s=${title}&apikey=${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?s=${title}&type=${type}&apikey=${key}`)

    }
};


export default API;
