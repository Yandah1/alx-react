import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";

// Create a Redux store that holds the state of your app.
// The only way to change the state inside it is to dispatch an action on it.
const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
