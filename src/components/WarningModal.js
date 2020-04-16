import React, { useState } from "react";

import Modal from "react-modal";
import _ from "lodash";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Image from "assets/Oops-face.png";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
`;

const ImageBackground = styled.div`
  position: relative;
  background-color: #ffd056;
  width: 112px;
  height: 112px;
  top: 65px;
  border-radius: 500px;
`;

const OopsFace = styled.img`
  width: 120px;
  top: -11px;
  height: 130.8px;
  right: -15px;
`;

const Title = styled.div`
  margin-top: 120.2px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.color.black};
`;

const SubTitle = styled.div`
  font-size: 14px;
  margin-top: 16px;
  width: 346px;
  height: 37px;
  text-align: center;

  span {
    width: 48px;
    height: 16px;
    font-size: 12px;
    padding: 1px 4px 1px 4px;
    border-radius: 2px;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.linkBlue};
  }
`;

export default function WarningModal({ style, isOpen, onRequestClose }) {
  const history = useHistory();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, .45)",
          ..._.get(style, "overlay", {}),
        },
        content: {
          top: "50%",
          border: "none",
          left: "50%",
          right: "initial",
          bottom: "initial",
          overflow: " initial",
          transform: "translate(-50%, -50%)",
          borderRadius: 7,
          minWidth: 456,
          minHeight: 512,
          padding: 0,
          ..._.get(style, "content", {}),
        },
      }}
    >
      <Header>
        <img
          alt={"close"}
          onClick={onRequestClose}
          src={require("assets/close-icon.png")}
          style={{ height: 20, width: 20, cursor: "pointer" }}
        />
      </Header>
      <MainWrapper>
        <ImageBackground>
          <OopsFace alt={"Oops face"} src={Image} />
        </ImageBackground>
        <Title>OOPS!</Title>
        <SubTitle onClick={() => history.push("/login")}>
          This email address is already linked to an account. <br /> Go ahead
          and <span>Log In</span> or use a different email address.{" "}
        </SubTitle>
      </MainWrapper>
    </Modal>
  );
}
