import { combineReducers } from "redux";
import article from "./article";
import tag from "./tag";
import user from "./user";

const rootReducer = combineReducers({
  article,
  tag,
  user,
});

export default rootReducer;
