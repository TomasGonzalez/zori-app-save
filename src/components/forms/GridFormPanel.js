import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 ${props => props.theme.color.creme};
  margin: 24px 28px;
`;

const SubTitle = styled.h3`
  margin: 0px;
  margin-top: 8px;
  font-size: 10px;
  color: ${props => props.theme.color.gray2};
  font-weight: normal;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  color: ${props => props.theme.color.black1};

  span {
    font-size: 12px;
    color: ${props => props.theme.color.gray2};
    font-weight: 500;
  }
`;

const GridElement = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 180px auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
`;

export const FormRow = ({ isOptional, title, subTitle, extra, children }) => {
  return (
    <>
      <div>
        <Title>
          {title}
          {isOptional ? <span> (Optional)</span> : "*"}
        </Title>
        <SubTitle style={{ marginTop: 4 }}>{subTitle}</SubTitle>
        <div>{extra}</div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default function ({ children, ...props }) {
  return (
    <MainContainer className={props.className}>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
      <GridElement>{children}</GridElement>
    </MainContainer>
  );
}
