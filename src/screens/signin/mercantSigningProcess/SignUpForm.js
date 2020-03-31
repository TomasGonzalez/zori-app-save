import React from "react";

import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput } from "components/forms/inputs";

import { EmailValidator } from "lib/formValidation";
import Title from "components/Title";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  height: 370.4px;
  width: 400px;

  @media (max-width: 1024px) {
    display: none;
  
`;

const FormContaienr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const StyledForm = styled.form`
  padding: 80px;
`;

const NamesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  max-width: 552px;
`;

export default function SignUpForm() {
  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-working.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <StyledForm>
              <Title
                style={{ marginBottom: 56 }}
                errorMessage={""}
                label={"Sign up and change how you sell online with ZORI"}
              />
              <FormWrapper>
                <NamesWrapper>
                  <Field
                    name='firstName'
                    component={TextInput}
                    style={{ marginBottom: 64, width: "42%" }}
                    placeholder='Enter your first name'
                  />
                  <Field
                    name='lastName'
                    component={TextInput}
                    style={{ marginBottom: 64, width: "42%" }}
                    placeholder='Enter your last name'
                  />
                </NamesWrapper>
                <Field
                  name='email'
                  component={TextInput}
                  validate={EmailValidator}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Enter your e-mail address'
                />
                <Field
                  name='phone'
                  component={TextInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Enter your phone number'
                />
                <Field
                  name='password'
                  component={PasswordInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Create your password'
                />
                <Field
                  name='verifyPassword'
                  component={PasswordInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Verify your password'
                />
              </FormWrapper>
            </StyledForm>
          )}
        />
      </FormContaienr>
    </MainContainer>
  );
}
