import React from "react";

import styled from "styled-components";

import Header from "components/Header";
import Drawer from "components/Drawer";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function AppLayout({ children, title }) {
  return (
    <MainContainer>
      <Drawer>
        <Header title={title}>{children}</Header>
      </Drawer>
    </MainContainer>
  );
}
