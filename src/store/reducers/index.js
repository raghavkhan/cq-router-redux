import { combineReducers } from "redux";

///////////////////////////////////////////////////
import { userReducer } from "./home";
import { postReducer } from "./post";
import { userPostReducer } from "./post";
// import { PlpMainDataReducer } from './plp';
///////////////////////////////////////////////////

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  userPostReducer,
});

export default rootReducer;
