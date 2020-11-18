import React, { Fragment, useState } from "react";
import { editOldBook } from "../actions/action";
import { useDispatch } from "react-redux";

const EditBook = ({ book }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(book.name);
	const [author, setAuthor] = useState(book.author);
	const [summary, setSummary] = useState(book.summary);

	// edit book function

	const updateBook = async e => {
		e.preventDefault();
		try {
			const body = { name,author,summary };
			// const response = await fetch(`http://localhost:5000/books/${book.id}`,
			// 	{
			// 		method: "PUT",
			// 		headers: {"content-type": "application/json"},
			// 		body: JSON.stringify(body)
			// 	});
			dispatch(editOldBook(body));
			window.location = "/";
		} catch(err) {
				console.error(err.message);
			}
	};

	return (
		<Fragment>
			<button
				type="button"
				className = "btn btn-warning"
				data-toggle = "modal"
				data-target = {`#id${book.id}`}
			> View
			</button>
			<div 
				class="modal" 
				id={`id${book.id}`}
				onClick = {() => setName(book.name)}
			>
			  <div class="modal-dialog">
			    <div class="modal-content">

			      
			      <div class="modal-header">
			        <h4 class="modal-title">Edit Book {name}</h4>
			        
			        <button 
			        	type="button" 
			        	class="close" 
			        	data-dismiss="modal"
			        	onClick = {() => setName(book.name)}
			        >

			        	&times;
			        </button>
			      </div>

			      
			      <div class="modal-body">
			        <div className="form-group mt-5 text-left">
			        <label for="text">Book Name</label>
				        <input
				        	type = "text"
				        	class = "form-control"
				        	value = {name}
				        	onChange = {e => setName(e.target.value)}
				        />
			        </div>
			        <div className="form-group mt-5 text-left">
			        <label for="text">Book Author Name</label>
				        <input
				        	type = "text"
				        	class = "form-control"
				        	value = {author}
				        	onChange = {e => setAuthor(e.target.value)}
				        />
			        </div>
			        <div className="form-group mt-5 text-left">
			        <label for="text">Book Summary</label>
				        <textarea
				        	type = "text"
				        	class = "form-control"
				        	value = {summary}
				        	onChange = {e => setSummary(e.target.value)}
				        />
			        </div>
			      </div>

			      
			      <div class="modal-footer">
			        <button 
			        	type="button" 
			        	class="btn btn-warning" 
			        	data-dismiss="modal"
			        	onClick = {e => updateBook(e)}
			        	>
			        	Edit
			        </button>
			        <button 
			        	type="button" 
			        	class="btn btn-danger" 
			        	data-dismiss="modal"
			        	>
			        	Close
			        </button>
			      </div>

			    </div>
			  </div>
			</div>
		</Fragment>
	);
};

export default EditBook;