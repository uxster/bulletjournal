import React from "react";
import { Input, Dropdown, List, Icon, Button } from "semantic-ui-react";

/**
 * Returns an input field for adding to do's to the list.
 *
 * @class InputField
 * @extends {Component}
 * @returns {React.element}
 */
export default class InputField extends React.Component {
  render() {
    const options = [
      { key: "task", text: "task", value: "task", icon: "square outline" },
      { key: "event", text: "event", value: "event", icon: "circle outline" },
      {
        key: "appointment",
        text: "appointment",
        value: "appointment",
        icon: "star outline"
      }
    ];

    return (
      <div>
        <Input
          label={
            <Dropdown
              options={options}
              onChange={(event, data) => this.props.updateType(event, data)}
              value={this.props.newInput.type}
            />
          }
          labelPosition="left"
          placeholder="What do you have to do today?"
          value={this.props.newInput.text}
          onChange={e => this.props.updateText(e.target.value)}
        />
        <Button
          className="add-button"
          onClick={() => this.props.addTodo()}
          size="large"
        >
          <Icon name="add" /> Add
        </Button>
      </div>
    );
  }
}
