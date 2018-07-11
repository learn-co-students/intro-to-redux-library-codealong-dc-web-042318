import React from "react";
import ReactDOM from "react-dom";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer";
import { createStore } from "redux";
// import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <Provider store={store}>
  <App store={store} />,
  // </Provider>,
  document.getElementById("root")
);
