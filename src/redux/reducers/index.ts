import { combineReducers } from "redux";
import todoListsReducer from "./todoListsReducer";

export default combineReducers({
  lists: todoListsReducer,
});
