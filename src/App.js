import React, { useEffect, useState } from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import theme from "./theme";
import { Self } from "lib/context";
import MainRouter from "./lib/MainRouter";
import client from "./lib/apollo";
import Rubik from "assets/Rubik/Rubik-Medium.ttf";
import RubikBold from "assets/Rubik/Rubik-Bold.ttf";
import RubikSoft from "assets/Rubik/Rubik-Light.ttf";

export const AppRoot = createGlobalStyle`

  *{
    font-family: 'Rubik', sans-serif;
  }

  select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
    -webkit-appearance:none;
  }

  @font-face {
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    src: url(${Rubik});
  }


  @font-face{
    font-family: Rubik;
    src url(${RubikSoft});
    font-weight: 300;
  }

  @font-face{
    font-family: Rubik;
    src url(${RubikBold});
    font-weight: 500;;
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
      invitation {
        link
      }
      isPromoter
      completedSteps {
        stepId
        label
        isFilled
      }
      vendor {
        isApproved
        tutorials {
          tutorial {
            id
            text
            link
          }
          isFilled
        }
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

  const populateSelf = async () => {
    try {
      await client
        .query({
          query: GET_SELF,
        })
        .then((result) => {
          setSelf(result.data.me);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    populateSelf();
  }, []);

  if (
    (localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken")) &&
    !self
  ) {
    return <LoadingWrapper />;
  }

  const selfValue = { self, populateSelf, setSelf };
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
