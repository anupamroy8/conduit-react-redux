import React, { Component } from "react";

import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    let url = "https://anupam-conduit-api.herokuapp.com/api/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: this.state})
    }).then(res => {
      if(res.status === 200) {
        this.props.history.push("/")
      }
    })
  }

  render() {
    return (
      <>
        <div className="center">
          <h1>Sign Up</h1>
          <Link to="/login" className="textcolor">
            Have an account?
          </Link>
          <form className="signinform formcontainer">
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              placeholder="Username"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Password"
              onChange={this.handleInput}
            />
            <br />
            <input onClick={this.handleSubmit} className="btn btn-success" type="submit" value="Sign In" />
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
