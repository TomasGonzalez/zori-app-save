import React from "react";

import styled from "styled-components";

import Header from "components/Header";
import Drawer from "components/Drawer";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function AppLayout({ children }) {
  return (
    <MainContainer>
      <Drawer>
        <Header>{children}</Header>
      </Drawer>
    </MainContainer>
  );
}
