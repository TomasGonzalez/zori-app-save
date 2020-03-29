import React from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "theme";
import { ApolloProvider } from "@apollo/react-hooks";

import MainRouter from "lib/MainRouter";
import client from "lib/apollo";

export const AppRoot = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap);

  *{
    font-family: 'Rubik', sans-serif;
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
