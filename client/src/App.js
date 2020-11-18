import { Fragment } from "react";
import './App.css';

import { Provider } from 'react-redux';

// components
import AddBook from "./components/AddBook";
import ListBooks from "./components/ListBooks";

import store from "./store";


function App() {
  return (
  <Provider store = {store}>  	
	    <Fragment>
	      <div className="container">
	        <AddBook />
	        <ListBooks />
	      </div>
	    </Fragment>
	</Provider>
	);
}


export default App;
