const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

const getBookByAuthor = async (author) => {
    try {
        author_url_friendly = encodeURI(author);
        const response = await axios.get(`${BASE_URL}/author/${author_url_friendly}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Get first CLI argument
const author = process.argv[2] || "Unknown";
// Get book details based on ISBN
getBookByAuthor(author).then(book => console.log(book));
