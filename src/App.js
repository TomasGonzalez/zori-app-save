import React from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "theme";

import Login from "screens/login";
import MainRouter from "lib/MainRouter";

export const AppRoot = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap);

  *{
    font-family: 'Rubik', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
