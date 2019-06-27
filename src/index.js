import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "./styled-components/theme";
import { configureStore } from "./configureStore";

import "./main.css";
import App from "./App";

const store = configureStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById("root")
  );
};

axios.defaults.baseURL = "http://159.89.96.181/api/v1";
axios.defaults.headers.common["Authorization"] = `Bearer odbvv5dlyw8j0qh31916ne0wyuwyuqiuwtrr`;

axios.interceptors.request.use(
  function(config) {
    console.log("REQUEST SEND");
    return config;
  },
  function(error) {
    console.log("REQUEST ERROR");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    console.log("RESPONSE SUCCESS");
    return response;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);

renderApp();

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept(App, renderApp);
}
