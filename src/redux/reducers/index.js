import { combineReducers } from "redux";
import LoginReducers from "./loginReducers";
import ToDoReducers from "./todoReducers";

const rootReducer = combineReducers({
  todos: ToDoReducers,
  user: LoginReducers,
});
export default rootReducer;
