// import React from "react";
// import {Link} from "react-router-dom"

// function Signin() {
//   return (
//     <>
//       <div className="center ">
//         <h1>Sign In</h1>
//         <Link to="/register" className="textcolor">Need an account?</Link>
//         <form className="signinform formcontainer">
//           <input type="text" className="form-control form-control-lg" placeholder="Email" />
//           <br />
//           <input type="text" className="form-control form-control-lg" placeholder="Password" />
//           <br />
//           <input className="btn btn-success" type="submit" value="Sign In" />
//         </form>
//       </div>
//     </>
//   );
// }

// export default Signin;

import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  updateLoggedIn = (status) => {
    this.setState({ isLoggedIn: status });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let url = "https://anupam-conduit-api.herokuapp.com/api/users/login";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => {
        // console.log(res, 'inside')
        if (res.status === 200) {
          this.props.history.push("/");
          this.updateLoggedIn(true);
          return res.json();
        } else {
          this.setState({ error: "Something went wrong!" });
        }
      })
      .then((data) => {
        console.log(data, 'inside data')
        // user && localStorage.setItem("authToken", user.token);
      });
  };

  render() {
    let { email, password, error } = this.state;

    return (
      <>
        <div className="center ">
          <h1>Sign In</h1>
          <Link to="/register" className="textcolor">
            Need an account?
          </Link>
          {/* <form className="signinform formcontainer" onClick={this.handleSubmit}> */}
            <input
              type="text"
              onChange={this.handleInput}
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={email}
            />
            <br />
            <input
              type="text"
              name="password"
              onChange={this.handleInput}
              className="form-control form-control-lg"
              placeholder="Password"
              value={password}
            />
            <br />
            <input
              className="btn btn-success"
              type="submit"
              value="Sign In"
              onClick={this.handleSubmit}
            />
          {/* </form> */}
        </div>
      </>
    );
  }
}

export default withRouter(SignIn);
