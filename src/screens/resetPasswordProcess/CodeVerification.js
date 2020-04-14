import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 56.8px;
  height: 30px;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
  padding-top: 16px;
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

  const history = useHistory();

  const [verifyPasswordResetcode] = useMutation(VERIFY_CODE);

  const NotVerified = () => (
    <ContentWrapper>
      <Header>
        <Logo src={require("assets/zori-logo.png")} />
        <Close>
          <MdClose onClick={() => history.push("/login")} size={20} />
        </Close>
      </Header>
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
      <div />
    </ContentWrapper>
  );

  return <MainWrapper>{NotVerified()}</MainWrapper>;
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
