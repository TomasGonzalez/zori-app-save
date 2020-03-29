import React from "react";

import styled from "styled-components";

const MainWrapper = styled.div``;

const StyledInput = styled.input`
  border-width: 0px 0px 2px 0px;
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${props =>
      props.meta && props.meta.error
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${props => props.theme.color.lightDanger};
`;

export const TextInput = props => {
  // console.log(props.meta && props.meta.touched);
  // console.log(props.meta && props.meta.error);

  return (
    <MainWrapper {...props}>
      <StyledInput
        {...props.input}
        meta={props.meta}
        placeholder={props.placeholder}
      />
      {props.meta.error && <ErrorMessage>{props.meta.error}</ErrorMessage>}
    </MainWrapper>
  );
};
