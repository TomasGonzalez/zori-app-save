import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Self } from "lib/context";
import Title from "components/Title";
import SubTitle from "components/SubTitle";
import { AAQInput } from "components/forms/inputs";
import Button from "components/Button";

import { NotEmptyValidator } from "lib/formValidation";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
  padding-top: 16px;
`;

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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
  max-width: 527px;
`;

const Label = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.gray1};
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  padding: 32px;
`;

export default function FillSecurityQuestions({
  email,
  securityQuestions,
  nextStep,
}) {
  const history = useHistory();

  const [verifySecurityQuestions] = useMutation(QUERY);

  const [errorMessage, setErrorMessage] = useState("");

  const { self, populateSelf, setSelf } = useContext(Self);

  const handleSubmit = (values) => {
    const questionsIds = Object.keys(values).map((key) =>
      key.replace("id:", "")
    );
    const questionsAnswers = Object.values(values);
    const payload = questionsIds.map((id, index) => ({
      questionId: id,
      answer: questionsAnswers[index],
    }));
    verifySecurityQuestions({
      variables: { email: email, questions: payload },
    })
      .then(async ({ data }) => {
        if (!data.verifySecurityQuestions.errorMessage) {
          await sessionStorage.setItem(
            "jwtToken",
            data.verifySecurityQuestions.token
          );
          populateSelf();
          history.push("/change-password");
        } else {
          setErrorMessage(data.verifySecurityQuestions.errorMessage);
        }
      })
      .catch((err) => console.log(err));
  };

  let submit;
  return (
    <MainWrapper>
      <Header>
        <Logo src={require("assets/zori-logo.png")} />
        <Close>
          <MdClose onClick={() => history.push("/login")} size={20} />
        </Close>
      </Header>
      <div />
      <FormContainer>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values }) => {
            submit = handleSubmit;
            return (
              <StyledForm id={"myForm"} onChange={() => handleSubmit}>
                <Title
                  style={{ marginBottom: 35 }}
                  fontSize={30}
                  errorMessage={errorMessage}
                  label={
                    "Answer your security questions to reset your password "
                  }
                />
                <SubTitle style={{ marginBottom: 48 }}>
                  We’ve selected two of your pre-set security questions. Answer
                  them to reset your password.
                </SubTitle>
                {securityQuestions &&
                  securityQuestions.map((val) => (
                    <div style={{ marginBottom: 40 }}>
                      <Label style={{ marginBottom: 6 }}>
                        {val.securityQuestion.question}
                      </Label>
                      <Field
                        name={`id:${val.securityQuestion.id}`}
                        component={AAQInput}
                        style={{
                          width: "100%",
                        }}
                        validate={NotEmptyValidator}
                      />
                    </div>
                  ))}
              </StyledForm>
            );
          }}
        />
      </FormContainer>
      <Footer>
        <Button
          onClick={(event) => {
            submit(event);
          }}
          label='Reset Password'
          size='small'
          buttonStyle='dark'
        />
      </Footer>
    </MainWrapper>
  );
}

const QUERY = gql`
  mutation VerifySecurityQuestions(
    $questions: [SecurityQuestionInput]
    $email: String!
  ) {
    verifySecurityQuestions(email: $email, questions: $questions) {
      errorMessage
      token
    }
  }
`;
