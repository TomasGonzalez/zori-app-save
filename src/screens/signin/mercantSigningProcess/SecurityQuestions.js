import React from "react";

import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Title from "components/Title";
import SubTitle from "components/SubTitle";
import { AAQDropdown } from "components/Dropdown";
import { AAQInput } from "components/forms/inputs";
import { NotEmptyValidator } from "lib/formValidation";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  max-width: 592px;
`;

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => {
      return value.value || value ? children : <div style={{ height: 48 }} />;
    }}
  </Field>
);

function SecurityQuestions({
  setHandleSubmit,
  data,
  setIsLoading,
  onVerification,
}) {
  const [addSecurityQuestion] = useMutation(ADD_SECURITY_QUESTION);

  const setOptions = (values) => {
    const selectedQuestions = Object.values(values).map((val) => val.value);

    const FilteredOptions = data.securityQuestions.filter(
      (val) => !selectedQuestions.includes(val.id)
    );

    return FilteredOptions.map((val) => ({
      label: val.question,
      value: val.id,
    }));
  };

  const handleSubmit = (values) => {
    addSecurityQuestion({
      variables: {
        questions: [
          { questionId: values.question1.value, answer: values.input1 },
          { questionId: values.question2.value, answer: values.input2 },
          { questionId: values.question3.value, answer: values.input3 },
        ],
      },
    })
      .then((request) => {
        setIsLoading(false);
        onVerification();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <FormContainer>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values }) => {
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
                  label={"Go ahead and choose your security questions. "}
                />
                <SubTitle style={{ marginBottom: 48 }}>
                  Make sure to set questions you can easily remember. You’ll
                  need this to log in to your account from new locations or
                  reset your password.
                </SubTitle>
                <Field
                  name='question1'
                  options={setOptions(values)}
                  component={AAQDropdown}
                  placeholder={"Select your first security question."}
                  style={{
                    width: "100%",
                  }}
                  validate={NotEmptyValidator}
                />
                <div style={{ paddingBottom: 48 }}>
                  <Condition when='question1'>
                    <Field
                      name='input1'
                      component={AAQInput}
                      placeholder={"Select your first security question."}
                      style={{
                        width: "100%",
                        marginTop: 8,
                      }}
                      validate={NotEmptyValidator}
                    />
                  </Condition>
                </div>
                <Field
                  name='question2'
                  options={setOptions(values)}
                  component={AAQDropdown}
                  placeholder={"Select your first security question."}
                  style={{
                    width: "100%",
                  }}
                  validate={NotEmptyValidator}
                />
                <div style={{ paddingBottom: 48 }}>
                  <Condition when='question2'>
                    <Field
                      name='input2'
                      component={AAQInput}
                      placeholder={"Select your first security question."}
                      style={{ width: "100%", marginTop: 8 }}
                      validate={NotEmptyValidator}
                    />
                  </Condition>
                </div>
                <Field
                  name='question3'
                  options={setOptions(values)}
                  component={AAQDropdown}
                  placeholder={"Select your first security question."}
                  style={{
                    width: "100%",
                  }}
                  validate={NotEmptyValidator}
                />
                <div style={{ paddingBottom: 48 }}>
                  <Condition when='question3'>
                    <Field
                      name='input3'
                      component={AAQInput}
                      placeholder={"Select your first security question."}
                      style={{ width: "100%", marginTop: 8 }}
                      validate={NotEmptyValidator}
                    />
                  </Condition>
                </div>
              </StyledForm>
            );
          }}
        />
      </FormContainer>
    </MainContainer>
  );
}

const ADD_SECURITY_QUESTION = gql`
  mutation AddSecurityQuestion($questions: [SecurityQuestionInput]) {
    addSecurityQuestions(questions: $questions) {
      okay
      errorMessage
    }
  }
`;

export default SecurityQuestions;
