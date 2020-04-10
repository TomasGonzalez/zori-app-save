import React, { useEffect, useState, useContext } from "react";

import styled, { withTheme } from "styled-components";
import { MdClose, MdKeyboardArrowLeft } from "react-icons/md";
import Progress from "react-progress";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

import Button from "components/Button";
import SignUpForm from "./SignUpForm";
import VerificationCode from "./VerificationCode";
import TellUsMore from "./TellUsMore";
import TellUsMore2 from "./TellUsMore2";
import TellUsProduct from "./TellUsProduct";

import Back from "assets/close.png";
import BaseModal from "components/BaseModal";
import { Self } from "lib/context";
import logout from "lib/logout";
import { ScreenLoader } from "components/Loading";

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

const BackButton = styled.img`
  transform: rotate(90deg);
  height: 25px;
  width: 25px;
  padding: 16px;
`;

const ProgressBar = (props) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: 3,
          top: 14,
          width: "100%",
          backgroundColor: props.theme.color.lightGray,
        }}
      />
      <Progress
        style={{
          height: 3,
          top: 0,
          position: "relative",
          boxShadow: "transparent",
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
  const { self, populateSelf } = useContext(Self);

  const [progress, setProgress] = useState("loading");
  const [isLoading, setIsLoading] = useState(false);

  const [showNextButton, setShowNextButton] = useState(true);
  const [onHandleSubmit, setHandleSubmit] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const calculateProgress = () => {
      if (self) {
        return self.completedSteps.filter((step) => step.isFilled).length + 1;
      }
      return 0;
    };

    setProgress(calculateProgress());
  }, [self]);

  const formSteps = [
    <SignUpForm
      setHandleSubmit={(values) => setHandleSubmit(values)}
      onVerification={() => {
        setProgress(progress + 1);
        setHandleSubmit(null);
      }}
      setIsLoading={(value) => setIsLoading(value)}
    />,
    <VerificationCode
      onVerification={() => {
        setHandleSubmit(null);
        //populateSelf();
      }}
      onComponentMount={() => setShowNextButton(false)}
      onFinishVerification={() => {
        setProgress(progress + 1);
        setShowNextButton(true);
      }}
    />,
    <TellUsMore
      setHandleSubmit={(values) => setHandleSubmit(values)}
      onVerification={() => {
        console.log("onVerification");
        setProgress(progress + 1);
        setHandleSubmit(null);
      }}
      onFinishVerification={() => {}}
    />,
    <TellUsMore2
      setHandleSubmit={(values) => setHandleSubmit(values)}
      onVerification={() => {
        setProgress(progress + 1);
        setHandleSubmit(null);
      }}
      onFinishVerification={() => {}}
    />,
    <TellUsProduct
      setHandleSubmit={(values) => setHandleSubmit(values)}
      onVerification={() => {
        //history.push("/");
        populateSelf();
        setHandleSubmit(null);
      }}
      onFinishVerification={() => {}}
    />,
  ];

  if (progress === "loading") {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScreenLoader />
      </div>
    );
  }

  return (
    <MainContainer>
      <div style={{ width: "100%" }}>
        <Header>
          <Logo src={require("assets/zori-logo.png")} />
          <Close>
            <MdClose onClick={() => logout()} size={20} />
          </Close>
        </Header>
        <ProgressBar progress={(progress / 4) * 100} {...props} />
        {progress > 2 && (
          <BackButton
            onClick={() => setProgress(progress - 1)}
            alt='back'
            src={Back}
          />
        )}
      </div>
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
        {showNextButton && (
          <>
            <Button
              onClick={onHandleSubmit}
              buttonStyle='dark'
              size='small'
              label='Next'
              isLoading={isLoading}
            />
            <PageCount>{progress > 1 ? progress : progress + 1} / 4</PageCount>
          </>
        )}
      </Footer>
    </MainContainer>
  );
}

export default withTheme(MainMercantSigninScreen);
