import React from "react";
import { ThemeProvider } from "styled-components";
// import themes from 'constants/theme'
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import ErrorBoundary from "./components/ErrorBoundaries";
import { ToastContainer } from "react-toastify";
import { history } from "./helpers/common";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyle />
            <Routes />
            <ToastContainer position="bottom-right" autoClose={5000} />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
