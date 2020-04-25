import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.black1};
  border-radius: 5px;
  width: ${(props) => (props.size === "small" ? 20 : props.size || 64)}px;
  flex-shrink: 0;
  height: ${(props) => (props.size === "small" ? 20 : props.size || 64)}px;
`;

const NameLetter = styled.div`
  font-size: ${(props) => (props.size === "small" ? 12 : 30)}px;
  font-weight: 600;
  color: ${(props) => props.theme.color.background};
  position: absolute;
`;

export default function ProfileIcon(props) {
  return (
    <MainContainer {...props}>
      <NameLetter {...props}>Z</NameLetter>
    </MainContainer>
  );
}
