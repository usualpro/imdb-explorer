import Axios from 'axios';

export const apiKey = 'k_s46hgv4l';

export const instance = Axios.create({
    baseURL: 'https://imdb-api.com'
});