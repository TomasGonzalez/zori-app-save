import React, { useState } from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

import FillSecurityQuestions from "screens/resetPasswordProcess/FillSecurityQuestions";
import SendResetInstructions from "screens/resetPasswordProcess/SendResetInstructions";
import CodeVerification from "screens/resetPasswordProcess/CodeVerification";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
  padding-top: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  position: fixed;
  top: 0px;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

export default function MainResetPasswordScreen() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState(null);
  const [securityQuestions, setSecurityQuestions] = useState(null);

  const history = useHistory();

  const nextStep = () => {
    setCount(count + 1);
  };

  const screens = [
    <SendResetInstructions
      setEmail={(value) => setEmail(value)}
      nextStep={() => nextStep()}
    />,
    <CodeVerification
      setSecurityQuestions={(val) => setSecurityQuestions(val)}
      email={email}
      nextStep={() => nextStep()}
    />,
    <FillSecurityQuestions
      securityQuestions={securityQuestions}
      email={email}
      nextStep={() => nextStep()}
    />,
  ];

  return (
    <MainContainer>
      <Header>
        {count > 0 ? <Logo src={require("assets/zori-logo.png")} /> : <div />}
        <Close>
          <img
            alt={"close"}
            onClick={() => history.push("/login")}
            src={require("assets/close-icon.png")}
            style={{ height: 20, width: 20, cursor: "pointer" }}
          />
        </Close>
      </Header>
      {screens[count]}
    </MainContainer>
  );
}
