import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { combineReducers } from "redux";
import { visibilityFilter, todos } from "./ducks";

const preloadedState = {
  todos: [
    {
      text: "Use Redux",
      completed: false,
      id: 0
    }
  ]
};

const reducer = combineReducers({
  todos: todos.reducer,
  visibilityFilter: visibilityFilter.reducer
});

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
});
