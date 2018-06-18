import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setMessage } from "../actions/message";
import { Label, Icon } from "semantic-ui-react";
import { getIconName } from "../components/helpers.js";

// Components
import InputField from "../components/InputField.jsx";
import TodoListItem from "../components/TodoListItem.jsx";

/**
 * Returns all components for the home-route.
 *
 * @class App
 * @extends {Component}
 * @returns {React.element}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newInput: {
        text: "",
        type: ""
      }
    };

    this.updateText = this.updateText.bind(this);
    this.updateType = this.updateType.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.createList = this.createList.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  updateText = value => {
    const newState = prevState => ({
      ...prevState,
      newInput: {
        ...prevState.newInput,
        text: value
      }
    });

    this.setState(newState);
  };

  updateType = (event, data) => {
    const newState = prevState => ({
      ...prevState,
      newInput: {
        ...prevState.newInput,
        type: data.value
      }
    });

    this.setState(newState);
  };

  addTodo = () => {
    const newList = [...this.state.todos, this.state.newInput];

    this.setState({
      todos: newList,
      newInput: {
        text: "",
        type: ""
      }
    });
  };

  createList = item => {
    return (
      <li key={item.key}>
        <Label size="large" className="label">
          <Icon name={getIconName(item.type)} />
          {item.text}
          <Icon name="delete" color="red" />
        </Label>
      </li>
    );
  };

  // removeTodo = (i) => {
  //     const filteredTodos = this.state.todos.filter(function (todo) {
  //       return (todo.i !== i);
  //     });

  //     this.setState({
  //       todos: filteredTodos
  //     });
  //   }
  // };

  render() {
    const { message } = this.props.messageReducer;
    const todos = this.state.todos;
    const listItems = todos.map(this.createList);

    return (
      <div className="content">
        <div className="input-field">
          <InputField
            newInput={this.state.newInput}
            updateText={this.updateText}
            updateType={this.updateType}
            addTodo={this.addTodo}
          />
        </div>
        <div className="list-container">
          <ul className="list">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);

//   <Link to="/info">
//      <button>Info</button>
//   </Link>

// _onChange = value => {
//   this.props.dispatch(setMessage(value));
// };
