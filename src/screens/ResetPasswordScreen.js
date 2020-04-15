import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Title from "components/Title";
import { AAQInput, PasswordInput } from "components/forms/inputs";
import Button from "components/Button";

import {
  PasswordValidator,
  VerifyPasswordValidator,
  composeValidators,
  NotEmptyValidator,
} from "lib/formValidation";

import { Form, Field } from "react-final-form";

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
  padding-top: 16px;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const StyledForm = styled.form`
  padding: 80px;
  max-width: 527px;
`;

const Label = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.gray1};
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  padding: 32px;
`;

export default function ResertPasswordScreen() {
  const [errorMessage, setErrorMessage] = useState("");

  const [resetPassword] = useMutation(RESET_PASSWORD);

  const history = useHistory();

  const handleSubmit = (values) => {
    console.log("test");
    resetPassword({ variables: { ...values } }).then(({ data }) => {
      if (data.resetPassword.okay) {
        history.push("/");
      } else {
        setErrorMessage(data.resetPassword.errorMessage);
      }
    });
  };
  let submit;
  return (
    <ContentWrapper>
      <Header>
        <Logo src={require("assets/zori-logo.png")} />
        <Close>
          <MdClose onClick={() => history.push("/")} size={20} />
        </Close>
      </Header>
      <div />
      <FormContainer>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values }) => {
            submit = handleSubmit;
            return (
              <StyledForm id={"myForm"} onChange={() => handleSubmit}>
                <Title
                  style={{ marginBottom: 35 }}
                  fontSize={30}
                  errorMessage={errorMessage}
                  label={"Go ahead and create your new password "}
                />
                <Label style={{ marginBottom: 6 }}>
                  Create your new password
                </Label>
                <Field
                  name={"password"}
                  component={AAQInput}
                  type='password'
                  style={{
                    width: "100%",
                    paddingBottom: 40,
                  }}
                  validate={composeValidators(
                    PasswordValidator,
                    NotEmptyValidator
                  )}
                />
                <Label style={{ marginBottom: 6 }}>Verify your password</Label>
                <Field
                  name={"repeatPassword"}
                  component={AAQInput}
                  type='password'
                  style={{
                    width: "100%",
                  }}
                  validate={composeValidators(
                    VerifyPasswordValidator,
                    NotEmptyValidator
                  )}
                />
              </StyledForm>
            );
          }}
        />
      </FormContainer>
      <Footer>
        <Button
          onClick={(event) => {
            submit(event);
          }}
          label='change password'
          size='small'
          buttonStyle='dark'
        />
      </Footer>
    </ContentWrapper>
  );
}

const RESET_PASSWORD = gql`
  mutation ResetPassword($password: String!) {
    resetPassword(password: $password) {
      okay
      errorMessage
    }
  }
`;
