import React from "react";

import styled from "styled-components";

import theme from "theme";
import Icon from "components/Icon";

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
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
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
          <CheckBox onClick={() => props.onChecked(item.id)}>
            {item.isFilled && (
              <Icon
                viewBox='0 0 16 16'
                color={theme.color.gray3}
                size={16}
                icon={"checkMark"}
              />
            )}
          </CheckBox>
          <ItemText>{item.text}</ItemText>
        </ItemContainer>
      ))}
    </MainContainer>
  );
}
