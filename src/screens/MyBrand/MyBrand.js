import React from "react";

import styled from "styled-components/macro";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Icon from "components/Icon";
import AppLayout from "components/AppLayout";
import ProfileIcon from "components/ProfileIcon";
import TabNavigator from "components/TabNavigator";
import Posts from "screens/MyBrand/Posts";
import ZTV from "screens/MyBrand/ZTV";
import ArticlesAndBlogs from "./ArticlesAndBlogs";
import Policies from "./Policies";

const MainWrapper = styled.div``;

const ProfileWrapper = styled.div`
  height: 104px;
  margin: 0px 16px;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfileDescription = styled.div`
  margin-left: 13px;
  height: 100%;
  width: 100%;
  max-width: 364px;
  padding-top: 16px;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 12px;
`;

const ProfileInfo = styled.div`
  margin-left: 13px;
  height: 100%;
  width: 100%;
  max-width: 364px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.color.gray3};
  border-width: 0px 3px 0px 0px;
`;

const StyledName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const StyledText = styled.div`
  font-size: 12px;
`;

const NavigatorWrapper = styled.div`
  margin-top: 56px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export default function (props) {
  const { data, loading, error } = useQuery(GET_SELF);

  return (
    <AppLayout title={props.title}>
      <MainWrapper>
        <ProfileWrapper>
          <ProfileIcon size={104} />
          <ProfileInfo>
            <StyledName>{data.me.firstName}</StyledName>
            <StyledText>0 monthly visitors </StyledText>
          </ProfileInfo>
          <ProfileDescription>
            Write up something about your brand..... or anything!
          </ProfileDescription>
          <IconWrapper>
            <Icon size={14} icon='pen' />
          </IconWrapper>
        </ProfileWrapper>
        <NavigatorWrapper>
          <TabNavigator
            style={{ padding: "0px 20px" }}
            navigationOptions={[
              { icon: "photo", title: "Posts", component: <Posts /> },
              // {
              //   icon: "videoCamera",
              //   title: "ZTV",
              //   component: <ZTV />,
              // },
              // {
              //   icon: "writing",
              //   title: "As and Bs",
              //   component: <ArticlesAndBlogs />,
              // },
              {
                icon: "contract",
                title: "Policies",
                component: <Policies />,
              },
            ]}
          />
        </NavigatorWrapper>
      </MainWrapper>
    </AppLayout>
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
