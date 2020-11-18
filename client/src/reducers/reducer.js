import { GET_BOOKS } from "../actions/type";
import { ADD_BOOKS, EDIT_BOOK ,DELETE_BOOK} from "../actions/type";

const initialState = {
	books: [],
	book: null,
};

export default (state = initialState, {type, payload}) => {
// console.log(`>>>>>>>>>>action>>>>>>>${JSON.stringify(action)}`)
	switch(type) {

		// case 'ADD_BOOK': return {
		// 	...state,
		// 	name: action.payload,
		// 	author: action.payload,
		// 	summary: action.payload
		// };
		case GET_BOOKS: 
			return {
				...state,
				books: payload,

			};

		case ADD_BOOKS:return{
			...state,
			books:[payload,...state.books]
		};
		// console.log(setBooks);
		case EDIT_BOOK: return {
			...state,
			books:[payload, ...state.books]
		}
		case DELETE_BOOK: return {
			...state,
			books:state.books.filter(book => book.id !== payload)
		}
		default: 
			return state;

	}
};
	
