import React from "react";

import styled from "styled-components/macro";

import theme from "theme";
import Icon from "components/Icon";
import Button from "components/Button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 21px;
  font-size: 30px;
  font-weight: 300;
  color: ${(props) => props.theme.color.black1};
`;

const Label = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.theme.color.black1};
`;

export default function GuidedButton(props) {
  return (
    <MainContainer>
      <Icon
        size={props.iconSize || 48}
        color={theme.color.black1}
        icon={props.icon}
      />
      <Title>{props.title}</Title>
      <Label>{props.label}</Label>
      <Button
        label={props.buttonLabel}
        width={112}
        height={34}
        buttonColor={[theme.color.green1, theme.color.background]}
        textColor={[theme.color.black1, theme.color.background]}
        borderColor={"transparent"}
      />
    </MainContainer>
  );
}
