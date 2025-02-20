import React, { useState, useEffect } from "react";

import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import CreatableSelect from "react-select/creatable";
import styled from "styled-components";

import theme from "theme";
import BaseInput from "components/BaseInput";

const Dropdown2Style = {
  control: (provided, state) => {
    return {
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "100%",
      borderWidth: 1,
      boxShadow: "none",
      borderStyle: "solid",

      ":hover": {
        borderColor: theme.color.creme
      },

      borderColor: theme.color.creme
    };
  },

  placeholder: (provided, state) => {
    return {
      ...provided,
      color: theme.color.gray1,
      fontSize: 12
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: theme.color.green3
    };
  },
  indicatorSeparator: provided => {
    return {
      ...provided,
      display: "none"
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      display: "none"
    };
  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  })
};

const customStyles = {
  option: (provided, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...provided,
      ":active": {
        backgroundColor: theme.color.green2
      },
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? theme.color.green2
        : isFocused
        ? theme.color.green2
        : null,
      color: theme.color.black,
      position: "relative",
      height: "100%"
    };
  },
  singleValue: (provided, state) => {
    return {
      ...provided,
      top: null,
      bottom: -5,
      fontSize: 14
    };
  },
  control: (provided, state) => {
    return {
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "100%",
      borderWidth: 0,
      borderRadius: 0,
      boxShadow: "none",
      borderStyle: "solid",

      ":hover": {
        borderColor: theme.color.underlineColor
      },
      borderBottom: `1px solid ${
        state.hasValue ? theme.color.underlineColor : theme.color.danger
      }`,
      minHeight: null
    };
  },
  container: provided => {
    return {
      ...provided,
      display: "flex",
      height: 33,
      alignItems: "center",
      justifyContent: "center"
    };
  },
  valueContainer: provided => {
    return {
      ...provided,
      alignItems: "flex-start",
      padding: 0,
      height: 19,
      position: null
    };
  },
  indicatorSeparator: provided => {
    return {
      ...provided,
      display: "none"
    };
  },
  placeholder: (provided, state) => {
    return {
      ...provided,
      color: theme.color.gray1,
      marginLeft: 0,
      marginRight: 0,
      bottom: 7,
      fontSize: 14,
      height: 20
    };
  },
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      padding: "0px",
      paddingBottom: 3,
      alignItems: "flex-end"
    };
  },
  indicatorsContainer: (provided, state) => {
    return {
      ...provided,
      padding: "0px",
      alignItems: "flex-end"
    };
  }
};

const groupBadgeStyles = {
  backgroundColor: "blue",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  textAlign: "center"
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        alt="close"
        style={{ width: 16, height: 16 }}
        src={require("assets/close.png")}
      />
    </components.DropdownIndicator>
  );
};

export default function Dropdown({ options, ...props }) {
  return (
    <BaseInput {...props}>
      <Select
        {...props.input}
        isMulti={props.isMulti}
        placeholder={props.placeholder}
        styles={customStyles}
        options={options}
        components={{ DropdownIndicator }}
      />
    </BaseInput>
  );
}

export function CustomCreatableSelect({ options, ...props }) {
  return (
    <BaseInput {...props}>
      <CreatableSelect
        {...props.input}
        className={props.className}
        isMulti={props.isMulti}
        placeholder={props.placeholder}
        styles={Dropdown2Style}
        options={options}
        components={{ DropdownIndicator }}
      />
    </BaseInput>
  );
}

export function DropdownAsync({ options, ...props }) {
  return (
    <AsyncSelect
      {...props.input}
      styles={Dropdown2Style}
      placeholder={props.placeholder}
      isMulti={props.isMulti}
      options={options}
      onChange={props.onChange}
      components={{ DropdownIndicator }}
      loadOptions={props.loadOptions}
      onInputChange={props.onInputChange}
    />
  );
}

export function Dropdown2({ options, ...props }) {
  return (
    <BaseInput {...props}>
      <Select
        {...props.input}
        className={props.className}
        isMulti={props.isMulti}
        placeholder={props.placeholder}
        styles={Dropdown2Style}
        options={options}
        components={{ DropdownIndicator }}
      />
    </BaseInput>
  );
}

//Answer And Question (AAQ) Dropdown
export function AAQDropdown({ options, ...props }) {
  return (
    <Select
      {...props.input}
      isMulti={props.isMulti}
      placeholder={props.placeholder}
      styles={customStyles}
      options={options}
      components={{ DropdownIndicator }}
    />
  );
}
