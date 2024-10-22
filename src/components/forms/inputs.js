import React, { useState } from "react";

import InputMask from "react-input-mask";
import styled from "styled-components/macro";
import CurrencyInput from "react-currency-masked-input";

import BaseInput from "components/BaseInput";

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${props =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 14px;
  padding-bottom: 7px;
  ::placeholder {
    font-size: 14px;
    color: ${props =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const PasswordWrapper = styled.div`
  border-width: 0px 0px 1px 0px;
  border-style: solid;

  border-color: ${props => {
    return (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1;
  }};
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
    color: ${props =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const ShowPasswordButton = styled.div`
  width: 120px;
  min-width: 130px;
  text-align: end;
  font-size: 14px;
  color: ${props => props.theme.color.gray1};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.gray2};
  }
`;

const StyledPhoneInput = styled(InputMask)`
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${props =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.gray1};
  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 4.5px 0px;
  border-style: solid;
  ::placeholder {
    color: ${props =>
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
  margin-top: 35px;
  width: 434px;
  border-width: 0px;
  outline: none;
  padding-left: 30px;
  color: ${props => props.theme.color.gray1};
  height: 70px;
  align-items: center;
  ::placeholder {
    color: ${props => props.theme.color.gray1};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${props => props.theme.color.lightDanger};
  position: absolute;
`;

const StyledBigInput = styled.textarea`
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 8px;
  resize: none;
  box-sizing: border-box;
`;

const StyledAAQInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  border-width: 1px 1px 1px 1px;
  border-radius: 3px;
  border-style: solid;
  border: 1px solid ${props => props.theme.color.gray1};
  border-radius: 3px;
  border-color: ${props =>
    (props.meta && props.meta.error) || !props.value
      ? props.theme.color.danger
      : props.theme.color.underlineColor};

  outline: none;
  width: 100%;
  font-size: 14px;
  padding: 11px 8px;
  box-sizing: border-box;
  ::placeholder {
    font-size: 14px;
    color: ${props =>
      props.meta && props.meta.error && props.meta.touched
        ? props.theme.color.danger
        : props.theme.color.gray1};
  }
`;

const StyledCurrencyInput = styled(CurrencyInput)`
  border: solid 1px ${props => props.theme.color.creme};
  border-radius: 3px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding: 0px 8px;
`;

export const InputCurrency = props => {
  return (
    <BaseInput {...props}>
      <StyledCurrencyInput />
    </BaseInput>
  );
};

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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainWrapper {...props}>
      <PasswordWrapper {...props.input}>
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

export const AAQInput = props => {
  return (
    <MainWrapper {...props}>
      <StyledAAQInput
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

export const PhoneInput = props => {
  return (
    <MainWrapper {...props}>
      <StyledPhoneInput
        mask="999-999-9999"
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

const StyledDefaultInput = styled.input`
  border: solid 1px ${props => props.theme.color.creme};
  border-radius: 3px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding: 0px 8px;
`;

export function DefaultInput(props) {
  return (
    <BaseInput {...props}>
      <StyledDefaultInput {...props.input} className={props.className} />
    </BaseInput>
  );
}

export const BigInput = props => {
  return (
    <MainWrapper>
      <BaseInput {...props}>
        <StyledBigInput
          className={props.className}
          type={props.type}
          rows={props.rows || "4"}
          {...props.input}
          meta={props.meta}
          placeholder={props.placeholder}
        />
      </BaseInput>
    </MainWrapper>
  );
};

export const VerificationInput = props => {
  return (
    <InputMask mask="999999" value={props.value} onChange={props.onChange}>
      {inputProps => (
        <StyledVerificationInput
          placeholder={"______"}
          {...inputProps}
          disableUnderline
        />
      )}
    </InputMask>
  );
};
