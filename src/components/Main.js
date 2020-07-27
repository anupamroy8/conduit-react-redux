import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ArticleDetails from "./ArticleDetails";
class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/article/:slug" component={ArticleDetails} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
