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

export default function () {
  return (
    <MainWrapper>
      <GuidedButton
        label={
          "A video is worth 1.8M words. Showcase your product in all it’s glory! Tag for seamless purchasing..."
        }
        title={"Upload a Video"}
        buttonLabel={"Upload"}
        icon={"videoCamera"}
      >
        posts
      </GuidedButton>
    </MainWrapper>
  );
}
