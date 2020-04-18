import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const DrawerContainer = styled.div`
  width: 236px;
  background-color: ${(props) => props.theme.color.gray4};
`;

const DrawerHeader = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 20px;
  height: 21px;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
  padding-left: 8px;
`;

export default function Drawer({ children }) {
  return (
    <MainContainer>
      <DrawerContainer>
        <DrawerHeader>
          <Logo src={require("assets/zori-logo.png")} />
          <HeaderTitle>ZORI</HeaderTitle>
        </DrawerHeader>
      </DrawerContainer>
      {children}
    </MainContainer>
  );
}
