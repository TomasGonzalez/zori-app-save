import React from "react";

import styled from "styled-components";

import ProfileIcon from "components/ProfileIcon";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const DrawerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 236px;
  background-color: ${(props) => props.theme.color.gray4};
`;

const DrawerHeader = styled.div`
  align-self: flex-start;
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
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

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
`;

const CompanyName = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.color.gray1};
  margin-top: 8px;
`;

const CountContainer = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StatsContainer = styled.div`
  height: 76px;
  width: 208px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.lightGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-width: 1px 0px;
  margin-top: 31px;
`;

const StatsNumber = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const StatsLabel = styled.div`
  margin-top: 4px;
  font-size: 8px;
  font-weight: 600;
  color: ${(props) => props.theme.color.gray1};
`;

const LinksListContainer = styled.div`
  margin-top: 24px;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  min-width: 220px;
  heigth: 24px;
  padding: 6px 20px;
  box-sizing: border-box;
  border-radius: 3px;
}
`;

const LinkItemWrapper = styled.div`
  padding-top: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray1};
  &:hover ${LinkItem} {
    background-color: ${(props) => props.theme.color.green2};
    color: ${(props) => props.theme.color.black1};
  }
`;

const LinkLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const ImageIcon = styled.img`
  width: 12px;
  heigth: 12px;
`;

const RoutesLinks = [
  { iconUrl: require("assets/Icons/dashboard-1@3x.png"), title: "Dashboard" },
  { iconUrl: require("assets/Icons/my-business-1@3x.png"), title: "My Brand" },
  { iconUrl: require("assets/Icons/list-1@3x.png"), title: "Listings" },
  {
    iconUrl: require("assets/Icons/order-1@3x.png"),
    title: "Orders and Shipping",
  },
  {
    iconUrl: require("assets/Icons/chat-1@3x.png"),
    title: "Conversations",
  },
  { iconUrl: require("assets/Icons/report-1@3x.png"), title: "Brand Stats" },
  { iconUrl: require("assets/Icons/museum-1@3x.png"), title: "My Finances" },
  { iconUrl: require("assets/Icons/megaphone-1@3x.png"), title: "Marketing" },
  {
    iconUrl: require("assets/Icons/box-1@3x.png"),
    title: "Integrations",
  },
  {
    iconUrl: require("assets/Icons/info-1@3x.png"),
    title: "Community and Help",
  },
  { iconUrl: require("assets/Icons/settings-1@3x.png"), title: "Settings" },
];

export default function Drawer({ children }) {
  return (
    <MainContainer>
      <DrawerContainer>
        <DrawerHeader>
          <LogoContainer>
            <Logo src={require("assets/zori-logo.png")} />
            <HeaderTitle>ZORI</HeaderTitle>
          </LogoContainer>
        </DrawerHeader>
        <ProfileContainer>
          <ProfileIcon />
          <ProfileName>Zelles</ProfileName>
          <CompanyName>Cedar Rapids, IA</CompanyName>
        </ProfileContainer>
        <StatsContainer>
          <CountContainer>
            <StatsNumber>0</StatsNumber>
            <StatsLabel>Posts</StatsLabel>
          </CountContainer>
          <CountContainer>
            <StatsNumber>0</StatsNumber>
            <StatsLabel>Followers</StatsLabel>
          </CountContainer>
          <CountContainer>
            <StatsNumber>0</StatsNumber>
            <StatsLabel>Live Visitors</StatsLabel>
          </CountContainer>
        </StatsContainer>
        <LinksListContainer>
          {RoutesLinks.map((values) => {
            return (
              <LinkItemWrapper>
                <LinkItem>
                  <ImageIcon src={values.iconUrl} style={{ marginRight: 8 }} />
                  <LinkLabel> {values.title} </LinkLabel>
                </LinkItem>
              </LinkItemWrapper>
            );
          })}
        </LinksListContainer>
      </DrawerContainer>
      {children}
    </MainContainer>
  );
}
