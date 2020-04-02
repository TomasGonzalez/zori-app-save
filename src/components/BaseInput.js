import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 64px;
`;

function BaseInput({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default BaseInput;
