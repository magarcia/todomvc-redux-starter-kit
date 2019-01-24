import { combineReducers } from "redux";
import todos from "./todos";
import { visibilityFilter } from "../ducks";

const rootReducer = combineReducers({
  todos,
  visibilityFilter: visibilityFilter.reducer
});

export default rootReducer;
