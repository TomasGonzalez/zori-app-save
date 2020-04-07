import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput } from "components/forms/inputs";

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
  max-width: 440px;
`;

const FormWrapper = styled.div`
  max-width: 440px;
`;

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
      <ImageContainer
        alt='People working'
        src={require("assets/people-talking-2.png")}
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
                  style={{ marginBottom: 35 }}
                  fontSize={33}
                  errorMessage={""}
                  label={"Tell us a little bit more about your brand"}
                />
                <SubTitle style={{ marginBottom: 32 }}>
                  Where are you based? <br />
                  <span style={{ fontSize: 11 }}>
                    We’re only accepting applications from brands based in the
                    United States at this time.
                  </span>
                </SubTitle>
                <FormWrapper>
                  <HorizontalInput>
                    <Field
                      name='city'
                      component={TextInput}
                      style={{ marginBottom: 64, width: "45%" }}
                      placeholder='City'
                      validate={NotEmptyValidator}
                    />
                    <Field
                      name='state'
                      component={TextInput}
                      style={{ marginBottom: 64, width: "45%" }}
                      placeholder='State'
                      validate={NotEmptyValidator}
                    />
                  </HorizontalInput>
                  <Field
                    name='brandRole'
                    options={brandRoleOptions}
                    component={Dropdown}
                    placeholder={
                      "Which other platforms do you currently sell your products on?"
                    }
                    help={"Feel free to make more than one selection"}
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='WHA'
                    options={WHAOptions}
                    component={Dropdown}
                    placeholder={"How’d you hear about ZORI?"}
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
