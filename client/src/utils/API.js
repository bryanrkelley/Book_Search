import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Searches for the required book
  searchBooks: function(title) {
    return axios.get(`/api/search/${title}`);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  addBookToDB: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
