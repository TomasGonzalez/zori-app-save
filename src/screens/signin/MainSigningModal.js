import React, { useState } from "react";

import Modal from "react-modal";
import styled from "styled-components";

import SigninUserSelectionScreen from "screens/signin/SigninUserSelectionScreen";
import MainMercantSigninScreen from "screens/signin/mercantSigningProcess/MainMercantSigningScreen";

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

const StyledModal = styled(Modal)`
  height: 100%;
  width: 100%;
`;

export default function MainSigningModal(props) {
  const [typeOfSigning, setTypeOfSigning] = useState(1); //this shuld be one when deployed

  const RouteSigningProcess = () => {
    switch (typeOfSigning) {
      case 0:
        return (
          <SigninUserSelectionScreen
            onSigningProcessSeleected={val => setTypeOfSigning(val)}
            {...props}
          />
        );
      case 1:
        return <MainMercantSigninScreen {...props} />;
      default:
    }
  };

  return (
    <StyledModal style={customStyles} {...props}>
      {RouteSigningProcess()}
    </StyledModal>
  );
}
