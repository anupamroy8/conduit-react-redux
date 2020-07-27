import { GET_USER, IS_USER_LOGGED } from "../action/types";

const INITIAL_STATE = {
  user: null,
  isLogged: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case IS_USER_LOGGED:
      return Object.assign({}, state, {
        isLogged: action.payload,
      });
    default:
      return state;
  }
};

export default user;
