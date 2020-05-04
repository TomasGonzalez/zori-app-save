import React, { useState } from "react";

import styled from "styled-components/macro";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Button from "components/Button";
import theme from "theme";
import ButtonPanel, { PanelTitle } from "components/ButtonPanel";
import Icon from "components/Icon";
import SendEmailLinks from "components/FeedComponents/SendEmailLinks";

const MainWrapper = styled.div`
  height: 100%;
`;

const TextBox = styled.div`
  height: 104px;
  border: solid 1px ${(props) => props.theme.color.lightGray};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.color.gray3};
`;

const InviteWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 20px;
  widt: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ShareIconsWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  border-radius: 360px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:last-child {
    margin: 0px;
  }
`;

const IconTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-size: 10px;

  &:last-child {
    margin: 0px;
  }
`;

export default function () {
  const [panelSetting, setPanelSetting] = useState(0);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [isLinkCopied, setLinkCopied] = useState(false);

  const { loading, data, error } = useQuery(GET_SELF);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <MainWrapper>
      <TextBox
        style={{ marginTop: 24, fontWeight: 600, fontSize: 14, lineHeight: 2 }}
      >
        Follow other users, brands and active comunities on <br /> ZORI that
        interest you to keep up with their updates
      </TextBox>
      <InviteWrapper>
        <TitleWrapper>
          <Title>We’ve come up with a few suggestions for you.</Title>
          <SubTitle>
            You can use the search bar at the top to find and follow users that
            interest you.
          </SubTitle>
        </TitleWrapper>
        <ButtonPanel
          title={"Invite users to ZORI"}
          onRequestClose={() => {
            setPanelOpen(false);
          }}
          buttonComponent={
            <Button
              label={"Invite"}
              style={{ width: 72, height: 24 }}
              onClick={() => {
                setLinkCopied(false);
                setPanelSetting(0);
                setPanelOpen(!isPanelOpen);
              }}
              buttonColor={[theme.color.green1, theme.color.background]}
              textColor={[theme.color.green1, theme.color.background]}
              active={isPanelOpen}
              borderColor={theme.color.green1}
            />
          }
          visible={isPanelOpen}
          showScreen={panelSetting}
          ModalContent={[
            <>
              <PanelTitle
                onRequestClose={() => {
                  setPanelSetting(0);
                  setPanelOpen(false);
                }}
                title={"Invite users to ZORI"}
              />
              <ShareIconsWrapper>
                <IconTitleWrapper>
                  <IconWrapper
                    onClick={() => {
                      setPanelSetting(1);
                    }}
                  >
                    <Icon color='black' icon={"mail"} />
                  </IconWrapper>
                  <div style={{ marginTop: 4 }}>Email</div>
                </IconTitleWrapper>
                <IconTitleWrapper>
                  <IconWrapper
                    onClick={() => {
                      setLinkCopied(true);
                      navigator.clipboard.writeText(data.me.invitation.link);
                    }}
                  >
                    <Icon color='black' icon={"link"} />
                  </IconWrapper>
                  <div style={{ marginTop: 4 }}>
                    {isLinkCopied ? "Link Copied!" : "Copy Link"}
                  </div>
                </IconTitleWrapper>
              </ShareIconsWrapper>
            </>,
            <SendEmailLinks
              setPanelSetting={setPanelSetting}
              setPanelOpen={setPanelOpen}
            />,
          ]}
        />
      </InviteWrapper>
    </MainWrapper>
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
      invitation {
        link
      }
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
