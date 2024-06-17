import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { configureStore } from 'redux';
import { Provider } from 'react-redux';
//import Notifications from "./Notifications/Notifications";

const store = configureStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);