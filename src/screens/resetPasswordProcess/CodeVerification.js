import React, { useState } from "react";

import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { VerificationInput } from "components/forms/inputs";
import Button from "components/Button";

const StyledLock = styled.img`
  height: 207.2px;
  width: 164px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 56.8px;
  height: 30px;
`;

const SubTitle = styled.div`
  width: 416px;
  height: 64px;
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.color.gray1};
  line-height: 1.6;
  span {
    color: ${(props) => props.theme.color.linkBlue};
    cursor: pointer;
  }
`;

const ErrorTest = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.danger};
`;

function VerificationCode({ nextStep, email, setSecurityQuestions }) {
  const [code, setCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [verifyPasswordResetcode] = useMutation(VERIFY_CODE);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledLock src={require("assets/verificationDanger.png")} />
      <Title>Verification</Title>
      <SubTitle>
        We’ve sent a code to the email and phone number you provided. Enter it
        below to proceed.
        <br />
        Didn’t get it? <span>Have it resent</span>
      </SubTitle>
      <VerificationInput
        onChange={(value) => {
          setCode(parseInt(value.target.value));
        }}
      />
      {errorMessage && (
        <ErrorTest>{errorMessage.replace("GraphQL error: ", "")}</ErrorTest>
      )}
      <Button
        buttonStyle='dark'
        size='small'
        label='Verify'
        style={{ marginTop: 64, marginBottom: 50 }}
        onClick={() => {
          if (code && code.toString().length > 5) {
            verifyPasswordResetcode({
              variables: { code: code, email: email },
            })
              .then(({ data }) => {
                if (!data.verifyPasswordResetcode.errorMessage) {
                  setSecurityQuestions(
                    data.verifyPasswordResetcode.securityQuestions
                  );
                  nextStep();
                } else {
                  setErrorMessage(data.verifyPasswordResetcode.errorMessage);
                }
              })
              .catch((err) => console.log(err));
          } else {
            setErrorMessage("Verification code must have 6 digits!");
          }
        }}
      />
    </div>
  );
}

const VERIFY_CODE = gql`
  mutation VerifyPasswordResetcode($code: Int!, $email: String!) {
    verifyPasswordResetcode(code: $code, email: $email) {
      errorMessage
      securityQuestions {
        securityQuestion {
          question
          id
        }
      }
    }
  }
`;

export default VerificationCode;
