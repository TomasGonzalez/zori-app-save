import React, { useState } from "react";

import styled from "styled-components/macro";

const MainContainer = styled.div`
  height: 35px;
  max-width: 672px;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const NavigatorTabs = styled.div`
  width: 92px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px 0px 2px 0px;
  color: ${(props) =>
    props.isActive ? props.theme.color.black1 : props.theme.color.gray1};
  border-color: ${(props) => props.theme.color.green1};
  border-style: ${(props) => (props.isActive ? "solid" : "none")};
  margin: 0px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

const PanelContainer = styled.div`
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  width: 100%;
  height: 100%;
  max-width: 672px;
  overflow: auto;
`;

export default function TabNavigator({ navigationOptions, defaultScreen }) {
  const [currentScreen, setCurrentScreen] = useState(defaultScreen || 0);
  return (
    <>
      <MainContainer>
        {navigationOptions.map((values, index) => (
          <NavigatorTabs
            isActive={index === currentScreen}
            onClick={() => setCurrentScreen(index)}
          >
            {values.title}
          </NavigatorTabs>
        ))}
      </MainContainer>
      <PanelContainer>
        {navigationOptions[currentScreen].component}
      </PanelContainer>
    </>
  );
}
