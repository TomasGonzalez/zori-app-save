import React, { useState } from "react";

import styled from "styled-components";

import SigninUserSelectionScreen from "screens/signin/SigninUserSelectionScreen";
import MainMercantSigninScreen from "screens/signin/mercantSigningProcess/MainMercantSigningScreen";
import { useHistory } from "react-router-dom";

const customStyles = {
  content: {
    overflow: "auto",
    backgroundColor: "white",
    padding: 0,
    top: "0",
    bottom: "0",
    left: "0",
    right: "0"
  }
};

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export default function MainSigningScreen(props) {
  const [typeOfSigning, setTypeOfSigning] = useState(1); //this shuld be 0 when deployed
  const history = useHistory();

  const RouteSigningProcess = () => {
    switch (typeOfSigning) {
      case 0:
        return (
          <SigninUserSelectionScreen
            onSigningProcessSeleected={val => setTypeOfSigning(val)}
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
