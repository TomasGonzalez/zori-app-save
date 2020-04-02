import React from "react";
import styled from "styled-components";

const StyledLock = styled.img`
  height: 207.2px;
  width: 164px;
`;

const MainWrapper = styled.div`
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

function VerificationCode() {
  return (
    <MainWrapper>
      <StyledLock src={require("assets/verificationDanger.png")} />
      <Title>Verification</Title>
      <SubTitle>
        We’ve sent a code to the email and phone number you provided. Enter it
        below to proceed.
        <br /> Didn’t get it? <span>Have it resent</span>
      </SubTitle>
    </MainWrapper>
  );
}

export default VerificationCode;
