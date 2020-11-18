import axios from 'axios';
import { GET_BOOKS } from "./type"
import { ADD_BOOKS , 
		EDIT_BOOK
		,DELETE_BOOK} from "./type"


export const getBooksAction = () => async (dispatch) => {
		const result = await axios.get("http://localhost:5000/books");
			console.log(result.data);
			dispatch({
				type: GET_BOOKS,
				payload: result.data,
			});
			
		};

export const addBooks=(newData) => {
	return{
		type:ADD_BOOKS,
		payload:newData
	}
}

export const addNewBook=(data) => async (dispatch)=>{
	const result=await axios.post("http://localhost:5000/books" ,data);
	console.log(result);
	dispatch(addBooks(result))
}

export const editBook = (newData) => {
	return {
		type: EDIT_BOOK,
		payload: newData
	}
}

export const editOldBook = (data) => async (dispatch) => {
	const result = await axios.put(`http://localhost:5000/books{book.id}`,data);
	dispatch(editBook(result))
}

export const deleteBook = (id) => {
	return {
		type: DELETE_BOOK,
		payload: id
	}
}

export const deletesBook = (id) => async (dispatch) => {
	console.log(id);
	const result = await axios.delete(`http://localhost:5000/books/${id}`);
	console.log(result.data);
	dispatch(deleteBook(result.data))
}
