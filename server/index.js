const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const Book = require('./models/Book');
const Sequelize = require('sequelize');
const pool = require("./db");
// const Op = Sequelize.Op;

// middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES //

// Get all books

app.get("/books", (req, res) => 
	Book.findAll()
		.then((result) => res.json(result))
	);

// Add book here
app.post("/books", (req, res) =>
	Book.create ({
		name: req.body.name,
		author: req.body.author,
		summary: req.body.summary
	})
	.then((result) => res.json(result))
);

// Update a book
app.put("/books/:id", (req, res) => 
	Book.update ({
		name: req.body.name,
		author: req.body.author,
		summary: req.body.summary
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then((result) => res.json(result))
	);

// delete a book
app.delete("/books/:id", (req, res) =>
	Book.destroy({
		where: {
			id: req.params.id
		}
	})
	.then((result) => res.json(result))
	);




app.listen(5000, () => {
	console.log("server has started on port 5000");
});