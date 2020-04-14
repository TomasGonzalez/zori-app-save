import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { EmailValidator } from "lib/formValidation";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Button from "components/Button";
import Title from "components/Title";
import SubTitle from "components/SubTitle";
import { TextInput } from "components/forms/inputs";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 100px;
  height: 98.7px;
`;

const ErrorMessage = styled.div`
  width: 585px;
  height: 33px;
  font-size: 12px;
  color: ${(props) => props.theme.color.danger};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.div`
  font-size: 11px;
  margin-top: 24px;
`;

const Link = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.color.linkBlue};
`;

export default function SendResetInstructions({ nextStep, setEmail }) {
  const history = useHistory();
  const [sendPasswordReset] = useMutation(SEND_PASSWORD_RESET);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (values) => {
    setEmail(values.email);
    sendPasswordReset({ variables: { ...values } })
      .then(({ data }) => {
        if (data.sendPasswordReset.okay) {
          nextStep();
        } else if (data.sendPasswordReset.errorMessage) {
          setErrorMessage(data.sendPasswordReset.errorMessage);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <Header>
        <Close>
          <MdClose onClick={() => history.push("/login")} size={20} />
        </Close>
      </Header>
      <FormWrapper>
        <Logo
          style={{ paddingBottom: 40.3 }}
          src={require("assets/big-logo.png")}
        />
        <Title
          underlineSize={40}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 16,
          }}
          label={"Reset Password"}
        />
        <SubTitle style={{ width: 585, marginBottom: 16 }}>
          To reset your password, please provide the email address tied to your
          ZORI vendor account
        </SubTitle>
        {errorMessage && (
          <ErrorMessage style={{ marginBottom: 54 }}>
            {errorMessage}
          </ErrorMessage>
        )}
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <StyledForm>
              <Field
                name='email'
                validate={EmailValidator}
                component={TextInput}
                style={{ width: "100%", maxWidth: 584 }}
                placeholder='Email Address'
              />
              <InfoText style={{ marginTop: 24 }}>
                Not a vendor on ZORI yet? <Link>Sign Up Now</Link> and change
                how you sell online
              </InfoText>
              <Button
                validate={EmailValidator}
                onClick={handleSubmit}
                buttonStyle='dark'
                style={{ marginTop: 40, width: 224 }}
                size={224}
                label={"Send Reset Instructions"}
              />
            </StyledForm>
          )}
        />
      </FormWrapper>
      <div style={{ height: 80 }} />
    </MainContainer>
  );
}

const SEND_PASSWORD_RESET = gql`
  mutation($email: String) {
    sendPasswordReset(email: $email) {
      okay
      errorMessage
    }
  }
`;
