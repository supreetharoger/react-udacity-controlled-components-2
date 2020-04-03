import React, { Component } from 'react';

class AddNewItem extends Component {
  
  addItem = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  }

  state = {
    value: '',
    items: []
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  inputIsEmpty = () => {
    return this.state.value === '';
  }

  render() {
    return(
      <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      )
  }
}

export default AddNewItem