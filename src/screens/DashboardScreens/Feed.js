import React from "react";

import styled from "styled-components/macro";

import Button from "components/Button";
import theme from "theme";

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

export default function () {
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

        <Button
          label={"Invite"}
          width={72}
          height={24}
          buttonColor={[theme.color.green1, theme.color.background]}
          textColor={[theme.color.green1, theme.color.background]}
          borderColor={theme.color.green1}
        />
      </InviteWrapper>
    </MainWrapper>
  );
}
