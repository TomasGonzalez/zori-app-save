import React from "react";

import styled from "styled-components";

const StyledWrapper = styled.div`
  border-width: 0px 0px 4px 0px;
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;

  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${props => props.theme.color.gray1};
  }
`;

const TextInput = props => {
  return (
    <StyledWrapper>
      <StyledInput {...props} />
    </StyledWrapper>
  );
};

export default TextInput;
