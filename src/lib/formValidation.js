const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export const EmailValidator = value => {
  if (!EMAIL_REGEX.test(value)) {
    return "Please enter a valid email address";
  }
};

export const NotEmptyValidator = value => {
  if (!value) {
    return "This field should not be empty";
  }
};
