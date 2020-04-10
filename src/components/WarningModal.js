import React, { useState } from "react";

import Modal from "react-modal";
import _ from "lodash";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

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

const CloseIcon = styled(MdClose)`
  cursor: pointer;
`;

const ImageBackground = styled.div`
  position: relative;
  background-color: #ffd056;
  width: 112px;
  height: 112px;
  top: 102px;
  border-radius: 500px;
`;

const OopsFace = styled.img`
  width: 120px;
  top: -11px;
  height: 130.8px;
  right: -15px;
`;

const Title = styled.div`
  margin-top: 32.2px;
`;

export default function WarningModal({ style, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={false}
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
        <CloseIcon onClick={() => onRequestClose} size={28} />
      </Header>
      <MainWrapper>
        <ImageBackground>
          <OopsFace alt={"Oops face"} src={Image} />
        </ImageBackground>
        <Title>Oops</Title>
      </MainWrapper>
    </Modal>
  );
}
