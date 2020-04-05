import React from "react";

import InputMask from "react-input-mask";
import styled from "styled-components";

const MainWrapper = styled.div``;

const StyledInput = styled.input`
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    font-size: 14px;
    color: ${(props) =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const StyledPasswordInput = styled.input`
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 30px;
  padding-bottom: ${(props) => (props.value ? 7 : 12)}px;
  padding-top: 6px;
  height: 10px;

  ::placeholder {
    font-size: 14px;
    padding-bottom: 20px;
    height: 30px;
    color: ${(props) =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const StyledPhoneInput = styled(InputMask)`
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;

  ::placeholder {
    color: ${(props) =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const StyledVerificationInput = styled.input`
  font-size: 72px;
  letter-spacing: 32px;
  top: 10px;
  width: 434px;
  border-width: 0px;
  outline: none;
  padding-left: 30px;
  color: ${(props) => props.theme.color.lightGray};

  ::placeholder {
    color: ${(props) => props.theme.color.lightGray};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${(props) => props.theme.color.lightDanger};
`;

export const TextInput = (props) => {
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

export const PasswordInput = (props) => {
  return (
    <MainWrapper {...props}>
      <StyledPasswordInput
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

export const PhoneInput = (props) => {
  return (
    <MainWrapper {...props}>
      <StyledPhoneInput
        mask='999-999-9999'
        maskChar=' '
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

export const VerificationInput = (props) => {
  return (
    <InputMask mask='999999' value={props.value} onChange={props.onChange}>
      {(inputProps) => (
        <StyledVerificationInput
          placeholder={"______"}
          {...inputProps}
          disableUnderline
        />
      )}
    </InputMask>
  );
};
