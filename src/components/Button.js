import React, { useState } from "react";
import styled from "styled-components";

import Loading from "components/Loading";

const StyledButton = styled.div`
  width: ${(props) => (props.size === "small" ? 184 : 296)}px;
  height: 48px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.35);
  background-color: ${(props) =>
    props.buttonStyle !== "dark"
      ? props.theme.color.background
      : props.theme.color.black1};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.buttonStyle !== "dark"
      ? props.theme.color.gray1
      : props.theme.color.background};
`;

const Button = (props) => {
  return (
    <StyledButton {...props} buttonStyle={props.buttonStyle}>
      {props.isLoading ? (
        <Loading />
      ) : (
        <Label buttonStyle={props.buttonStyle}>{props.label}</Label>
      )}
    </StyledButton>
  );
};

export default Button;
