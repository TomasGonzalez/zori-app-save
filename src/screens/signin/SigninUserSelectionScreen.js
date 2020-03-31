import React from "react";

import Title from "components/Title";
import Button from "components/Button";
import { MdClose } from "react-icons/md";

import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
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
export default function SigninUserSelectionScreen(props) {
  return (
    <>
      <Header>
        <Close>
          <MdClose onClick={props.onRequestClose} size={20} />
        </Close>
      </Header>
      <FormWrapper>
        <MainFormContainer>
          <Title style={{ marginBottom: 56 }} label='How will you use ZORI?' />
          <ButtonWrapper>
            <ButtonWrapper>
              <Button label='AS A VENDOR' />
              <Button label='AS A BUYER' />
            </ButtonWrapper>
          </ButtonWrapper>
        </MainFormContainer>
      </FormWrapper>
    </>
  );
}
