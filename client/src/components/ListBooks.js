import React, { Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getBooksAction} from "../actions/action";
import {deletesBook} from "../actions/action";
import { bindActionCreators } from 'redux'

import EditBook from "./EditBook";

function ListBooks() {
	//console.log('>>>>>>>>>>>>>>>>>>>>>>>>>',props)
	const [books, setBooks] = useState([]);
	const dispatch = useDispatch();
	const allbooks = useSelector(state => state.books);
	console.log(allbooks);
	// delete book function 
	//console.log("Props Data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",props);
	const deleteBook = async id => {
		try {
			// const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
			// 	method: "DELETE"
			// });
			//console.log(id);
			dispatch(deletesBook(id));
			window.location = "/";
			// setBooks(books.filter(book => book.book_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

	// const getBooks = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:5000/books");
	// 		const jsonData = await response.json();

	// 		setBooks(jsonData);
	// 	} catch (err) {
	// 		console.error(err.message);
	// 	}
	// };

	useEffect(() => {
		dispatch(getBooksAction());
	}, []);


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
					{allbooks.map(book => (
						<tr key={book.book_id}>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>{book.createdAt}</td>
							<td>
								<EditBook book={book} />
							</td>
							<td>
								<button
								className="btn btn-danger"
								onClick={() => deleteBook(book.id)}
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

// const mapStateToProps = (state) =>{
// 	console.log('State>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',state)
// 	return {
// 		books: state.reducer
// 	}
// }

export default ListBooks;