import { instance, apiKey } from './instance';

export const imdbServices = {
    Top250Movies: () => instance.get(`/API/Top250Movies/${apiKey}`),
    Top250TVs: () => instance.get(`/API/Top250TVs/${apiKey}`),
};