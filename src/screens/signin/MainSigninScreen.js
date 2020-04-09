import React, { useContext, useState, useEffect } from "react";

import styled from "styled-components";

import { useHistory } from "react-router-dom";

import SigninUserSelectionScreen from "screens/signin/SigninUserSelectionScreen";
import MainMercantSigninScreen from "screens/signin/mercantSigningProcess/MainMercantSigningScreen";
import { Self } from "lib/context";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export default function MainSigningScreen(props) {
  const { self } = useContext(Self);

  const [typeOfSigning, setTypeOfSigning] = useState(
    self ? (self.vendor ? 1 : 2) : 0
  );

  useEffect(() => {
    if (self) {
      setTypeOfSigning(self ? (self.vendor ? 1 : 2) : 0);
    }
  }, [self]);

  const history = useHistory();
  const RouteSigningProcess = () => {
    switch (typeOfSigning) {
      case 0:
        return (
          <SigninUserSelectionScreen
            onSigningProcessSeleected={(val) => setTypeOfSigning(val)}
            onRequestClose={() => history.push("/login")}
            {...props}
          />
        );
      case 1:
        return (
          <MainMercantSigninScreen
            onRequestClose={() => history.push("/login")}
            {...props}
          />
        );
      default:
    }
  };

  return <MainContainer>{RouteSigningProcess()}</MainContainer>;
}
