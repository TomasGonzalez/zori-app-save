import React, { useState } from "react";

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
  color: ${props => props.theme.color.gray1};
  span {
    color: ${props => props.theme.color.linkBlue};
    cursor: pointer;
  }
`;

function VerificationCode({ header, onVerification }) {
  const [isVerified, setIsVerified] = useState(false);

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
        onClick={onVerification}
      />
    </ContentWrapper>
  );
  const Verified = () => (
    <ContentWrapper>
      <StyledLock src={require("assets/verificationDanger.png")} />
      <Title>Verification</Title>
      <SubTitle>hello</SubTitle>
      <VerificationInput />
      <Button
        buttonStyle='dark'
        size='small'
        label='Verify'
        style={{ marginTop: 64 }}
        onClick={onVerification}
      />
    </ContentWrapper>
  );
  return (
    <MainWrapper>
      {header}
      {isVerified ? Verified() : NotVerified()}
      <div />
    </MainWrapper>
  );
}

export default VerificationCode;
