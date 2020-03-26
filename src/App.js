import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "theme";

import Login from "screens/login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
