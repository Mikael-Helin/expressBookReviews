const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

const getBookDetails = async (isbn) => {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get first CLI argument
const isbn = process.argv[2] || "9780385474542";
// Get book details based on ISBN
getBookDetails(isbn).then(book => console.log(book));
