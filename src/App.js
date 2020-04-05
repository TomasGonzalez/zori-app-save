import React, { useEffect, useContext } from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

const GET_SELF = gql`
  query {
    me {
      id
      isVerified
      username
      email
      phoneNumber
      firstName
      lastName
      dateJoined
      isActive
      avatar
      isVendor
      isPromoter
    }
  }
`;

function App() {
  useEffect(() => {
    getInitialProps();
  }, []);

  const getInitialProps = async () => {
    if (
      localStorage.getItem("jwtToken") ||
      sessionStorage.getItem("jwtToken")
    ) {
      try {
        await client
          .query({
            query: GET_SELF,
          })
          .then((result) => console.log(result));
      } catch (err) {
        console.log(err);
      }
    }
  };

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
