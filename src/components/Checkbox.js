import React from "react";
import styled, { withTheme } from "styled-components";

import { MdCheck } from "react-icons/md";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextStyle = styled.div`
  color: ${props => props.theme.color.gray1};
  font-size: 14px;
  margin-left: 10px;
`;

const StyledCheckbox = styled.div`
  width: 15px;
  height: 15px;
  border: solid 1px ${props => props.theme.color.gray1};
  border-radius: 3px;
  cursor: pointer;
`;

const Checkbox = props => {
  return (
    <MainWrapper {...props}>
      <StyledCheckbox
        onClick={() => {
          props.input.onChange(!props.input.value);
        }}
      >
        {props.input.value && <MdCheck color={props.theme.color.gray1} />}
      </StyledCheckbox>
      <TextStyle>{props.label}</TextStyle>
    </MainWrapper>
  );
};
export default withTheme(Checkbox);
