import {
  GET_ARTICLE,
  GET_TAGS,
  GET_ARTICLES,
  GET_USER,
  IS_USER_LOGGED,
} from "./types";

//actions

const getArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload,
  };
};

const getArticle = (payload) => {
  return {
    type: GET_ARTICLE,
    payload,
  };
};

const getTags = (payload) => {
  return {
    type: GET_TAGS,
    payload,
  };
};

const setUser = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};

const setUserLogged = (payload) => {
  return {
    type: IS_USER_LOGGED,
    payload,
  };
};

//middlewares

export const fetchArticles = () => {
  const url =
    "https://conduit.productionready.io/api/articles?limit=10&offset=0";
  return async (dispatch) => {
    const response = await fetch(url);
    const articles = await response.json();
    return dispatch(getArticles(articles.articles));
  };
};

export const fetchArticle = (slug) => {
  return async (dispatch) => {
    const url = `https://conduit.productionready.io/api/articles/${slug}`;
    const response = await fetch(url);
    const article = await response.json();
    return dispatch(getArticle(article.article));
  };
};

export const fetchTags = () => {
  const url = "https://conduit.productionready.io/api/tags";
  return async (dispatch) => {
    const response = await fetch(url);
    const tags = await response.json();
    return dispatch(getTags(tags.tags));
  };
};

export const loginUser = (credentials, history) => {
  const url = "https://conduit.productionready.io/api/users/login";
  return async (dispatch) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const user = await response.json();
    const {
      user: { token },
    } = user;
    if (token) {
      localStorage.setItem("authToken", token);
      history.push("/");
    }
  };
};

export const registerUser = (credentials, history) => {
  return async () => {
    const url = "https://conduit.productionready.io/api/users";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const user = await response.json();
    const {
      user: { token },
    } = user;
    if (token) {
      localStorage.setItem("authToken", token);
      history.push("/");
    }
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    const url = "https://conduit.productionready.io/api/user";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
    });
    const user = await response.json();
    dispatch(setUser(user.user));
    dispatch(setUserLogged(true));
  };
};
