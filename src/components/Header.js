import React from "react";

import styled from "styled-components/macro";

import theme from "theme";
import ProfileIcon from "components/ProfileIcon";
import Icon from "components/Icon";
import Hoverable from "components/Hoverable";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  min-height: 52px;
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
  align-items: flex-start;
`;

const HeaderButton = styled.div`
  margin-right: 16px;
  cursor: pointer;
`;

const ProfileName = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.color.gray1};
  margin-left: 12px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;

  &:hover ${ProfileName} {
    color: ${(props) => props.theme.color.black1};
  }
`;

export default function Header({ children, title }) {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <CurrentPageName>{title}</CurrentPageName>
        <HeaderOptions>
          <HeaderButton>
            <Hoverable>
              {(isHovering) => (
                <Icon
                  color={!isHovering ? theme.color.gray3 : theme.color.black1}
                  icon='search'
                  viewBox='0 0 20 20'
                  size='20'
                />
              )}
            </Hoverable>
          </HeaderButton>
          <ProfileWrapper>
            <ProfileIcon size={"small"} />
            <ProfileName>Jessica. D</ProfileName>
          </ProfileWrapper>
          <HeaderButton>
            <Hoverable>
              {(isHovering) => (
                <Icon
                  color={!isHovering ? theme.color.gray3 : theme.color.black1}
                  icon='chat'
                  size='20'
                />
              )}
            </Hoverable>
          </HeaderButton>
          <HeaderButton>
            <Hoverable>
              {(isHovering) => (
                <Icon
                  color={!isHovering ? theme.color.gray3 : theme.color.black1}
                  icon='notification'
                  viewBox='0 0 20 20'
                  size='20'
                />
              )}
            </Hoverable>
          </HeaderButton>
          <HeaderButton>
            <Hoverable>
              {(isHovering) => (
                <Icon
                  color={!isHovering ? theme.color.gray3 : theme.color.black1}
                  icon='menu'
                  viewBox='0 0 20 20'
                  size='20'
                />
              )}
            </Hoverable>
          </HeaderButton>
        </HeaderOptions>
      </HeaderWrapper>
      {children}
    </MainWrapper>
  );
}
