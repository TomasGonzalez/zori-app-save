import React from "react";

import Select, { components } from "react-select";
import theme from "theme";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
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
  control: (provided, state) => {
    return {
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: "100%",
      borderWidth: 0,
      borderRadius: 0,
      boxShadow: "none",
      ":hover": {
        borderColor: theme.color.gray1
      },
      borderBottom: `1px solid ${theme.color.danger}`
    };
  },
  valueContainer: provided => {
    return {
      ...provided,
      alignItems: "flex-start",
      padding: 0
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
      fontSize: 14
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
        alt='close'
        style={{ width: 16, height: 16 }}
        src={require("assets/close.png")}
      />
    </components.DropdownIndicator>
  );
};

export default function Dropdown({ options }) {
  return (
    <Select
      placeholder={"Is this a brand you created or own?"}
      styles={customStyles}
      options={options}
      components={{ DropdownIndicator }}
    />
  );
}
