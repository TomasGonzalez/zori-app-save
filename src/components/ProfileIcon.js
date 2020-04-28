import React from "react";

import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import BeatLoader from "react-spinners/BeatLoader";

import theme from "theme";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.black1};
  border-radius: 5px;
  width: ${(props) => (props.size === "small" ? 20 : props.size || 64)}px;
  flex-shrink: 0;
  height: ${(props) => (props.size === "small" ? 20 : props.size || 64)}px;
`;

const NameLetter = styled.div`
  font-size: ${(props) => (props.size === "small" ? 12 : 30)}px;
  font-weight: 600;
  color: ${(props) => props.theme.color.background};
  position: absolute;
`;

export default function ProfileIcon(props) {
  const { data, loading, error } = useQuery(GET_SELF);

  return (
    <MainContainer {...props}>
      <NameLetter {...props}>
        {loading ? (
          <BeatLoader size={8} color={theme.color.background} />
        ) : (
          data.me?.firstName?.[0]
        )}
      </NameLetter>
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
