import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { uiReducer } from "./reducers/uiReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(uiReducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
