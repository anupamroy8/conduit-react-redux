import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const {
    description,
    favorited,
    favoritesCount,
    slug,
    tagList,
    title,
    updatedAt,
  } = props;
  return (
    <article style={{ padding: "3rem" }}>
      <Link to={`/article/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
      <p>{favorited}</p>
      <p>{favoritesCount}</p>
      <p>{tagList}</p>
      <p>{description}</p>
      <p>{new Date(updatedAt).toLocaleDateString()}</p>
    </article>
  );
};

export default Article;
