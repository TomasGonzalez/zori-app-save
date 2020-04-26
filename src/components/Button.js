import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import BeatLoader from "react-spinners/BeatLoader";
import theme from "theme";

const AnimatedBackground = styled.div`
  background-color: transparent;
  position: absolute;
  width: 30px;
  height: 0px;
  border-radius: 600px;
  border: solid 1px rgba(0, 0, 0, 0);

  color: transparent;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: width 0.3s, color 0.3s, border-radius 0.2s, background-color 0.5s,
    border 0.3s, height 0.1s;
`;

const StyledButton = styled.div`
  position: relative;
  height: ${(props) => props.height || 48}px;
  width: ${(props) =>
    props.size === "small" ? 184 : props.size || props.width || 296}px;
  border-radius: 6px;
  border: solid 1px
    ${(props) =>
      props.borderColor ? props.borderColor : props.theme.color.gray1};
  background-color: ${(props) => props.buttonColor?.[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.textColor?.[1]};

  transition: border-radius 0.5s;

  &:hover ${AnimatedBackground} {
    width: ${(props) =>
      props.size === "small" ? 184 : props.size || props.width || 296}px;
    color: ${(props) => props.textColor?.[0]};
    border-radius: 6px;
    background-color: ${(props) => props.buttonColor?.[1]};
    height: ${(props) => props.height || 48}px;
    border: solid 1px
      ${(props) =>
        props.borderColor ? props.borderColor : props.theme.color.gray1};
  }

  &:hover {
    border-radius: 8px;
    border: solid 1px
      ${(props) =>
        props.borderColor ? props.borderColor : props.theme.color.gray1};
  }
`;

const ButtonText = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
`;

const Button = (props) => {
  return (
    <StyledButton
      {...props}
      buttonStyle
      onClick={!props.isLoading && props.onClick}
      buttonColor={
        props.buttonColor ||
        (props.buttonStyle !== "dark"
          ? [theme.color.background, theme.color.black1]
          : [theme.color.black1, theme.color.background])
      }
      textColor={
        props.textColor ||
        (props.buttonStyle !== "dark"
          ? [theme.color.background, theme.color.gray1]
          : [theme.color.gray1, theme.color.background])
      }
    >
      <AnimatedBackground>
        {props.isLoading ? (
          <BeatLoader
            size={8}
            color={
              props.buttonStyle === "dark"
                ? props.theme.color.black1
                : props.theme.color.background
            }
          />
        ) : (
          <ButtonText>{props.label}</ButtonText>
        )}
      </AnimatedBackground>
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
        <div>{props.label}</div>
      )}
    </StyledButton>
  );
};

export default withTheme(Button);
