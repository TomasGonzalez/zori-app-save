import React from "react";

import Modal from "react-modal";
import styled from "styled-components";

import Title from "components/Title";
import Button from "components/Button";
import { MdClose } from "react-icons/md";

const customStyles = {
  content: {
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

const MainFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 640px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

export default function MainSigningModal(props) {
  return (
    <StyledModal style={customStyles} {...props}>
      <Header>
        <Close>
          <MdClose onClick={props.onRequestClose} size={20} />
        </Close>
      </Header>
      <MainFormContainer>
        <Title style={{ marginBottom: 56 }} label='How will you use ZORI?' />
        <ButtonWrapper>
          <ButtonWrapper>
            <Button label='AS A VENDOR' />
            <Button label='AS A BUYER' />
          </ButtonWrapper>
        </ButtonWrapper>
      </MainFormContainer>
    </StyledModal>
  );
}
