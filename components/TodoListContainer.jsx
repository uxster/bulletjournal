import React, { cloneElement, Children } from "react";
import { Input, Dropdown, List, Icon } from "semantic-ui-react";

/**
 * Returns container with methods for the to do list items.
 * ProjectCriteriaContainer returns all it's children with props from the container.
 *
 * @class TodoListContainer
 * @extends {Component}
 * @returns {React.element}
 */
export default class TodoListContainer extends React.Component {
  render() {
    const props = {};

    //removeTodo: this.removeTodo

    const childrenWithProps = Children.map(this.props.children, child =>
      cloneElement(child, { ...props })
    );

    return childrenWithProps;
  }
}
