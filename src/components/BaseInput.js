import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 64px;
`;

const Help = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${(props) => props.theme.color.lightDanger};
`;
function BaseInput({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
      {props.meta.error && props.meta.touched && (
        <ErrorMessage>{props.meta.error}</ErrorMessage>
      )}
      {props.help && <Help>{props.help}</Help>}
    </Wrapper>
  );
}

export default BaseInput;
