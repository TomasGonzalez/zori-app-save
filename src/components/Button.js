import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 296px;
  height: 48px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.color.gray1};
`;

const Button = props => {
  return (
    <StyledButton type={props.type}>
      <Label>{props.label}</Label>
    </StyledButton>
  );
};

export default Button;
