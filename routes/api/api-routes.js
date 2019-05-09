const axios = require("axios");
const db = require("../../models");
const path = require("path");
const router = require("express").Router();

    router.get("/books", (req, res) => {
        db.Book.find().then(
            (booksData) => {
                res.json(booksData);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    router.get("/search/:title", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.params.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.BOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json("Error of me")
            }
        );
    })

    router.post("/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                console.log(err);
                res.json("Error");
            }
        );
    });

    router.delete("/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

module.exports = router;