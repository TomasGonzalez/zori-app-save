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
          "Write up your policies on refunds, shipping, privacy as well as your terms of service"
        }
        title={"Establish your Store Policies"}
        buttonLabel={"Get Started"}
        icon={"contract"}
      />
    </MainWrapper>
  );
}
