import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput, BigInput } from "components/forms/inputs";

import Title from "components/Title";
import Dropdown from "components/Dropdown";

import { NotEmptyValidator } from "lib/formValidation";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.color.gray2};
`;

const ImageContainer = styled.img`
  height: 489.5px;
  width: 640px;

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
  max-width: 983px;
`;

const FormWrapper = styled.div``;

const HorizontalInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const brandRoleOptions = [
  { value: "Sales Manager", label: "Sales Manager" },
  { value: "Operations Manager", label: "Operations Manager" },
  { value: "Marketing Manager", label: "Marketing Manager" },
  { value: "Brand Strategist", label: "Brand Strategist" },
];

const WHAOptions = [
  { value: "Google", label: "Google" },
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
];

export default function TellUsMore2({
  onVerification,
  setHandleSubmit,
  ...props
}) {
  const handleSubmit = (submitProps) => {
    console.log(submitProps);
    onVerification();
  };

  return (
    <MainContainer>
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
                  style={{ marginBottom: 35 }}
                  fontSize={30}
                  errorMessage={""}
                  label={
                    "Tell us a little bit about what you produce and how you produce "
                  }
                />
                <SubTitle style={{ marginBottom: 32 }}>
                  We’re building ZORI for ethical and sustainable independent
                  brands. Kindly go ahead and tell us about the products you
                  make and some of the ways you try to ensure your products stay
                  clean
                </SubTitle>
                <FormWrapper>
                  <Field
                    name='whatYouMake'
                    options={brandRoleOptions}
                    component={Dropdown}
                    placeholder={"What do you make?"}
                    help={
                      "we’re currently only accepting applications from independent brands that make essentials in personal, household and baby care "
                    }
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='HowAreSustainable'
                    options={brandRoleOptions}
                    component={Dropdown}
                    placeholder={
                      "How do you keep your products ethical, sustainable or clean?"
                    }
                    help={"Feel free to make more than one selection"}
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='MoreAboutYou'
                    component={BigInput}
                    placeholder={
                      "Feel free to talk about your work a little more..."
                    }
                    style={{ marginBottom: 64, width: "100%" }}
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
