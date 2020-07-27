import React, { useEffect } from "react";
import { connect } from "react-redux";
import Articles from "./Articles";
import { fetchUser } from "../action";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(fetchUser());
  }, []);

  return (
    <div>
      <Articles />
    </div>
  );
};

export default connect()(Home);
