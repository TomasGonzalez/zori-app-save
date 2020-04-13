import React from "react";
import { Field } from "react-final-form";

export const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => {
      return (value.value || value) === is ? children : null;
    }}
  </Field>
);
