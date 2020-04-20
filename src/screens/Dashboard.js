import React from "react";

import styled from "styled-components";

import Checklist from "components/Checklist";
import AppLayout from "components/AppLayout";
import Button from "components/Button";

const MainContainer = styled.div`
  font-weight: 600px;
  height: 100%;
  display: flex;
  align-items: column;
  justify-content: center;
  align-items: center;
`;

const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 672px;
`;

const DashboardHeader = styled.div`
  height: 35px;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTabs = styled.div`
  width: 92px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px 0px 2px 0px;
  color: ${(props) =>
    props.isActive ? props.theme.color.black1 : props.theme.color.gray1};
  border-color: ${(props) => props.theme.color.green1};
  border-style: ${(props) => (props.isActive ? "solid" : "none")};
  margin: 0px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

const Title = styled.div`
  margin-top: 32px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const ZoriChangesWrapper = styled.div`
  display: flex;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  width: 624px;
  flex-direction: column;
  align-items: flex-end;
`;

const ZoriTipsWrapper = styled.div`
  display: flex;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  width: 100%;
  max-width: 624px;
  flex-direction: column;
  align-items: flex-start;
`;

const ZoriTipsContainer = styled.div`
  width: 100%;
  max-width: 578px;
  height: 248px;
  padding: 0px 21px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 39px;
`;

const ZoriTipsItems = styled.div`
  height: 81px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => props.theme.color.lightGray};
  border-style: solid;
  &:last-child {
    border-style: none;
  }
`;

export default function Dashboard({ title }) {
  return (
    <AppLayout title={title}>
      <MainContainer>
        <PanelContainer>
          <DashboardHeader>
            <HeaderTabs isActive={true}>Activity</HeaderTabs>
            <HeaderTabs isActive={false}>Feed</HeaderTabs>
          </DashboardHeader>
          <Title>
            Welcome to your dashboard. Before you get started, feel free to
            check out how ZORI changes online selling for ethical and
            sustainable independent brands
          </Title>
          <ZoriChangesWrapper>
            <Checklist
              listItems={[
                {
                  text:
                    "Set up a powerful intuitive brand profile to enable users understand your brand without hopping through numerous different touchpoints.",
                  link: "www.twitter.com",
                },
                {
                  text:
                    "Earn more revenue by selling to groups of retail customers simultaneously. Enhance customer acquisition by taking advantage of ZORI’s social ordering features. ",
                  link: "www.twitter.com",
                },
                {
                  text:
                    "Leverage social commerce to increase efficiencies in customer acquisition, improve engagement, conversions and lower costs. ",
                  link: "www.twitter.com",
                },
              ]}
            />
          </ZoriChangesWrapper>
          <ZoriTipsWrapper>
            <Title>Try these tips as you launch... </Title>
            <ZoriTipsContainer>
              {[1, 2, 3].map(() => (
                <ZoriTipsItems>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Title style={{ margin: 0 }}>List your first product</Title>
                    <div style={{ fontSize: 10, color: "#989797" }}>
                      Activate your store by listing your first product
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button size={176} label={"Get Started"} />
                  </div>
                </ZoriTipsItems>
              ))}
            </ZoriTipsContainer>
          </ZoriTipsWrapper>
        </PanelContainer>
      </MainContainer>
    </AppLayout>
  );
}
