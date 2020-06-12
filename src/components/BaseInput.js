import React from "react";
import styled from "styled-components";

import theme from "theme";

const Wrapper = styled.div`
  position: relative;
`;

const Help = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 4px;
  position: absolute;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  position: absolute;
  color: ${props => props.theme.color.lightDanger};
`;

const FormTitle = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
`;

const SubTitle = styled.div`
  font-size: 10px;
  margin-bottom: 4px;
  margin-top: 4px;
  color: ${props => props.theme.color.gray2};
`;

function BaseInput({ children, ...props }) {
  return (
    <Wrapper {...props} style={props.mainWrapperStyle}>
      {props.title && (
        <FormTitle>
          {props.title}
          {props.titleSpan && (
            <span
              style={{
                fontSize: 11,
                fontWeight: "bold",
                color: theme.color.gray1
              }}
            >
              {` ${props.titleSpan}`}
            </span>
          )}
        </FormTitle>
      )}
      {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      {children}
      {props?.meta?.error && props?.meta?.touched && (
        <ErrorMessage>{props.meta.error}</ErrorMessage>
      )}
      {props.help && <Help meta={props.meta}>{props.help}</Help>}
    </Wrapper>
  );
}

export default BaseInput;
