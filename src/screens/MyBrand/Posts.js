import React from "react";

import styled from "styled-components";

import GuidedButton from "components/GuidedButton";
import TabNavigator from "components/TabNavigator";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const GuidedButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 88px;
`;

export default function ({ setUploadPhotoModal, ...props }) {
  return (
    <MainWrapper>
      <TabNavigator
        type={"boxes"}
        style={{ marginTop: 16 }}
        navigationOptions={[
          {
            title: "Images",
            component: (
              <GuidedButtonWrapper style={{ width: "100%" }}>
                <GuidedButton
                  label={
                    "Be sure to tag your products to make your customer shopping experience seamless"
                  }
                  onClick={() => {
                    setUploadPhotoModal(true);
                  }}
                  title={"Upload a Photo"}
                  buttonLabel='Upload'
                  icon='photo'
                />
              </GuidedButtonWrapper>
            ),
          },
          {
            title: "Boxes",
            component: (
              <GuidedButtonWrapper>
                <GuidedButton
                  label={
                    "Organize your content intuitively using boxes before you share. Include your team in the action!"
                  }
                  title={"Build your boxes"}
                  buttonLabel='Upload'
                  icon='multiImage'
                  iconSize={74}
                />
              </GuidedButtonWrapper>
            ),
          },
          {
            title: "Tagged",
            component: (
              <GuidedButtonWrapper>
                <GuidedButton
                  label={
                    "Whenever other ZORI users tag you in their posts, they’ll appear here."
                  }
                  title={"Posts of you"}
                  buttonLabel='Upload'
                  icon='tagged'
                />
              </GuidedButtonWrapper>
            ),
          },
        ]}
      />
    </MainWrapper>
  );
}
