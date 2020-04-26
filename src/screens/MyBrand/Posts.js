import React from "react";

import styled from "styled-components";

import GuidedButton from "components/GuidedButton";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function (props) {
  return (
    <MainWrapper>
      <GuidedButton
        label={
          "Be sure to tag your products to make your customer shopping experience seamless"
        }
        title={"Upload a Photo"}
        buttonLabel='Upload'
        icon='photo'
      >
        posts
      </GuidedButton>
    </MainWrapper>
  );
}
