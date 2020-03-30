import React from "react";

import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import { EmailValidator } from "../lib/formValidation";
import { TextInput, PasswordInput } from "../components/forms/inputs";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ImageContainer = styled.img`
  height: 100vh;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FormContaienr = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
`;

const TitleWrapper = styled.div`
  margin-bottom: 62px;
`;

const TitleUnderline = styled.div`
  width: 18px;
  height: 3px;
  background-color: ${props => props.theme.color.green1};
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const StyledForm = styled.form`
  min-width: 650px;
  padding: 48px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TempLink = styled.div`
  width: 204px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.color.green1};
`;

const ButtonsWrappers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  max-width: 616px;
  display: flex;
  flex-direction: column;
`;

function Login() {
  const [tokenAuth, { data }] = useMutation(AUTH_TOKEN);
  let history = useHistory();

  const handleSubmit = async params => {
    if (params.email && params.password) {
      try {
        await tokenAuth({
          variables: { ...params }
        }).then(request => {
          if (params.checkbox) {
            localStorage.setItem("jwtToken", request.data.tokenAuth.token);
          }
          sessionStorage.setItem("jwtToken", request.data.tokenAuth.token);
          history.push("/test");
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <MainContainer>
      <ImageContainer
        alt='Office Deskt'
        src={require("../assets/login-side-image.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <StyledForm>
              <TitleWrapper>
                <Title>Log in</Title>
                <TitleUnderline />
              </TitleWrapper>
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
                  <Button label={"Sign up"} />
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
    tokenAuth(username: $email, password: $password) {
      token
    }
  }
`;

export default Login;
