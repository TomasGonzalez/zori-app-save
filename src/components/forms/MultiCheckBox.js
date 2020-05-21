import React from "react";

import styled from "styled-components/macro";

import BaseInput from "components/BaseInput";

const MultiCheckBoxWrapper = styled.div``;

export default function({ options, props }) {
  return (
    <BaseInput {...props}>
      <MultiCheckBoxWrapper>
        {options.map(() => {
          return <div>testing</div>;
        })}
      </MultiCheckBoxWrapper>
    </BaseInput>
  );
}
