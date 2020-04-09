import React, { useEffect, useState } from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import theme from "./theme";
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
      completedSteps {
        stepId
        label
        isFilled
      }
      vendor {
        isApproved
      }
    }
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [self, setSelf] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const populateSelf = async () => {
    setLoading(true);
    try {
      await client
        .query({
          query: GET_SELF,
        })
        .then((result) => {
          setSelf(result.data.me);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const selfValue = { self, populateSelf, setSelf };

  useEffect(() => {
    populateSelf();
  }, []);

  if (isLoading) {
    return <LoadingWrapper />;
  }

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
