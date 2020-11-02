import React, { Fragment, useEffect, useState } from "react";

import EditBook from "./EditBook";

const ListBooks = () => {
	const [books, setBooks] = useState([]);

	// delete book function 

	const deleteBook = async id => {
		try {
			const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
				method: "DELETE"
			});
			setBooks(books.filter(book => book.book_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

	const getBooks = async () => {
		try {
			const response = await fetch("http://localhost:5000/books");
			const jsonData = await response.json();

			setBooks(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getBooks();
	}, []);

	console.log(books);

	return (
		<Fragment>
			{" "}
			<table class = "table mt-5 text-center">
				<thead>
					<tr>
						<th>Book Name</th>
						<th>Auther Name</th>
						<th>Publish date</th>
						<th>View</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{books.map(book => (
						<tr key={book.book_id}>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>{book.publish_date}</td>
							<td>
								<EditBook book={book} />
							</td>
							<td>
								<button
								className="btn btn-danger"
								onClick={() => deleteBook(book.book_id)}
								>
								Delete
								</button>
							</td>
							</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	);
};

export default ListBooks;