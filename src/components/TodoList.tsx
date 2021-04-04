import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
interface ITodoList {
  todos: any;
  delTodo: any;
  toggleCompleted: any;
}
class TodoList extends Component<ITodoList> {
  render() {
    return this.props.todos.map((todo: any) => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleCompleted={this.props.toggleCompleted}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default TodoList;
