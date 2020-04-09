import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput } from "components/forms/inputs";
import { useMutation } from "@apollo/react-hooks";

import { gql } from "apollo-boost";
import Title from "components/Title";
import Dropdown from "components/Dropdown";

import { NotEmptyValidator } from "lib/formValidation";

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
  max-width: 440px;
`;

const FormWrapper = styled.div`
  max-width: 440px;
`;

const boolOptions = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];
const brandRoleOptions = [
  { value: "Sales Manager", label: "Sales Manager" },
  { value: "Operations Manager", label: "Operations Manager" },
  { value: "Marketing Manager", label: "Marketing Manager" },
  { value: "Brand Strategist", label: "Brand Strategist" },
];

export default function TellUsMore({
  onVerification,
  setHandleSubmit,
  ...props
}) {
  const [updateVendor, { data }] = useMutation(UPDATE_VENDOR);

  const handleSubmit = (submitProps) => {
    console.log(submitProps);
    updateVendor({ ...submitProps })
      .then(() => {
        onVerification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => {
        return (value.value || value) === is ? children : null;
      }}
    </Field>
  );

  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-talking.png")}
      />
      <FormContainer>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => {
            return (
              <StyledForm
                onChange={() => {
                  setHandleSubmit(() => handleSubmit);
                }}
              >
                <Title
                  style={{ marginBottom: 56 }}
                  fontSize={33}
                  errorMessage={""}
                  label={"Tell us a little bit more about your brand"}
                />
                <FormWrapper>
                  <Field
                    name='brandname'
                    component={TextInput}
                    style={{ marginBottom: 64, width: "100%" }}
                    placeholder='What’s the name of your brand?'
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='brandOwnership'
                    options={boolOptions}
                    component={Dropdown}
                    placeholder={"Is this a brand you created or own?"}
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Condition when='brandOwnership' is={"false"}>
                    <Field
                      name='applicantTitle'
                      options={brandRoleOptions}
                      component={Dropdown}
                      placeholder={"What’s your role at this brand?"}
                      style={{ marginBottom: 64, width: "100%" }}
                      validate={NotEmptyValidator}
                    />
                  </Condition>
                  <Field
                    name='website'
                    placeholder='If you don’t mind, please enter your website URL or Intagram handle'
                    component={TextInput}
                    validate={NotEmptyValidator}
                  />
                </FormWrapper>
              </StyledForm>
            );
          }}
        />
      </FormContainer>
    </MainContainer>
  );
}

const UPDATE_VENDOR = gql`
  mutation UpdateVendor(
    $brandname: String
    $website: String
    $applicantTitle: String
  ) {
    updateVendor(
      applicantTitle: $applicantTitle
      brandname: $brandname
      website: $website
    ) {
      vendor {
        user {
          id
          isVerified
          username
          email
        }
      }
    }
  }
`;
