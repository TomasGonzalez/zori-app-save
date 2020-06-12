import React from "react";

import styled from "styled-components/macro";

import BaseInput from "components/BaseInput";
import { DefaultInput } from "components/forms/inputs";
import { Dropdown2 } from "components/Dropdown";
import Modal2 from "components/Modal2";

const Title = styled.h3`
  font-size: 12px;
  font-weith: 500;
  color: ${props => props.theme.color.black1};
`;

const StyledDefaultInput = styled(DefaultInput)`
  width: 184px;
  margin-right: 8px;
`;

const StyledDefaultInput2 = styled(DefaultInput)`
  width: 88px;
  margin-right: 8px;
`;

const StyledDropdown = styled(Dropdown2)`
  width: 88px;
  margin: 0px 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
`;

const Spacing = styled.div`
  margin-top: 15px;
`;
export default function () {
  const Additional = () => {
    return (
      <BaseInput title="Teams of 3 or more get an additional">
        <Wrapper>
          <StyledDefaultInput2 /> for every <StyledDropdown /> member(s) that
          joins the team
        </Wrapper>
      </BaseInput>
    );
  };

  return (
    <Modal2
      title={"Team purchase pricing rules"}
      subTitle={
        "Specify rules on how you want team purchasing to work for this product"
      }
      isOpen={true}
    >
      <Title>Discount value</Title>
      <Spacing>
        <StyledDefaultInput title={"Teams of 2"} />
      </Spacing>

      <Spacing>
        <Additional />
      </Spacing>
      <Spacing>
        <StyledDefaultInput title={"Maximum discount allowed"} />
      </Spacing>
    </Modal2>
  );
}
