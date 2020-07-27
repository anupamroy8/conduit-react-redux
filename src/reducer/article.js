import { GET_ARTICLE, GET_ARTICLES } from "../action/types";

const INITIAL_STATE = {
  article: null,
  articles: [],
};

const article = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, {
        articles: action.payload,
      });

    case GET_ARTICLE:
      return Object.assign({}, state, {
        article: action.payload,
      });

    default:
      return state;
  }
};

export default article;
