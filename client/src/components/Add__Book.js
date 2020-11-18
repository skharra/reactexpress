import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { handleInputAction } from "../actions/action";
import reducer from '../reducers/reducer';
const AddBook = () => {
  // const [name, setName] = useState("");
  // const [author, setAuthor] = useState("");
  // const [summary, setSummary] = useState("");

  // const onSubmitForm = async e => {
  //  e.preventDefault();
  //  try {
  //    // console.log('name',name)
  //    // console.log('author',author)
  //    // console.log('summary',summary)
  //    const body = { name,author,summary};
  //    const response = await fetch("http://localhost:5000/books", {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify(body)
  //    });
  //    console.log(response);
  //    window.location = "/";
  //  } catch (err) {
  //    console.error(err.message);
  //  }
  // };
  
  return (
    <Fragment>
      <h1 className="text-center mt-5">Add a New Book</h1>
      <form>
        <div className="form-group mt-5">
          <label for="text">Enter Book Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={this.props.name}
            onChange = {e => this.props.handleinput(e.target.value)} />
        </div>
        <div className="form-group mt-5">
          <label for="text">Enter Author Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={this.props.author}
            onChange = {e => this.props.handleinput(e.target.value)} />
        </div>
        <div className="form-group mt-5">
          <label for="text">Book Summary</label>
          <input 
            type="text" 
            className="form-control" 
            value={this.props.summary}
            onChange = {e => this.props.handleinput(e.target.value)} />
        </div>
        <button className="btn btn-success mt-3 text-center" type="submit">Add Book</button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    auther: state.author,
    summary: state.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleinput: (input) => {dispatch(handleInputAction(input))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);