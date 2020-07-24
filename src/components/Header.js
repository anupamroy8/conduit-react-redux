import React from "react";
import {Link, NavLink} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="flex container">
        <h1>
          <Link to="/">conduit</Link>
        </h1>
        <ul>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/login" activeClassName="active">Sign in</NavLink>
          <NavLink to="/register" activeClassName="active">Sign up</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
