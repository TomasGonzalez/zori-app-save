import React, { useEffect, useState } from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Self } from "lib/context";
import MainRouter from "./lib/MainRouter";
import client from "./lib/apollo";

export const AppRoot = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap);

  *{
    font-family: 'Rubik', sans-serif;
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
      isPromoter
      completedSteps
      vendor {
        isApproved
      }
    }
  }
`;

function App() {
  const [self, setSelf] = useState(null);

  const populateSelf = async () => {
    try {
      await client
        .query({
          query: GET_SELF,
        })
        .then((result) => {
          setSelf(result.data.me);
          console.log(result.data.me);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const selfValue = { self, populateSelf, setSelf };

  useEffect(() => {
    populateSelf();
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Self.Provider value={selfValue}>
          <AppRoot />
          <MainRouter />
        </Self.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
