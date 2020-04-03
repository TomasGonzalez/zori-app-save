import React, { useState, useRef } from "react";

import styled, { withTheme } from "styled-components";
import { MdClose } from "react-icons/md";
import Progress from "react-progress";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import Button from "components/Button";
import SignUpForm from "./SignUpForm";
import VerificationCode from "./VerificationCode";
import TellUsMore from "./TellUsMore";
import BaseModal from "components/BaseModal";

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
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainFormContainer = styled.div`
  &.container-enter {
    transform: translateX(800px);
    opacity: 0;
  }

  &.container-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 350ms ease, transform 350ms ease;
  }

  &.container-exit {
    opacity: 1;
    transform: translateX(0px);
  }

  &.container-exit-active {
    opacity: 0;
    transform: translateX(-800px);
    transition: opacity 200ms ease, transform 200ms ease;
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
  const [progress, setProgress] = useState(0);
  const [validationModal, setValidationModal] = useState(true);

  const formSteps = [
    <SignUpForm nextAction={() => setValidationModal(true)} />,
    <TellUsMore />,
    <SignUpForm />
  ];

  const HeaderComponent = close => {
    return (
      <div style={{ width: "100%" }}>
        <Header>
          <Logo src={require("assets/zori-logo.png")} />
          <Close>
            <MdClose onClick={close} size={20} />
          </Close>
        </Header>
        <ProgressBar progress={(progress / 4) * 100} {...props} />
      </div>
    );
  };

  return (
    <MainContainer>
      <HeaderComponent close={props.onRequestClose} />
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          classNames={"container"}
          key={progress}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
        >
          <MainFormContainer>{formSteps[progress]}</MainFormContainer>
        </CSSTransition>
      </SwitchTransition>
      <Footer>
        <Button
          onClick={formSteps[progress].props.nextAction}
          buttonStyle='dark'
          size='small'
          label='Next'
        />
        <PageCount>{progress} / 4</PageCount>
      </Footer>
      <BaseModal
        isOpen={validationModal}
        onRequestClose={() => setValidationModal(false)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex"
        }}
      >
        <VerificationCode
          onVerification={() => {
            setProgress(progress + 1);
            //setValidationModal(false);
          }}
          header={HeaderComponent(() => setValidationModal(false))}
        />
      </BaseModal>
    </MainContainer>
  );
}
export default withTheme(MainMercantSigninScreen);
