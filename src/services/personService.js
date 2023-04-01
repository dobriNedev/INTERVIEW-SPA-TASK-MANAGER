import { request } from './requester';

const baseUrl = 'http://localhost:3000/api.json';

export const getAll = async() => {
    try {
        const result = await request(baseUrl);
        console.log(result);
        return result;
    } catch (error) {
        console.error(`Error during getAll: ${error.message}`);
        throw error;
    }
};