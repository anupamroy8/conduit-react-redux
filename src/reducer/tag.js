import { GET_TAGS } from "../action/types";

const INITIAL_STATE = {
  tags: [],
};

const tag = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TAGS:
      return Object.assign({}, state, {
        tags: action.payload,
      });

    default:
      return state;
  }
};

export default tag;
