import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput } from "components/forms/inputs";

import { EmailValidator } from "lib/formValidation";
import Title from "components/Title";
import Dropdown from "components/Dropdown";

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
  background-color: ${props => props.theme.color.white};

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const StyledForm = styled.form`
  padding: 80px;
  max-width: 404px;
`;

const FormWrapper = styled.div`
  max-width: 440px;
`;

const boolOptions = [
  { value: true, label: "Yes" },
  { value: false, label: "No" }
];

export default function TellUsMore() {
  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-talking.png")}
      />
      <FormContainer>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <StyledForm>
              <Title
                style={{ marginBottom: 56, fontWeight: "100" }}
                errorMessage={""}
                label={"Tell us a little bit more about your brand"}
              />
              <FormWrapper>
                <Field
                  name='brandName'
                  component={TextInput}
                  style={{ marginBottom: 64, width: "100%" }}
                  placeholder='Enter your e-mail address'
                />
                <Field
                  name='dropdown'
                  options={boolOptions}
                  component={Dropdown}
                />
                <Field name='url' component={TextInput} />
              </FormWrapper>
            </StyledForm>
          )}
        />
      </FormContainer>
    </MainContainer>
  );
}
