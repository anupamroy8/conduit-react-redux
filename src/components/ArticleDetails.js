import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../action";

const ArticleDetails = ({
  dispatch,
  match: {
    params: { slug },
  },
  article,
}) => {
  useEffect(() => {
    dispatch(fetchArticle(slug));
  }, []);

  if (article) {
    var {
      title,
      description,
      favorited,
      favoritesCount,
      tagList,
      updatedAt,
    } = article;
  }

  return (
    (article && (
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{favorited}</p>
        <p>{favoritesCount}</p>
        <p>{tagList}</p>
        <p>{description}</p>
        <p>{new Date(updatedAt).toLocaleDateString()}</p>
      </article>
    )) || <p>Loading...</p>
  );
};

const mapStateToProps = ({ article: { article } }) => {
  return { article };
};
export default connect(mapStateToProps)(ArticleDetails);
