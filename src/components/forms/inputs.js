import React, { useState } from "react";

import InputMask from "react-input-mask";
import styled from "styled-components";

const MainWrapper = styled.div``;

const StyledInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

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

const PasswordWrapper = styled.div`
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${(props) =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  font-size: 14px;
  padding: 4.5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledPasswordInput = styled.input`
  border-width: 0px 0px 0px 0px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  outline: none;
  width: 100%;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
    color: ${(props) =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const ShowPasswordButton = styled.div`
  width: 120px;
  font-size: 14px;
  color: ${(props) => props.theme.color.gray1};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.gray2};
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

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
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

const StyledBigInput = styled.textarea`
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  outline: none;
  width: 100%;
  height: 111px;
  padding: 16px;
  resize: none;
  box-sizing: border-box;
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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainWrapper {...props}>
      <PasswordWrapper>
        <StyledPasswordInput
          {...props.input}
          type={!showPassword && "password"}
          meta={props.meta}
          placeholder={props.placeholder}
        />
        <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? "show" : "hide"} password
        </ShowPasswordButton>
      </PasswordWrapper>
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

export const BigInput = (props) => {
  return (
    <StyledBigInput
      type={props.type}
      {...props.input}
      meta={props.meta}
      placeholder={props.placeholder}
      rows='4'
    />
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
