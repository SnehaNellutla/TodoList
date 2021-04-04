import React, { Component } from "react";

interface IAddTodo {
  addTodo: any;
}
class AddTodo extends Component<IAddTodo> {
  constructor(props: any) {
    super(props);
  }
  state = {
    title: "",
  };

  onChange = (e: any) => {
    // e.target.name here corresponds to input name
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
