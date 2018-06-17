import React from "react";
export default class InputPreview extends React.Component {
  render() {
    return (
      <div>
        <p> Hello inputfield: </p>
        <input type="text" value={this.props.value} />
      </div>
    );
  }
}
