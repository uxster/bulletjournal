import React from "react";
import { Link } from "react-router-dom";

export default class Info extends React.Component {
  render() {
    return (
      <div>
        "The Bullet Journal is a customizable and forgiving organization system.
        It can be your to-do list, sketchbook, notebook, and diary, but most
        likely, it will be all of the above. It will teach you to do more with
        less."
        <Link to="/">
          <button>back home</button>
        </Link>
      </div>
    );
  }
}
