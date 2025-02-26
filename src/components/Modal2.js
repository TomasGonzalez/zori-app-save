import React from "react";

import Modal from "react-modal";
import Button from "components/Button";

import styled from "styled-components";
import theme from "theme";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 570
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
  color: ${props => props.theme.color.gray2};
  font-weight: 400;
  margin-top: 6px;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 1px 0 0 0;
  margin-top: 16px;
`;

export default function ({ children, ...props }) {
  return (
    <Modal style={customStyles} {...props}>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </TitleWrapper>
      {children}
      <SubmitWrapper>
        <Button
          buttonStyle="dark"
          label="Save and proceed"
          style={{ width: "100%", height: 36, margin: "16px 0 0 0" }}
        />
      </SubmitWrapper>
    </Modal>
  );
}
