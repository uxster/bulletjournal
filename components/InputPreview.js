import React from "react";
import { Input, Dropdown, List } from "semantic-ui-react";

export default class InputPreview extends React.Component {
  render() {
    const options = [
      { key: ".com", text: ".com", value: ".com", icon: "edit" },
      { key: ".net", text: ".net", value: ".net", icon: "edit" },
      { key: ".org", text: ".org", value: ".org", icon: "edit" }
    ];

    return (
      <div>
        <p> Hello inputfield: </p>
        <input type="text" value={this.props.value} />
        <Input
          label={<Dropdown defaultValue=".com" options={options} />}
          labelPosition="left"
          placeholder="Find domain"
        />
      </div>
    );
  }
}
