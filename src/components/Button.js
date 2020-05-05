import React, { useState } from "react";
import styled, { withTheme, css } from "styled-components/macro";

import BeatLoader from "react-spinners/BeatLoader";
import theme from "theme";

const AnimatedBackground = styled.div`
  background-color: transparent;
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 600px;
  border: solid 1px rgba(0, 0, 0, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  z-index: 0;

  transition: width 0.3s, color 0.3s, border-radius 0.2s, background-color 0.5s,
    border 0.3s, height 0.2s;
`;

const ButtonText = styled.div`
  position: absolute;
  text-align: center;
  font-size: ${(props) => props.textSize}px;
  white-space: nowrap;
  color: ${(props) => props.textColor?.[1]};
  transition: color 0.4s;
`;

const AnimatedBackgroundIsActive = css`
  ${AnimatedBackground} {
    width: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.buttonColor?.[1]};
    height: 100%;
    border: solid 1px
      ${(props) =>
        props.borderColor ? props.borderColor : props.theme.color.gray1};
  }
`;

const StyledButton = styled.div`
  position: relative;
  height: 48px;

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
  transition: border-radius 0.5s;

  ${(props) => props.active && AnimatedBackgroundIsActive};
  ${(props) =>
    props.active &&
    css`
      ${ButtonText} {
        color: ${(props) => props.textColor?.[0]};
      }
    `};

  &: hover ${AnimatedBackgroundIsActive};

  &:hover {
    border-radius: 8px;
    border: solid 1px
      ${(props) =>
        props.borderColor ? props.borderColor : props.theme.color.gray1};
    ${ButtonText} {
      color: ${(props) => props.textColor?.[0]};
    }
  }
`;

const Button = ({ textSize = 12, ...props }) => {
  const textColor =
    props.textColor ||
    (props.buttonStyle !== "dark"
      ? [theme.color.background, theme.color.gray1]
      : [theme.color.gray1, theme.color.background]);

  return (
    <StyledButton
      {...props}
      onClick={!props.isLoading && props.onClick}
      buttonColor={
        props.buttonColor ||
        (props.buttonStyle !== "dark"
          ? [theme.color.background, theme.color.black1]
          : [theme.color.black1, theme.color.background])
      }
      className={props.className}
      textColor={textColor}
    >
      <AnimatedBackground />
      {props.isLoading ? (
        <BeatLoader size={8} style={{ position: "absolute" }} />
      ) : (
        <ButtonText textColor={textColor} textSize={textSize}>
          {props.label}
        </ButtonText>
      )}
    </StyledButton>
  );
};

export default withTheme(Button);
