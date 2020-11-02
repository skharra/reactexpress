const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES //

// create a book

app.post("/books", async(req, res) => {
	try {
		const { name,author,publish_date,summary } = req.body;
		// console.log(`>>>>>>>>>>>>>${JSON.stringify(name)}`)
		const newBook = await pool.query(
			"INSERT INTO book (name,author,publish_date,summary) VALUES($1, $2, $3, $4) RETURNING *",
			[name,author,new Date(),summary]
		);

		res.json(newBook.rows[0]);
	}catch (err) {
		console.error(err.message);
	}
});

// get all books

app.get("/books", async(req, res) => {
	try {
		const allBooks = await pool.query ("SELECT * FROM book");
		res.json(allBooks.rows);
	} catch(err) {
		console.error(err.message);
	}
});
// get a book

app.get("/books/:id", async(req, res) => {
	try {
		const { id } = req.params;
		const book = await pool.query("SELECT * FROM book WHERE book_id = $1",[
			id
			]);
		res.json(book.rows[0]);
	} catch(err) {
		console.error(err.message);
	}
});

// update a book

app.put("/books/:id", async(req, res) => {
	try {
		const { id } = req.params;
		const { name, author, publish_date, summary } = req.body;
		const updateBook = await pool.query("UPDATE book SET name = $1, author = $2, publish_date = $3, summary = $4 WHERE book_id = $5",
			[name, author, new Date(), summary, id]
			);
		res.json("Book was updated !");
	} catch (err) {
		console.error(err.message);
	}
	
});
// delete a book

app.delete("/books/:id", async(req, res) => {
	try {
		const { id } = req.params;
		const deleteBook = await pool.query("DELETE FROM book WHERE book_id = $1", [
			id
		]);
		res.json("book was deleted !");
	} catch (err) {
		console.err(error.message);
	}
});



app.listen(5000, () => {
	console.log("server has started on port 5000");
});