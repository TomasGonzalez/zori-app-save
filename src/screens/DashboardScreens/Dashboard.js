import React, { useContext } from "react";

import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Self } from "lib/context";
import Activity from "screens/DashboardScreens/Activity";
import AppLayout from "components/AppLayout";
import Feed from "screens/DashboardScreens/Feed";

import TabNavigator from "components/TabNavigator";

const MainContainer = styled.div`
  font-weight: 500;px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function Dashboard({ title }) {
  const [vendorTutorial] = useMutation(MUTATION);
  const { loading, error, data } = useQuery(GET_SELF);

  if (loading) {
    return <div>loading ..</div>;
  }

  return (
    <AppLayout title={title}>
      <MainContainer>
        <TabNavigator
          style={{ width: 672 }}
          defaultScreen={0}
          navigationOptions={[
            {
              title: "Activity",
              component: (
                <Activity
                  vendorTutorial={vendorTutorial}
                  data={data}
                  error={error}
                />
              ),
            },
            { title: "Feed", component: <Feed /> },
          ]}
        />
      </MainContainer>
    </AppLayout>
  );
}

const MUTATION = gql`
  mutation VendorTutorial($id: ID) {
    vendorTutorial(tutorialId: $id) {
      okay
      errorMessage
      vendor {
        user {
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
    }
  }
`;

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
