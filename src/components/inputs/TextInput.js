import React from "react";

import styled from "styled-components";

const MainContainer = styled.input`
  border-width: 0px 0px 0.5px 0px;
  width: 100%;
  outline: none;

  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${props => props.theme.color.gray1};
  }
`;

const TextInput = props => {
  return <MainContainer {...props} />;
};

export default TextInput;
