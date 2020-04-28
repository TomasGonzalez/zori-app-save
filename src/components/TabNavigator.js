import React, { useState } from "react";

import styled, { css } from "styled-components/macro";
import theme from "theme";

import Icon from "components/Icon";

const MainContainer = styled.div`
  height: 100%;
`;

const MainTabContainer = styled.div`
  height: 52px;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.type === "boxes" &&
    css`
      border-style: none;
      height: 35px;
    `}
`;

const NavigatorTabs = styled.div`
  width: 92px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px 0px 2px 0px;
  color: ${(props) =>
    props.isActive ? props.theme.color.black1 : props.theme.color.gray1};
  border-color: ${(props) => props.theme.color.black1};
  margin: 0px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border-style: ${(props) => (props.isActive ? "solid" : "none")};

  ${(props) =>
    props.type === "boxes" &&
    css`
      border-style: none;
      color: ${(props) => props.theme.color.black1};
      border-radius: 5px;
      height: 35px;
      ${() =>
        props.isActive &&
        css`
          height: 35px;
          box-shadow: 0 0 10px 0 ${(props) => props.theme.color.gray3};
        `}
    `}

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
  overflow-y: auto;
  overflow-x: visible;
`;

export default function TabNavigator({
  navigationOptions,
  defaultScreen,
  ...props
}) {
  const [currentScreen, setCurrentScreen] = useState(defaultScreen || 0);
  return (
    <MainContainer {...props}>
      <MainTabContainer type={props.type}>
        {navigationOptions.map((values, index) => (
          <NavigatorTabs
            type={props.type}
            isActive={index === currentScreen}
            onClick={() => setCurrentScreen(index)}
          >
            {values.icon && (
              <Icon
                color={
                  index === currentScreen
                    ? theme.color.black1
                    : theme.color.gray3
                }
                style={{ marginRight: 8 }}
                transitionDuration={"0s"}
                icon={values.icon}
                viewBox='0 0 16 16'
                size={16}
              />
            )}
            {values.title}
          </NavigatorTabs>
        ))}
      </MainTabContainer>
      <PanelContainer>
        {navigationOptions[currentScreen].component}
      </PanelContainer>
    </MainContainer>
  );
}
