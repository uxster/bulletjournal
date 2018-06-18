import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App.jsx";
import Info from "./containers/info.jsx";
/*
We are importing 4 things from react-router-dom.

BrowserRouter: This is our new Router component we define routes inside this component.

Route: This is our route where we define the path & component to load on that route.

Switch: This is a new component in react-router V4 it is used to group two or more routes together.

Link: The link component used to create an tag to link routes together.

We are not using nested routes. React router has a lot of improvements in V4 you should read more about it here.

We imported our containers and passed them to appropriate routes.
*/

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
};
