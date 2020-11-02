import { Fragment } from "react";
import './App.css';

// components
import AddBook from "./components/AddBook";
import ListBooks from "./components/ListBooks";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddBook />
        <ListBooks />
      </div>
    </Fragment>
  );
}

export default App;
