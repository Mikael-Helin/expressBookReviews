const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

const getBookByTitle = async (title) => {
    try {
        title_url_friendly = encodeURI(title);
        const response = await axios.get(`${BASE_URL}/title/${title_url_friendly}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get first CLI argument
const title = process.argv[2] || "Nj\u00e1l's Saga";
// Get book details based on ISBN
getBookByTitle(title).then(book => console.log(book));
