import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import Modal from "react-modal";

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
  height: 100%;
  width: 100%;
`;

export default function BaseModal({ children, ...props }) {
  return (
    <Modal closeTimeoutMS={200} {...props} style={customStyles}>
      <MainContainer style={props.style}>{children}</MainContainer>
    </Modal>
  );
}
