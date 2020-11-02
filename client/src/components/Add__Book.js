import React from "react";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: 'hello',
    	author: 'yes',
    	summary: 'no'
	};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({value: event.target.name});
  }
  handleAuthorChange(event) {
    this.setState({value: event.target.author});
  }
  handleSummaryChange(event) {
    this.setState({value: event.target.summary});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.author + this.state.summary);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Book Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Author Name:
          <input type="text" value={this.state.author} onChange={this.handleChange} />
        </label>
        <label>
          Summary:
          <input type="text" value={this.state.summary} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddBook;