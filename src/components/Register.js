import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../action/index";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = {
      user: {
        username,
        email,
        password,
      },
    };
    props.dispatch(registerUser(user, props.history));
  };
  return (
    <form onSubmit={submit}>
      <label>username</label>
      <input onChange={({ target: { value } }) => setUsername(value)} />
      <label>email</label>
      <input onChange={({ target: { value } }) => setEmail(value)} />
      <label>password</label>
      <input onChange={({ target: { value } }) => setPassword(value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default connect()(Register);
