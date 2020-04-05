const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const EmailValidator = (value) => {
  if (!EMAIL_REGEX.test(value)) {
    return "Please enter a valid email address";
  }
};

export const NotEmptyValidator = (value) => {
  if (!value) {
    return "This field should not be empty";
  }
};

export const PasswordValidator = (value) => {
  // console.log(!/\d/.test(value));
  if (value && (value.length < 8 || !/\d/.test(value))) {
    return "Selected password is invalid. Make sure to have at least 8 characters that include one number then confirm and try again";
  }
};

export const VerifyPasswordValidator = (verifyPassword, allValues) => {
  if (allValues && allValues.password !== verifyPassword)
    return "Password don't match";
};
