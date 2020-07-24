import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Articles from "./Articles";
import Signin from "./Signin";
import Signup from "./Signup";
import Error from "./Error";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/login" component={Signin} />
          <Route path="/register" component={Signup} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
