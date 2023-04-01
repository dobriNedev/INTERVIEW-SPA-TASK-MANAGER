export const request = async(url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();

        return result;
    } catch (error) {
        console.error(`Error during request: ${error.message}`);
        throw error;
    }
};