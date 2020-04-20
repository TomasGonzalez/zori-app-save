import React from "react";

import { MdCheck } from "react-icons/md";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CheckBox = styled.div`
  min-width: 32px;
  height: 32px;
  margin-right: 9px;
  border-radius: 5px;
  border: solid 1px ${(props) => props.theme.color.gray3};
`;

const ItemText = styled.div`
  width: 537px;
  height: 32px;
  margin-bottom: 32px;
  color: ${(props) => props.theme.color.gray3};
  font-size: 12px;
`;

export default function Checklist({ listItems, ...props }) {
  return (
    <MainContainer {...props}>
      {listItems.map((item) => (
        <ItemContainer>
          <CheckBox></CheckBox>
          <ItemText>{item.text}</ItemText>
        </ItemContainer>
      ))}
    </MainContainer>
  );
}
