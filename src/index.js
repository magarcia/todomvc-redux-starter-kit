import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { visibilityFilter, todos } from "./ducks";
import App from "./components/App";
import "todomvc-app-css/index.css";

const store = createStore(
  combineReducers({
    todos: todos.reducer,
    visibilityFilter: visibilityFilter.reducer
  })
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
