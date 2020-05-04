import React from "react";

import styled from "styled-components/macro";
import CreatableSelect from "react-select/creatable";

import theme from "theme";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),

  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: theme.color.green3,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
export default function ({ placeholder }) {
  return (
    <CreatableSelect styles={colourStyles} placeholder={placeholder} isMulti />
  );
}
