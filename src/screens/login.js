import React from "react";

import { Form, Field } from "react-final-form";
import styled from "styled-components";

import { TextInput } from "components/forms/inputs";

import Checkbox from "components/Checkbox";
import Button from "components/Button";

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
  padding: 112px;
  width: 100%;
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

const login = () => {
  return (
    <MainContainer>
      <ImageContainer
        alt='Office Deskt'
        src={require("assets/login-side-image.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={() => console.log("test")}
          render={() => (
            <StyledForm>
              <Field
                name='Login'
                render={({ input, meta }) => (
                  <FormWrapper>
                    <TitleWrapper>
                      <Title>Log in</Title>
                      <TitleUnderline />
                    </TitleWrapper>
                    <TextInput
                      style={{ marginBottom: 84 }}
                      placeholder='Enter your email address'
                    />
                    <TextInput placeholder='Enter your password' />
                    <CheckboxWrapper style={{ marginTop: 8 }}>
                      <Checkbox label='stay signed in' />
                      <TempLink>did you forget your password?</TempLink>
                    </CheckboxWrapper>
                    <ButtonsWrappers style={{ marginTop: 80 }}>
                      <Button label={"Sign up"} />
                      <Button type={"dark"} label={"Log in"} />
                    </ButtonsWrappers>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </FormWrapper>
                )}
              />
            </StyledForm>
          )}
        />
      </FormContaienr>
    </MainContainer>
  );
};

export default login;
