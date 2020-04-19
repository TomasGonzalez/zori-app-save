import React from "react";
import AppLayout from "components/AppLayout";

import styled from "styled-components";

const MainContainer = styled.div`
  font-weight: 600px;
  height: 100%;
  display: flex;
  align-items: column;
  justify-content: center;
  align-items: center;
`;

const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 672px;
`;

const DashboardHeader = styled.div`
  height: 35px;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
`;

export default function Dashboard({ title }) {
  return (
    <AppLayout title={title}>
      <MainContainer>
        <PanelContainer>
          <DashboardHeader>activity</DashboardHeader>
        </PanelContainer>
      </MainContainer>
    </AppLayout>
  );
}
