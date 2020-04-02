import React from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import { ApolloProvider } from "@apollo/react-hooks";

import MainRouter from "./lib/MainRouter";
import client from "./lib/apollo";

export const AppRoot = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap);

  *{
    font-family: 'Rubik', sans-serif;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transform: translate0(-100px);
    transition: opacity 200ms ease, transform 200ms ease;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0px);

  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 200ms ease, transform 200ms ease;

  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppRoot />
        <MainRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
