import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { VerificationInput } from "components/forms/inputs";
import Button from "components/Button";

const StyledLock = styled.img`
  height: 207.2px;
  width: 164px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

function VerificationCode({
  onComponentMount,
  onVerification,
  onFinishVerification,
}) {
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [verifyCode, { data }] = useMutation(VERIFY_CODE);

  useEffect(() => {
    onComponentMount();
  }, []);

  const NotVerified = () => (
    <ContentWrapper>
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
        label='Verify'
        style={{ marginTop: 64, marginBottom: 50, heigth: 48, width: 184 }}
        onClick={() => {
          if (code && code.toString().length > 5) {
            verifyCode({ variables: { code: code } })
              .then(({ data }) => {
                if (!data.verifyCode.errorMessage) {
                  setIsVerified(true);
                  onVerification();
                  setTimeout(onFinishVerification, 1000);
                } else {
                  setErrorMessage(data.verifyCode.errorMessage);
                }
              })
              .catch((err) => console.log(err));
          } else {
            setErrorMessage("Verification code must have 6 digits!");
          }
        }}
      />
    </ContentWrapper>
  );

  const Verified = () => (
    <ContentWrapper>
      <StyledLock src={require("assets/verificationSuccess.png")} />
      <Title>Success!</Title>
      <SubTitle style={{ width: "100%" }}>
        Click the button below if this page doesn’t automatically redirect in a
        couple of seconds
      </SubTitle>
      <Button
        buttonStyle='dark'
        label='Verify'
        style={{ marginTop: 64, heigth: 48, width: 184 }}
        onClick={onFinishVerification}
      />
    </ContentWrapper>
  );
  return <MainWrapper>{isVerified ? Verified() : NotVerified()}</MainWrapper>;
}

const VERIFY_CODE = gql`
  mutation VerifyCode($code: Int!) {
    verifyCode(code: $code) {
      errorMessage
      user {
        id
        isVerified
        username
        email
        phoneNumber
        firstName
        lastName
        dateJoined
        isActive
        avatar
        isPromoter
        completedSteps {
          stepId
          label
          isFilled
        }
        vendor {
          brandname
        }
      }
    }
  }
`;

export default VerificationCode;
