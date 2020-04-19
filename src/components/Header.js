import React from "react";

import styled from "styled-components";

import ProfileIcon from "components/ProfileIcon";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  height: 52px;
  display: flex;
  padding: 0px 16px;
  box-sizing: border-box;

  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CurrentPageName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
`;

const HeaderOptions = styled.div`
  display: flex;
`;

const HeaderButton = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 16px;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`;

const ProfileName = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.color.gray1};
  margin-left: 12px;
`;

export default function Header({ children, title }) {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <CurrentPageName>{title}</CurrentPageName>
        <HeaderOptions>
          <HeaderButton src={require("assets/Icons/search-1@3x.png")} />
          <ProfileWrapper>
            <ProfileIcon size={"small"} />
            <ProfileName>Jessica. D</ProfileName>
          </ProfileWrapper>
          <HeaderButton src={require("assets/Icons/chat-2@3x.png")} />
          <HeaderButton src={require("assets/Icons/notification-1@3x.png")} />
          <HeaderButton src={require("assets/Icons/menu-2-1@3x.png")} />
        </HeaderOptions>
      </HeaderWrapper>
      {children}
    </MainWrapper>
  );
}
