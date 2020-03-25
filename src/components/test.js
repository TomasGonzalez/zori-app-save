import React from "react";
import styled from "styled-components";

const StyledTest = styled.div`
  font-size: 25px;
  color: ${props => props.theme.color.primary};
`;

const Test = () => {
  console.log("test");
  return <StyledTest>asdfas df asdfs </StyledTest>;
};

export default Test;
