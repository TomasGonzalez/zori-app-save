import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import BeatLoader from "react-spinners/BeatLoader";

const AnimatedBackground = styled.div`
  background-color: transparent;
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 600px;
  border: solid 1px rgba(0, 0, 0, 0);

  color: transparent;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: width 0.3s, color 0.3s, border-radius 0.2s, background-color 0.5s,
    border 0.3s, height 0.2s;
`;

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
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) =>
    props.buttonStyle !== "dark"
      ? props.theme.color.gray1
      : props.theme.color.background};

  &:hover ${AnimatedBackground} {
    width: ${(props) => (props.size === "small" ? 184 : 296)}px;
    color: ${(props) =>
      props.buttonStyle !== "dark"
        ? props.theme.color.background
        : props.theme.color.black1};
    border-radius: 6px;
    background-color: ${(props) =>
      props.buttonStyle !== "dark"
        ? props.theme.color.black1
        : props.theme.color.background};
    height: 48px;
    border: solid 1px ${(props) => props.theme.color.gray1};
  }

  &:hover {
    border: solid 1px ${(props) => props.theme.color.gray1};
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      {...props}
      onClick={!props.isLoading && props.onClick}
      buttonStyle={props.buttonStyle}
    >
      <AnimatedBackground {...props}>{props.label}</AnimatedBackground>
      {props.isLoading ? (
        <BeatLoader
          size={8}
          color={
            props.buttonStyle === "dark"
              ? props.theme.color.background
              : props.theme.color.black1
          }
        />
      ) : (
        props.label
      )}
    </StyledButton>
  );
};

export default withTheme(Button);
