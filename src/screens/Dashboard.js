import React from "react";
import AppLayout from "components/AppLayout";

import styled from "styled-components";

const MainContainer = styled.div`
  font-weight: 600px;
  height: 100%;
`;

export default function Dashboard() {
  return (
    <AppLayout>
      <MainContainer>Dashboard</MainContainer>
    </AppLayout>
  );
}
