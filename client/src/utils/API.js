import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Searches for the required book
  searchBooks: function(title) {
    return axios.post("/search", { title: title } );
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


// import axios from "axios";

// export default {
//     getBooks: () => {
//         return axios.get("/api/books");
//     },
//     searchBooks: (title) => {
//         return axios.post("/search", {title: title});
//     },
//     addBookToDB: (bookData) => {
//         return axios.post("/api/books", bookData);
//     },
//     deleteBook: (id) => {
//         return axios.delete(`/api/books/${id}`);
//     }
// }
