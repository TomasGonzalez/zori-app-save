import React, { useState } from "react";
import styled from "styled-components/macro";

import Button from "components/Button";
import theme from "theme";

const PanelContainer = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 6px;
  padding: 16px;
  border-radius: 7px;
  box-shadow: 0 0 15px 0 ${(props) => props.theme.color.gray3};
  background-color: ${(props) => props.theme.color.background};
`;

const MainWrapper = styled.div`
  position: relative;
`;

const DarkBackground = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  margin-right: 8px;
`;

export function PanelTitle({ title, onRequestClose }) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <img
        alt={"close"}
        onClick={() => {
          onRequestClose();
        }}
        src={require("assets/close-icon.png")}
        style={{ height: 12, width: 12, cursor: "pointer" }}
      />
    </TitleWrapper>
  );
}

export default function (props) {
  const { ModalContent, title, onRequestClose, visible, onButtonClick } = props;

  return (
    <>
      {visible && (
        <DarkBackground
          onClick={() => {
            onRequestClose();
          }}
        />
      )}
      <MainWrapper>
        <Button
          label={"Invite"}
          width={72}
          height={24}
          onClick={() => onButtonClick()}
          buttonColor={[theme.color.green1, theme.color.background]}
          textColor={[theme.color.green1, theme.color.background]}
          active={visible}
          borderColor={theme.color.green1}
        />
        {visible && <PanelContainer>{ModalContent}</PanelContainer>}
      </MainWrapper>
    </>
  );
}
