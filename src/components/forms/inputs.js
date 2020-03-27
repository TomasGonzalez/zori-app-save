import React from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  border-width: 0px 0px 2px 0px;
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${props => props.theme.color.gray1};
  }
`;

const CheckBoxMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCheckBox = styled.input`
  outline: 0px solid ${props => props.theme.color.gray1};
`;

export const TextInput = props => {
  return <StyledInput {...props} />;
};

export const CheckBox = () => (
  <CheckBoxMainWrapper>
    <StyledCheckBox type='checkbox' />
  </CheckBoxMainWrapper>
);
