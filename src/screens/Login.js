import React, { useState, useContext } from "react";

import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import { Self } from "lib/context";
import { EmailValidator } from "../lib/formValidation";
import { TextInput, PasswordInput } from "../components/forms/inputs";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Title from "components/Title";

import LoginImage from "../assets/login-side-image.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ImageContainer = styled.img`
  height: 100vh;

  @media (max-width: 1350px) {
    display: none;
  }
`;

const FormContaienr = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
`;

const StyledForm = styled.form`
  min-width: 650px;
  padding: 48px;

  @media (max-width: ${(props) => props.theme.unit.mobileWidth}) {
    min-width: 100px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.unit.mobileWidth}) {
    flex-direction: column;
    align-items: flex-start;
    height: 60px;
    justify-content: space-around;
    padding-top: 20px;
  }
`;

const TempLink = styled.div`
  width: 204px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.theme.color.green1};
`;

const ButtonsWrappers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.unit.mobileWidth}) {
    flex-direction: column;
    align-items: center;
    height: 120px;
  }
`;

const FormWrapper = styled.div`
  max-width: 616px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.unit.mobileWidth}) {
    max-width: 298px;
  }
`;

function Login() {
  const [errorMessage, setErrorMessage] = useState();

  const { self, populateSelf } = useContext(Self);

  const [tokenAuth, { data }] = useMutation(AUTH_TOKEN);

  const history = useHistory();

  const handleSubmit = async (params) => {
    if (params.email && params.password) {
      try {
        await tokenAuth({
          variables: { ...params },
        }).then(async (request) => {
          console.log(params, request);
          if (params.checkbox) {
            localStorage.setItem("jwtToken", request.data.tokenAuth.token);
          }
          sessionStorage.setItem("jwtToken", request.data.tokenAuth.token);
          populateSelf();
          history.push("/");
        });
      } catch (err) {
        console.log(err);
        setErrorMessage(err.message.replace("GraphQL error: ", ""));
      }
    }
  };

  return (
    <MainContainer>
      <ImageContainer alt='Office Deskt' src={LoginImage} />
      <FormContaienr>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <StyledForm>
              <Title
                style={{ marginBottom: 56 }}
                errorMessage={errorMessage}
                label={"Log in"}
              />
              <FormWrapper>
                <Field
                  validate={EmailValidator}
                  name='email'
                  component={TextInput}
                  style={{ marginBottom: 84 }}
                  placeholder='Enter your email address'
                />
                <Field
                  name='password'
                  component={PasswordInput}
                  placeholder='Enter your password'
                />
                <Field name='checkbox'>
                  {({ input }) => (
                    <CheckboxWrapper style={{ marginTop: 8 }}>
                      <Checkbox input={input} label='stay signed in' />
                      <TempLink>did you forget your password?</TempLink>
                    </CheckboxWrapper>
                  )}
                </Field>
                <ButtonsWrappers style={{ marginTop: 80 }}>
                  <Button
                    onClick={() => history.push("/signin")}
                    label={"Sign up"}
                  />
                  <Button
                    onClick={handleSubmit}
                    buttonStyle='dark'
                    label={"Log in"}
                  />
                </ButtonsWrappers>
              </FormWrapper>
            </StyledForm>
          )}
        />
      </FormContaienr>
    </MainContainer>
  );
}

const AUTH_TOKEN = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

export default Login;
