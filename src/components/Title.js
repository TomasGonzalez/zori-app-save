import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div``;

const TitleUnderline = styled.div`
  width: 18px;
  height: 3px;
  background-color: ${props => props.theme.color.green1};
`;

const Title = styled.div`
  font-size: ${props => props.fontSize || 30}px;
  font-weight: bold;
`;
const ErrorMessage = styled.div`
  color: ${props => props.theme.color.danger};
  margin-top: 8px;
  font-size: 12px;
`;

export default function(props) {
  return (
    <TitleWrapper {...props}>
      <Title fontSize={props.fontSize}>{props.label}</Title>
      <TitleUnderline />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </TitleWrapper>
  );
}
