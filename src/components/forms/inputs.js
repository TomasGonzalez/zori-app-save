import React from "react";

import styled from "styled-components";

const MainWrapper = styled.div``;

const StyledInput = styled.input`
  border-width: 0px 0px 1px 0px;
  border-color: ${props =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${props =>
      props.meta && props.meta.error && props.meta.touched
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
  return (
    <MainWrapper {...props}>
      <StyledInput
        type={props.type}
        {...props.input}
        meta={props.meta}
        placeholder={props.placeholder}
      />
      {props.meta.error && props.meta.touched && (
        <ErrorMessage>{props.meta.error}</ErrorMessage>
      )}
    </MainWrapper>
  );
};

export const PasswordInput = props => {
  return (
    <MainWrapper {...props}>
      <StyledInput
        type={"password"}
        {...props.input}
        meta={props.meta}
        placeholder={props.placeholder}
      />
      {props.meta.error && props.meta.touched && (
        <ErrorMessage>{props.meta.error}</ErrorMessage>
      )}
    </MainWrapper>
  );
};
