import { request } from './requester';

const baseUrl = 'http://localhost:3000/api.json';

export const getAll = async() => {
    const result = await request(baseUrl);
    console.log(result);
    return result;
};