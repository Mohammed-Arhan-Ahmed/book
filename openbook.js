const axios = require('axios');
async function searchBooks(title) {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${title}`);
      const books = response.data.docs;
      books.forEach(book => {
        console.log(book.title);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  searchBooks('The Great Gatsby');
  
