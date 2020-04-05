import React from "react";

import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { PhoneInput, TextInput, PasswordInput } from "components/forms/inputs";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import {
  composeValidators,
  NotEmptyValidator,
  EmailValidator,
  PasswordValidator,
  VerifyPasswordValidator,
} from "lib/formValidation";
import Title from "components/Title";

const MainContainer = styled.div`
  height: 100%;
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
  background-color: ${(props) => props.theme.color.white};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const StyledForm = styled.form`
  padding: 0px 80px;
`;

const NamesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  max-width: 552px;
`;

export default function SignUpForm({ setHandleSubmit, setValidationModal }) {
  const [createUser, { data }] = useMutation(CREATE_USER);

  const handleSubmit = (props) => {
    createUser({ variables: { ...props, isVendor: true } })
      .then((request) => {
        console.log(request.data);
        localStorage.setItem("jwtToken", request.data.createUser.token);
        setValidationModal(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-working.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values, invalid }) => (
            <StyledForm
              id='myForm'
              subscription={{ values: true, valid: true }}
              onChange={() => {
                setHandleSubmit(() => handleSubmit);
              }}
            >
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
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='lastName'
                    component={TextInput}
                    style={{ marginBottom: 64, width: "42%" }}
                    placeholder='Enter your last name'
                    validate={NotEmptyValidator}
                  />
                </NamesWrapper>
                <Field
                  name='email'
                  component={TextInput}
                  validate={composeValidators(
                    NotEmptyValidator,
                    EmailValidator
                  )}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Enter your e-mail address'
                />
                <Field
                  name='phone'
                  component={PhoneInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Enter your phone number'
                  validate={composeValidators(NotEmptyValidator)}
                />
                <Field
                  name='password'
                  validate={composeValidators(
                    NotEmptyValidator,
                    PasswordValidator
                  )}
                  component={PasswordInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Create your password'
                />
                <Field
                  name='verifyPassword'
                  component={PasswordInput}
                  validate={VerifyPasswordValidator}
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
const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $firstName: String!
    $isVendor: Boolean!
    $lastName: String!
    $password: String!
    $phone: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      isVendor: $isVendor
      phoneNumber: $phone
    ) {
      user {
        dateJoined
        id
        email
      }
      token
    }
  }
`;
