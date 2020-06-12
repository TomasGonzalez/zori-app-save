import React from "react";

import styled from "styled-components";
import theme from "theme";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.5)"
  }
};

const TitleWrapper = styled.div`
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 0px 0px 1px 0px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.color.black1};
  margin: 0px;
`;

const SubTitle = styled.h2`
  font-size: 10px;
  color: ${props => props.theme.color.gray1};
  font-weight: 400;
  margin-top: 6px;
`;

export default function ({ children, ...props }) {
  return (
    <Modal style={customStyles} {...props}>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </TitleWrapper>
      {children}
    </Modal>
  );
}
