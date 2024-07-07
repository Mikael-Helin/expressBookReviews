const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

const getBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

getBooks().then(books => console.log(books));
