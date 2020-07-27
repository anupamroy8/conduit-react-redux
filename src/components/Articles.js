import React, { useEffect } from "react";
import Article from "./Article";
import { fetchArticles } from "../action";
import { connect } from "react-redux";

const Articles = ({ articles, dispatch, history }) => {
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  console.log(history);
  return articles && articles.map((article) => <Article {...article} />);
};

const mapStateToProps = ({ article: { articles } }) => {
  return { articles };
};
export default connect(mapStateToProps)(Articles);
