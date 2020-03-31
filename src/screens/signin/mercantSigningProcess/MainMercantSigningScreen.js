import React, { useState } from "react";

import styled, { withTheme } from "styled-components";
import { MdClose } from "react-icons/md";
import Progress from "react-progress";

import Button from "components/Button";
import SignUpForm from "./SignUpForm";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
`;

const Footer = styled.div`
  padding-bottom: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PageCount = styled.div`
  margin-left: 16px;
`;

const MainContainer = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const ProgressBar = props => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: 3,
          top: 14,
          width: "100%",
          backgroundColor: props.theme.color.lightGray
        }}
      />
      <Progress
        style={{
          height: 3,
          top: 0,
          position: "relative",
          boxShadow: "transparent"
        }}
        color={props.theme.color.green1}
        height={3}
        speed={0.4}
        percent={props.progress}
      />
    </div>
  );
};

function MainMercantSigninScreen(props) {
  const [progress, setProgress] = useState(1);

  return (
    <MainContainer>
      <div>
        <Header>
          <Logo src={require("assets/zori-logo.png")} />
          <Close>
            <MdClose onClick={props.onRequestClose} size={20} />
          </Close>
        </Header>
        <ProgressBar progress={(progress / 4) * 100} {...props} />
      </div>
      <SignUpForm />
      <Footer>
        <Button
          onClick={() => setProgress(progress + 1)}
          buttonStyle='dark'
          size='small'
          label='Next'
        />
        <PageCount>{progress} / 4</PageCount>
      </Footer>
    </MainContainer>
  );
}
export default withTheme(MainMercantSigninScreen);
