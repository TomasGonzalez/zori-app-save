import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Test from "components/Test";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header className=' App-header'>
        <Test />
      </header>
    </ThemeProvider>
  );
}

export default App;
