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
          "Offer your followers written content that gives them a more intimate understanding of your brand. "
        }
        title={"Publish an Article or a Blog"}
        buttonLabel='Publish'
        icon='writing'
      >
        posts
      </GuidedButton>
    </MainWrapper>
  );
}
