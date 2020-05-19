import React from "react";
import Modal from "react-modal";
import _ from "lodash";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 530px;
  height: 456px;
  padding: 16px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  padding-bottom: 32px;
  border: solid 1px ${props => props.theme.color.creme};
  broder-width: 0px 0px 1px 0px;
  font-weight: 500;
  font-size: 20px;
`;

export default function({ onRequestClose, isOpen, style, ...restProps }) {
  return (
    <Modal
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, .45)",
          ..._.get(style, "overlay", {})
        },
        content: {
          top: "50%",
          border: "none",
          left: "50%",
          right: "initial",
          bottom: "initial",
          overflow: " initial",
          transform: "translate(-50%, -50%)",
          borderRadius: 10,
          padding: 16,
          ..._.get(style, "content", {})
        }
      }}
      {...restProps}
      isOpen={isOpen}
    >
      <MainWrapper>
        <TitleWrapper>Create a box</TitleWrapper>
      </MainWrapper>
    </Modal>
  );
}
