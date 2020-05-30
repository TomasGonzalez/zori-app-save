import React from "react";

import styled, { css } from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Hoverable from "components/Hoverable";
import Icon from "components/Icon";
import theme from "theme";
import ProfileIcon from "components/ProfileIcon";
import { ScreenLoader } from "components/Loading";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
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
  font-weight: 500;
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
  font-weight: 500;
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
  font-weight: 500;
  font-size: 14px;
`;

const StatsLabel = styled.div`
  margin-top: 4px;
  font-size: 8px;
  font-weight: 500;
  color: ${(props) => props.theme.color.gray1};
`;

const LinksListContainer = styled.div`
  margin-top: 24px;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 220px;
  heigth: 24px;
  padding: 6px 20px;
  box-sizing: border-box;
  border-radius: 3px;
`;

const LinkItemWrapper = styled.button`
  padding-top: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray1};
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  background-color: transparent;
  outline: none;

  ${(props) =>
    props.route === window.location.pathname &&
    css`
      ${LinkItem} {
        background-color: ${(props) => props.theme.color.green2};
        color: ${(props) => props.theme.color.black1};
      }
    `}
    
  &:hover ${LinkItem} {
    background-color: ${(props) => props.theme.color.green2};
    color: ${(props) => props.theme.color.black1};
  }
`;

const LinkLabel = styled.div`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 500;
`;

const RoutesLinks = [
  { iconName: "dashboard", title: "Dashboard", route: "/dashboard" },
  { iconName: "myBusiness", title: "My Brand", route: "/my-brand" },
  { iconName: "listText", title: "Listings", route: "/listings" },
  {
    iconName: "shoppingBag",
    title: "Orders and Shipping",
  },
  {
    iconName: "chat",
    title: "Conversations",
  },
  { iconName: "statistics", title: "Brand Stats" },
  { iconName: "museum", title: "My Finances" },
  { iconName: "megaphone", title: "Marketing" },
  {
    iconName: "distributed",
    title: "Integrations",
  },
  {
    iconName: "information",
    title: "Community and Help",
  },
  { iconName: "preference", title: "Settings" },
];

export default function Drawer({ children }) {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_SELF);

  if (loading) {
    return <ScreenLoader />;
  }

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
          <ProfileName>{data.me?.firstName}</ProfileName>
          <CompanyName>{data.me?.vendor?.brandname}</CompanyName>
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
              <Hoverable>
                {(isHover) => (
                  <LinkItemWrapper
                    route={values.route}
                    onClick={() => history.push(values.route)}
                  >
                    <LinkItem>
                      <Icon
                        icon={values.iconName}
                        color={
                          isHover || values.route === window.location.pathname
                            ? theme.color.black1
                            : theme.color.gray1
                        }
                        size={12}
                        transitionDuration={"0s"}
                      />
                      <LinkLabel> {values.title} </LinkLabel>
                    </LinkItem>
                  </LinkItemWrapper>
                )}
              </Hoverable>
            );
          })}
        </LinksListContainer>
      </DrawerContainer>
      {children}
    </MainContainer>
  );
}

const GET_SELF = gql`
  query {
    me {
      id
      isVerified
      username
      email
      phoneNumber
      firstName
      lastName
      dateJoined
      isActive
      avatar
      isPromoter
      completedSteps {
        stepId
        label
        isFilled
      }
      vendor {
        isApproved
        brandname
        tutorials {
          tutorial {
            id
            text
            link
          }
          isFilled
        }
      }
    }
  }
`;
