import React, { useState, useEffect } from "react";

import styled from "styled-components";

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
`;

const SubTitle = styled.div`
  width: 416px;
  height: 64px;
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.color.gray1};
  span {
    color: ${(props) => props.theme.color.linkBlue};
    cursor: pointer;
  }
`;

function VerificationCode({
  onComponentMount,
  onVerification,
  onFinishVerification,
}) {
  const [isVerified, setIsVerified] = useState(false);

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
        <br /> Didn’t get it? <span>Have it resent</span>
      </SubTitle>
      <VerificationInput />
      <Button
        buttonStyle='dark'
        size='small'
        label='Verify'
        style={{ marginTop: 64 }}
        onClick={() => {
          setIsVerified(true);
          onVerification();
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
        size='small'
        label='Verify'
        style={{ marginTop: 64 }}
        onClick={onFinishVerification}
      />
    </ContentWrapper>
  );
  return <MainWrapper>{isVerified ? Verified() : NotVerified()}</MainWrapper>;
}

export default VerificationCode;
