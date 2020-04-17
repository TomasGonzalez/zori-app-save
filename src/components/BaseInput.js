import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Help = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  position: absolute;
  margin-top: ${(props) => (props.meta.error && props.meta.touched ? 18 : 4)}px;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  position: absolute;
  color: ${(props) => props.theme.color.lightDanger};
`;

function BaseInput({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
      {props.meta.error && props.meta.touched && (
        <ErrorMessage>{props.meta.error}</ErrorMessage>
      )}
      {props.help && <Help meta={props.meta}>{props.help}</Help>}
    </Wrapper>
  );
}

export default BaseInput;
