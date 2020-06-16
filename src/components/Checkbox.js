import React from "react";
import styled, { withTheme } from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextStyle = styled.div`
  color: ${props => props.colorTheme || props.theme.color.green1};
  font-size: 14px;
  margin-left: 10px;
`;

const StyledCheckbox = styled.div`
  width: 15px;
  height: 15px;
  border: solid 1px ${props => props.colorTheme || props.theme.color.green1};
  background-color: ${props =>
    props.value ? props.colorTheme || props.theme.color.green1 : "transparent"};
  border-radius: 3px;
  cursor: pointer;
`;

const Checkbox = props => {
  return (
    <MainWrapper {...props}>
      <StyledCheckbox
        colorTheme={props.colorTheme}
        onClick={() => {
          if (props.input) {
            props.input.onChange(!props.input?.value);
          }
        }}
        {...props.input}
        value={props?.inverted ? !props?.input?.value : props?.input?.value}
      />
      <TextStyle className="label" colorTheme={props.colorTheme}>
        {props.label}
      </TextStyle>
    </MainWrapper>
  );
};
export default withTheme(Checkbox);
