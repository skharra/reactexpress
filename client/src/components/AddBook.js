import React, { Fragment, useState } from "react";
import {useDispatch} from "react-redux";
import { addNewBook } from "../actions/action";
const AddBook = () => {
	const dispatch=useDispatch();
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [summary, setSummary] = useState("");

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			console.log('name',name)
			console.log('author',author)
			console.log('summary',summary)
			const body = { name,author,summary};
			// const response = await fetch("http://localhost:5000/books", {
			// 	method: "POST",
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify(body)
			// });
			dispatch(addNewBook(body));
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};
	
	return (
		<Fragment>
			<h1 className="text-center mt-5">Add a New Book</h1>
			<form onSubmit = {onSubmitForm}>
				<div className="form-group mt-5">
					<label for="text">Enter Book Name</label>
					<input 
						type="text" 
						className="form-control" 
						value={name}
						onChange = {e => setName(e.target.value)} />
				</div>
				<div className="form-group mt-5">
					<label for="text">Enter Author Name</label>
					<input 
						type="text" 
						className="form-control" 
						value={author}
						onChange = {e => setAuthor(e.target.value)} />
				</div>
				<div className="form-group mt-5">
					<label for="text">Book Summary</label>
					<input 
						type="text" 
						className="form-control" 
						value={summary}
						onChange = {e => setSummary(e.target.value)} />
				</div>
				<button className="btn btn-success mt-3 text-center" type="submit">Add Book</button>
			</form>
		</Fragment>
	);
};

export default AddBook;