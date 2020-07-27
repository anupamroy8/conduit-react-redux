import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../action/index";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = {
      user: {
        email,
        password,
      },
    };

    props.dispatch(loginUser(user, props.history));
  };
  return (
    <form onSubmit={submit}>
      <label>Email</label>
      <input onChange={({ target: { value } }) => setEmail(value)} />
      <label>Password</label>
      <input onChange={({ target: { value } }) => setPassword(value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default connect()(Login);
