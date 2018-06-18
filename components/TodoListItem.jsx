import React from "react";
import { List } from "semantic-ui-react";
import { getIconName } from "./helpers";

/**
 * Returns a functional component for one to do list item.
 *
 * @param {Object} data description
 * @param {Function} changeHandler Function to be executed onChange.
 * @returns {React.element}
 */

const TodoListItem = ({ data }) => (
  <div>
    <List>
      <List.Item>
        <List.Icon name={getIconName(data.type)} />
        <List.Content>{data.text}</List.Content>
      </List.Item>
    </List>
  </div>
);

export { TodoListItem };

// render() {
//   if(this.state.myData.length){
//     return (
//        <div>{this.renderList()}</div>
//     );
//   }
//   else
//   {
//     return (
//       <div>Loading...</div>
//     );
//   }
// }
